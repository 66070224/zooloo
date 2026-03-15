import Navbar from "@/components/navbar/Navbar";

export default async function AirPage() {
  return (
    <>
      <Navbar index={2} />
      <main className="bg-[url('/backgrounds/sky.jpg')] bg-no-repeat bg-cover min-h-screen"></main>
    </>
  );
}
