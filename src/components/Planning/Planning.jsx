import React from "react";
import { SmallHeading } from "../../routers/Home";
import PlanningElement from "./PlanningElement";
import { motion } from "framer-motion";
import IconAnalysis from '../../assets/originalAssets/general/icon_analysis.inline.svg'
import IconStrategy from '../../assets/originalAssets/general/icon_strategy.inline.svg'
import IconTime from '../../assets/originalAssets/general/icon_time.inline.svg'
import IconWireFrame from '../../assets/originalAssets/general/icon_wireframe.inline.svg'
const planningItems = [
  {
    id: 1,
    heading: "Identifying Needs",
    icon: IconAnalysis,
    text: `We accurately identify your needs with accurate analyzes and
technological solutions`,
  },
  {
    id: 2,
    heading: "System Design",
    icon: IconStrategy,
    text: `We design your applications according to user experience and modern design trends.`,
  },
  {
    id: 3,
    heading: "Strategic System Analysis",
    icon: IconTime,
    text: `We research for competitors and applications, and we plan the most suitable system.`,
  },
  {
    id: 4,
    heading: "Project Plan and Cost Analysis",
    icon: IconWireFrame,
    text: `We perform our project planning in accordance with our customers' time and budget.`,
  },
];

const Variants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
};

const Planning = () => {
  return (
    <div className="py-8 px-[25px] bg-[#FAFAFA]">
      <h2 className="py-4 uppercase font-bold">
        ElephantApps The App Life Cycle
      </h2>
      <SmallHeading
        name={"PLANNING."}
        className="after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[50%] pt-2"
      />

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true  , amount:0.8}}
        className="grid lg:grid-cols-2 mt-2"
      >
        <motion.div variants={Variants} className="p-16 bg-white">
          <SmallHeading className={"py-2 my-2"} name={"What Do We Do?"} />
          <h3 className="text-4xl text-center py-2 my-2">
            Developing Enterprise Applications.
          </h3>
          <p className="my-2">
            We produce new ideas and new technologies with our experienced and
            self-improving team. We do life cycle analysis of applications, and
            we plan the development and publishing processes perfectly.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2">
          {planningItems.map((item) => (
            <PlanningElement key={item.id} item={item}/>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Planning;
