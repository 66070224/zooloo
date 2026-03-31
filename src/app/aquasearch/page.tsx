"use server";
import ModernSearch from "@/components/ModernSearch";
import Link from "next/link";
import ExploreOceanMotion from "@/components/ExploreOceanMotion";
import { Suspense } from "react";
import { getAquaAnimals } from "./actions";
import { WithId } from "mongodb";
import aquaAnimal from "@/models/aquaAnimal";

export default async function Aquasearch({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const search = (await searchParams).search as string | null;

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <Link href={"/aqua/ocean"}>
          <div className="fixed top-10 right-10 z-50 group">
            <ExploreOceanMotion />
          </div>
        </Link>
        <Suspense>
          <Data query={search || ""} />
        </Suspense>
      </div>
    </>
  );
}

function serializeAnimal(animal: WithId<aquaAnimal>) {
  return {
    ...animal,
    _id: animal._id.toString(), // convert ObjectId → string
  };
}

async function Data({ query }: { query: string }) {
  const animals = (await getAquaAnimals(query)).map(serializeAnimal);
  return <ModernSearch animals={animals} />;
}
