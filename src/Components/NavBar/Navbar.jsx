import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../ReusableComponent/Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#00009c] font-rubik  z-[100] shadow-xl">
      <div className="flex z-100 items-center font-medium z-50 sm:justify-around lg:justify-evenly">
        <div className=" p-4 w-full lg:w-[100px]   flex items-center justify-between  ">
          {/* <img
            src="https://nj1-static.collegedekho.com/_next/static/media/collegedekhologo.17bc2525.svg?width=256&q=80"
            alt="logo"
            className="md:cursor-pointer h-9"
          /> */}
          <h1 className="text-white  font-bold text-2xl">LOGO</h1>
          <div
            style={{ color: open ? "black" : "#ffff", zIndex: "100" }}
            className="text-3xl lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
        <ul className=" hidden lg:flex uppercase items-center gap-8 ">
          <li className="">
            <Link to="/" className="text-white text-[15px] font-semibold p-2  ">
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/colleges"
              className="text-white text-[15px] font-semibold p-2  "
            >
              Colleges
            </Link>
          </li>

          <NavLinks />
        </ul>
        <div className=" lg:flex hidden flex-wrap justify-center items-center gap-3">
          <Link to="/counselingRegForm">
            {" "}
            <Button
              text="Get a Counseling Session"
              className="bg-white text-[#00009c] p-[0.6rem] font-semibold rounded-[8px] px-5 transition duration-300 ease-in-out hover:shadow-md"
            />
          </Link>
        </div>
        {/* Mobile nav */}
        <ul
          className={`z-50 
        lg:hidden bg-white fixed text-start w-full h-[120vh]  top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-2 w-[180px]">
            <Button
              text="Get Started"
              className="bg-blue-600 text-white  px-6 py-2 rounded-lg hover:text-blue-900 duration-300"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
