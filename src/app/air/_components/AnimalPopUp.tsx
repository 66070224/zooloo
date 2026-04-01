"use client";

import AirAnimal from "@/models/airAnimal";
import Image from "next/image";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import DietaryBadge from "./DietaryBadge";

export default function AnimalPopUp({
  animal,
  closePopUpHandle,
}: {
  animal: AirAnimal;
  closePopUpHandle: () => void;
}) {
  const [isCloseButtonHover, setIsCloseButtonHover] = useState(false);
  return (
    <div className="absolute z-10 -top-25 max-w-screen max-h-175 bg-black/95 rounded-2xl p-10 text-white flex flex-col gap-5 overflow-y-scroll">
      <div className="sticky top-0 flex justify-end p-2 z-10">
        <button
          type="button"
          onClick={closePopUpHandle}
          className="bg-white text-black w-6 h-6 rounded-full flex justify-center items-center cursor-pointer hover:w-15 hover:scale-105 transition-all duration-300"
          onMouseEnter={() => setIsCloseButtonHover(true)}
          onMouseLeave={() => setIsCloseButtonHover(false)}
        >
          {isCloseButtonHover ? "Close" : <CgClose />}
        </button>
      </div>
      <h1 className="text-center text-5xl">{animal.name}</h1>
      <span className="text-gray-500 text-center">{animal.description}</span>
      <div className="grid grid-cols-2 place-items-center-safe">
        <Image
          src={animal.image}
          height={400}
          width={400}
          alt={animal.name}
          loading="eager"
        />
        <p className="w-full h-full">{animal.detail}</p>
      </div>
      <div className="grid grid-cols-2 place-items-center-safe">
        <table className="w-fit">
          <tbody className="flex flex-col gap-2">
            <tr className="grid grid-cols-2">
              <td>Size</td>
              <td>~ {animal.size} feet</td>
            </tr>
            <tr className="grid grid-cols-2">
              <td>Weight</td>
              <td>~ {animal.weight} pounds</td>
            </tr>
            <tr className="grid grid-cols-2">
              <td>Location</td>
              <td>{animal.location}</td>
            </tr>
            <tr className="grid grid-cols-2">
              <td>Dietary</td>
              <td>
                <DietaryBadge dietary={animal.dietary} />
              </td>
            </tr>
          </tbody>
        </table>
        <iframe
          width={500}
          height={250}
          src={`https://www.youtube.com/embed/${animal.youtubeID}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
      </div>
    </div>
  );
}
