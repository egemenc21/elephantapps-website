import React from "react";

const SubServicesElement = ({ app }) => {
  const { name, icon, imageUrl } = app;
  return (
    <div className="max-w-[850px]">
      <p className="p-8">{name}</p>
      {icon ? <img className="p-6 w-[150px]" src={icon} alt="icon" /> : null}
      {imageUrl ? <img src={imageUrl} className="mb-8 text-gray-500" alt="icon" /> : null}
    </div>
  );
};

export default SubServicesElement;
