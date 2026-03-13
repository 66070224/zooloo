'use client'
import { startTransition, ViewTransition } from 'react'
import { useState } from "react";

export default function NavbarSuperLayerCustom() {


  const [navbaron, setNavbaron] = useState(false)

  const handleToggle = () => startTransition(() => setNavbaron(!navbaron))

  return (
    <>


      <ViewTransition onUpdate={(instance) => {
        instance.old.animate({
        }, { duration: 200, easing: 'ease-in' },)
        instance.new.animate({
        }, { duration: 200, easing: 'ease-out' })
      }} >


        {

          navbaron ?
            <nav className="bg-amber-300 p-3 max-w-2xs h-screen text-amber-950 m-4 fixed rounded-2xl left-0 top-0 ">
              <div className="text-2xl flex flex-row">
                <img src={'https://i.pinimg.com/736x/43/8a/f3/438af33b15c4e90a678756e51fb910d5.jpg'} className="object-cover rounded-full w-30 h-30 m-10" />
                <button className="bg-blue-700 w-20 h-20 self-center text-white cursor-pointer" onClick={handleToggle}>Toggle</button>
              </div>
              <div className="flex flex-col text-2xl gap-6">
                <a href="" className="rounded-2xl hover:border border-amber-950"><h1 className="ml-16">Home</h1></a>

                <a href="" className="rounded-2xl hover:border border-amber-950"><h1 className="ml-16">About</h1></a>

                <a href="" className="rounded-2xl hover:border border-amber-950"><h1 className="ml-16">Zoo</h1></a>
              </div>
            </nav> :
            <nav className="bg-amber-300 p-3 max-w-2xs h-screen text-amber-950 m-4 fixed rounded-2xl left-0 top-0">
              <div className="text-2xl flex flex-row">
                <button className="bg-blue-700 w-20 h-20 self-center text-white cursor-pointer" onClick={handleToggle}>Toggle</button>
              </div>
              <div className="flex flex-col text-2xl gap-6">
                <a href="" className="rounded-2xl hover:border border-amber-950"><h1 className="ml-8">H</h1></a>

                <a href="" className="rounded-2xl hover:border border-amber-950"><h1 className="ml-8">A</h1></a>

                <a href="" className="rounded-2xl hover:border border-amber-950"><h1 className="ml-8">Z</h1></a>
              </div>
            </nav>
        }
      </ViewTransition>
    </>
  );
}
