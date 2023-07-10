import React from "react";
import { SmallHeading } from "../routers/Home";
import ElepMiniIcon from "../assets/elepstring.png";

const Maintenance = () => {
  return (
    <div className="py-8 px-[25px] bg-[#FAFAFA] ">
      <SmallHeading
        name={"Maintenance and Support"}
        className="after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[50%] pt-2"
      />

      <div className="lg:flex justify-center items-center">
        <p className="my-4 ">
          We update applications to make compatible with new technologies, and
          we make error checks and bug fixes.
        </p>
        <img
          className="max-w-[500px] mx-auto"
          src={ElepMiniIcon}
          alt="ElepMiniIcon"
        />
      </div>
    </div>
  );
};

export default Maintenance;
