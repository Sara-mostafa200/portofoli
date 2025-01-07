import React, { useState } from "react";
import weather from "../../assets/weather.png";
import bookmark from "../../assets/bookmark.png";
import GameReviews from "../../assets/Game-Reviews.png";

export default function Projects() {
  let [show, setshow] = useState(false);
  let [showCard, setshowCard] = useState(true);
  let [index, setIndex] = useState();
  let [content, setContent] = useState([
    {
      line1: `Developed a responsive weather website using HTML, CSS, JavaScript, and Bootstrap`,
      line2: ` Integrated a weather API to fetch real-time weather data for any location`,
      line3: `Implemented user-friendly features such as location-based weather search, current temperature
 display, and weather forecasts`,
      line4: ` Live Demo:`,
      link: `https://sara-mostafa200.github.io/Weather/`,
    },
    {
      line1: `Developed a responsive website for managing bookmarks using HTML, CSS, JavaScript, and localStorage.`,
      line2: ` Implemented CRUD operations (Create, Read, Update, Delete) using JavaScript and localStorage to store and manage bookmarks efficiently.`,
      line3: `Designed and structured the interface using HTML, styled it with CSS, and enhanced the design using Bootstrap for a clean, modern appearance,
 modern appearance`,
      line4: ` Live Demo:`,
      link: `https://sara-mostafa200.github.io/Bookmark/`,
    },
    {
      line1: `Developed a responsive website for displaying and filtering games based on category`,
      line2: ` Implemented Object-Oriented Programming (OOP) principles in JavaScript to manage game data
 and filtering logic efficiently`,
      line3: `Designed and structured the interface using HTML and styled it with CSS and Bootstrap for a clean,
 modern appearance`,
      line4: ` Live Demo:`,
      link: `https://sara-mostafa200.github.io/Game-Reviews/`,
    },
  ]);

  function Diaplay(index) {
    setshow(true);
    setIndex(index);
    setshowCard(false)
  }
  function hidde() {
    setshow(false);
    setshowCard(true)
  }

  // function lightBox(index) {

  //   return (
  //     <>
  //       <div
  //         // onClick={(e) => {
  //         //   e.currentTarget == e.target ? hidde() : null;
  //         // }}
  //         className="lightBoxContainer flex items-center  justify-center absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.7)] "
  //       >
  //         <div className="lightBox bg-white p-8 text-start mx-3 leading-loose rounded-sm ">
  //           <p>
  //             <ol className="list-disc	list-inside ">
  //               <li className="text-darkBlue text-[18px] font-semibold">
  //                 {content[index].line1}
  //               </li>
  //               <li className="text-darkBlue text-[18px] font-semibold">
  //                 {content[index].line2}
  //               </li>
  //               <li className="text-darkBlue text-[18px] font-semibold">
  //                 {content[index].line3}
  //               </li>
  //               <li className="text-darkBlue text-[18px] font-semibold">
  //                 <span className="font-bold"> {content[index].line4} </span>
  //                 <a target="_blank" href={content[index].link}>
  //                   {content[index].link}
  //                 </a>
  //               </li>
  //             </ol>
  //           </p>
  //         </div>
  //       </div>
  //     </>

  //   );

  // }

  return (
    <div>
      <h1 className=" text-darkBlue text-[24px] font-bold my-1">
        <span className="text-black">My </span>Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-0 md:mt-20 lg:mt-9">
        {showCard ? <> <div onClick={() => Diaplay(0)} className="lg:w-1/3 px-2 ">
          <div className="shadow py-6">
            <div className="img">
              <img
                className="h-[150px] object-contain mx-auto"
                src={weather}
                alt=""
              />
            </div>
            <h3 className="text-darkBlue text-[20px] font-bold">
              {" "}
              Weather Website
            </h3>
            <p className="my-3 flex flex-wrap items-center justify-center gap-1">
              {" "}
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white p-2">
                html
              </span>
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white p-2">
                css
              </span>
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white p-2">
                bootstrap
              </span>
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white px-3 p-2">
                js
              </span>
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white px-3 p-2">
                API
              </span>
            </p>
          </div>
        </div>
        <div onClick={() => Diaplay(1)} className="lg:w-1/3 px-2 ">
          <div className="shadow py-6">
            <div className="img">
              <img
                className="h-[150px] object-contain mx-auto"
                src={bookmark}
                alt=""
              />
            </div>
            <h3 className="text-darkBlue text-[20px] font-bold">
              {" "}
              bookmark Website
            </h3>
            <p className="my-3 flex flex-wrap items-center justify-center gap-1">
              {" "}
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white p-2">
                html
              </span>
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white p-2">
                css
              </span>
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white p-2">
                bootstrap
              </span>
              <span className="border border-[#2A3663] rounded-full  bg-darkBlue text-white px-3 p-2">
                js
              </span>
            </p>
          </div>
        </div>
        <div onClick={() => Diaplay(2)} className="lg:w-1/3 px-2   ">
          <div className="shadow py-6">
            <div className="img ">
              <img
                className="h-[150px] object-contain mx-auto"
                src={GameReviews}
                alt=""
              />
            </div>
            <h3 className="text-darkBlue text-[20px] font-bold">
              {" "}
              Game-Reviews Website
            </h3>
            <p className="my-3 flex flex-wrap items-center line-clamp-2 justify-center gap-1">
             <div className="w-[100%] flex gap-1 items-center justify-center ">
             {" "}
              <span className=" border border-[#2A3663] rounded-full  bg-darkBlue text-white p-1">
                html
              </span>
              <span className=" border border-[#2A3663] rounded-full  bg-darkBlue text-white p-1">
                css
              </span>
              <span className=" border border-[#2A3663] rounded-full  bg-darkBlue text-white p-1">
                bootstrap
              </span>
              <span className=" border border-[#2A3663] rounded-full  bg-darkBlue text-white p-1">
                js (OOP)
              </span>
              <span className=" border border-[#2A3663] rounded-full  bg-darkBlue text-white p-1">
                API
              </span>
             </div>
            </p>
          </div>
        </div> </>: null}
        
        {show ? (
          <div
            onClick={(e) => {
              e.currentTarget == e.target ? hidde() : null;
          
              
            }}
            className="lightBoxContainer flex items-center  justify-center absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.7)] "
          >
            <div className="lightBox bg-white p-8 text-start mx-7 md:mx-3 leading-loose rounded-sm ">
              <p>
                <ol className="list-disc	list-inside ">
                  <li className="text-darkBlue text-[18px] font-semibold">
                    {content[index].line1}
                  </li>
                  <li className="text-darkBlue text-[18px] font-semibold">
                    {content[index].line2}
                  </li>
                  <li className="text-darkBlue text-[18px] font-semibold">
                    {content[index].line3}
                  </li>
                  <li className="text-darkBlue text-[18px] font-semibold">
                    <span className="font-bold"> {content[index].line4} </span>
                    <a target="_blank" href={content[index].link}>
                      {content[index].link}
                    </a>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
