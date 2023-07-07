import React from "react";

const ApplicationDevElement = ({grid}) => {
  const {image, heading, text } = grid;
  return (
    <div>
      <img src={image} alt="Design" />
      <h3 className="text-4xl leading-normal">{heading}</h3>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

export default ApplicationDevElement;
