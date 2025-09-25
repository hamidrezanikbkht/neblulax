"use client";
import React, { useEffect, useState } from "react";
import Section from "../section/section";

export default function Header() {
  const [data, setdata] = useState(0);
  const vv = Array.from({ length: 3 }, (val, index) => {
    return <div key={index}></div>;
  });
  useEffect(() => {
    const ss = () => {
      const d = window.scrollY;
      setdata(d);
    };

    window.addEventListener("scroll", ss);
  }, []);
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollStep = e.deltaY * 0.5;
      window.scrollBy({ top: scrollStep });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel, { passive: false });
    };
  }, []);
  return (
    <header className="w-full      ">
      <figure className="w-full sticky top-0 h-[70vh] lg:h-screen  ">
        <img
          className="w-full h-full bg "
          src="/img/hero_10hero_5.webp"
          alt=""
        />

        <img
          className={`w-full  h-full absolute transition-all  duration-200 lg:duration-500  lg:object-cover  lg:object-center z-20  `}
          style={{
            bottom: data / 13 + "px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          src="/img/hero_9hero_4.webp"
          alt=""
        />
        <div className=" hidden w-full   lg:flex lg:flex-wrap  px-40    transition-all  duration-200 lg:duration-500   absolute z-20 py-72  " style={{ bottom: data / 13 + "px" }}>
            <p
              className=" font-hamid pl-20"
              style={{ fontSize: "70px", fontWeight: "bold", color: "white" }}
            >
              Get
            </p>{" "}
          <p
            className=" font-hamid px-2  hidden   lg:flex   h-full   transition-all  duration-200 lg:duration-500      font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent"
            style={{
              fontSize: "70px",
              fontWeight: "bold",
            }}
          >
            unlimited{" "}
          </p>
          <p className=" font-hamid"
              style={{ fontSize: "70px", fontWeight: "bold", color: "white" }}>disingis</p>
              <p className=" font-hamid tracking-tight"
              style={{ fontSize: "70px", fontWeight: "bold", color: "white" }}>
                at a fixed price per month
              </p>
        </div>

         
        <img
          className={`w-full h-full absolute  transition-all  duration-200 lg:duration-500  lg:object-cover object-center z-20 `}
          style={{
            bottom: data / 7 + "px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          src="/img/hero_6hero_3.webp"
          alt=""
        />
        <img
          className={`w-full h-full absolute  transition-all duration-200 lg:duration-500  lg:object-cover object-center z-20 `}
          style={{
            bottom: data / 3 + "px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          src="/img/hero_7hero_2.webp"
          alt=""
        />
        <img
          className={`w-full h-full absolute transition-all  duration-200 lg:duration-500  lg:object-cover object-center   z-30 `}
          style={{ bottom: data / 2 + "px",  }}
          src="/img/hero_8hero_1.webp"
          alt=""
        />
        <div className="transition-all flex  duration-200 lg:duration-500  overflow-hidden  z-50 ">
          {vv.map((_, i) => {
            return (
              <div
                key={i}
                className="w-full lg:h-[550px] h-[350px]  absolute translate-y-[300px] lg:translate-y-[450px] transition-all duration-200 lg:duration-500 z-40 "
                style={{
                  bottom: data / 2 + "px",
                  backgroundImage: `linear-gradient(
      to bottom,
 rgba(0,0,0,0) 0%,          /* بالای شفاف */
      rgba(0,0,0,0.7) 25%,       /* شروع به تیره شدن */
      rgba(0,0,0,1) 40%,         /* شروع مشکی کامل */
      rgba(0,0,0,1) 60%,         /* پایان مشکی کامل */
      rgba(0,0,0,0.7) 75%,       /* شروع روشن شدن تدریجی */
      rgba(0,0,0,0) 100%   
    )`,
                }}
              >
                {i}
              </div>
            );
          })}
          <div className="w-full   ">
            <img
              className={`w-full sss  absolute translate-y-[100px]  object-cover  bg-center bg-cover  lg:translate-y-[400px] transition-all  duration-200 lg:duration-500   z-50 `}
              style={{ bottom: data / 0.85 + "px", }}
              src="/img/hero_0.png"
              alt=""
            />{" "}
            <img
              className={`w-full  reza -scale-x-100  absolute translate-y-[100px]  lg:object-cover  bg-center bg-cover  lg:translate-y-[400px] transition-all  duration-200 lg:duration-500  z-50 `}
              style={{
                bottom: data / 0.85 + "px",
                left: "-100%",
              }}
              src="/img/hero_0.png"
              alt=""
            />
          </div>
        </div>
      </figure>
              <Section/>
      
    </header>
  );
}
