import React from "react";
import ElepBrainIcon from "../../assets/elephantappsbrain.svg";
import teamMembers from "./teamMembers";
import TeamMemberElement from "./TeamMemberElement.jsx";
import { SmallHeading } from "../../routers/Home";

export const TEAM_TYPE_CLASSES = {
  base: "base",
  inverted: "inverted",
};
const getTeam = (teamType = TEAM_TYPE_CLASSES.base) =>
  ({
    [TEAM_TYPE_CLASSES.base]: BaseTeam,
    [TEAM_TYPE_CLASSES.inverted]: InvertedTeam,
  }[teamType]);
const BaseTeam = () => (
  <div className="px-[25px] py-8 bg-[#FAFAFA]">
    <SmallHeading name={"Team"} />
    <div className="max-w-[1300px] flex flex-col justify-between items-center lg:grid grid-cols-3 gap-5">
      <img className="col-span-1" src={ElepBrainIcon} alt="ElepMiniIcon" />
      <div className="col-span-2 grid md:grid-cols-2  ">
        {teamMembers.map((member) => (
          <TeamMemberElement key={member.id} member={member} />
        ))}
      </div>
    </div>
  </div>
);
const InvertedTeam = () => (
  <div className="px-[25px] py-8 bg-transparent">
    <SmallHeading name={"Team"} />
    <div className="max-w-[1300px] flex flex-col justify-between items-center lg:grid grid-cols-3 gap-5">      
      <div className="col-span-2 grid md:grid-cols-2 text-white">
        {teamMembers.map((member) => (
          <TeamMemberElement className="[&>p]:text-[#ff5354] " key={member.id} member={member} />
        ))}
      </div>
      <img className="col-span-1" src={ElepBrainIcon} alt="ElepMiniIcon" />
    </div>
  </div>
);

const Team = ({teamType}) => {
  const CustomTeam = getTeam(teamType);
  return (
    <CustomTeam/>
  );
};

export default Team;
