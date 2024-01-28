import React, { useEffect, useState } from "react";
import { heroElements } from "../constants";
import { img1, img2, img3, logo, FbLogo } from "../assets";
import "../index.css";
import { useNavigate } from "react-router-dom";
import HeroHeader from "./HeroHeader";
import Navbar from "./Navbar";

const Hero = () => {
  const clipPathStyle = {
    clipPath: 'polygon(90% 0, 100% 55%, 84% 75%, 65% 81%, 33% 100%, 13% 69%, 21% 0)',
  };

  const clipPathStyle2 = {
    clipPath: 'polygon(87% 1%, 81% 45%, 73% 69%, 65% 78%, 33% 100%, 9% 75%, 0 0)',
  };

  const [currentElement, setCurrentElement] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement((prevElement) => (prevElement + 1) % heroElements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <><div className="w-full h-[500px] sm:h-[880px] relative"> {/* Adjusted class name */}
        <div className="w-full h-full -z-1 absolute inset-0"> {/* Adjusted class name */}
          {heroElements.map((element, index) => (
            <div
              key={index}
              className={`absolute w-full h-full ${
                index === currentElement ? "visible" : "hidden"
              }`}
            >
              <div
                className={`video-slide w-full h-full video-element ${
                  index === currentElement ? "video-fade-in" : "video-fade-out"
                }`}
              >
                <img
                  src={element.img}
                  alt={`img-${index}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

             <div
                className={`text-slide h-[40%] flex flex-col items-center justify-center absolute bottom-7 w-[80%] mr-auto ${
                  index === currentElement ? "text-fade-in" : "text-fade-out"
                }`}
              >
                <p className="font-semibold text-white sm:text-[35px] text-[16px] tracking-wide md:text-[45px] w-full text-center">
                  {element.text}
                </p>
              <button
                  className="border-2 border-red-200 py-1 sm:py-3 px-2 sm:px-5 text-white text-[16px] sm:text-[20px] rounded-3xl z-10"
                  onClick={() => navigate("/aboutus")}
                >
                  Know more
                </button>
              </div>
            </div>
          ))}        
	  <HeroHeader/>

          <div className="w-full h-[90%] flex justify-between">
            <div className="h-full w-[10%] sm:w-[6%] flex flex-col items-center justify-center gap-2 z-1 bg-slate-900 bg-opacity-[40%] absolute">
              <p
                className={`${
                  currentElement === 0 ? "text-white" : "text-slate-300"
                } text-[18px] py-3 cursor-pointer`}
                onClick={() => setCurrentElement(0)}
              >
                01
              </p>
              <p
                className={`${
                  currentElement === 1 ? "text-white" : "text-slate-300"
                } text-[18px] py-3 cursor-pointer`}
                onClick={() => setCurrentElement(1)}
              >
                02
              </p>
              <p
                className={`${
                  currentElement === 2 ? "text-white" : "text-slate-300"
                } text-[18px] py-3 cursor-pointer`}
                onClick={() => setCurrentElement(2)}
              >
                03
              </p>
              <p
                className={`${
                  currentElement === 3 ? "text-white" : "text-slate-300"
                } text-[18px] py-3 cursor-pointer`}
                onClick={() => setCurrentElement(3)}
              >
                04
              </p>
            </div>
<Navbar/>
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] relative">
        <div
          className="w-full flex justify-end absolute h-full bg-[#F1E8D7] z-[-1]"
          style={clipPathStyle}
        ></div>
        <div
          className="w-full h-[50px] z-0 bg-slate-800 bg-opacity-[40%] absolute"
          style={clipPathStyle2}
        ></div>
      </div>
    </>
  );
};

export default Hero;

