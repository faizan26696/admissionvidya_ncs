// ReviewsCard.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SocialIcons from "../../../../Components/ReusableComponent/SocialIcons";

const ReviewsCard = () => {
  const data = [
    {
      name: `John Morgan`,
      img: `https://static.vecteezy.com/system/resources/previews/024/724/631/original/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: `https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU=`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: `https://img.etimg.com/thumb/width-1200,height-900,imgsize-1329968,resizemode-75,msid-100092027/nri/study/what-not-to-do-at-your-us-student-visa-interview.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: `https://img.freepik.com/premium-photo/beautiful-realistic-portrait-smiling-young-college-student-with-books-backpack-against-white-background_908985-7634.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Mia Williams`,
      img: `https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?s=612x612&w=0&k=20&c=mtC9fv2OKeoGR4eAxSgm3Laukw7EBYYbHVRrO5D88PY=`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  const settings = {
    dots: true,

    infinite: true,
    speed: 600,
    duration: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mt-8 mb-12">
        <h1 className="text-blue-500 font-bold text-xl sm:text-3xl">
          What People Say About Us
        </h1>
      </div>
      <div className="lg:w-full w-3/4 mx-auto">
        <div className="mt-4">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white p-4 rounded-lg mx-2 sm:mx-0 w-full sm:w-3/4 md:w-1/2 lg:w-[80%]"
              >
                <div className="h-[180px] bg-blue-800 flex justify-center items-center rounded-t-lg">
                  <img
                    src={d.img}
                    alt=""
                    className="h-[120px] w-[120px] rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4 bg-[#ebf6f7] rounded-b-lg">
                  <p className="sm:text-xl text-[16px] font-semibold">
                    {d.name}
                  </p>
                  <p className="text-center text-[14px] sm:text-sm text-slate-500">
                    {d.review}
                  </p>

                  <SocialIcons />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
