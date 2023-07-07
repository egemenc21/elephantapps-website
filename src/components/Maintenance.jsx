import React from "react";
import SmallHeading from "./SmallHeading";
import ElepMiniIcon from "../assets/elepstring.png";

const Maintenance = () => {
  return (
    <div className="py-8 px-[25px] bg-[#FAFAFA] 0">
      <SmallHeading
        className="border-t-2 py-4 border-t-[#ff5354]"
        name={"Maintenance and Support"}
      />
      <div className="lg:flex justify-center items-center">
        <p className="my-4 ">
          We update applications to make compatible with new technologies, and
          we make error checks and bug fixes.
        </p>
        <img className="max-w-[500px] mx-auto" src={ElepMiniIcon} alt="ElepMiniIcon" />
      </div>
    </div>
  );
};

export default Maintenance;
