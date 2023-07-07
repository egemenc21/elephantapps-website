import React from "react";
import SmallHeading from "../SmallHeading";
import PlanningElement from "./PlanningElement";
const planningItems = [
  {
    id: 1,
    heading: "Identifying Needs",
    icon: "icon",
    text: `We accurately identify your needs with accurate analyzes and
technological solutions`,
  },
  {
    id: 2,
    heading: "System Design",
    icon: "icon",
    text: `We design your applications according to user experience and modern design trends.`,
  },
  {
    id: 3,
    heading: "Strategic System Analysis",
    icon: "icon",
    text: `We research for competitors and applications, and we plan the most suitable system.`,
  },
  {
    id: 4,
    heading: "Project Plan and Cost Analysis",
    icon: "icon",
    text: `We perform our project planning in accordance with our customers' time and budget.`,
  },
];

const Planning = () => {
  return (
    <div className="py-8 px-[25px] bg-[#FAFAFA]">
      <h2 className="py-4 uppercase font-bold">
        ElephantApps The App Life Cycle
      </h2>
      <SmallHeading
        name={"PLANNING."}
        className="border-t-2 py-4 border-t-[#ff5354]"
      />

      <div className="grid lg:grid-cols-2 mt-2">
        <div className="p-16 bg-white">
          <SmallHeading className={"py-2 my-2"} name={"What Do We Do?"} />
          <h3 className="text-4xl py-2 my-2">
            Developing Enterprise Applications.
          </h3>
          <p2 className="my-2">
            We produce new ideas and new technologies with our experienced and
            self-improving team. We do life cycle analysis of applications, and
            we plan the development and publishing processes perfectly.
          </p2>
        </div>
        <div className="grid sm:grid-cols-2">
          {planningItems.map((item) => (
            <PlanningElement key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planning;
