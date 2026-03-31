"use client";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Popup from "@/components/Popup";
import aquaAnimal from "@/models/aquaAnimal";
import { WithId } from "mongodb";

export interface aquaAnimalWithID {
  _id: string;
  name: string;
  detail: string;
  imageUrl: string;
  behavioral: string;
  habitat: string;
  food: string;
  category: string;
  nickname: string;
  temperament: string;
  youtube_id: string;
  statistics: {
    speed: string;
    size: string;
    weight: string;
    lifespan: string;
  };
}

function ModernSearch({ animals }: { animals: aquaAnimalWithID[] }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<aquaAnimalWithID>(
    animals[0],
  );

  const handleSearch = (e: any) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    params.delete("page");
    replace(`${pathName}?${params.toString()}`);
  };

  const handleOpenPopup = (animal: aquaAnimalWithID) => {
    setSelectedAnimal(animal);
    setOpenPopup(true);
  };

  return (
    <div className="flex flex-col items-center w-full py-10 min-h-screen">
      <form
        onSubmit={handleSearch}
        className="mb-16 w-full max-w-xl px-4 sticky top-5 z-40"
      >
        <div className="relative group">
          <input
            type="search"
            placeholder="Search ocean mystery..."
            className="w-full px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xl placeholder-white/30 outline-none focus:ring-4 focus:ring-blue-500/30 transition-all shadow-2xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>

      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {animals.length > 0 ? (
          animals.map((animal, index) => (
            <motion.div
              key={animal._id.toString()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => handleOpenPopup(animal)}
              className="group cursor-pointer bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] border border-white/10 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all"
            >
              <div className="relative h-64 w-full p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" />
                <motion.img
                  src={animal.imageUrl}
                  alt={animal.name}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {animal.name}
                </h3>
                <p className="text-blue-300/60 text-sm italic font-medium">
                  {animal.nickname !== "None"
                    ? animal.nickname
                    : "Ocean Dweller"}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-3xl text-white/20 font-bold"
            >
              No creatures found for "{searchTerm}"
            </motion.p>
          </div>
        )}
      </div>

      <Popup
        onOpen={openPopup}
        onData={setOpenPopup}
        animaldata={selectedAnimal}
      />
    </div>
  );
}

export default ModernSearch;
