import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../components/Button";
import Team, { TEAM_TYPE_CLASSES } from "../components/Team/Team";
import Footer from "../components/Footer";



const AboutUs = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/bg_whoarewe.jpg')] h-[100%] bg-center bg-cover">
        <div className="text-white h-[80%] pt-[200px] pb-[40px] px-[25px] mx-[25px] flex flex-col items-center text-center">
          <h1 className="text-[40px]">
            ElephantApps is a software company that develops Mobile, Web and
            Server applications considering user experience.
          </h1>
          <p className="text-lg mt-12 ">
            Our goal is to increase the market share of our customers by
            establishing a bridge between the end user and the companies and to
            ensure that the enterprise growth.
          </p>
          <div className="pt-12 grid sm:grid-cols-2 grid-cols-center gap-5">
            <Button name={"What do we do?"} className='sm:py-[15px] px-[30px]' buttonType={BUTTON_TYPE_CLASSES.base} />
            <Button name={"Projects"} className='sm:w-[80%] sm:py-[15px] px-[30px]' buttonType={BUTTON_TYPE_CLASSES.inverted} />
          </div>
        </div>
        <Team teamType={TEAM_TYPE_CLASSES.inverted}/>        

      </div>
      <Footer/>
      
    </div>
  );
};

export default AboutUs;
