import React from "react";

const JeeAdvancedEligibility = () => {
  return (
    <div className="h-full my-[5rem] bg-[#ebf5f0] sm:text-[16px] px-4 py-2 text-start border-solid border-indigo-600 border-[0.5px]">
      <h2 className="text-sm sm:text-2xl font-semibold py-2 text-gray-800">
        JEE Advanced Eligibility Criteria 2024
      </h2>
      <p className="text-sm text-gray-600">
        Before submitting the JEE Advanced 2024 application form, candidates
        must confirm that they meet the requirements for JEE Advanced
        eligibility criteria 2024.
      </p>

      <table className="border-collapse w-full mt-4 h-full">
        <thead>
          <tr>
            <th className="border border-indigo-600 py-2 px-4">Particulars</th>
            <th className="border border-indigo-600 py-2 px-4">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-indigo-600 py-2 px-4">Nationality</td>
            <td className="border border-indigo-600 py-2 px-4">
              Candidates must confirm that they meet the following eligibility
              requirements before submitting the JEE Advanced 2024 application
              form.
            </td>
          </tr>
          <tr>
            <td className="border border-indigo-600 py-2 px-4">Age Limit</td>
            <td className="border border-indigo-600 py-2 px-4">
              A candidate must have been born on or after October 1, 1998, in
              the General and OBC categories. Candidates who are SC/ST or PwD
              are eligible for a five-year age reduction; they must have been
              born on or after October 1, 1993.
            </td>
          </tr>
          <tr>
            <td className="border border-indigo-600 py-2 px-4">
              Educational Qualification
            </td>
            <td className="border border-indigo-600 py-2 px-4">
              Candidates must have first-time success in the class 12th exam or
              its equivalent in 2023 or 2024.
            </td>
          </tr>
          <tr>
            <td className="border border-indigo-600 py-2 px-4">Subject</td>
            <td className="border border-indigo-600 py-2 px-4">
              Candidates must take Physics, Chemistry, and Mathematics (PCM) as
              their three required classes in high school.
            </td>
          </tr>
          <tr>
            <td className="border border-indigo-600 py-2 px-4">
              Minimum Percentage
            </td>
            <td className="border border-indigo-600 py-2 px-4">
              To qualify for the JEE Advanced test, the class 12th/equivalent
              exam's 75% requirement has been loosened.
            </td>
          </tr>
          <tr>
            <td className="border border-indigo-600 py-2 px-4">
              Number of Attempts
            </td>
            <td className="border border-indigo-600 py-2 px-4">
              Only two attempts at the JEE Advanced exam may be made by a
              candidate in two consecutive years.
            </td>
          </tr>
          <tr>
            <td className="border border-indigo-600 py-2 px-4">
              JEE Main Performance
            </td>
            <td className="border border-indigo-600 py-2 px-4">
              To be eligible for JEE Advanced 2024, aspirants must rank among
              the top 2.5 lakh JEE Main qualifying candidates.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JeeAdvancedEligibility;
