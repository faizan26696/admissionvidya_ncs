import React, { useEffect } from "react";
import Button from "../ReusableComponent/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="relative pt-12">
        <div>
          <h1 className="text-blue-700 text-2xl pb-4 sm:text-3xl font-extrabold">
            About Us
          </h1>
        </div>
        <div className="pt-2 lg:pt-8 bg-white z-[-5] text-left text-base font-inter">
          <div className="p-2 flex flex-wrap md:flex-nowrap justify-between items-center gap-8">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="900"
              className="text-start leading-loose px-4 md:px-12 lg:w-1/2"
            >
              <h5 className="text-[1rem] sm:text-[1.5rem] text-blue-500 font-bold pb-4">
                WHO WE ARE
              </h5>
              <h1 className="text-[1rem] text-gray-600 sm:text-xl font-semibold pt-2">
                Knowledge will bring you the opportunity to make a difference.
              </h1>
              <p className="text-gray-500 text-[0.8rem] sm:text-[14px] pb-4">
                At <b className="text-[#00009c]">Admissionvidhiya</b>, our
                mission is rooted in the firm belief that every student is
                entitled to a premier education and the opportunity to pursue
                their aspirations. We are dedicated to providing comprehensive
                support, guiding students through every step of their
                educational journey. From personalized admission counseling to
                aiding in college selections, offering assistance with
                educational loans, and providing valuable career counseling, we
                are committed to empowering students in making informed
                decisions and realizing their professional dreams.
              </p>
              <Button
                className="bg-blue-600 text-[0.8rem] text-white rounded-lg font-semibold px-4 cursor-pointer p-2 hover:bg-[#00009c] duration-200"
                text="DISCOVER MORE"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="180"
              data-aos-duration="900"
              className="w-full md:w-1/2 m-4 md:m-0"
            >
              <img
                className="w-full sm:w-[35rem] h-auto "
                src="/images/aboutus.gif"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
