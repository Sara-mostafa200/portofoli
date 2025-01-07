import React from "react";

export default function Footer() {
  return (
    <div className=" shadow-inner  bg-white fixed bottom-0 left-0 z-20 right-0 mt-4 py-4 flex lg:flex-col items-center justify-center">
      <h4 className="headline text-[24px] text-[#2A3663]   font-semibold dark:text-white">
        Follow me on
      </h4>
      <div className="linked mt-1 ml-3 lg:ml-0 flex items-end gap-4 justify-between ">
        <a href="https://www.linkedin.com/in/sara-elhadad-9b4319235/"target="_blank" ><i class="fa-brands fa-linkedin   text-darkBlue text-[24px] hover:text-[30px] transition-all duration-[0.2s]"></i></a>
        <a href="https://github.com/Sara-mostafa200"target="_blank" > <i class="fa-brands fa-square-git  text-darkBlue text-[24px] hover:text-[30px] transition-all duration-[0.2s]"></i></a>
       
      </div>
    </div>
  );
}
