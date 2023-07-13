import React from "react";
import { SmallHeading } from "../routers/Home";
import { FiMail, FiPhone } from "react-icons/fi";
import MailIcon from "../assets/mail-icon-elep.png";
import { motion } from "framer-motion";
const StartHere = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount:0.8}}
      className="px-[25px] py-4 text-gray-500"
    >
      <motion.div
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
              duration: 1,
            },
          },
        }}
        className="sm:flex justify-center items-center gap-5"
      >
        <div>
          <SmallHeading name={"start here"} />
          <p className="py-8">
            Tell us the project in your mind, lets develop your application
            together.
          </p>
          <div className="flex flex-col justify-center gap-5">
            <FiPhone size={30} />
            <span>+90 (216) 225-8364</span>
          </div>
          <div className="flex flex-col justify-between gap-5 py-4">
            <FiMail size={30} />
            <p>info@elephantapps.co</p>
          </div>
        </div>
        <img src={MailIcon} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default StartHere;
