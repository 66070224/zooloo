import searchAnimal, { Animal } from "@/libs/animal";
import AnimalCard from "./AnimalCard";
import PaginationBar from "./PaginationBar";
import { WithId } from "mongodb";

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
  return (
    <div className="w-full h-full flex flex-col gap-1 items-center">
      <div className="grid grid-cols-2 grid-rows-5 sm:grid-cols-5 sm:grid-rows-2 gap-2 place-items-center">
        {animals.map((animal: WithId<Animal>) => {
          const { _id, ...data } = animal;
          return <AnimalCard key={animal._id.toString()} animal={data} />;
        })}
      </div>
      <PaginationBar currentPage={page} total={total} />
    </div>
  );
}
