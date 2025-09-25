"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section9() {
    const [data,setdata]=useState(false)
    const [mo,setmo]=useState(0)
    const b=useRef(null)
    const last = useRef(0)
    const [translateY, setTranslateY] = useState(0);
    
  useEffect(() => {
    const ss = () => {
        let scrolly = window.scrollY
        
        const v = b.current.getBoundingClientRect()
        if (scrolly>last.current) {
                    if (v.top<=200) {
                        setdata(true)
                        setmo(p=>p+2)
                        
                    }
                    
                    console.log('داری میری پایین');
                }else{

                    if (v.top<0) {
                        setmo(p=>p-2)
                    }
                }
                
               last.current=scrolly
                   
                    
            };
            

    window.addEventListener("scroll", ss);
    return ()=> window.removeEventListener('scroll',ss)
  }, []);
  useEffect(()=>{
      if (window.innerWidth > 1024) {
        setTranslateY(0)
        
      }else{
        setTranslateY(350)
      }
      setmo(0)
  },[])
  return (
    <div ref={b} className="w-full   relative h-[100vh]  py4 flex-wrap flex justify-center bg-gradient-to-b from-transparent  to-black to-16%">
      <div className="w-full *:py-4 *:pl-12 ">
        <div className="w-[87%] py-4">
          <p className="text-[#7f7f7f] text-xl font-bold tracking-[5px]">
            Service
          </p>
        </div>
        <div className="w-[87%] py-4">
          <p className=" bg-gradient-to-r from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent  lg:text-5xl font-bold font-hamid tracking-[5px]">
            Convenient from
          </p>
        </div>
        <div className="w-[87%] py-4">
          <p className=" bg-gradient-to-r from-purple-600 via-pink-500 to-pink-300 bg-clip-text text-transparent  lg:text-5xl font-bold font-hamid tracking-[5px]">
            any device!
          </p>
        </div>
        <div className="w-[87%] py-4">
          <p className="  lg:w-[50%] w-full  text-[#7f7f7f]  text-xl font-bold font-hamid tracking-[5px]">
            Create and manage unlimited design requests with ease in Trello.
            Whether on the desktop, tablet or mobile phone.
          </p>
        </div>
      </div>
      <figure className={` absolute right-0  max-w-[800px] transition-all duration-150 `} style={{ top: `${translateY + mo}px`}}>
        <img src="/img/trello_mockup_eng.webp" alt="" />
      </figure>
    </div>
  );
}
