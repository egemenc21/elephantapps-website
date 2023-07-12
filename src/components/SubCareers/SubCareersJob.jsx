import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../Button";
import { SocialIcon } from "react-social-icons";

const SubCareersJob = ({ careers }) => {
  const {
    jobDescription,
    requiredSkills,
    requiredExprience,
    preferredEducation,
  } = careers;
  return (
    <div className="flex flex-col">
      <h2 className="text-lg text-gray-500 font-light mb-5">Job Description</h2>
      {jobDescription.map((description) => (
        <p className="font-light text-md mb-5">{description}</p>
      ))}
      <h2 className="text-lg text-gray-500 font-light mb-5">Required Skills</h2>
      {requiredSkills.map((skill) => (
        <p className="font-light text-md mb-5">{skill}</p>
      ))}

      <h2 className="text-lg text-gray-500 font-light mb-5">
        Required Experience
      </h2>
      <p className="font-light text-md mb-5">{requiredExprience}</p>
      <h2 className="text-lg text-gray-500 font-light mb-5">
        Preferred Education
      </h2>
      <p className="font-light text-md mb-5">{preferredEducation}</p>
      <div className="pb-5 mb-5">
        <Button
          name={"Apply"}
          buttonType={BUTTON_TYPE_CLASSES.base}
          className="py-[15px] px-[30px]"
        />
      </div>
      <p className="text-lg text-gray-500 font-light mb-5">Share: </p>
      <div className="flex gap-3 mb-20">
        <SocialIcon
          style={{ width: "40px", height: "40px" }}
          target="_blank"
          url="https://web.whatsapp.com/send?text=ElephantApps | Ekibimize Katılın | Native iOS Developer https%3A%2F%2Felephantapps.co%2Ftr%2Fkariyer%2Fios-developer"
        />
        <SocialIcon
          style={{ width: "40px", height: "40px" }}
          target="_blank"
          url="https://telegram.me/share/url?url=https%3A%2F%2Felephantapps.co%2Ftr%2Fkariyer%2Fios-developer&text=ElephantApps | Ekibimize Katılın | Native iOS Developer"
        />
        <SocialIcon
          style={{ width: "40px", height: "40px" }}
          target="_blank"
          url="https://twitter.com/i/flow/login?redirect_after_login=%2Fshare%3Furl%3Dhttps%253A%252F%252Felephantapps.co%252Ftr%252Fkariyer%252Fios-developer%26text%3DElephantApps%2520%257C%2520Ekibimize%2520Kat%25C4%25B1l%25C4%25B1n%2520%257C%2520Native%2520iOS%2520Developerr"
        />
        <SocialIcon
          style={{ width: "40px", height: "40px" }}
          target="_blank"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felephantapps.co%2Ftr%2Fkariyer%2Fios-developer"
        />
        <SocialIcon
          style={{ width: "40px", height: "40px" }}
          target="_blank"
          url="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Felephantapps.co%2Ftr%2Fkariyer%2Fios-developer"
        />
      </div>
    </div>
  );
};

export default SubCareersJob;
