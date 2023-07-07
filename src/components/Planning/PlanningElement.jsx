import React from "react";

const PlanningElement = ({ item }) => {
  const { heading, icon, text } = item;
  return (
    <div className="p-4">
      <h4>{heading}</h4>
      <span>{icon}</span>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

export default PlanningElement;
