'use client'
import Link from 'next/link'
export default function Navbar() {
    return (
        <>
            <div className="bg-amber-50 text-amber-800 flex justify-center m-4 text-2xl w-2xl justify-self-center rounded-full">
                <ul className="flex flex-row gap-24 py-3">
                    <Link href="/home"><li className='bg-amber-50 rounded-full p-2 '>Home</li></Link>
                    <Link href="/aqua"><li className='bg-amber-50 rounded-full p-2 '>Aqua</li></Link>
                    <Link href="/ground"><li className='bg-amber-50 rounded-full p-2 '>Ground</li></Link>
                    <Link href="/air"><li className='bg-amber-50 rounded-full p-2 '>Air</li></Link>
                </ul>
            </div>
        </>
    )
}