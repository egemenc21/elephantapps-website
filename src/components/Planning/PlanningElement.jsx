import React from "react";
import {motion} from "framer-motion"

const PlanningElement = ({item}) => {
  const { heading, icon, text } = item;
  
  return (
    <motion.div  className="p-4" variants={{
      offscreen: {
        x: -300,
        opacity:0
      },
      onscreen: {
        x: 0,
        opacity:1,
        transition: {
          type: "spring",
          delay:0.5,
          duration: 1.5
        }
      }
    }}>
      <h4>{heading}</h4>
      <img src={icon} alt="sadfdsa" />
      <p className="text-gray-500">{text}</p>
    </motion.div>
  );
};

export default PlanningElement;
