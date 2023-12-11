import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";
const CareerCounseling = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-start sm:items-center flex-wrap px-2">
        {/* <img
          className="  sm:w-[50px] w-[25px] h-[25px] sm:h-[50px]"
          src="https://cdn-icons-gif.flaticon.com/6454/6454106.gif"
          alt="gif"
        /> */}
        <h1 className="sm:text-3xl text-[1.3rem] mb-2 font-semibold text-blue-700  pt-[1.5rem]">
          Get A Free{" "}
          <span className="font-extrabold text-[#00009c]">
            CareerCounseling Session
          </span>
        </h1>
        <img
          src="https://cdn-icons-gif.flaticon.com/8121/8121309.gif"
          alt="gif-vid"
          className=" sm:w-[3.5rem] w-[2.5rem] h-[2.5rem] sm:h-[3.5rem]"
        />{" "}
      </div>
      <div className="flex justify-around items-center px-4 flex-wrap md:flex-nowrap py-[1.5rem]">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="900"
          className="text-start px-2 sm:w-[50%]"
        >
          <h2 className="sm:text-2xl text-[1rem] font-bold text-blue-500 py-6">
            <Typed
              strings={["Confused about the best career-fit for you?"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
              duration={1000}
              delay={500}
              easing="easeInOutQuad"
            />
          </h2>
          <p className="text-[14px] sm:text-[16px] text-gray-600 font-medium pb-[3rem]">
            Too many choices can be daunting! Analyse your aptitude,
            capabilities, personality and interests with our scientific
            psychometric tool, and get advised on the best career options for
            you. It can also derive whether or not you are suitable for a
            particular career or role type.
          </p>
          <Link to="/counselingRegForm" className="group inline-block relative">
            <span className="py-1 text-[16px] font-semibold text-blue-500 flex justify-start items-center">
              Try our Free counseling session <BiRightArrowAlt />
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-blue-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></span>
          </Link>
        </div>
        <div data-aos="zoom-in" data-aos-offset="150" data-aos-duration="900">
          <img
            src="/images/guidance.gif"
            alt="guidance"
            className="sm:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerCounseling;
