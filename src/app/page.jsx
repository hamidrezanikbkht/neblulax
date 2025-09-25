import React from 'react'
import Header from './components/header/header'
import Section2 from './components/section2/section2'
import Section3 from './components/section3/section3'
import Section4 from './components/section4/section4'
import Section5 from './components/section5/section5'
import Section6 from './components/section6/section6'
import Section7 from './components/section7/section7'
import Section8 from './components/section8/section8'
import Footer from './components/footer/footer'
import Section9 from './components/section9/section9'

export default function page() {
  return (
    <div className='w-full flex flex-wrap  2xl:container mx-auto  bg-black  '>
       <div className='overflow-hidden'>
         <Header/>
        <Section2/>
        <Section3/>
        <Section5/>
        <Section6/>
        <Section4/>
        <Section9/>
        <Section7/>
       </div>
        <Section8/>
        <Footer/>
    </div>
  )
}
