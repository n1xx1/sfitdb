import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { FilterVariant } from "@/types/data-table";
import { ComponentProps } from "react";

interface DataTableSkeletonProps extends ComponentProps<"div"> {
  columnCount: number;
  rowCount?: number;
  filterCount?: number;
  cellWidths?: string[];
  filterVariants?: FilterVariant[];
  withViewOptions?: boolean;
  withPagination?: boolean;
  withRowSelection?: boolean;
  shrinkZero?: boolean;
}

export function DataTableSkeleton({
  columnCount,
  rowCount = 10,
  filterCount = 0,
  cellWidths = ["auto"],
  filterVariants = ["text"],
  withViewOptions = true,
  withPagination = true,
  withRowSelection = true,
  shrinkZero = false,
  className,
  ...props
}: DataTableSkeletonProps) {
  const cozyFilterVariants = Array.from(
    { length: columnCount },
    (_, index) => filterVariants[index % cellWidths.length] ?? "text",
  );

  return (
    <div
      className={cn("flex w-full flex-col gap-2.5 overflow-auto", className)}
      {...props}
    >
      {(filterCount > 0 || withViewOptions) && (
        <div className="flex w-full items-center justify-between gap-2 overflow-auto p-1">
          <div className="flex flex-1 items-center gap-2">
            {filterCount > 0
              ? Array.from({ length: filterCount }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className={
                      filterClassName[cozyFilterVariants[i]] ??
                      "h-8 w-[4.5rem] border-dashed"
                    }
                  />
                ))
              : null}
          </div>
          {withViewOptions ? (
            <Skeleton className="ml-auto hidden h-8 w-[4.5rem] lg:flex" />
          ) : null}
        </div>
      )}
      <div className="rounded-md border">
        <DataTableSkeletonTable
          columnCount={columnCount}
          rowCount={rowCount}
          cellWidths={cellWidths}
          shrinkZero={shrinkZero}
        />
      </div>
      {withPagination ? (
        <div className="flex w-full items-center justify-between gap-4 overflow-auto p-1 sm:gap-8">
          {withRowSelection && <Skeleton className="h-7 w-40 shrink-0" />}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 ml-auto">
            <div className="flex items-center gap-2">
              <Skeleton className="h-7 w-24" />
              <Skeleton className="h-7 w-[4.5rem]" />
            </div>
            <div className="flex items-center justify-center font-medium text-sm">
              <Skeleton className="h-7 w-20" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="hidden size-7 lg:block" />
              <Skeleton className="size-7" />
              <Skeleton className="size-7" />
              <Skeleton className="hidden size-7 lg:block" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const filterClassName: Partial<Record<FilterVariant, string>> = {
  text: "h-8 w-40 lg:w-56 border-dashed",
  number: "h-8 w-[120px] border-dashed",
  range: "h-8 w-20 border-dashed",
};

interface DataTableSkeletonTableProps {
  columnCount: number;
  rowCount: number;
  cellWidths: string[];
  shrinkZero: boolean;
}

export function DataTableSkeletonTable({
  columnCount,
  rowCount,
  cellWidths,
  shrinkZero,
}: DataTableSkeletonTableProps) {
  const cozyCellWidths = Array.from(
    { length: columnCount },
    (_, index) => cellWidths[index % cellWidths.length] ?? "auto",
  );

  return (
    <Table>
      <TableHeader>
        {Array.from({ length: 1 }).map((_, i) => (
          <TableRow key={i} className="hover:bg-transparent">
            {Array.from({ length: columnCount }).map((_, j) => (
              <TableHead
                key={j}
                style={{
                  width: cozyCellWidths[j],
                  minWidth: shrinkZero ? cozyCellWidths[j] : "auto",
                }}
              >
                <Skeleton className="h-6 w-full" />
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowCount }).map((_, i) => (
          <TableRow key={i} className="hover:bg-transparent">
            {Array.from({ length: columnCount }).map((_, j) => (
              <TableCell
                key={j}
                style={{
                  width: cozyCellWidths[j],
                  minWidth: shrinkZero ? cozyCellWidths[j] : "auto",
                }}
              >
                <Skeleton className="h-6 w-full" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
