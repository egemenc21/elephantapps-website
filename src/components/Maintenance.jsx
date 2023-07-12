import React from "react";
import { SmallHeading } from "../routers/Home";
import ElepMiniIcon from "../assets/elepstring.png";
import { motion } from "framer-motion";

const Maintenance = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="py-8 px-[25px] bg-[#FAFAFA] "
    >
      <SmallHeading
        name={"Maintenance and Support"}
        className="after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[50%] pt-2"
      />

      <div className="lg:flex justify-center items-center">
        <motion.p
          variants={{
            offscreen: {
              y: 300,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",                
                duration: 0.7,
              },
            },
          }}
          className="my-4 text-gray-500 "
        >
          We update applications to make compatible with new technologies, and
          we make error checks and bug fixes.
        </motion.p>
        <motion.img
          variants={{
            offscreen: {
              y: 300,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.5,
                duration: 0.7,
              },
            },
          }}
          className="max-w-[500px] mx-auto"
          src={ElepMiniIcon}
          alt="ElepMiniIcon"
        />
      </div>
    </motion.div>
  );
};

export default Maintenance;
