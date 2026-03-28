"use client";
import Image from "next/image";
import { useState } from "react";

export default function AnimalCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  const [isHover, setIsHover] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);

  return (
    <div
      className={`flex flex-col w-50 h-60 bg-white shadow-xl text-black rounded-2xl transition-all duration-300 ${isHover && "scale-125"} cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        setIsShowDescription(false);
      }}
      onTransitionEnd={() => setIsShowDescription(isHover)}
    >
      <Image
        src={image}
        alt="animalImg"
        height={200}
        width={200}
        loading="lazy"
        className="rounded-t-2xl"
      />
      <div
        className={`flex flex-col items-center p-2 transition-all rounded-b-2xl ${isShowDescription && "bg-white max-h-500 w-50"}`}
      >
        <h1 className="font-bold">{name}</h1>
        {isShowDescription && <p className="w-50 wrap-break-word p-1">skjf</p>}
      </div>
    </div>
  );
}
