'use client'
import { useState } from "react";
import Popup from "@/components/Popup";
import { motion } from "framer-motion"
export default function AquaAnimalCard({ direction, animaldata }: {
    direction: string;
    animaldata:any;
}) {
    const [openPopup, setOpenPopup] = useState(false)
    const handleDataFromPopup = (data: boolean) => setOpenPopup(data)
    return (

        <>
            <motion.div
                initial={{ opacity: 0, x: direction === "flex-row" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`min-h-70 mt-6 py-4 flex ${direction} gap-10`} key={animaldata.id}>
                <div className="flex justify-center flex-1">
                    <img src={animaldata.imageUrl} className="max-w-[500px] hover:scale-110 transition-all duration-500 cursor-grab" alt="here" />

                </div>
                <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold">{animaldata.name}</h1>
                    <p className="mt-4 text-lg">{animaldata.detail}</p>
                    <br />
                    <hr />
                    <h3 className="mt-10 cursor-pointer" onClick={() => setOpenPopup(true)}>more detail</h3>
                </div>


            </motion.div>
            <Popup onData={handleDataFromPopup} onOpen={openPopup} animaldata={animaldata}/>
        </>
    )
}