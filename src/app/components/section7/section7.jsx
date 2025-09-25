"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section7() {
  const [data, setData] = useState([false, false, false]); // هر div یه state خودش داره
  const b = useRef([]);
  const imgg = {
    one: ["Portfolio_5Portfolio_04.webp", "Portfolio_4Portfolio_03.webp"],
    tho: ["portfolio_1portfolio.webp", "behance_1behance.webp"],
    tree: ["Mascha_8Mascha_6 (1).webp", "Mascha_7Mascha_5.webp"],
  };
  const kk = ["tho", "one", "tree"];

  useEffect(() => {
    const ss = () => {
      b.current.forEach((el, i) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            // شرط رسیدن به viewport
            setData((prev) => {
              const copy = [...prev];
              copy[i] = true; // فقط همون یکی true میشه
              return copy;
            });
          }
        }
      });
    };
    window.addEventListener("scroll", ss);
    return () => window.removeEventListener("scroll", ss);
  }, []);

  return (
    <div
      className="w-full flex-wrap flex py-4   bg-black relative"
      style={{}}
    >
      <div className="w-full">
        <p className="w-full ml-10 text-sm font-bold tracking-[5px] text-[#7f7f7f]">
          PORTFOLIO
        </p>
      </div>
      <div className="w-full">
        <p className="w-full ml-10 font-hamid lg:text-5xl text-3xl py-4 text-white tracking-[2px]">
          Our latest work
        </p>
      </div>
      <div className="w-full flex-wrap flex bg-black py-4">
        {kk.map((key, i) => (
          <div
            ref={(el) => (b.current[i] = el)}
            key={i}
            className="text-white w-full flex gap-x-4  justify-center"
          >
            {imgg[key].map((val, j) => (
              <figure
                key={j}
                className={`w-[45%]  rounded-2xl mt-5 transition-all duration-[1s] ${
                  data[i] ? "scale-100 opacity-100" : "scale-70 opacity-0"
                }`}
              >
                <img
                  className={`object-cover h-full w-full rounded-2xl ${
                    i === 2 ? "max-h-[400px]" : "max-h-[600px]"
                  }`}
                  src={`/img/${val}`}
                  alt=""
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
