import React from "react";
import { Route, Routes } from "react-router-dom";
import CareersPreview from "../components/Careers/CareersPreview";
import SubCareers from "../components/SubCareers/SubCareers";

const Careers = () => {
  return (
    <Routes>
    <Route index path="/" element={<CareersPreview/>}/>
    <Route path=":sub_careers" element={<SubCareers />}/>
    </Routes>
  );
};

export default Careers;
