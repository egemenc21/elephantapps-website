import React from "react";

const SubServicesElement = ({ app }) => {
  const { name, icon, imageUrl } = app;
  return (
    <div>
      <p className="p-4">{name}</p>
      {icon ? <img className="p-6 w-[150px]" src={icon} alt="icon" /> : null}
      <img src={imageUrl} alt="icon" />
    </div>
  );
};

export default SubServicesElement;
