import React from "react";
import { SmallHeading } from "../../routers/Home";
import DevCode from "../../assets/dev_code.jpg"
import DevDesign from "../../assets/dev_design.jpg";
import DevLaunch from "../../assets/dev_launch.jpg";
import DevTest from "../../assets/dev_test.jpg";

import ApplicationDevElement from "./ApplicationDevElement";
// const developmentImages = [DevCode, DevDesign, DevLaunch, DevTest];
const developmentGrid = [
  {
    id: 1,
    image: DevDesign,
    heading: "Virtual Design",
    text: `We are continuously producing new ideas and new technologies with
our team providing analysis, design, software and consultancy
services.`,
  },
  {
    id: 2,
    image: DevCode,
    heading: "Coding",
    text: ` We follow the latest technologies and we constantly improve
    ourselves for better coding`,
  },
  {
    id: 3,
    image: DevTest,
    heading: "Test and Acceptance",
    text: ` We use a variety of tools to test applications, and we support you
    during your admission process.`,
  },
  {
    id: 4,
    image: DevLaunch,
    heading: "Publishing",
    text: ` We publish your applications either on your own accounts or on
    ElephantApps accounts.`,
  },
];

const ApplicationDev = () => {
  return (
    <div className="bg-[#FAFAFA] py-8 px-[25px]">
      <SmallHeading
        className="after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[50%] pt-2"
        name={"Application Development Stages"}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-[80px]">
        {developmentGrid.map((grid) => (
          <ApplicationDevElement key={grid.id} grid={grid} />
        ))}
      </div>
    </div>
  );
};

export default ApplicationDev;
