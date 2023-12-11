import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const TrendingScroller = () => {
  const data = [
    { id: "1", text: "JEE Main Syllabus 2024" },
    { id: "2", text: "NEET Exam Date Change" },
    { id: "3", text: "CAT 2023 Registration Opens" },
    { id: "4", text: "MCA Entrance Exam Notification" },
    { id: "5", text: "Important Dates for BCA" },
    { id: "6", text: "New JEE Main Guidelines" },
    { id: "7", text: "NEET 2024 Syllabus" },
    { id: "8", text: "CAT 2023 Mock Test" },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const customButtonStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    color: "white",
  };

  const carouselRef = useRef(null);
  const carouselContainerStyles = {
    position: "relative",
    zIndex: "0", // Set the z-index of the container
  };

  return (
    <div className="relative bg-[#00009c] ">
      <div style={carouselContainerStyles}>
        <button
          style={{
            ...customButtonStyles,
            left: "0",
            zIndex: "1",
            padding: "1.5px",
            background: "white",
            borderRadius: "100%",
            color: "blue",
          }}
          onClick={() => carouselRef.current && carouselRef.current.previous()}
        >
          <MdChevronLeft />
        </button>

        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          arrows={false}
          autoPlay
          customTransition="transform 1.5s ease-in-out"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="inline-block overflow-hidden p-2 mr-[1rem] cursor-pointer ease-in-out duration-900"
            >
              <p className="font-medium text-[16px] pt-2 text-white">
                {item.text}
              </p>
            </div>
          ))}
        </Carousel>

        <button
          style={{
            ...customButtonStyles,
            right: "0",
            zIndex: "0",
            padding: "1.5px",
            background: "white",
            borderRadius: "100%",
            color: "blue",
          }}
          onClick={() => carouselRef.current && carouselRef.current.next()}
        >
          <MdChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TrendingScroller;
