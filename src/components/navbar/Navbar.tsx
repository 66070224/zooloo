import Link from "next/link";
import NavbarLink from "./NavbarLink";
export default function Navbar({ index }: { index: number }) {
  return (
    <nav
      className={`${index === 0 && "bg-yale-blue"} ${index === 1 && "bg-amber-600"} ${index === 2 && "bg-cerulean"} text-white flex justify-center items-center gap-5 p-5 m-4 text-xs h-10 justify-self-center rounded-full fixed top-0 z-50`}
    >
      <Link href="/" className="p-1 text-base font-bold text-gray-800">
        ZOO<span className="text-yellow-500">LOO</span>
      </Link>
      <ul className="flex flex-row gap-4 py-1.5 px-5">
        <NavbarLink name="Aqua" path="/aqua" isActive={index === 0} />
        <NavbarLink name="Ground" path="/ground" isActive={index === 1} />
        <NavbarLink name="Air" path="/air" isActive={index === 2} />
      </ul>
    </nav>
  );
}

