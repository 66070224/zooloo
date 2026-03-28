"use client"
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AquaPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState('')
  const router = useRouter()


  const handleSearch = (e:any) =>{
    if(e.key == "Enter"){
      e.preventDefault()
      if (search.trim()){
        router.push(`/aquasearch?search=${encodeURIComponent(search)}`);
      }else{
        router.push('/aqua/ocean');
      }
    }
      
  } 
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Navbar index={0} />
      <div className="bg-[url(/backgrounds/aquabackground.png)] bg-cover h-screen opacity-50 fixed top-0 right-0 left-0 blur-sm z-[-10]" >
      </div>
      
      <div className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-6xl mb-6 font-bold"><span className=" text-blue-600">Aqua</span> Zone</h1>
        <input type="text" placeholder="Enter Ocean Animal...." value={search} onChange={(e)=>setSearch(e.target.value)}  onKeyDown={handleSearch} className="px-5 py-3 rounded-full bg-white/20 backdrop-blur text-white placeholder-white/60 text-3xl" />
        <Link href={{
            pathname: '/aqua/ocean',
            query: { search: search },
          }} 
        ></Link>
        <Link href='/aqua/ocean' >
          <div className="mt-10 cursor-pointer hover:scale-120 z-10 backdrop-blur transition-all duration-500">Go Dive.....</div>
        </Link>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isMounted && [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            animate={{
              y: [0, -500],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              bottom: "-10%"
            }}
          />
        ))}
      </div>
    </>
  );
}