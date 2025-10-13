import sql, { Database } from "@radically-straightforward/sqlite";
import { readFile, unlink } from "fs/promises";
import stripTags from "striptags";
import { watch as chokidarWatch } from "chokidar";
import {
  join as pathJoin,
  normalize as pathNormalize,
  sep as pathSep,
} from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

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

async function rebuildDatabase() {
  console.log(`Rebuilding database...`);

  await unlink("./database.db").catch(() => Promise.resolve());

  const db = new Database("./database.db", { fileMustExist: false });

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

  db.executeTransaction(() => {
    db.run(sql`drop table if exists entry_fts`);
    db.run(sql`drop table if exists entry`);
    db.run(sql`create table entry (id integer primary key, data blob) strict`);
    db.run(
      sql`create virtual table entry_fts using fts5(
        name, text,
        content=entry, content_rowid=id,
        tokenize="trigram remove_diacritics 1"
      )`,
    );

    db.run(
      sql`insert into entry_fts(entry_fts, rank) values ('automerge', 0);`,
    );

    for (const entry of data) {
      const data = JSON.stringify(entry);

      const { name } = entry;
      const content = stripTags(entry.content, undefined)
        .replace(/\s+/g, " ")
        .trim();

      const { lastInsertRowid: rowid } = db.run(
        sql`insert into entry(data) values (jsonb(${data}))`,
      );
      db.run(
        sql`insert into entry_fts(rowid, name, text) values(${rowid}, ${name}, ${content}) `,
      );
    }

    db.run(sql`insert into entry_fts(entry_fts) values ('optimize');`);
  });

  db.close();
  console.log(`Done.`);

  //   const text = "alchimia rapida".replaceAll('"', '""');
  //   const query = `(name: "${text}") OR (text: NEAR("${text}"))`;
  //   const result = db.all<{ data: string; rank: number }>(
  //     sql`
  // select json(feats.data) data, feats_fts.rank rank
  //   from feats
  //   join feats_fts on feats_fts.rowid = feats.id
  //   where feats_fts match ${query}
  //   order by feats_fts.rank
  // `,
  //   );
  //   console.log(result.map((r) => ({ ...JSON.parse(r.data), rank: r.rank })));
}

const argv = yargs(hideBin(process.argv))
  .option("watch", {
    type: "boolean",
    description: "Enable watch mode",
  })
  .parseSync();

if (argv.watch) {
  startWatcher();
} else {
  rebuildDatabase();
}
