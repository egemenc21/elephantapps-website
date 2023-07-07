import React from "react";
import ElepMiniIcon from "../../assets/elepstring.png";
import teamMembers from "./teamMembers";
import TeamMemberElement from "./TeamMemberElement.jsx";
import SmallHeading from "../SmallHeading";

const Team = () => {
  return (

    <div className="px-[25px] py-8 bg-[#FAFAFA]">
    <SmallHeading name={'Team'}/>
      <div className="max-w-[1300px] flex flex-col justify-between items-center lg:grid grid-cols-3 gap-5">
        <img className="col-span-1" src={ElepMiniIcon} alt="ElepMiniIcon" />
        <div className="col-span-2 grid md:grid-cols-2  ">
          {teamMembers.map((member) => (
            <TeamMemberElement key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
