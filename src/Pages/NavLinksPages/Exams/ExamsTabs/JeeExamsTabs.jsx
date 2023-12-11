import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import UniversitySection from "../../../../Components/HomePageLayoutSections/UniversitySection";
import JeeExams from "../JeeMainsExams/JeeMainsEligibility";

const GateExamsTabs = () => {
  const data = [
    {
      label: "Eligibility",
      value: "Eligibility",
      desc: (
        <Card>
          <CardBody>
            {/* Content for Eligibility tab */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <UniversitySection />
          </CardBody>
        </Card>
      ),
    },
    {
      label: "Syllabus",
      value: "Syllabus",
      desc: (
        <Card>
          <CardBody>
            {/* Content for Syllabus tab */}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <JeeExams />
          </CardBody>
        </Card>
      ),
    },
    {
      label: "Exam Pattern",
      value: "ExamPattern",
      desc: (
        <Card>
          <CardBody>
            {/* Content for Exam Pattern tab */}
            Your content for Exam Pattern here.
          </CardBody>
        </Card>
      ),
    },
    {
      label: "How to Prepare",
      value: "HowToPrepare",
      desc: (
        <Card>
          <CardBody>
            {/* Content for How to Prepare tab */}
            Your content for How to Prepare here.
          </CardBody>
        </Card>
      ),
    },
    {
      label: "Previous Year Question Paper",
      value: "PreviousYearQuestionPaper",
      desc: (
        <Card>
          <CardBody>
            {/* Content for Previous Year Question Paper tab */}
            Your content for Previous Year Question Paper here.
          </CardBody>
        </Card>
      ),
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-full justify-center item-center text-center flex-wrap">
        <Tabs
          aria-label="Options"
          variant="bordered"
          color="primary"
          className="w-full mt-4 flex flex-wrap justify-center items-center flex-col font-semibold text-blue-gray-800"
          fullWidth={true}
          size="md"
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="text-[12px] font-bold p-2  text-blue-800"
            >
              {label}
            </Tab>
          ))}
        </Tabs>
        {data.map(({ value, desc }) => (
          <Tab key={value} value={value} className="z-[0]   ">
            {desc}
          </Tab>
        ))}
      </div>
    </div>
  );
};

export default GateExamsTabs;
