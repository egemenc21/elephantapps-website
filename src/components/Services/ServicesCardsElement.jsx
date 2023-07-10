import React from "react";
import { Link } from "react-router-dom";

export const CardElement = ({ image, text }) => {
  const words = text.split(' ');
const transformedString = words.slice(0, 4).join('-').toLowerCase();
  return (
    <Link
      to={
        transformedString
      }
    >
      <div className="w-full shadow-xl flex flex-col p-10 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-white ">
        <img className="mx-auto w-[225px] " src={image} alt="Single" />
        <h4 className="text-md text-center py-4">{text}</h4>
      </div>
    </Link>
  );
};

const ServicesCardsElement = ({ cards, name }) => {
  return (
    <div className="mx-auto pt-[100px] px-10  flex flex-col items-center gap-5 ">
      <span className="text-[#ff5354] text-2xl font-light relative uppercase after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[25%] after:left-[25%] pt-2">
        {name}
      </span>
      <div className="flex justify-center gap-8">
        {cards.map((card, index) => (
          <CardElement key={index} image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCardsElement;
