import { useDataTable } from "@/hooks/use-data-table";
import { useIsServer } from "@/hooks/use-is-server";
import { cn } from "@/lib/utils";
import {
  QueryClient,
  QueryClientProvider,
  queryOptions,
  useQuery,
} from "@tanstack/react-query";
import type { Column, ColumnDef } from "@tanstack/react-table";
import { Text } from "lucide-react";
import {
  parseAsInteger,
  parseAsNumberLiteral,
  parseAsString,
  useQueryState,
} from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ComponentProps, ReactNode, useMemo } from "react";
import { DataTable } from "./data-table/data-table";
import { DataTableColumnHeader } from "./data-table/data-table-column-header";
import { DataTableSkeleton } from "./data-table/data-table-skeleton";
import { DataTableToolbar } from "./data-table/data-table-toolbar";

const queryClient = new QueryClient();

export default function Feats() {
  return (
    <QueryClientProvider client={queryClient}>
      {useIsServer() ? (
        <div className="not-prose space-y-4">
          <DataTableSkeleton
            columnCount={4}
            filterCount={2}
            filterVariants={["range", "text"]}
            cellWidths={["80px", "auto", "auto", "auto"]}
            withViewOptions={false}
          />
        </div>
      ) : (
        <NuqsAdapter>
          <FeatsImpl />
        </NuqsAdapter>
      )}
    </QueryClientProvider>
  );
}

interface SearchData {
  name: string;
  url: string;
  content: string;
  kind: string;
  traits?: {
    trait: string;
    id: string;
    name: string;
    displayName: string;
    color: string;
    url?: string;
    number?: number;
    size?: boolean;
    notFound?: boolean;
    rarity?: boolean;
  }[];
  level?: number;
  type?: string;
  source?: string;
  background?: any;
  heritageAncestry?: string;
}

function FeatsImpl() {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage] = useQueryState(
    "perPage",
    parseAsNumberLiteral([10, 20, 30, 40, 50]).withDefault(10),
  );
  const [name] = useQueryState("name", parseAsString.withDefault(""));
  const [level] = useQueryState("level", parseAsString.withDefault(""));

  let { data: queryData, isLoading } = useQuery(
    queryOptions({
      queryKey: ["feats", name, page, perPage, level],
      async queryFn(): Promise<{ data: SearchData[]; pageCount: number }> {
        const url = new URL("/api/search", window.location.href);
        url.searchParams.set("kind", "feat");
        url.searchParams.set("name", name);
        url.searchParams.set("page", `${page}`);
        url.searchParams.set("perPage", `${perPage}`);
        if (level) {
          url.searchParams.set("level", `${level}`);
        }
        const req = await fetch(url);
        return await req.json();
      },
      staleTime: Infinity,
    }),
  );

  const { data, pageCount } = useMemo(
    () => ({
      data: queryData?.data ?? [],
      pageCount: queryData?.pageCount ?? 0,
    }),
    [queryData],
  );

  const columns = useMemo<ColumnDef<SearchData>[]>(
    () => [
      {
        id: "level",
        accessorKey: "level",
        header: ({ column }: { column: Column<SearchData, unknown> }) => (
          <DataTableColumnHeader column={column} title="Livello" />
        ),
        cell: ({ row }) => (
          <div className="text-center">{row.original.level}</div>
        ),
        meta: {
          label: "Livello",
          placeholder: "Filtra livello...",
          variant: "range",
          range: [1, 20],
          icon: Number,
        },
        size: 0,
        enableHiding: false,
        enableColumnFilter: true,
        enableSorting: false,
      },
      {
        id: "name",
        accessorKey: "name",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Nome" />
        ),
        cell: ({ row }) => (
          <a className="underline" href={row.original.url}>
            {icons(row.original.name)}
          </a>
        ),
        meta: {
          label: "Nome",
          placeholder: "Cerca nome...",
          variant: "text",
          icon: Text,
        },
        enableHiding: false,
        enableColumnFilter: true,
        enableSorting: false,
      },
      {
        id: "traits",
        accessorKey: "traits",
        header: ({ column }: { column: Column<SearchData, unknown> }) => (
          <DataTableColumnHeader column={column} title="Tratti" />
        ),
        cell: ({ row }) => {
          const traits = row.original.traits ?? [];
          return (
            <div className="flex flex-wrap gap-2">
              {traits.map((t) => {
                const className = cn(
                  "p-1 text-sm rounded-md no-underline whitespace-nowrap",
                  t.color,
                );
                let url = t.url;
                if (!url && t.notFound) {
                  url = `/pagina-mancante#/tratti/${t.id}`;
                }

                if (!url) {
                  return (
                    <span key={t.id} className={className}>
                      {t.displayName}
                    </span>
                  );
                }
                return (
                  <a key={t.id} className={className} href={url}>
                    {t.displayName}
                  </a>
                );
              })}
            </div>
          );
        },
        meta: {
          label: "Tratti",
          icon: Text,
        },
        enableHiding: false,
        enableColumnFilter: true,
        enableSorting: false,
      },
      {
        id: "source",
        accessorKey: "source",
        header: ({ column }: { column: Column<SearchData, unknown> }) => (
          <DataTableColumnHeader column={column} title="Origine" />
        ),
        cell: ({ row }) => <div>{row.original.source}</div>,
        meta: {
          label: "Origine",
          icon: Text,
        },
        enableHiding: false,
        enableColumnFilter: true,
        enableSorting: false,
      },
    ],
    [],
  );

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    enableRowSelection: false,
  });

  return (
    <div className="not-prose space-y-4">
      <DataTable table={table} isLoading={isLoading}>
        <DataTableToolbar table={table} disableViewButton />
      </DataTable>
    </div>
  );
}

const iconsReplcaments: Record<string, ComponentProps<"span">> = {
  ":a:": { className: "pf2-icon", children: "1" },
  ":aa:": { className: "pf2-icon", children: "2" },
  ":aaa:": { className: "pf2-icon", children: "3" },
  ":f:": { className: "pf2-icon", children: "4" },
  ":r:": { className: "pf2-icon", children: "5" },
};

function icons(content: string) {
  return jsxReplaceString(
    content,
    /(:a:|:aa:|:aaa:|:f:|:r:)/gi,
    (match, index) => <span key={index} {...iconsReplcaments[match]} />,
  );
}

function jsxReplaceString(
  str: string,
  match: string | RegExp,
  replace: (res: string, index: number, off: number) => ReactNode,
) {
  if (str === "") {
    return str;
  }
  const re =
    match instanceof RegExp
      ? match
      : new RegExp("(" + escapeRegExp(match) + ")", "gi");

  const result: ReactNode[] = str.split(re);
  let offset = 0;
  for (let i = 1; i < result.length; i += 2) {
    const matchLength = (result[i] as string).length;
    offset += (result[i - 1] as string).length;
    result[i] = replace(result[i] as string, i, offset);
    offset += matchLength;
  }

  return result;
}
function escapeRegExp(str: string) {
  return str && /[\\^$.*+?()[\]{}|]/g.test(str)
    ? str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
    : str;
}
