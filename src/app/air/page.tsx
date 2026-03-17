import AnimalContainer from "@/components/animal/AnimalContainer";
import LoadingAnimalContainer from "@/components/animal/LoadingAnimalContainer";
import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";

export default async function AirPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).query as string | null;
  const page = (await searchParams).page as string | null;
  return (
    <>
      <Navbar index={2} />
      <main className="bg-[url('/backgrounds/airbackground.png')] bg-no-repeat bg-cover min-h-screen flex flex-col gap-5 justify-center items-center">
        <SearchBar value={query || ""} />
        <div className="bg-white/25 backdrop-blur-lg h-150 w-300 flex p-5 rounded-2xl">
          <Suspense
            key={`${query}-${page}`}
            fallback={<LoadingAnimalContainer />}
          >
            <AnimalContainer
              query={query || ""}
              group="air"
              page={page ? Number(page) : 1}
            />
          </Suspense>
        </div>
      </main>
    </>
  );
}
