"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section3() {
  const [data, setdata] = useState(false);
  const [offset, setOffset] = useState(0);
  const b = useRef(null);

  // ذخیره آخرین موقعیت اسکرول برای تشخیص جهت
  useEffect(() => {
    let lastScrollY = window.scrollY; // ذخیره آخرین موقعیت اسکرول
    
    const ss = () => {
      const rect = b.current.getBoundingClientRect();

      if (rect.top < 620) {
        if (window.scrollY > lastScrollY) {
          // اسکرول به پایین → راست
          setOffset((p) => {
            const next = p - 12;
            if (next <= -400) {
              return p + 12;
            }
            return next;
          });
        } else {
              setOffset((p) => {
            const next = p + 12;
            if (next >= 400) {
              return p - 12 ;
            }
            return next;
          });
          // اسکرول به بالا → چپ
        }
      }

      lastScrollY = window.scrollY; // آپدیت آخرین موقعیت
    };

    window.addEventListener("scroll", ss);
    return () => {
      window.removeEventListener("scroll", ss);
    };
  }, []);

  const imgg = [
    "behance_3behance_2 (1).webp",
    "Portfolio_4Portfolio_03.webp",
    "Portfolio_5Portfolio_04.webp",
    "Portfolio_2Portfolio_01.webp",
    "portfolio_1portfolio.webp",
  ];

  return (
    <div
      ref={b}
      className="w-full flex gap-x-5 bg-black l py-4  overflow-hidden"
    >
      {imgg.map((val, index) => (
        <figure
          key={index}
          className="min-w-[300px] max-h-[200px] lg:min-w-[500px] lg:max-h-[700px] transition-all duration-[1.2s] -translate-x-[500px]"
          style={{ transform: `translateX(${offset}px)` }}
        >
          <img
            className="h-[300px] rounded-3xl hover:scale-102  transition-all duration-[.4s] min-w-[300px] max-h-[200px] lg:min-w-[500px] lg:max-h-[700px] object-cover"
            src={`/img/${val}`}
            alt=""
          />
        </figure>
      ))}
    </div>
  );
}
