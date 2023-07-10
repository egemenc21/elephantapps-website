import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../components/Button";
import ServicesElement from "../components/Services/ServicesCardsElement";
import Elephant from '../assets/elephantgeometric.svg'
import Footer from "../components/Footer";
import {servicesCardItems} from '../components/Services/ServicesCardInfo.js'

const Services = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/whatwedo.jpg')] h-[100vh] bg-fixed bg-center">
        <div className="text-white h-[80%] pt-[300px] px-[25px] mx-[25px] flex flex-col items-center text-center">
          <h1 className="text-[40px]">
            We develop web and mobile applications with the latest technologies
            considering user experience.
          </h1>
          <p className="text-lg mt-12 ">
            We are continuously producing new ideas and new technologies with
            our team providing analysis, design, software and consultancy
            services.
          </p>
          <div className="pt-12 grid sm:grid-cols-2 grid-cols-center gap-5">
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
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center bg-[#fafafa]">
      {servicesCardItems.map((cardItem) => (
        <ServicesElement key={cardItem.id} cards={cardItem.cards} name={cardItem.name} />
      ))} 
      <img src={Elephant} className="w-[250px]" alt="Elephant" />

      </div>
      <Footer/>
    </div>
  );
};

export default Services;
