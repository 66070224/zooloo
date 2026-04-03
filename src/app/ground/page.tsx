"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import { groundAnimals } from "@/data/animals";

export default function GroundSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const searchedAnimal = groundAnimals.find(
    (animal) =>
      searchTerm && animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchedAnimal) {
      router.push(`/ground/${searchedAnimal.id}`);
    }
  };

  const handleImageClick = () => {
    if (searchedAnimal) {
      router.push(`/ground/${searchedAnimal.id}`);
    }
  };

  return (
    <>
      <Navbar index={1} />
      <main className="min-h-screen bg-[#1e293b] text-white flex flex-col items-center pt-32 px-4 relative overflow-hidden">
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-[0.5em] mb-12 text-[#b45309] drop-shadow-lg">
          GROUND <span className="text-white">ZONE</span>
        </h1>

        <div className="relative w-full max-w-md mb-20">
          <input
            type="text"
            placeholder="Search animal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-white/10 border border-white/20 text-white rounded-full px-6 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#b45309] 
            shadow-xl shadow-[#b45309]/20 transition-all text-lg"
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div 
          onClick={handleImageClick}
          className={`relative w-72 h-72 rounded-full border-4 border-[#b45309] flex items-center justify-center shadow-[0_0_60px_rgba(180,83,9,0.4)]
             bg-gray-800 mb-16 overflow-hidden transition-all duration-300 
             ${searchedAnimal ? 'cursor-pointer hover:scale-105 hover:shadow-[0_0_80px_rgba(180,83,9,0.6)]' : ''}`}
        >
          {searchedAnimal ? (
            <Image
              src={searchedAnimal.imageUrl || "/file.svg"}
              alt={searchedAnimal.name}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <p className="text-gray-400 text-sm animate-pulse">
              {searchTerm ? "ไม่พบสัตว์ตัวนี้" : "รอการค้นหา..."}
            </p>
          )}
        </div>

        <Link
          href="/ground/explore"
          className="px-8 py-3 bg-[#b45309] hover:bg-[#d97706] text-white font-bold rounded-full shadow-lg 
          hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Into the Wild...
        </Link>
      </main>
    </>
  );
}