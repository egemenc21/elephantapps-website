import React from "react";
import {motion} from "framer-motion"

const PlanningElement = ({ item, variants}) => {
  const { heading, icon, text } = item;
  return (
    <motion.div  className="p-4" variants={variants}>
      <h4>{heading}</h4>
      <span>{icon}</span>
      <p className="text-gray-500">{text}</p>
    </motion.div>
  );
};

export default PlanningElement;
