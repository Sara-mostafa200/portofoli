import React from 'react'

export default function Contact() {
  return (
    <div className='w-full flex flex-col items-center justify-center lg:mt-0  md:my-40'>
      <h2 className='headline text-[20px] md:text-[24px] text-[#2A3663]   font-semibold dark:text-white'> <span className='text-black'>Let’s Discuss Your</span> Project</h2>
      <p className=' max-w-[450px]'>Let’s make something new, different and more meaningful or make thing more visual or conceptual</p>
      <div className="flex my-7 flex-wrap gap-5 lg:gap-0 justify-center items-center w-full h-full">
        <div className="lg:w-2/6 flex  text-start flex-col gap-3">
        <div className="tel flex  items-center">
          <div className="icon  bg-darkBlue border border-[#2A3663] hover:bg-transparent hover:text-darkBlue transition-all duration-[0.2s] size-11 text-white rounded p-3">
          <i class="fa-solid fa-phone"></i>
          </div>
          <div className='text-start ml-3 '>
             <span className='text-[#92929D]'>Call me </span>
          <p className=''>+010234566697</p>
          </div>
         
        </div>
        <div className="tel flex items-center">
          <div className="icon  bg-darkBlue border border-[#2A3663] hover:bg-transparent hover:text-darkBlue transition-all duration-[0.2s] size-11 text-white rounded p-3">
          <i class="fa-solid fa-envelope"></i>
          </div>
          <div className='text-start ml-3 '>
             <span className='text-[#92929D]'>Email me </span>
          <p className=''>saramostafaelhadad830@gmail.com</p>
          </div>
         
        </div>
        <div className="tel flex items-center">
          <div className="icon  bg-darkBlue border border-[#2A3663] hover:bg-transparent hover:text-darkBlue transition-all duration-[0.2s] size-11 text-white rounded p-3">
          <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className='text-start ml-3 '>
             <span className='text-[#92929D]'>Address </span>
          <p className=''>Menof,Menofia,Egypt</p>
          </div>
         
        </div>
        
        </div>
        <div className="lg:w-4/6">
        <form className='flex justify-end flex-col gap-4' action="">
          <div className="div flex gap-2 items-center justify-center">
            <input className='rounded w-[50%] border focus:border-darkBlue focus:ring-0 border-[#BEC0BF]' type="text" name="" id="" placeholder='Full name' />
            <input className='rounded w-[50%] border focus:border-darkBlue focus:ring-0 border-[#BEC0BF]' type="email" name="" id="" placeholder='Your email' />
          </div>
          <div className="div flex gap-2 items-center justify-center">
            <input className='rounded w-[50%] border focus:border-darkBlue focus:ring-0 border-[#BEC0BF]' type="tel" name="" id="" placeholder='Phone number' />
            <input className='rounded w-[50%] border focus:border-darkBlue focus:ring-0 border-[#BEC0BF]' type="number" name="" id="" placeholder='Budget' />
          </div>
          <div>
            <textarea className='h-[100px] w-[100%]  border border-[#BEC0BF] rounded focus:border-darkBlue focus:ring-0' name="" id="" placeholder='Message'></textarea>
          </div>
          <button className='btn'> Submit Message</button>
        </form>
        </div>
      </div>
      
    </div>
  )
}
