import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { groundAnimals } from "@/data/animals";
import Navbar from "@/components/navbar/Navbar";

export default async function GroundAnimalDetail({ params }: { params: Promise<{ id: string }> | { id: string } }) {

  const resolvedParams = await params;
  
  const animal = groundAnimals.find((a) => String(a.id) === String(resolvedParams.id));

  if (!animal) {
    return notFound();
  }

  return (
    <>
      <Navbar index={1} />
      <main className="min-h-screen bg-[#0f172a] text-white pt-28 pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto mb-8">
          <Link
            href="/ground/explore"
            className="inline-flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-all font-medium border border-white/10 hover:-translate-x-1"
          >
            &larr;
          </Link>
        </div>

        <div className="max-w-6xl mx-auto bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
              <Image
                src={animal.imageUrl || "/file.svg"}
                alt={animal.name}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12">
              <div className="uppercase tracking-widest text-sm text-[#b45309] font-bold mb-2">
                {animal.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {animal.name}
              </h1>
              <p className="text-xl text-gray-400 italic mb-6">
                "{animal.nickname}"
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {animal.detail}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm mb-1">⚡ Speed</p>
                  <p className="font-bold text-xl text-white">{animal.statistics.speed}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm mb-1">📏 Size</p>
                  <p className="font-bold text-xl text-white">{animal.statistics.size}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm mb-1">⚖️ Weight</p>
                  <p className="font-bold text-xl text-white">{animal.statistics.weight}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm mb-1">⏳ Lifespan</p>
                  <p className="font-bold text-xl text-white">{animal.statistics.lifespan}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 border-t border-white/5 bg-[#162032]">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-[#b45309]">|</span> Deep Dive Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#b45309] font-bold text-lg mb-2">🧠 Behavioral</h4>
                <p className="text-gray-300 bg-black/20 p-4 rounded-xl">{animal.behavioral}</p>
              </div>
              <div>
                <h4 className="text-[#b45309] font-bold text-lg mb-2">🌍 Habitat</h4>
                <p className="text-gray-300 bg-black/20 p-4 rounded-xl">{animal.habitat}</p>
              </div>
              <div>
                <h4 className="text-[#b45309] font-bold text-lg mb-2">🥩 Food</h4>
                <p className="text-gray-300 bg-black/20 p-4 rounded-xl">{animal.food}</p>
              </div>
              <div>
                <h4 className="text-[#b45309] font-bold text-lg mb-2">🎭 Temperament</h4>
                <p className="text-gray-300 bg-black/20 p-4 rounded-xl">{animal.temperament}</p>
              </div>
            </div>

            {animal.youtube_id && (
              <div className="mt-12">
                <h4 className="text-[#b45309] font-bold text-lg mb-4">🎥 Watch in Action</h4>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50">
                  <iframe
                    src={`https://www.youtube.com/embed/${animal.youtube_id}?autoplay=1&mute=1&loop=1&playlist=${animal.youtube_id}`}
                    title={`${animal.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy" 
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </main>
    </>
  );
}