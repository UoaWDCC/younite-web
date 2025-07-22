"use client";
import SeeMore from "@/components/projects/SeeMore";
import { useState } from "react";

export default function Chloe() {
  const [page, setPage] = useState<number>(0);

  function getNextPage() {
    setPage(() => page + 1);
  }

  return (
    <div className="mt-header">
      <SeeMore loadMore={getNextPage} />
      <p>Page num: {page}</p>
    </div>
  );
}
