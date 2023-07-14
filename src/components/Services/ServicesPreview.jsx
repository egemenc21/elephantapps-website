import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../Button";
import ServicesCard from "./ServicesCard";
import Footer from "../Footer";
import { motion } from "framer-motion";

const ServicesPreview = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className="bg-[url('/src/assets/whatwedo.jpg')] h-[100vh] bg-fixed bg-center">
        <div className="text-white h-[80%] pt-[300px] px-[25px] mx-[25px] flex flex-col items-center text-center">
          <motion.h1
            variants={{
              offscreen: {
                y: +25,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.7,
                  ease:"ease"
                },
              },
            }}
            className="text-[40px]"
          >
            We develop web and mobile applications with the latest technologies
            considering user experience.
          </motion.h1>
          <motion.p
            variants={{
              offscreen: {
                y: +25,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.7,
                  delay: 0.2,
                  ease:"ease"
                },
              },
            }}
            className="text-lg mt-12 "
          >
            We are continuously producing new ideas and new technologies with
            our team providing analysis, design, software and consultancy
            services.
          </motion.p>
          <motion.div
            variants={{
              offscreen: {
                y: +25,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.7,
                  delay: 0.4,
                  ease:"ease"
                },
              },
            }}
            className="pt-12 grid sm:grid-cols-2 grid-cols-center gap-5"
          >
            <Button
              name={"Our References"}
              className="sm:py-[15px] sm:px-[30px]"
              buttonType={BUTTON_TYPE_CLASSES.base}
            />
            <Button
              name={"Join our team"}
              className="sm:w-[150px] sm:py-[15px] sm:px-[20px]"
              buttonType={BUTTON_TYPE_CLASSES.inverted}
            />
          </motion.div>
        </div>
      </div>
      <ServicesCard />
      <Footer />
    </motion.div>
  );
};

export default ServicesPreview;
