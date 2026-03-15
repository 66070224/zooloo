"use client";

import Link from "next/link";

export default function NavbarLink({
  name,
  path,
  activePath,
}: {
  name: string;
  path: string;
  activePath: string;
}) {
  return (
    <Link href={path}>
      <li
        className={`rounded-full p-2 min-w-20 text-center ${activePath.startsWith(path) ? "text-black font-bold bg-yellow-500 shadow-md" : "text-gray-700 hover:bg-amber-200 hover:scale-110"}  hover:text-black transition-all duration-300 `}
      >
        {name}
      </li>
    </Link>
  );
}
