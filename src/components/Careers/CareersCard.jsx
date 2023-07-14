import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../Button";
import { Link } from "react-router-dom";

const CareersCard = ({ cardItem }) => {
  const {name, route} = cardItem;
  return (
    <Link to={route}>
      <div className="p-6 my-4 flex flex-col sm:flex-row sm:justify-between items-center bg-white">
        <h3 className="text-xl font-light" style={{textShadow: '3px 3px 9px #969696'}}>{name}</h3>
        <Button
          link={route}
          name={"Details"}
          buttonType={BUTTON_TYPE_CLASSES.base}
          className="py-[15px] px-[30px]"
        />
      </div>
    </Link>
  );
};

export default CareersCard;
