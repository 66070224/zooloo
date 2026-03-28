"use server";

import searchAnimal from "@/libs/animal";
import AnimalCard from "./AnimalCard";
import PaginationBar from "../PaginationBar";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function AnimalContainer({
  query,
  group,
  page,
}: {
  query: string;
  group: string;
  page: number;
}) {
  const { animals, total } = await searchAnimal(query, group, page);
  if (animals.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-5xl">ขออภัย, ไม่พบสัตว์ที่คุณค้นหา</h1>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col gap-1 items-center">
      <div className="grid grid-cols-2 grid-rows-5 sm:grid-cols-5 sm:grid-rows-2 gap-2 place-items-center">
        {animals.map((animal) => (
          <AnimalCard
            key={animal._id.toString()}
            name={animal.name}
            image={animal.image}
          />
        ))}
      </div>
      <PaginationBar currentPage={page} total={total} />
    </div>
  );
}
