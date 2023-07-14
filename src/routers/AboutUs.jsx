import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../components/Button";
import Team, { TEAM_TYPE_CLASSES } from "../components/Team/Team";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className="bg-[url('/src/assets/bg_whoarewe.jpg')] h-[100%] bg-center bg-cover">
        <div className="text-white h-[80%] pt-[200px] pb-[40px] px-[25px] mx-[25px] flex flex-col items-center text-center">
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
                  ease: "ease",
                },
              },
            }}
            className="text-[40px]"
          >
            ElephantApps is a software company that develops Mobile, Web and
            Server applications considering user experience.
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
                  ease: "ease",
                  delay:0.2
                },
              },
            }}
            className="text-lg mt-12 "
          >
            Our goal is to increase the market share of our customers by
            establishing a bridge between the end user and the companies and to
            ensure that the enterprise growth.
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
                  ease: "ease",
                  delay:0.4
                },
              },
            }}
            className="pt-12 grid sm:grid-cols-2 grid-cols-center gap-5"
          >
            <Button
              name={"What do we do?"}
              className="sm:py-[15px] sm:px-[30px]"
              buttonType={BUTTON_TYPE_CLASSES.base}
            />
            <Button
              name={"Projects"}
              className="sm:w-[80%] sm:py-[15px] sm:px-[30px]"
              buttonType={BUTTON_TYPE_CLASSES.inverted}
            />
          </motion.div>
        </div>
        <Team teamType={TEAM_TYPE_CLASSES.inverted} />
      </div>
      <Footer />
    </motion.div>
  );
};

export default AboutUs;
