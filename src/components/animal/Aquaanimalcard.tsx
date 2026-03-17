'use client'
import { useState } from "react";
import Popup from "@/components/Popup";

export default function AquaAnimalCard({ id, name, detail, direction, imageUrl }: {
    id: number;
    name: string;
    imageUrl: string;
    direction: string;
    detail: string;
}) {
    const [openPopup, setOpenPopup] = useState(false)
    const handleDataFromPopup = (data:boolean) => setOpenPopup(data)
    return (

        <>
            <div className={`min-h-70 mt-6 py-4 flex ${direction} gap-10`} key={id}>
                <div className="flex justify-center flex-1">
                    <img src={imageUrl} className="max-w-[500px] hover:scale-110 transition-all duration-500 cursor-grab" alt="here" />

                </div>
                <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold">{name}</h1>
                    <p className="mt-4 text-lg">{detail}</p>
                    <br />
                    <hr />
                    <h3 className="mt-10 cursor-pointer" onClick={() => setOpenPopup(true)}>more detail</h3>
                </div>
                

            </div>
            <Popup onData={handleDataFromPopup} onOpen={openPopup}/>
        </>
    )
}