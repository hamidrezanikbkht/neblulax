'use client'
import React, { useEffect, useRef, useState } from "react";

export default function Section6() {
    const [data,setdata]=useState(0)
    const rr=useRef(null)
useEffect(() => {
  const ss = () => {
    if (!rr.current) return;

    const rect = rr.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // فاصله‌ای که سکشن وارد دید میشه
    const progress = windowHeight - rect.top -300;

    // نسبت بین ۰ تا ارتفاع سکشن
    const maxHeight = 900;
    const sectionHeight = rect.height;

    // نرمالایز کردن → درصد پیشرفت اسکرول نسبت به طول سکشن
    const ratio = Math.min(Math.max(progress / sectionHeight, 0), 1);

    setdata((ratio * maxHeight) );
  };

  window.addEventListener("scroll", ss);
  return () => window.removeEventListener("scroll", ss);
}, []);

  return (
    <div ref={rr} className=" w-full bg-black text-white flex justify-end h-[900px]">
      <div className={`w-1  bg-gradient-to-t   from-purple-600 to-80% via-pink-500 to-pink-300 transition-all lg:duration-[.4s] duration-75 mr-5 lg:mr-16 flex justify-center items-end`} style={{ height: `${data}px` }}> <div className="min-w-4 min-h-4 max-h-4 rounded-full bg-white "></div></div>
      <div className="w-[90%]  flex flex-wrap">
        <div className="w-full">
          <div className="text-[#7f7f7f] text-sm font-bold tracking-[5px]">1. STEP</div>
          <div className="font-hamid lg:text-5xl text-3xl py-4">Choose a plan!</div>
          <p className="lg:w-[50%] w-[80%] font-reza lg:text-3xl text-xl py-8 text-[#7f7f7f]">
      It's as simple as that. Start with a monthly subscription, without any obligations. You can anytime pause or resign. Welcome to the world of Design flat rates.
          </p>
        </div>
        <div className="w-full">
          <div className="text-[#7f7f7f] text-sm font-bold tracking-[5px]">2. STEP</div>
          <div className="font-hamid lg:text-5xl text-3xl py-4">Join Trello and start making inquiries.</div>
          <p className="lg:w-[50%] w-[80%] lg:text-3xl text-xl py-8 font-reza text-[#7f7f7f]">
           We deliver fast and without compromises. Expect a turnaround time of 2-3 days from Monday to Friday. Whether for social media, flyers or brochures.
          </p>
        </div>
        <div className="w-full">
          <div className="text-[#7f7f7f] text-sm font-bold tracking-[5px]">3. STEP</div>
          <div className="font-hamid lg:text-5xl text-3xl py-4" >Design in a nutshell</div>
          <p className="lg:w-[50%] w-[80%] lg:text-3xl text-xl py-8 font-reza text-[#7f7f7f]">
And that was it! You'll love it! From logo design to complete branding projects, we've got you covered.          </p>
        </div>
      </div>
    </div>
  );
}
