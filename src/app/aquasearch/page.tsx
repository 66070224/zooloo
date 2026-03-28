"use client"
import ModernSearch from "@/components/ModernSearch"
import Link from "next/link";
import { motion } from "framer-motion";

export default function Aquasearch() {

    return (
        <>
            <div className="flex justify-center items-center h-screen flex-col">
                <Link href={'/aqua/ocean'}>
                    <div className="fixed top-10 right-10 z-50 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-blue-600/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                        >
                            <h1 className="text-white font-medium tracking-wider text-sm uppercase">
                                Explore The Ocean
                            </h1>

                            <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                        </motion.div>
                    </div>
                </Link>
                <ModernSearch />
            </div>
        </>
    )
}
