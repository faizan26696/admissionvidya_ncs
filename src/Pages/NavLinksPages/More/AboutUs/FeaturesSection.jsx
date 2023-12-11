import React from "react";

const featuresData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/11262/11262369.png",
    title: "Most Experienced Team",
    description:
      "Team BrainEdge education is a bunch of highly focused, energetic set of people.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/11213/11213446.png",
    title: "Best Test Preparation",
    description: "Know where you stand and what next to do to succeed.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/594/594096.png",
    title: "Admission Process Guidance",
    description:
      "Professional advice for higher education abroad and selecting the top institutions worldwide.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/6130/6130616.png",
    title: "Best Track Record",
    description: "Yet another year! Yet another jewel in our crown!",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/9043/9043010.png",
    title: "Free Mock Exams",
    description:
      "Get Topic-Wise Tests, Section-Wise, and mock tests for your preparation.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/6613/6613180.png",
    title: "Genuine Visa Advice",
    description:
      "Visa process by helping you create the necessary documentation.",
  },
];

const FeaturesSection = () => {
  return (
    <div
      className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10"
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
      }}
    >
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer ${
              index === featuresData.length - 1 ? "md:lg:xl:border-b-0" : ""
            }`}
          >
            <img src={feature.icon} className="h-20 w-20" alt="img" />
            <p className="text-xl font-medium text-slate-700 mt-3">
              {feature.title}
            </p>
            <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="w-full justify-center bg-indigo-600 shadow-xl flex flex-wrap shadow-indigo-200 py-10 px-20 sm:justify-between items-center">
        <p className="text-white">
          <span className="text-xl sm:text-4xl font-medium">
            Still Confused?
          </span>{" "}
          <br />
          <span className="sm:text-lg text-sm py-4 text-gray-400">
            Book For Free Career Consultation Today!
          </span>
        </p>
        <button className="px-3 py-3 text-[12px] mt-[1rem] sm:mt-0 sm:text-sm font-semibold rounded-lg text-white shadow-xl hover:bg-[#00009c] duration-300 bg-blue-500">
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;
