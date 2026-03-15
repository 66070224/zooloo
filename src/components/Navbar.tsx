'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function Navbar() {
    const [buttonSelected, setButtonSelected] = useState("")
    const navitem_background = "text-black bg-yellow-500 shadow-md"
    return (
        <>
            <div className="bg-amber-100 text-amber-800 flex justify-center m-4 text-xs w-100 h-10 justify-self-center rounded-full fixed top-0 z-999">

                <ul className="flex flex-row gap-4 py-1.5">
                    <Link href="/" onNavigate={()=>setButtonSelected("")}><li className='rounded-full p-1 mr-8 text-base font-bold text-gray-800'>ZOO<span className='text-yellow-500'>ROO</span></li></Link>
                    <Link href="/aqua" onNavigate={()=>setButtonSelected("aqua")}><li className={`rounded-xl p-2 text-gray-700 ${buttonSelected == "aqua" ? navitem_background : "hover:bg-gray-200"}  hover:text-black transition-all duration-300 `}>Aqua</li></Link>
                    <Link href="/ground" onNavigate={()=>setButtonSelected("ground")}><li className={`rounded-xl p-2 text-gray-700 ${buttonSelected == "ground" ? navitem_background : "hover:bg-gray-200"}  hover:text-black transition-all duration-300 `}>Ground</li></Link>
                    <Link href="/air" onNavigate={()=>setButtonSelected("air")}><li className={`rounded-xl p-2 text-gray-700 ${buttonSelected == "air" ? navitem_background : "hover:bg-gray-200"}  hover:text-black transition-all duration-300 `}>Air</li></Link>
                </ul>
                
            </div>
        </>
    )
}3