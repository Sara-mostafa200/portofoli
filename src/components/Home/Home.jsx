import React from 'react'
import { Link } from 'react-router-dom'
import sara from "../../assets/WhatsApp Image 2024-07-27 at 17.55.17_750632d4.jpg"

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between     flex-wrap gap-8 lg:gap-0 ">

      
      <div className="lg:w-3/6  text-start">
      <h1 className='text-[40px] font-bold text-darkBlue'>
        <span className='text-black'>Hi , </span>I’m
        <br></br>
        Sara Elhadad
      </h1>
      <span className='text-[25px] font-semibold my-3'>Front-End Developer </span>
      <p className='my-3 mb-7'>a graduate of the Faculty of Computers and Information, class of 2024, with a strong interest in front-end development using React.</p>
      <Link className='btn mb-8' to="contact">Contact Me</Link>
      </div>
      <div className="  lg:w-2/6 lg:px-1  py-4  md:h-[700px] lg:h-[430px]   lg:order-last order-first ">
      <div className="overflow-hidden p-0  relative">
        
      <img className='w-[80%] m-auto p-5 ' src={sara}   alt="" />

      <div className="borderr border-4 border-darkBlue rounded-sm    w-[80%]   absolute bottom-[0px] top-[0px] left-[10%]">
      </div>
      </div>
      </div></div>
    </>
  )
}
