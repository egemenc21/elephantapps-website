import React from "react";

const TeamMemberElement = ({ member }) => {
  const { name, job, image, title } = member;
  return (
    <div className="flex items-center p-8">
      <img
        src={image}
        className="w-[100px] h-[100px] rounded-full"
        alt="team images"
      />
      <div className="ml-8">
        <h5 className="text-sm pb-2">{name}</h5>
        {title ? <MemberJob job={title} /> : null}
        <MemberJob job={job} />
      </div>
    </div>
  );
};
export const MemberJob = ({ job }) => <p className="text-sm italic text-gray-500 pb-2">{job}</p>;

export default TeamMemberElement;
