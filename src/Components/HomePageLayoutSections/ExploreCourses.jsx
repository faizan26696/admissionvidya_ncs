import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreCourses = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const ugCourses = [
    {
      name: "Engineering",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/609/609034.png",
    },
    {
      name: "Engineering CSE",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/7069/7069896.png",
    },
    {
      name: "BBA",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/2636/2636258.png",
    },
    {
      name: "BCA",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/2920/2920281.png",
    },
    {
      name: "Law",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/4252/4252296.png",
    },

    {
      name: "B.Com",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/3534/3534696.png",
    },

    {
      name: "B.Sc",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/8980/8980149.png",
    },

    {
      name: "BA Liberal",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/746/746964.png",
    },
    {
      name: "BA",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/906/906175.png",
    },
    {
      name: "Bio Technology",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/10001/10001268.png",
    },
    {
      name: "BDS",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/11523/11523557.png",
    },
  ];

  const pgCourses = [
    {
      name: "M.TECH",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/2421/2421283.png",
    },
    {
      name: "MBBS",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/11220/11220830.png",
    },
    {
      name: "MBA",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/7890/7890493.png",
    },
    {
      name: "MCA",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/1316/1316740.png",
    },
    {
      name: "LLM",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/3122/3122333.png",
    },

    {
      name: "BAJMC",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/10290/10290269.png",
    },
    {
      name: "B.Des",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/10493/10493392.png",
    },
    {
      name: "B.Pharma",
      logoUrl: "https://cdn-icons-png.flaticon.com/128/2968/2968933.png",
    },
  ];

  return (
    <div className="py-[6rem]">
      <h2 className="text-blue-700  text-2xl pb-[4rem] sm:text-3xl py-6 font-bold">
        Explore Our Top Courses
      </h2>

      <div className="flex flex-col items-center justify-center flex-wrap pb-6 gap-2 sm:gap-[2rem]">
        <div>
          <div className="text-start p-4 px-[6rem]">
            <h3 className="sm:text-[1rem] text-[0.9rem]  font-semibold mb-4 text-[#1E90FF]">
              UG Programs
              <div className="w-[3rem] h-[0.3rem] rounded-lg  bg-[#1E90FF]"></div>
            </h3>
          </div>
          <div className="flex items-center justify-center flex-wrap pb-6 gap-2 sm:gap-[2rem]">
            {ugCourses.map((course, index) => (
              <div
                data-aos="zoom-in-up"
                data-aos-offset="180"
                data-aos-duration="900"
                key={index}
                className="bg-[#EEEEFF]  mobile:w-[200px] p-4 rounded-lg text-center px-10 cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] items-center flex flex-col justify-center 
                hover:shadow-[0_10px_20px_rgba(_0,_80,240,_1)] hover:scale-110 duration-500
                "
              >
                <img
                  src={course.logoUrl}
                  alt={course.name}
                  className="w-[50px] sm:w-[6rem] sm:h-[6rem]  h-[50px]   "
                />
                <h2 className=" cursor-pointer text-xs mt-4 sm:text-[14px] font-semibold text-gray-600 hover:text-blue-600 duration-300">
                  {course.name}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="text-start p-4 px-[6rem]">
            <h3 className="sm:text-[1rem] text-[0.9rem]  font-semibold mb-4 text-[#1E90FF]">
              PG Programs
              <div className="w-[3rem] h-[0.3rem] rounded-lg  bg-[#1E90FF]"></div>
            </h3>
          </div>
          <div className="flex items-center justify-center flex-wrap pb-6 gap-2 sm:gap-[2rem]">
            {pgCourses.map((course, index) => (
              <div
                data-aos="zoom-in-up"
                data-aos-offset="180"
                data-aos-duration="900"
                key={index}
                className="bg-[#EEEEFF]  mobile:w-[200px] p-4 rounded-lg text-center px-10 cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] items-center flex flex-col justify-center
                hover:shadow-[0_10px_20px_rgba(_0,_80,240,_1)] hover:scale-110 duration-500"
              >
                <img
                  src={course.logoUrl}
                  alt={course.name}
                  className="w-[50px] sm:w-[6rem] sm:h-[6rem]  h-[50px]   "
                />
                <h2 className=" cursor-pointer text-xs mt-4 sm:text-[14px] font-semibold text-gray-600 hover:text-blue-600 duration-300">
                  {course.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
