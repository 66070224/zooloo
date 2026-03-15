"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarLink from "./NavbarLink";
export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="bg-amber-100 text-amber-800 flex justify-center items-center gap-5 p-5 m-4 text-xs h-10 justify-self-center rounded-full fixed top-0 z-50">
      <Link href="/" className="p-1 text-base font-bold text-gray-800">
        ZOO<span className="text-yellow-500">LOO</span>
      </Link>
      <ul className="flex flex-row gap-4 py-1.5 px-5">
        <NavbarLink name="Aqua" path="/aqua" activePath={pathName} />
        <NavbarLink name="Ground" path="/ground" activePath={pathName} />
        <NavbarLink name="Air" path="/air" activePath={pathName} />
      </ul>
    </nav>
  );
}
3;
