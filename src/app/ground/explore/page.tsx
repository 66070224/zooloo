import Link from "next/link";
import { groundAnimals } from "@/data/animals";
import AnimalCard from "@/components/animalcard";
import Navbar from "@/components/navbar/Navbar";

export default function GroundExplorePage() {
  return (
    <>
      <Navbar index={1} />
      <main className="min-h-screen p-32 bg-[#1e293b]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {groundAnimals.map((animal: any) => {
            const displayImage = animal.imageUrl || animal.image; 

            return (
              <AnimalCard
                key={animal.id}
                id={String(animal.id)}
                name={animal.name}
                image={displayImage}
                categoryPath="ground"
              />
            );
          })}
        </div>
      </main>
    </>
  );
}