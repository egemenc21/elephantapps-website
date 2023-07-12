import React from "react";
import { Route, Routes } from "react-router-dom";
import SubServices from "../components/SubServices/SubServices";
import ServicesPreview from "../components/Services/ServicesPreview";

const Services = () => {
  return (
    <Routes>
    <Route index path="/" element={<ServicesPreview/>}/>
    <Route path=":sub_services" element={<SubServices />}/>
    </Routes>
  );
};

export default Services;
