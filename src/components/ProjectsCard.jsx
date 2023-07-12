import React from "react";
import AppleStore from "../assets/applestore.png";

export const GooglePlayAndApple = ({ googlePlayLink, appleStoreLink }) => (
  <div>
    <a href={googlePlayLink}>
      <img
        className="pt-2 w-[120px]  cursor-pointer"
        src={AppleStore}
        alt="AppleStore"
      />
    </a>
    <a href={appleStoreLink}>
      <img
        className="pt-2 w-[120px]  cursor-pointer"
        src="https://elephantapps.co/static/button_googleplay-58066b61794fb9b0f0b07511d1c841ae.png"
        alt="GooglePlay Store"
      />
    </a>
  </div>
);
const ProjectsElement = ({ cardItem }) => {
  const { id, name, icon, imageUrl, quote, downloadable } = cardItem;
  return (
    <div>
      <div className="grid lg:grid-cols-5 py-4 pl-4">
        <div className="col-span-1 ">
          <h2
            className={
              "text-xl mb-4 relative " +
              (id === 1
                ? "after:absolute after:inset-0 after:border-t-2 after:border-[#ff5354] after:top-0 after:right-[88%] pt-2"
                : " ")
            }
          >
            {name}
          </h2>
          {icon ? <img className="w-[100px]" src={icon} alt="icon" /> : null}
          {downloadable ? <GooglePlayAndApple /> : null}
        </div>
        <img className="col-span-4 " src={imageUrl} alt="imageUrl" />
      </div>
      <p className="text-center text-gray-500 text-sm">{quote}</p>
    </div>
  );
};

export default ProjectsElement;
