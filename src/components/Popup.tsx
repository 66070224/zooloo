"use client"
import Video from "./Video";

export default function Popup({onData, onOpen}:{onData:any, onOpen:boolean}) {

    return (
        <>
        <div className={`flex items-center justify-center ${!onOpen? "opacity-0 z--2":"opacity-100 z-100"}`}>
            <div className={`relative bg-amber-500 h-screen place-self-center min-w-4xl mt-20 rounded-4xl shadow-2xs`}>
                <button className="absolute right-4 top-4 z-10" onClick={()=> onData(false)}>X</button>
                <Video/>
                <h1>Shark</h1>
            </div>
            
        </div>
        </>
    )
}