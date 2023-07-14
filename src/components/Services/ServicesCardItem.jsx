import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
export const CardItem = ({ image, heading }) => {
  const words = heading.split(" ");
  const transformedString = words.slice(0, 4).join("-").toLowerCase();
  return (
    <Link to={transformedString}>
      <div className="w-full shadow-xl flex flex-col p-10 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-white ">
        <img className="mx-auto w-[225px] " src={image} alt="Single" />
        <h4 className="text-md text-center py-4">{heading}</h4>
      </div>
    </Link>
  );
};

const ServicesCardItem = ({ cards, name }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount:0.7 }}
      className="mx-auto pt-[100px] px-10 flex flex-col items-center gap-5 "
    >
      <span className="text-[#ff5354] text-2xl font-light relative uppercase after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[25%] after:left-[25%] pt-2">
        {name}
      </span>
      <motion.div
        variants={{
          offscreen: {
            x: -75,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 0.7              
            },
          },
        }}
        className="grid sm:grid-cols-2  lg:flex justify-center gap-8"
      >
        {cards.map((card, index) => (
          <CardItem key={index} image={card.image} heading={card.heading} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesCardItem;
