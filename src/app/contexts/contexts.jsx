'use client'
import React, {  useContext, useEffect, useState } from 'react'
const Mycontext=React.createContext() 
export default function Contexts({children}) {
    const [s,setscroll]=useState(0)
useEffect(()=>{
const ss =()=>{
       
   
  const newScroll = window.scrollY
  setscroll(newScroll)
  console.log(s) // ✅ این مقدار درست هست



}
ss()
    window.addEventListener('scroll',ss)
    return()=>{
        window.removeEventListener('scroll',ss)
    }
},[])

  return (
    <div>
        <Mycontext.Provider value={{s}}>

            {children}
        </Mycontext.Provider>
    </div>
  )
}
export function usecontext(){
    return useContext(Mycontext)
}
