import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCareersJob from "./SubCareersJob";
import { FooterDataElements } from "../FooterData";
import Footer from "../Footer";
const subCareersMap = require("../../data/subcareers/subCareersInfo.json");


const SubCareers = () => {
  const { sub_careers } = useParams();
  const [careers, setCareers] = useState(subCareersMap[sub_careers]);
  useEffect(() => {
    setCareers(subCareersMap[sub_careers]);
  }, [sub_careers]);

  return (
    <div className="pt-[150px] bg-[#FAFAFA] px-6">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-light text-center ">Join The Team</h1>
        <span className="text-xl font-light text-center p-4 text-gray-500 relative after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[44%] after:left-[44%] ">
          {careers.heading}
        </span>
      </div>
      <div className="flex flex-col gap-5">
       <SubCareersJob careers={careers}/>
       <FooterDataElements/>
       <Footer/>
      </div>
    </div>
  );
};

export default SubCareers;
