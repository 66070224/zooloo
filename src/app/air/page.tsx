import Navbar from "@/components/navbar/Navbar";
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";
import Loading from "./_components/Loading";
import AnimalContainer from "./_components/AnimalContainer";

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
      <main className="bg-[url('/backgrounds/airbackground.png')] bg-no-repeat bg-cover min-h-screen flex flex-col gap-2.5 sm:gap-5 justify-start sm:justify-center pt-25 sm:pt-0 items-center">
        <SearchBar value={query || ""} />
        <div className="w-fit sm:w-full max-w-6xl bg-white/25 backdrop-blur-lg rounded-2xl p-2 sm:p-6 min-h-75">
          <Suspense key={`${query}-${page}`} fallback={<Loading />}>
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
