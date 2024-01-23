import React, { useEffect, useState, } from "react";
import { heroElements } from "../constants";
import { img1, img2, img3, logo } from "../assets";
import "../index.css";

const Hero = () => {
  const [currentElement, setCurrentElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement(
        (prevElement) => (prevElement + 1) % heroElements.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] sm:h-[880px]">
      <div className="w-full h-full -z-1 relative">
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
              <p className="font-semibold text-white sm:text-[35px] text-[20px] tracking-wide md:text-[45px] w-full text-center">
                {element.text}
              </p>
              <button className="border-2 border-red-200 py-3 px-5 text-white text-[20px] rounded-3xl">
                Know more
              </button>
            </div>
          </div>
        ))}

        <div className="w-full h-[10%] flex items-center justify-start gap-1 absolute z-2 mt-2 ml-10">
          <img src={img1} alt="img1" className="w-[5%] h-full object-contain" />
          <img src={img2} alt="img2" className="w-[5%] h-full object-contain" />
          <img src={img3} alt="img3" className="w-[5%] h-full object-contain" />
        </div>

        <div className="w-full h-[90%] flex justify-between">
          <div className="h-full w-[6%] flex flex-col items-center justify-center gap-2 bg-slate-900 bg-opacity-[40%] absolute">
            <p
              className={`${
                currentElement === 0 ? "text-white" : "text-slate-300"
              } text-[18px] py-3`}
            >
              01
            </p>
            <p
              className={`${
                currentElement === 1 ? "text-white" : "text-slate-300"
              } text-[18px] py-3`}
            >
              02
            </p>
            <p
              className={`${
                currentElement === 2 ? "text-white" : "text-slate-300"
              } text-[18px] py-3`}
            >
              03
            </p>
            <p
              className={`${
                currentElement === 3 ? "text-white" : "text-slate-300"
              } text-[18px] py-3`}
            >
              04
            </p>
          </div>

          <div
            style={{ marginTop: "45px" }}
            className="h-full w-[70%]  ml-80 flex items-start justify-around absolute text-white font-semibold text-[25px]"
          >
            <div className="h-[10%] h-[13%] flex items-center justify-around">
              <a href="#">Events</a>
              <a href="#">Committee</a>
              <div className="w-[9%] h-[12%] flex items-center justify-center">
                <img
                  src={logo}
                  alt="logo"
                  className="object-contain rounded-xl"
                />
              </div>
              <a href="#">About us</a>
              <a href="#">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
