import React, { useState } from "react";
import { logo } from "../assets";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Desktop menu */}
      <div
        style={{ marginTop: "40px" }}
        className="h-full w-[70%] top-8 ml-80 items-start text-white text-[21px] hidden sm:flex sm:justify-evenly gap-6 relative"
      >
        <div className=" h-[13%] flex items-center justify-around">
          <a href="/events">Events</a>
          <a href="/committee">Committee</a>
          <div className="w-[9%] h-[12%] flex items-center justify-center">
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="object-contain rounded-xl"
              />
            </a>
          </div>
          <a href="/aboutus">About us</a>
          <a href="/contactus">Contact us</a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden cursor-pointer absolute flex items-center w-[90%] z-20 mr-3 justify-end">
        {toggle ? (
          <AiOutlineMenuUnfold
            className="text-2xl top-5 text-white absolute"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenuFold
            className="text-2xl top-5 text-white absolute"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <ul
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#ffffff] absolute top-12 right-0 mx-4 my-4 min-w-[140px] z-10 rounded-xl flex flex-col items-end gap-4`}
        >
          <li className="font-poppins text-[17px] font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md">
            <a href="/">Home</a>
          </li>
          <li className="font-poppins text-[17px] font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md">
            <a href="/events">Events</a>
          </li>
          <li className="font-poppins text-[17px] font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md">
            <a href="/committee">Committee</a>
          </li>
          <li className="font-poppins text-[17px] font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md">
            <a href="/aboutus">About us</a>
          </li>
          <li className="font-poppins text-[17px] font-medium cursor-pointer hover:bg-[#D9D9D9] hover:p-1 hover:text-[15px] hover:rounded-md">
            <a href="/contactus">Contact us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
