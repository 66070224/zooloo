"use client";

import { Animal } from "@/libs/animal";
import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import AnimalPopUp from "./AnimalPopUp";

export default function AnimalCard({ animal }: { animal: Animal }) {
  const [isPopUp, setIsPopUp] = useState(false);
  const openPopUpHandle = () => {
    setIsPopUp(true);
  };
  const closePopUpHandle = () => {
    setIsPopUp(false);
  };
  return (
    <>
      <div
        className="relative h-62.5 w-fit bg-black rounded-2xl transition-all duration-300 cursor-pointer hover:scale-110"
        onClick={openPopUpHandle}
      >
        <Image
          src={animal.image}
          height={200}
          width={200}
          alt={animal.name}
          className="rounded-t-2xl"
          loading="eager"
        />
        <div className="absolute top-0 left-0 p-2.5">Type</div>
        <div className="absolute bottom-12.5 left-0 right-0 bg-linear-to-t from-black to-transparent px-2.5">
          <h1 className="font-bold text-2xl">{animal.name}</h1>
        </div>
        <div className="px-2.5">
          <span className="text-gray-500 flex flex-row items-center gap-1">
            <FaLocationDot /> Location
          </span>
        </div>
      </div>
      {isPopUp && (
        <AnimalPopUp animal={animal} closePopUpHandle={closePopUpHandle} />
      )}
    </>
  );
}
