"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section8() {
  const [cc, setcc] = useState(0); // مقدار اولیه صفر
  const divv = Array.from({ length: 5 });
  const divvv = Array.from({ length: 20 }, (_, i) =>
    i % 2 === 0 ? "Photo Retouching" : "SEO Optimization"
  );
  const b = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const n = b.current.getBoundingClientRect().top;
      if (n <= 0) {
        if (currentScrollY > lastScrollY) {
          setcc((val) => (val < 400 ? val + 15 : val)); // حداکثر 400
        } else if (currentScrollY < lastScrollY) {
          setcc((val) => (val > 0 ? val - 15 : 0)); // حداقل 0
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={b}
      className="w-full bg-[#090b1c] text-white h-[200vh] relative  after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full  "
    >


      <div
        className="w-full sticky top-0 left-0 h-screen bg-[#090b1c] py-10 flex justify-center overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
      
        {divv.map((val, i) => {
          return (
            <div
              key={i}
              className="min-w-[300px] rounded-2xl   mx-10 transition-all duration-300 scale-115"
              style={{
                transformOrigin: "bottom left",
                transform: `
                  rotateZ(-28deg)
                  rotateX(30deg)
                  rotateY(30deg)
                  ${
                    i === 1 || i === 3
                      ? `translateY(-${cc}px)`
                      : `translateY(${cc}px)`
                  }
                `,
              }}
            >
              <div className="w-full rounded-2xl overflow-hidden">
                {divvv.map((val, j) => {
                  const renderSVG = () => {
                    if ([0, 20, 5, 15].includes(j)) {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      );
                    } else if ([1, 19, 14, 6].includes(j)) {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path>
                          <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                        </svg>
                      );
                    } else if ([2, 18, 7, 13].includes(j)) {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                          <path d="M12 13v8"></path>
                          <path d="M12 3v3"></path>
                        </svg>
                      );
                    } else if ([3, 17, 12, 8].includes(j)) {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path>
                          <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path>
                          <path d="M14.5 17.5 4.5 15"></path>
                        </svg>
                      );
                    } else if ([4, 16].includes(j)) {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="2.18"
                            ry="2.18"
                          ></rect>
                          <line x1="7" x2="7" y1="2" y2="22"></line>
                          <line x1="17" x2="17" y1="2" y2="22"></line>
                          <line x1="2" x2="22" y1="12" y2="12"></line>
                          <line x1="2" x2="7" y1="7" y2="7"></line>
                          <line x1="2" x2="7" y1="17" y2="17"></line>
                          <line x1="17" x2="22" y1="17" y2="17"></line>
                          <line x1="17" x2="22" y1="7" y2="7"></line>
                        </svg>
                      );
                    }
                  };

                  return (
                    <div
                      key={j}
                      className="w-full h-20  border-blue-500 border-2 flex justify-center items-center gap-x-10 py-14 mt-3 rounded-2xl *:hover:scale-110"
                    >
                      <div className="w-10 h-10 text-[#272c53]">{renderSVG()}</div>
                      <div className="font-reza text-[#1e234a]">{val}</div>
                    </div>
                  );
                })}
              </div>
              
            </div>
          );
        })}
                <div className="absolute top-0 left-[0%] backdrop-blur-[.7px] min-h-full min-w-full flex flex-wrap   z-[999] justify-center items-center">
        <div>       <div className="w-full text-white   text-6xl text-center">
          <p className="font-hamid">Web design, logo, branding,</p>
        </div>
        <div className="w-full text-white py-4 text-6xl text-center">
          <p className="font-hamid">photo retouching, social media</p>
        </div>
        <div className="w-full  font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent text-6xl text-center card">
          <p className="font-hamid">& so much more!</p>
        </div></div>
      </div>
      </div>
    </div>
  );
}
