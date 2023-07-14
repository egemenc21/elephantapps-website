import { motion } from "framer-motion";
import React from "react";

export const MemberJob = ({ job }) => (
  <p className="text-sm italic text-gray-500 pb-2">{job}</p>
);

const TeamMemberElement = ({ member, className }) => {
  const { name, job, image, title } = member;

  return (
    <motion.div
      variants={{
        offscreen: {
          x: -50,          
        },
        onscreen: {
          x: 0,          
          transition: {
            type: "spring",
            duration: 0.7,
            ease:"ease"
          },
        },
      }}
      className="flex items-center p-4"
    >
      <img
        src={image}
        className="w-[100px] h-[100px] rounded-full grayscale object-cover"
        alt="team images"
      />
      <div className={"ml-8 " + className}>
        <h5 className="text-sm pb-2">{name}</h5>
        {title ? (
          <p className="text-sm italic text-gray-500 pb-2">{title}</p>
        ) : null}
        <p className="text-sm italic text-gray-500 pb-2">{job}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberElement;
