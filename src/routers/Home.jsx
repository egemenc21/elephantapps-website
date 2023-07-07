import React from "react";
import { Outlet } from "react-router-dom";
import ElephantAppsIpad from "../assets/bg_elephantappsipad-949684c397b635738cc53cb583791e8f.png";
import Clients from "../components/Clients";
import Planning from "../components/Planning/Planning";
import SmallHeading from "../components/SmallHeading";
import ApplicationDev from "../components/ApplicationDevelopment/ApplicationDev";
import Maintenance from "../components/Maintenance";
import Team from "../components/Team/Team";
import StartHere from "../components/StartHere";
import FooterData from "../components/FooterData";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className=" mx-[25px] pt-[120px] ">
        <SmallHeading name={"HOWDY."}/>
        <div className="grid lg:grid-cols-2 mt-2 ">
          <div className="flex flex-col items-center justify-center gap-5 p-4">
            <h3 className="text-4xl leading-normal">
              We develop web and mobile applications with the latest
              technologies considering user experience.
            </h3>
            <p className="text-gray-500">
              We are continuously producing new ideas and new technologies with
              our team providing analysis, design, software and consultancy
              services.
            </p>
          </div>
          <img
            className="max-w-[400px] mx-auto "
            src={ElephantAppsIpad}
            alt="elephantapps"
          />
        </div>
      </div>
      <Clients />
      <Planning />
      <ApplicationDev />
      <Maintenance />
      <Team/>
      <StartHere/>
      <FooterData/>
      <Footer/>
      <Outlet />
    </>
  );
};

export default Home;
