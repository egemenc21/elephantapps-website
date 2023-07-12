import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import { FooterDataElements } from "../FooterData";
import SubServicesElement from "./SubServicesElement";
import { useParams } from "react-router-dom";

const subServicesMap = require('../../data/subservices/subservicesinfo.json')

const SubServices = () => {
  const { sub_services } = useParams();
  
  const [products, setProducts] = useState(subServicesMap[sub_services]);
  console.log(products.heading);

  useEffect(() => {
    setProducts(subServicesMap[sub_services]);
  }, [sub_services]);
  return (
    <>
      <div className="pt-[100px] bg-[#FAFAFA]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl text-center">{products.heading} </h2>
          <span className="text-[#ff5354] text-center text-lg p-8 font-light relative uppercase after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[25%] after:left-[25%] pt-2">
            {products.subHeading}
          </span>
          <p className="px-4 pb-8">{products.quote}</p>        
          
          
        </div>
        <div className="flex flex-col items-start ">
            {products.apps.map((app) => (
            <SubServicesElement app={app}/>
          ))}
          </div>
        <FooterDataElements />
        <Footer />
      </div>
    </>
  );
};

export default SubServices;
