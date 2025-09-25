"use client";
import React, { useState } from "react";

export default function Section() {
  const [para, setpara] = useState(false);
  
  const sad = () => {
    setpara(true);
  };
  const zxc = () => {
    setpara(false);
  };
  return (
    <div className="w-full   flex justify-center flex-wrap  bg-black   py-20 ">
      <div className="flex justify-center gap-x-5  py-10 items-center   w-full">
        <figure className=" w-15 h-15  flex items-center">
          <img src="/img/Logo-02.svg" alt="" />
        </figure>{" "}
        <span className="flex pr-15 items-center">
          <p className=" font-bold text-xl lg:text-5xl text-white font-hamid ">flatrate</p>
          <p className="font-bold text-xl lg:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent ">
            .design
          </p>
        </span>
      </div>
      <div className="w-full flex justify-center items-center">
        {" "}
        <p className="py-3 font-hamid font-bold text-3xl lg:text-7xl text-white ">
          {" "}
          No more
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-x-2">
        <p className="font-bold text-3xl lg:text-7xl text-white font-hamid"> freelancer</p>
        <p className="font-bold bg-gradient-to-r font-hamid from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent text-3xl lg:text-7xl">
          {" "}
          chaos
        </p>
        <p className="font-bold text-3xl lg:text-7xl text-white font-hamid">and</p>
      </div>
      <div className="w-full   flex justify-center items-center">
        <p className="py-3  font-bold text-3xl lg:text-7xl text-white font-hamid ">
          agency
        </p>
        <p className="font-bold  font-hamid bg-gradient-to-r from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent text-3xl lg:text-7xl">
          madness
        </p>
      </div>
      <div className="w-full flex justify-center flex-wrap  ">
        <p className="text-white text-2xl font-reza px-10 lg:px-60 text-center py-8">
          Flatrate.Design brings the revolution to the world of graphic design.
          With our design flat rate, you get lightning-fast, first-class
          designs.
        </p>
      </div>
      <div className="w-full flex justify-center flex-wrap  ">
        <p className="text-white text-2xl  px-10 lg:px-60 font-reza  text-center py-8">
          Dive into the new era of graphic design subscriptions!
        </p>
      </div>
      <div className="w-full  flex justify-center items-center py-10">
        <div
          onMouseEnter={sad}
          onMouseLeave={zxc}
          className="w-[60%] cursor-pointer overflow-hidden  py-12 group rounded-full bg-white flex justify-center ite  ms-center relative 
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-[#0a0a0a]   after:rounded-full
                  hover:after:h-full after:transition-all  after:duration-200"
        >
          <p
            className={`font-bold absolute  left-[50%] font-hamid -translate-x-[50%] text-2xl text-black z-50 transition duration-200 ${
              para ? "-translate-y-5 text-white" : "-translate-y-20"
            }`}
          >
            PRICING
          </p>
          <p
            className={`font-bold absolute  left-[50%] font-hamid -translate-x-[50%] text-2xl text-black  transition duration-200 ${
              para ? "-translate-y-20" : "-translate-y-5"
            }`}
          >
            PRICING
          </p>
        </div>
      </div>

      <div className="overflow-hidden py-10">
        <Ani />
      </div>
    </div>
  );
}

function Ani() {
  const imgg = [
    "jomoo_1jomoo.webp",
    "havana_1havana.webp",
    "Grip_Logo_1Grip_Logo.webp",
    "fujifilm_1fujifilm.webp",
    "christ_Packing_Systems_1christ_Packing_Systems.webp",
    "christ_1christ.webp",
    "bmw_1bmw.webp",
    "axor_1axor.webp",
    "Audi_Sport_ABT_Schaeffler_1Audi_Sport_ABT_Schaeffler.webp",
    "Audi_Sport_1Audi_Sport.webp",
    "Audi_1Audi.webp",
  ];

  return (
    <div className=" bg-black  relative after:content-[''] after:absolute after:top-0   after:w-full after:h-full after:bg-gradient-to-r after:from-black after:via-transparent after:to-black ">
      <div className="w-full bg- flex  items-center justify-center  hamid ">
        {imgg.map((val) => {
          return (
            <figure key={val} className=" px-10 min-w-[200px] bg-black ">
              <img src={`/img/` + val} alt={val} className="   object-cover" />
            </figure>
          );
        })}
       
      
      </div>
    </div>
  );
}
