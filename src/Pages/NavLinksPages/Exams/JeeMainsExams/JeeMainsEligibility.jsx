import React from "react";
import { Link } from "react-router-dom";
import JeeAdvancedEligibility from "./JeeAdvancedEligibility";

const JeeExams = () => {
  return (
    <div className="py-[2rem] h-full">
      <div className="bg-[#ebf5f0] z-[10] sm:text-[16px] px-4 py-2 text-start border-solid border-indigo-600 border-[0.5px]">
        <h2 className="text-sm sm:text-2xl font-semibold py-2 text-gray-800">
          JEE Main Eligibility 2024
        </h2>
        <p className="text-sm text-gray-600">
          <span style={{ fontWeight: "bold", color: "black" }}>
            The National Testing Agency (NTA) will close the JEE Main
            application form 2024 for Session 1 on November 30, 2023.
          </span>{" "}
          Candidates who are yet to register and fill out the JEE Main 2024
          Application Form must do so before the deadline. As per previous
          year's trends,
          <span style={{ fontWeight: "bold", color: "black" }}>
            NTA is likely to begin JEE Main Application Correction 2024 in the
            First Week of December 2023. Candidates can expect the JEE Main
            Correction Window 2024 to be open for two days.
          </span>{" "}
          The JEE Main exam 2024 will be conducted in two sessions - January and
          April 2024. The
          <span style={{ fontWeight: "bold", color: "black" }}>
            JEE Main exam dates 2024
          </span>{" "}
          for the January session are
          <span style={{ fontWeight: "bold", color: "black" }}>
            January 24, 25, 27, 28, 29, 30, 31 & February 1, 2024,
          </span>{" "}
          and for the April session is between
          <span style={{ fontWeight: "bold", color: "black" }}>
            April 1 to 15, 2024.
          </span>{" "}
          Candidates aspiring to sit for the national-level exam can go through
          this page to learn more about the JEE Main 2024 Application Form,
          eligibility criteria,
          <span style={{ fontWeight: "bold", color: "black" }}>
            JEE Main 2024 Syllabus,
          </span>{" "}
          and exam pattern. Aspirants must also check out the best books and
          sample papers for JEE Main 2024 to ace their preparation and score
          well in the upcoming test.
        </p>
        <Link
          to="https://static.collegedekho.com/media/uploads/2023/11/02/information-bulletin-for-jee-main-2024.pdf"
          className="text-blue-500 font-semibold text-sm cursor-pointer py-2 z-[10]"
        >
          Latest - Check JEE Main Official Notification 2024 here!
        </Link>
      </div>
      <div className="bg-[#ebf5f0] my-6 z-[10] sm:text-[16px] px-4 py-2 text-start border-solid border-indigo-600 border-[0.5px] mb-[2rem]">
        <h3 className="text-sm  sm:text-xl font-semibold py-2 text-gray-800">
          Upcoming Engineering Exams :
        </h3>
        <div className="flex justify-start items-center gap-6 py-2">
          <div className="bg-blue-900 p-4 rounded-sm cursor-pointer">
            <h5 className="text-[14px] font-semibold text-white">NATA</h5>
            <p className="text-sm text-gray-500">Exam date: 20 Jan, 2024</p>
          </div>
          <div className="bg-blue-900 p-4 rounded-sm cursor-pointer">
            <h5 className="text-[14px] font-semibold text-white">BITSAT</h5>
            <p className="text-sm text-gray-500">Exam date: 20 Apr, 2024</p>
          </div>
          <div className="bg-blue-900 p-4 rounded-sm cursor-pointer">
            <h5 className="text-[12px] font-semibold text-white">BITSAT</h5>
            <p className="text-[0.8rem] text-gray-500">
              Exam date: 06 May, 2024
            </p>
          </div>
        </div>
        <div className="h-full py-6">
          <JeeAdvancedEligibility />
        </div>
      </div>
    </div>
  );
};

export default JeeExams;
