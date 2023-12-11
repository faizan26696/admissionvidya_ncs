import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import JeeExams from "../JeeMainsExams/JeeMainsEligibility";

const GateExamsTabs = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-full justify-center item-center text-center flex-wrap">
        <Tabs
          aria-label="Options"
          variant="bordered"
          color="primary"
          className="w-full mt-4 flex flex-wrap justify-center items-center flex-col font-semibold text-blue-gray-800"
          fullWidth="true"
          size="md"
        >
          <Tab key="Eligibility" title="Eligibility">
            <Card>
              <CardBody>
                {/* Content for Eligibility tab */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="Syllabus" title="Syllabus">
            <Card>
              <CardBody>
                {/* Content for Syllabus tab */}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
                <JeeExams />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="ExamPattern" title="Exam Pattern">
            <Card>
              <CardBody>
                {/* Content for Exam Pattern tab */}
                Your content for Exam Pattern here.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="HowToPrepare" title="How to Prepare">
            <Card>
              <CardBody>
                {/* Content for How to Prepare tab */}
                Your content for How to Prepare here.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="PreviousYearQuestionPaper"
            title="Previous Year Question Paper"
          >
            <Card>
              <CardBody>
                {/* Content for Previous Year Question Paper tab */}
                Your content for Previous Year Question Paper here.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default GateExamsTabs;
