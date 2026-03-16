"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [onHover, setOnHover] = useState("");

  const handleMouseEnterEventAqua = () => {
    setOnHover("aqua");
  };
  const handleMouseEnterEventGround = () => {
    setOnHover("ground");
  };
  const handleMouseEnterEventAir = () => {
    setOnHover("air");
  };
  const handleMouseLeaveEvent = () => {
    setOnHover("");
  };
  const onHoverCard = "opacity-50";
  const imageAirOpacity =
    "bg-[url(https://i.ibb.co/2YqhQsbP/airshadow.jpg)] bg-cover bg-center";
  const imageAquaOpacity =
    "bg-[url(https://i.ibb.co/bMbdyPr5/aquashadow.jpg)] bg-cover bg-center";
  const imageGroundOpacity =
    "bg-[url(https://i.ibb.co/m5r7Sbf0/groundshadow.jpg)] bg-cover bg-center";
  return (
    <div className="flex flex-row h-screen w-full divide-x-2 divide-gray-900 ">
      <Link
        href="/aqua"
        className={`flex-1 ${onHover != "aqua" ? imageAquaOpacity : ""} flex items-center justify-center transition-all duration-300 hover:flex-2`}
        onMouseEnter={handleMouseEnterEventAqua}
        onMouseLeave={handleMouseLeaveEvent}
      >
        <img
          className={`h-screen w-full object-cover transition-all duration-300 ${onHover == "aqua" ? onHoverCard : "opacity-0"}`}
          src="https://i.natgeofe.com/n/62ea1378-3fbb-489e-8e29-cdd815ddcf74/6455.jpg"
          alt=""
        />
        <h1 className="fixed text-4xl bottom-30">
          Explore{" "}
          <span
            className={`${onHover == "aqua" ? "text-6xl" : ""} transition-all duration-500 font-bold text-blue-600`}
          >
            Aqua
          </span>
        </h1>
      </Link>
      <Link
        href="/ground"
        className={`flex-1 ${onHover != "ground" ? imageGroundOpacity : ""} flex items-center justify-center transition-all duration-300 hover:flex-2`}
        onMouseEnter={handleMouseEnterEventGround}
        onMouseLeave={handleMouseLeaveEvent}
      >
        <img
          className={`h-screen w-full object-cover transition-all duration-300 ${onHover == "ground" ? onHoverCard : "opacity-0"}`}
          src="https://wallpapers.com/images/featured/lion-pictures-snw3r6217skr1ni5.jpg"
          alt=""
        />
        <h1 className="fixed text-4xl bottom-30">
          Explore{" "}
          <span
            className={`${onHover == "ground" ? "text-6xl" : ""} transition-all duration-500 font-bold text-amber-600`}
          >
            Ground
          </span>
        </h1>
      </Link>
      <Link
        href="/air"
        className={`flex-1  ${onHover != "air" ? imageAirOpacity : ""} flex items-center justify-center transition-all duration-300 hover:flex-2`}
        onMouseEnter={handleMouseEnterEventAir}
        onMouseLeave={handleMouseLeaveEvent}
      >
        <img
          className={`h-screen w-full object-cover transition-all duration-300 ${onHover == "air" ? onHoverCard : "opacity-0"}`}
          src="https://miro.medium.com/v2/1*Yj_t8yClcMJCLXS--BdCNQ.jpeg"
          alt=""
        />
        <h1 className="fixed text-4xl bottom-30">
          Explore{" "}
          <span
            className={`${onHover == "air" ? "text-6xl" : ""} transition-all duration-500 font-bold text-sky-400`}
          >
            Air
          </span>
        </h1>
      </Link>
    </div>
  );
}
