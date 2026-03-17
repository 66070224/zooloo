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

  return (
    <div
      className={`flex flex-col w-50 bg-cerulean rounded-2xl transition-all ${isHover ? "scale-125 h-80" : "h-60"} cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={image}
        alt="animalImg"
        height={200}
        width={200}
        loading="lazy"
        className="rounded-t-2xl"
      />
      <div className="flex flex-col items-center p-2">
        <h1 className="font-bold">{name}</h1>
        {isHover && <p>description</p>}
      </div>
    </div>
  );
}
