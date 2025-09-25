"use client";
import React, { useState } from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-wrap justify-center pt-10  ">
      <div className="w-[95%] py-4 bg-[#0a0c1e] rounded-2xl">
        <div className="w-[100%] ">
          <p className="lg:pl-10 text-sm font-bold tracking-[5px] text-[#7f7f7f]">
            PROCESS
          </p>
        </div>
        <div className="w-full   ">
          <p className="lg:pl-10 font-hamid text-white text-2xl lg:text-4xl px-0 py-10">
            We are designing a <span className="font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent py-10">bright future ‍</span>
             companies worldwide
          </p>
        </div>
        <div className="w-full flex ">
              <div className="w-full lg:w-1/2 lg:*:pl-10 * ">
                <div className="w-full text-white py-2 font-reza">
                  <p>Hello!</p>
                </div>
                <div className=" text-white py-4 font-reza">
                  <p>I’m Hamid Reza Nikbakht, a front-end developer. I am familiar with technologies like HTML, CSS, JavaScript, React, Next.js, and frameworks/libraries such as Tailwind, Bootstrap, React Hooks, Siwper, MUI</p>
                </div>
                <figure className="max-h-[100px] max-w-[100px] pt-10">
                  <img src="/img/Viktor_Stark_Animation_alpha.gif" alt="" />
                </figure>
                  <div className="w-full text-white pt-40">
                  <p className="bg-gradient-to-r from-purple-600 from-10% font-hamid lg:text-2xl  via-pink-500 via-50% to-pink-300  bg-clip-text text-transparent">Hamidreza Nikbakht | Developer</p>
                </div>
              </div>
              <figure className="w-1/2  mr-5  border overflow-hidden relative lg:min-h-[450px]  hidden lg:max-h-[450px] lg:flex  object-center rounded-2xl "><img  className=" bg-yellow-100 h-full w-full object-cover   absolute -bottom-0   border lg:scale-100 " src="/img/Adobe Express - file.png" alt="" /></figure>
        </div>
      </div>
    </div>
  );
}
