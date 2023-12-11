// Eligibility.js
import React from "react";

const Eligibility = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#ebf5f0] sm:text-[16px] px-4 py-2 text-start border-solid border-indigo-600 border-[0.5px]"
        >
          <h2 className="text-sm sm:text-2xl font-semibold py-2 text-gray-800">
            {item.heading}
          </h2>
          <p className="text-sm text-gray-600">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Eligibility;
