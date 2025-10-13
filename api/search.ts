import sql, { Database } from "@radically-straightforward/sqlite";
import z from "zod";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = Object.fromEntries(url.searchParams.entries());

    const params = z
      .object({
        page: z.coerce.number().int().min(1),
        perPage: z.coerce
          .number()
          .refine((num) => [10, 20, 30, 40, 50].includes(num)),
        kind: z.enum(["feat"]),
        level: z
          .union([
            z.coerce.number().int(),
            z
              .string()
              .regex(/^\d+\,\d+$/)
              .transform((s) => s.split(",") as unknown)
              .pipe(z.tuple([z.coerce.number(), z.coerce.number()])),
          ])
          .optional(),
        name: z.string().optional(),
      })
      .parse(searchParams);

    const db = new Database("./database.db", { readonly: true });

    const offset = (params.page - 1) * params.perPage;
    let joins = sql``;
    let where = sql`entry.data ->> 'kind' = ${params.kind}`;

    if (params.name) {
      const text = params.name.replaceAll('"', '""');
      const query = `(name: "${text}")`;
      joins = sql`$${joins} join entry_fts on entry_fts.rowid = entry.id and entry_fts match ${query}`;
    }

    if (typeof params.level === "number") {
      where = sql`$${where} and entry.data ->> 'level' = ${params.level}`;
    } else if (Array.isArray(params.level)) {
      where = sql`$${where} and entry.data ->> 'level' between ${params.level[0]} and ${params.level[1]}`;
    }

    const count = db.get<{ c: number }>(sql`
select count(*) c
  from entry
  $${joins}
  where $${where}
      `);

    const result = db.all<{ id: number; data: string }>(
      sql`
select entry.id id, json(entry.data) data
  from entry
  $${joins}
  where $${where}
  order by entry.id
  limit ${params.perPage} offset ${offset}
  `,
    );

    const data = result.map((r) => {
      const data = JSON.parse(r.data);
      return {
        id: r.id,
        ...data,
      };
    });

    const pageCount = Math.ceil(Math.max(1, count?.c ?? 1) / params.perPage);

    return new Response(JSON.stringify({ data, pageCount }), {
      headers: { "content-type": "application/json" },
    });
  } catch (e) {
    console.warn(e);
    return new Response(JSON.stringify({ error: `${e}` }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
}

/*
  const text = "alchimia rapida".replaceAll('"', '""');
  const query = `(name: "${text}") OR (text: NEAR("${text}"))`;

  const result = db.all<{ data: string; rank: number }>(
    sql`
  select json(feats.data) data, feats_fts.rank rank
    from feats
    join feats_fts on feats_fts.rowid = feats.id
    where ${sqlJoin(wheres, sql` and `)}
    order by feats_fts.rank
    limit ${skip}, ${count}
  `,
  );
*/
