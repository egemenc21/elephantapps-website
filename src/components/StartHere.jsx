import React from "react";
import { SmallHeading } from "../routers/Home";
import { FiMail, FiPhone } from "react-icons/fi";
import MailIcon from "../assets/mail-icon-elep.png";

const StartHere = () => {
  return (
    <div className="px-[25px] py-4 text-gray-500">
      <div className="sm:flex justify-center items-center gap-5">
        <div>
          <SmallHeading name={"start here"} />
          <p className="py-8">
            Tell us the project in your mind, lets develop your application
            together.
          </p>
          <div className="flex flex-col justify-center gap-5">
            <FiPhone size={30} />
            <span >+90 (216) 225-8364</span>
          </div>
          <div className="flex flex-col justify-between gap-5 py-4">
            <FiMail size={30} />
            <p>info@elephantapps.co</p>
          </div>
        </div>
        <img src={MailIcon} alt="" />
      </div>
    </div>
  );
 
};

export default StartHere;
