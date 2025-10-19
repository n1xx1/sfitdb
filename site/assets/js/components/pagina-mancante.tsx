import { useEffect, useState } from "react";

export default function PaginaMancante() {
  const [page, setPage] = useState<string>();

  useEffect(() => {
    setPage(window.location.hash.substring(1));
  });

  return (
    <div className="bg-red-200 dark:bg-red-900 p-4">URL pagina: {page}</div>
  );
}
