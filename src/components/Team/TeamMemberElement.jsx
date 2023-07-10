import React from "react";

export const MemberJob = ({ job }) => (
  <p className="text-sm italic text-gray-500 pb-2">{job}</p>
);

const TeamMemberElement = ({member ,className}) => {
  const { name, job, image, title } = member;
  
  return (
    <div className="flex items-center p-8">
      <img
        src={image}
        className="w-[100px] h-[100px] rounded-full"
        alt="team images"
      />
      {console.log(className)}
      <div className={"ml-8 " + className}>
        <h5 className="text-sm pb-2">{name}</h5>
        {title ? (
          <p className="text-sm italic text-gray-500 pb-2">{title}</p>
        ) : null}
        <p className="text-sm italic text-gray-500 pb-2">{job}</p>
      </div>
    </div>
  );
};

export default TeamMemberElement;
