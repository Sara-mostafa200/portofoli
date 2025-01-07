import React from 'react'
import Navbar from '../Navbar/Navbar1';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto flex justify-center items-center my-[20%] md:my-[5%]">
       <Outlet/>  
    </div>
   
   
    <Footer/>
 
    
      
    </>
  )
}
