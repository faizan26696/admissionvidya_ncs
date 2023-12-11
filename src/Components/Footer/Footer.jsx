import React from "react";
import { MdOutlineLocationCity } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import SocialIcons from "../ReusableComponent/SocialIcons";

const Footer = () => {
  const address = {
    icon: <MdOutlineLocationCity className="text-cyan-400 pt-2 text-3xl" />,
    text: "Plot No. 59, I Floor, FNG Vihar-II, Parthala Chowk, Service Lane, Noida, Uttar Pradesh, India 201304",
  };

  const email = {
    icon: <AiOutlineMail className="text-cyan-400 text-[18px]" />,
    text: "info@neophyteconsulting.com",
  };

  const phone = {
    icon: <AiOutlinePhone className="text-cyan-400 text-[18px]" />,
    text: "+91 8076074504",
  };

  const quickLinks = ["MBBS", "B.Tech", "BCA", "Enquiry"];
  const helpfulLinks = [
    "Term of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Contact us",
  ];
  const pageLinks = ["About us", "Careers", "News & Article", "Legal Notice"];

  return (
    <div className="bg-black">
      <div className="flex-wrap pt-[2rem] bg-black   pb-4 flex items-center justify-around  ">
        <div className="sm:px-[2rem] p-2">
          <h1 className="font-bold cursor-pointer text-xl sm:text-2xl text-cyan-600 text-start sm:pl-3">
            LOGO
          </h1>
          <div className="text-white w-[200px] sm:w-[280px] flex items-start gap-1 p-2">
            <span>{address.icon}</span>
            <p className="text-[16px] sm:text-[1rem] text-left">
              {address.text}
            </p>
          </div>
          <div className="text-white text-[16px] sm:text-[1rem]   pl-3 flex items-center  gap-2  p-2">
            <span>{email.icon}</span>
            <p>{email.text}</p>
          </div>
          <div className="text-white text-[16px] sm:text-[1rem]  pl-3 flex items-center  gap-2  p-2">
            <span>{phone.icon}</span>
            <p>{phone.text}</p>
          </div>
          <div className="flex items-center pl-3">
            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-around sm:gap-[3rem] text-start   ">
          <div className="text-white ">
            <h2 className="font-bold sm:text-2xl p-2 gap-[1rem] sm:pb-[2rem] text-[#ecf3f9]">
              Quick Links
            </h2>
            <ul className="p-2 cursor-pointer leading-[1.6rem] text-start">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-cyan-500 duration-200 sm:text-[1rem] text-[0.9rem] sm:pb-2"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-white text-start">
            <h2 className="font-bold sm:text-2xl p-2 sm:pb-[2rem] text-[#ecf3f9]">
              Helpful Links
            </h2>
            <ul className="p-2 cursor-pointer leading-[1.6rem] text-start">
              {helpfulLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-cyan-500 duration-200 sm:text-[1rem] text-[0.9rem] sm:pb-2"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white pr-2 text-start">
            <h2 className="font-bold text-start sm:text-2xl p-2 sm:pb-[2rem]  text-[#ecf3f9]">
              Page
            </h2>
            <ul className="p-2 cursor-pointer leading-[1.6rem] text-start">
              {pageLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-cyan-500 sm:text-[1rem] text-[0.9rem] duration-200 sm:pb-2"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-[6rem] sm:pt-[4rem] lg:p-[2rem]">
        <div className="bg-white  h-[0.3px] "></div>
        <div>
          <p className="text-gray-200 text-[12px] p-[2rem]">
            Copyright © 2022 College Dakhla, All rights reserved. Built by
            Webstack Ocean. <br />
            <br />
            Term of Service | Privacy Policy | Cookie Policy Contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
