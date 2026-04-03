import Link from "next/link";

export default function NavbarLink({
  name,
  path,
  isActive,
}: {
  name: string;
  path: string;
  isActive: boolean;
}) {
  return (
    <Link href={path}>
      <li
        className={`rounded-full p-2 min-w-20 text-center ${isActive ? "bg-white text-black font-bold shadow-md" : "text-gray-300 hover:bg-gray-400 hover:scale-110 hover:text-white "} transition-all duration-300 `}
      >
        {name}
      </li>
    </Link>
  );
}
