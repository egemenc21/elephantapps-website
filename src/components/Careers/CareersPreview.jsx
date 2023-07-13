import React from "react";
import CareersCard from "./CareersCard";
import { FooterDataElements } from "../FooterData";
import Footer from "../Footer";
import { careersCardItems } from "../../data/careers/careersCardItems.js";
import { motion } from "framer-motion";
const CareersPreview = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true,amount:0.55 }}
      className="pt-[150px] bg-[#FAFAFA] px-6"
    >
      <motion.div className="flex flex-col justify-center items-center gap-5">
        <motion.h1
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
                ease: "ease",
              },
            },
          }}
          className="text-4xl font-light text-center "
        >
          Join The Team
        </motion.h1>
        <motion.span
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
                ease: "ease",
                delay: 0.2,
              },
            },
          }}
          className="text-xl font-light text-center p-4 text-gray-500 relative after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[44%] after:left-[44%] "
        >
          We will be happy to see you among us.
        </motion.span>
      </motion.div>
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
              delay: 0.3,
              duration: 1,
              ease: "ease",
            },
          },
        }}
      >
        <p className="text-gray-500 text-md p-4">
          Would you like to join the experienced team of ElephantApps and
          contribute to big and exciting projects?
        </p>
        <p className="text-gray-500 text-md p-4">
          Do not miss this opportunity to develop mobile applications used by
          thousands and even millions of people with us. className
        </p>
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
                delay: 0.3,
                duration: 1,
                ease: "ease",
              },
            },
          }}
        >
          {careersCardItems.map((cardItem) => (
            <CareersCard key={cardItem.id} cardItem={cardItem} />
          ))}
        </motion.div>
      </motion.div>

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
              delay: 0.5,
              duration: 1,
              ease: "ease",
            },
          },
        }}
      >
        <p className="text-gray-500 text-md p-4">
          ElephantApps is proud to be an equal opportunity workplace. All
          qualified applicants will receive consideration for employment without
          regard to race, color, religion, gender, gender identity or
          expression, sexual orientation, national origin, genetics, disability,
          age, or veteran status. We strive to move well beyond traditional
          equal opportunity and work to create an environment that allows
          everyone to thrive.
        </p>
        <p className="text-gray-500 text-md p-4 mb-8">
          * We are currently working remotely within pandemic season. Only one
          day in a week office work might be necessary.
        </p>
      </motion.div>
      <FooterDataElements />
      <Footer />
    </motion.div>
  );
};

export default CareersPreview;
