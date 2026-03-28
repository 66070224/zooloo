"use client";

import { Animal } from "@/libs/animal";
import Image from "next/image";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

export default function AnimalPopUp({
  animal,
  closePopUpHandle,
}: {
  animal: Animal;
  closePopUpHandle: () => void;
}) {
  const [isCloseButtonHover, setIsCloseButtonHover] = useState(false);
  return (
    <div className="absolute -top-25 max-w-screen h-fit bg-white/98 rounded-2xl p-10 text-black flex flex-col gap-5">
      <button
        type="button"
        onClick={closePopUpHandle}
        className="absolute top-5 right-5 bg-black text-white w-6 h-6 rounded-full flex justify-center items-center cursor-pointer hover:w-15 hover:scale-105 transition-all duration-300"
        onMouseEnter={() => setIsCloseButtonHover(true)}
        onMouseLeave={() => setIsCloseButtonHover(false)}
      >
        {isCloseButtonHover ? "Close" : <CgClose />}
      </button>
      <h1 className="text-center text-5xl">{animal.name}</h1>
      <span className="text-gray-500 text-center">{animal.description}</span>
      <div className="grid grid-cols-2 place-items-center-safe">
        <Image
          src={animal.image}
          height={300}
          width={300}
          alt={animal.name}
          loading="lazy"
        />
        <p>{animal.detail}</p>
      </div>
      <div className="grid grid-cols-2 place-items-center-safe">
        <table className="w-full">
          <tbody>
            <tr className="grid grid-cols-2">
              <td>Size</td>
              <td>type</td>
            </tr>
            <tr className="grid grid-cols-2">
              <td>Weight</td>
              <td>type</td>
            </tr>
            <tr className="grid grid-cols-2">
              <td>Location</td>
              <td>type</td>
            </tr>
            <tr className="grid grid-cols-2">
              <td>Dietary Type</td>
              <td>type</td>
            </tr>
          </tbody>
        </table>
        <video controls>
          <source src="https://www.youtube.com/watch?v=98LnPQUWG6w" />
        </video>
      </div>
    </div>
  );
}
