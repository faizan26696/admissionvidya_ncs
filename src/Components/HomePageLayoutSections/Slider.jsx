// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1630738694630-a2c8f3132ebe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  const backgroundImageStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <>
      <div className="relative w-full max-w-[1400px] mx-auto ">
        <div
          style={backgroundImageStyle}
          className="w-full h-[42vh]   sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] duration-500 relative"
        >
          <div className="top-[90%] absolute left-0 right-0 sm:top-auto sm:bottom-4 flex items-center justify-center">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  currentIndex === slideIndex
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        <div className="z-5 absolute top-2/3 sm:top-1/2 transform -translate-y-3/4 sm:-translate-y-1/2 left-4 sm:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>

        <div className=" z-5 absolute top-2/3 sm:top-1/2 sm:-translate-y-1/2 transform -translate-y-3/4 right-4 sm:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
      </div>
    </>
  );
};

export default Slider;
