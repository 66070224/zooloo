import Navbar from "@/components/Navbar";
import Button from "@/components/Button"
import NavbarSuperLayerCustom from "@/components/Navbarsuperlayercustom";

export default function Home() {
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <section className="flex-1 bg-blue-500 flex items-center justify-center">Aqua</section>
        <section className="flex-1 bg-amber-700 flex items-center justify-center">Ground</section>
        <section className="flex-1 bg-sky-200 flex items-center justify-center">Air</section>
      </div>
    </>
  );
}
