import React from "react";
import cv from "../../assets/Sara_Elhadad_CV.pdf"
import { Link, NavLink } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";

export default function Navbar1() {
  return (
    <>
      <Navbar className=" shadow fixed z-10 top-0 bg-white left-0 right-0 py-4 flex items-center justify-center">
        <Navbar.Brand>
          <Link to="" className="headline text-[20px] md:text-[24px] text-[#2A3663]   font-semibold dark:text-white">
            SARA EL-HADAD
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2 ">

          <a href={cv} download="Sara_Elhadad_CV.pdf" className="navbtn bg-transparent focus:ring-0	  text-[#2A3663] hover:!bg-darkBlue transition-all !duration-[300ms] hover:text-white"> Download CV</a>
          <Navbar.Toggle className="ml-3 border-none focus:ring-0 hover:bg-darkBlue hover:text-white	" />
        </div>
        <Navbar.Collapse>
          
          <NavLink className=" text-[#2A3663] transition-all !duration-[300ms] " to="about">About</NavLink>
          <NavLink className=" text-[#2A3663] transition-all !duration-[300ms] " to="projects">Projects</NavLink>
          <NavLink className=" text-[#2A3663]  transition-all !duration-[300ms]" to="contact">Contact</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
