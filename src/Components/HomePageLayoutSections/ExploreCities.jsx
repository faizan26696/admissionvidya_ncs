import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ExploreCities = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const citiesData = [
    {
      name: "Delhi",
      ct_url:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg",
    },
    {
      name: "Noida",
      ct_url:
        "https://assets-news.housing.com/news/wp-content/uploads/2022/06/25082545/6.jpg",
    },
    {
      name: "Ghaziabad",
      ct_url: "https://www.servicecentreindia.com/img/Ghaziabad.webp",
    },
    {
      name: "Gurgaon",
      ct_url:
        "https://www.mapsofindia.com/ci-moi-images/my-india/kingdom-of-dreams.jpg",
    },
    {
      name: "Mumbai",
      ct_url:
        "https://t3.ftcdn.net/jpg/03/59/69/88/360_F_359698855_QGDdtpe1mfmCOYcMRxNb0UYAiYXZmYC3.jpg",
    },
    {
      name: "Pune",
      ct_url:
        "https://t3.ftcdn.net/jpg/03/56/17/78/240_F_356177839_pXnlzejFAmevJ5PIVNPmM8hFW8MoR4i7.jpg",
    },
    {
      name: "Bangalore",
      ct_url:
        "https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=",
    },
    {
      name: "Jaipur",
      ct_url: "https://www.traveldailymedia.com/assets/2019/07/jaipur.jpg",
    },
    {
      name: "Hyderabad",
      ct_url:
        "https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=",
    },
    {
      name: "Chennai",
      ct_url:
        "https://media.istockphoto.com/id/469550423/photo/chennai-nightscape.jpg?s=612x612&w=0&k=20&c=ZcUQgu91G7Z31ru3UPVPWhwaPJYmLEHyln8iyXQgPX8=",
    },

    {
      name: "Kolkata",
      ct_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYhQ7POTD-mh3ygGPt_5QBh7WgJtAo_-ahSCq3bzjZX9pzWosaxpRc4_bgRWv3impxEI&usqp=CAU",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  const customButtonStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    padding: "10px",
    margin: "3px",
  };

  const carouselRef = useRef(null);

  return (
    <div className="text-center py-2  mb-[3rem]">
      <h1 className="sm:text-3xl text-2xl font-bold text-blue-700">
        Explore Cities
      </h1>
      <p className="text-sm sm:text-[1rem] text-gray-500 py-4 mb-[2rem]">
        {" "}
        Explore the cities and pursue your career based on your educational
        choices.
      </p>

      <div className="relative z-0 overflow-hidden">
        <button
          style={{
            ...customButtonStyles,
            left: "0",
            zIndex: "1",
          }}
          onClick={() => carouselRef.current && carouselRef.current.previous()}
        >
          <MdChevronLeft className="text-gray-400" />
        </button>

        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          arrows={false}
          autoPlay
          customTransition="transform 1.5s ease-in-out"
          containerClass="carousel-container"
        >
          {citiesData.map((city, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-2 mx-[2rem] cursor-pointer ease-in-out duration-900"
            >
              <div
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-duration="900"
                className="group relative w-[8.5rem] sm:w-[17rem] flex h-[10rem] sm:h-[20rem] items-end overflow-hidden rounded-lg p-4 shadow-lg"
              >
                <img
                  src={city.ct_url}
                  alt={city.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div
                  className="relative flex w-full flex-col rounded-lg p-2 sm:p-4 text-center"
                  style={{
                    backdropFilter: "blur(6px)",
                    background: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value for transparency
                  }}
                >
                  <span className="text-white font-semibold text-[0.8rem] sm:text-sm">
                    {city.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <button
          style={{
            ...customButtonStyles,
            right: "0",
          }}
          onClick={() => carouselRef.current && carouselRef.current.next()}
        >
          <MdChevronRight className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ExploreCities;
