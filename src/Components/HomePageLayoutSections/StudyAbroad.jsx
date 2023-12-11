import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StudyAbroad = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const countries = [
    {
      name: "USA",
      icon: "https://cdn-icons-png.flaticon.com/512/6407/6407936.png",
      info: [
        "The United States is a global leader in technology and innovation.",
        "Home to renowned universities like MIT, Stanford, and Harvard.",
        "Offers a diverse range of programs and research opportunities.",
      ],
    },
    {
      name: "Canada",
      icon: "https://png.pngtree.com/png-vector/20190727/ourlarge/pngtree-building-canada-city-famous-city-toronto-flat-color-icon-png-image_1616868.jpg",
      info: [
        "Canada is known for its high-quality education system.",
        "Strong emphasis on research and innovation.",
        "Top universities include University of Toronto and University of British Columbia.",
      ],
    },
    {
      name: "United Kingdom",
      icon: "https://png.pngitem.com/pimgs/s/238-2381180_transparent-city-vector-png-england-vector-png-png.png",
      info: [
        "The UK boasts a rich academic history and cultural diversity.",
        "Oxford and Cambridge are among the world's oldest and prestigious universities.",
        "Leading in technology and research advancements.",
      ],
    },
    {
      name: "Germany",
      icon: "https://media.istockphoto.com/id/542974214/vector/concept-of-travel-or-studying-german.jpg?s=612x612&w=0&k=20&c=CGEYQfyKxRjGeiS9scmp7pF9KFiDJUIMhHGHUiDUKnE=",
      info: [
        "Germany is recognized for its engineering and technical education.",
        "Home to TU Munich and RWTH Aachen University.",
        "Known for a strong focus on research and development.",
      ],
    },
  ];

  return (
    <div className="bg-white py-[4rem]">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="900"
        className="text-center mb-8"
      >
        <h1 className="font-bold text-2xl text-blue-700  pb-2 sm:text-3xl">
          Study Abroad
        </h1>
        <h5 className="text-sm sm:text-[1rem] text-gray-500 py-6">
          Discover top universities, courses, and get expert guidance on
          application strategy.
        </h5>
      </div>

      <div className="flex flex-wrap justify-center">
        {countries.map((country, index) => (
          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-duration="900"
            key={index}
            className="m-4 p-4 bg-white rounded-lg   mobile:w-60 text-center cursor-pointer
            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
           duration-500
           hover:shadow-md hover:shadow-blue-500"
          >
            <img
              src={country.icon}
              alt={country.name}
              className="w-30 h-20 object-cover mb-2 mx-auto"
            />
            <p className="text-lg font-semibold text-gray-700">
              {country.name}
            </p>
            <div className="text-sm text-gray-500 mt-2">
              {country.info.map((info, i) => (
                <p key={i} className="mb-2">
                  {info}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyAbroad;
