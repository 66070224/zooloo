"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ value }: { value: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [search, setSearch] = useState(value);
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="bg-white px-2 py-1 text-black rounded-full flex flex-row gap-5">
      <input
        type="text"
        name="query"
        value={search}
        onChange={(value) => setSearch(value.target.value)}
        className="rounded-full border py-1 px-3"
      />
      <button
        type="submit"
        className="bg-black text-white rounded-full px-2 py-1 cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
