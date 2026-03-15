import Link from "next/link";
import { groundAnimals } from "@/data/animals";
import AnimalCard from "@/components/animalcard";
import Navbar from "@/components/navbar/Navbar";

export default function GroundPage() {
  return (
    <>
      <Navbar index={1} />
      <main className="min-h-screen p-8 bg-gray-50">
        <Link
          href="/"
          className="inline-flex items-center mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          &larr; กลับหน้าหลัก (Home)
        </Link>

        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          สัตว์บก (Ground Animals)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {groundAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              id={animal.id}
              name={animal.name}
              image={animal.image}
              categoryPath="ground"
            />
          ))}
        </div>
      </main>
    </>
  );
}
