"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ value }: { value: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [search, setSearch] = useState(value);
  const handleSearch = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    params.delete("page");
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <form
      className="bg-white/25 backdrop-blur-lg px-3 py-2 text-black rounded-full flex flex-row gap-5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="query"
        value={search}
        onChange={(value) => setSearch(value.target.value)}
        className="rounded-full border border-white bg-white py-1 px-3 transition-all focus:outline-none focus:scale-105"
      />
      <button
        type="submit"
        className="bg-white rounded-full px-2 py-1 cursor-pointer transition-all hover:scale-105"
      >
        ค้นหา
      </button>
    </form>
  );
}
