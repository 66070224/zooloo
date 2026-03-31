import AnimalCard from "./AnimalCard";
import PaginationBar from "./PaginationBar";
import { WithId } from "mongodb";
import { getAirAnimals } from "../actions";
import AirAnimal from "@/models/airAnimal";

export default async function AnimalContainer({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  const { animals, total } = await getAirAnimals(query, page);
  return (
    <div className="w-full h-full flex flex-col gap-1 items-center">
      <div className="grid grid-cols-2 grid-rows-5 sm:grid-cols-5 sm:grid-rows-2 gap-3 place-items-center">
        {animals.map((animal: WithId<AirAnimal>) => {
          const { _id, ...data } = animal;
          return <AnimalCard key={animal._id.toString()} animal={data} />;
        })}
      </div>
      <PaginationBar currentPage={page} total={total} />
    </div>
  );
}
