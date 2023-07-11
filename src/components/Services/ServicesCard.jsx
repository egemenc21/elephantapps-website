import React from 'react'
import { servicesCardItems } from './ServicesCardInfo'
import Elephant from "../../assets/elephantgeometric.svg";
import ServicesCardItem from './ServicesCardItem';


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
        <img
          src={Elephant}
          className="w-[250px] ease-in-out duration-700"
          alt="Elephant"
        />
      </div>
  )
}

export default ServicesCard