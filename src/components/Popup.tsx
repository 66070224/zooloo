"use client"
import { motion, AnimatePresence } from "framer-motion";
import Video from "./Video";
import { useEffect } from "react";

export default function Popup({ onData, onOpen, animaldata }: { onData: any, onOpen: boolean, animaldata: any }) {

    return (
        <AnimatePresence>
            {onOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onData(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ x: "100%", opacity: 0, scale: 0.5 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-4xl h-[90vh] rounded-4xl shadow-2xl overflow-hidden flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute right-6 top-6 z-10 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full font-bold text-white transition-colors"
                            onClick={() => onData(false)}
                        >
                            🗙
                        </button>

                        <div className="w-full h-full flex flex-col items-center shadow-lg bg-gradient-to-r from-[#000b1e] overflow-auto">
                            <Video youtubeId={animaldata.youtube_id} />
                            <h1 className="text-5xl font-bold text-white mt-4 uppercase tracking-widest place-self-start px-6">{animaldata.name}</h1>
                            <h2 className="place-self-start px-6 italic">" {animaldata.nickname != "None" ? animaldata.nickname : animaldata.name + " of the Sea"} "</h2>
                            <h3 className="place-self-start px-6 mb-2">{animaldata.detail}</h3>
                            <div className="grid grid-cols-2 gap-2 px-2">
                                <SubCard label={"behavioral"} value={animaldata.behavioral} />
                                <SubCard label={"temperament"} value={animaldata.temperament} />
                                <SubCard label={"food"} value={animaldata.food} />
                                <SubCard label={"habitat"} value={animaldata.habitat} />
                            </div>
                            <div className="flex gap-4 mt-6 mb-8">
                                <SubCard label={"Speed"} value={animaldata.statistics[0].speed} />
                                <SubCard label={"Size"} value={animaldata.statistics[0].size} />
                                <SubCard label={"Weight"} value={animaldata.statistics[0].weight} />
                                <SubCard label={"Life Span"} value={animaldata.statistics[0].lifespan} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
function SubCard({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-gradient-to-br from-white/10 to-transparent p-4 rounded-2xl border border-white/5">
            <p className="text-xs text-blue-300 uppercase font-bold tracking-wider">{label}</p>
            <p className="text-lg font-semibold text-white">{value || "N/A"}</p>
        </div>
    )
}
