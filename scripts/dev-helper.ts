import { watch as chokidarWatch } from "chokidar";
import { readFile, unlink } from "node:fs/promises";
import {
  join as pathJoin,
  normalize as pathNormalize,
  sep as pathSep,
} from "node:path";
import stripTags from "striptags";
import { BetterSqlite3SQLTemplate, waddler } from "waddler/better-sqlite3";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Hono } from "hono";
import z from "zod";
import { serve } from "@hono/node-server";
import { performance } from "node:perf_hooks";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const requireCached = (() => {
  const cache = new Map<string, any>();
  return (id: string) => {
    let cached = cache.get(id);
    if (!cached) {
      cached = require(id);
      cache.set(id, cached);
    }
    return cached;
  };
})();

function startWatcher() {
  console.log(`Starting watcher...`);
  const targetFile = pathJoin("public", "data", "database.json");
  const watcher = chokidarWatch("public", {
    persistent: true,
    ignoreInitial: false,
    awaitWriteFinish: {
      stabilityThreshold: 200,
      pollInterval: 100,
    },
    ignorePermissionErrors: true,
    atomic: true,
    ignored: (path) => {
      const normal = pathNormalize(path);
      if (targetFile == normal) {
        return false;
      }
      if (targetFile.startsWith(normal + pathSep)) {
        return false;
      }
      return true;
    },
  });

  // Listen for the specific file
  watcher.on("all", (event, path) => {
    if (path === targetFile && (event === "add" || event === "change")) {
      rebuildDatabase();
    }
  });

  watcher.on("error", (error) => {
    console.error("Watcher error:", error);
  });

  process.on("SIGINT", () => {
    watcher.close();
  });
}

const AsyncFunction: typeof Function = async function () {}.constructor as any;

function startJsCompiler() {
  const app = new Hono({});
  app.post("/js", async (c) => {
    const rawBody = await c.req.json();
    const body = z
      .object({ code: z.string(), timeout: z.number().default(0) })
      .parse(rawBody);

    let ret: any = {};
    const startTime = performance.now();
    try {
      const fn = new AsyncFunction(
        "require",
        `const module = {};\n\n${body.code};\n\nreturn module.exports`,
      );

      const mod = fn((id: string) => {
        const mod = requireCached(id);
        return mod;
      });

      const { default: runner } = await mod;

      if (typeof runner !== "function") {
        throw new Error("module did not export a function");
      }

      const timeoutPromise =
        body.timeout > 0 &&
        new Promise((_ful, rej) =>
          setTimeout(() => rej(new Error("timeout")), body.timeout * 1000),
        );

      const result = await Promise.race([
        runner(),
        ...(timeoutPromise ? [timeoutPromise] : []),
      ]);

      ret = { result };
    } catch (e) {
      ret = { error: true, message: `${e}` };
    }

    const durationMs = performance.now() - startTime;
    console.log(`executed js in ${durationMs}ms`);

    return c.json(ret);
  });

  const server = serve({
    fetch: app.fetch,
    port: 23123,
  });

  process.on("SIGINT", () => {
    server.close();
  });
}

let rebuildingPromise: Promise<void> | null = null;

async function rebuildDatabase() {
  if (rebuildingPromise) {
    await rebuildingPromise;
  }

  await (rebuildingPromise = (async () => {
    try {
      await rebuildDatabaseImpl();
    } catch (e) {
      console.warn("Rebuild failed");
      console.warn(e);
    }
  })());
}

async function rebuildDatabaseImpl() {
  console.log(`Rebuilding database...`);

  await unlink("./database.db").catch(() => Promise.resolve());

  const sql = waddler("./database.db");

  const file = await readFile("./public/data/database.json", "utf-8");
  const data: {
    name: string;
    url: string;
    content: string;
    kind: string;
    traits?: {
      trait: string;
      id: string;
      name: string;
      color: string;
      url?: string;
      number?: number;
      size?: boolean;
      rarity?: boolean;
    }[];
    level?: number;
    type?: string;
    background?: any;
    heritageAncestry?: string;
  }[] = JSON.parse(file);

  await exec(sql`drop table if exists entry_fts`);
  await exec(sql`drop table if exists entry`);
  await exec(
    sql`create table entry (id integer primary key, data blob) strict`,
  );
  await exec(sql`create virtual table entry_fts using fts5(
        name, text,
        content=entry, content_rowid=id,
        tokenize="trigram remove_diacritics 1"
      )`);

  await exec(
    sql`insert into entry_fts(entry_fts, rank) values ('automerge', 0);`,
  );

  for (const entry of data) {
    const data = JSON.stringify(entry);

    const { name } = entry;
    const content = stripTags(entry.content, undefined)
      .replace(/\s+/g, " ")
      .trim();

    const { lastInsertRowid: rowid } = await exec(
      sql`insert into entry(data) values (jsonb(${data}))`,
    );
    await exec(
      sql`insert into entry_fts(rowid, name, text) values(${rowid}, ${name}, ${content})`,
    );
  }

  await exec(sql`insert into entry_fts(entry_fts) values ('optimize');`);

  console.log(`Done.`);
}

async function exec(
  sql: BetterSqlite3SQLTemplate<any>,
): Promise<{ lastInsertRowid: number }> {
  return (await sql.run().execute()) as any;
}

const argv = yargs(hideBin(process.argv))
  .option("watch", {
    type: "boolean",
    description: "Enable watch mode",
  })
  .parseSync();

if (argv.watch) {
  startWatcher();
  startJsCompiler();
} else {
  rebuildDatabase();
}
