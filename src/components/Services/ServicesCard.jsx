import React from "react";
import { servicesCardItems } from "../../data/services/servicesCardInfo";
import Elephant from "../../assets/elephantgeometric.svg";
import ServicesCardItem from "./ServicesCardItem";
import { motion } from "framer-motion";

const ServicesCard = () => {
  return (
    <div className="flex flex-col items-center bg-[#fafafa]">
      {servicesCardItems.map((cardItem) => (
        <ServicesCardItem
          key={cardItem.id}
          cards={cardItem.cards}
          name={cardItem.name}
        />
      ))}
      <motion.img
        variants={{
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
              delay: 3,
            },
          },
        }}
        src={Elephant}
        className="w-[250px] ease-in-out duration-700"
        alt="Elephant"
      />
    </div>
  );
};

export default ServicesCard;
