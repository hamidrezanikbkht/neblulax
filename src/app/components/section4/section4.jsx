"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section4() {
  const [data, setdata] = useState(false);
  const [rot, setrot] = useState(45);
  const [pp, setpp] = useState(0);
    const [translateY, setTranslateY] = useState(0);

  const c = useRef(null);
  useEffect(() => {
    const ss = () => {
      const b = c.current.getBoundingClientRect();

      if (b.top <= 0) {
        setdata(true);
        setrot((p) => Math.max(p - 5, 0));
      } else {
        setdata(false);
        setrot(35);
      }
    };
    window.addEventListener("scroll", ss);
    return () => {
      window.removeEventListener("scroll", ss);
    };
  }, [data, rot]);
  useEffect(() => {
    let lastScroll = 0;

    const ss = () => {
      const scrollY = window.scrollY;
      const b = c.current.getBoundingClientRect();

      if (b.top <= 100) {
        if (scrollY > lastScroll) {
          // اسکرول به پایین
          setpp((p) => p + 3);
        } else {
          // اسکرول به بالا
          setpp((p) => p - 3);
        }
      }
      lastScroll = scrollY;
    };

    window.addEventListener("scroll", ss);
    return () => window.removeEventListener("scroll", ss);
  }, []);
    useEffect(() => {
    if (window.innerWidth > 1024) {
      setTranslateY(500);
    } else {
      setTranslateY(0);
    }
  }, [])

  return (
    <div
      ref={c}
      className={`w-full bg-black py-4 pb-4 flex flex-wrap justify-center    `}
    >
      <div
        className={`w-full flex  flex-wrap justify-center perspective-normal `}
      >
        <figure className="w-[50%] ">
          <img src={`/img/triangle_1triangle.webp`} alt="" />
        </figure>
        <figure
          className={`w-[85%]   transition-all duration-500  `}
          style={{
            objectFit: "contain",
            transform: data
              ? `rotateX(${rot >= 0 ? rot : 0}deg) translateZ(${
                  rot <= 100 ? 0 : rot - 2
                }px) translateY(${
                  pp < -400 ? (setdata(false), setpp(0)) : pp
                }px)   `
              : `rotateX(0deg) translateZ(-0px) translateY(${translateY}px)`,
          }}
        >
          <img
            className="object-contain w-full h-full"
            src={`/img/ipad_en.webp`}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
}
