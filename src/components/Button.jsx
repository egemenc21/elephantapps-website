import React from "react";
import { Link } from "react-router-dom";
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const BaseButton = ({ name, className,link }) => (
  <Link to={!link ? '/' : link}>
    <button
      className={
        "bg-[#ff5354] text-white sm:max-w-[200px] py-[10px] px-[60px] rounded-full text-xs uppercase " +
        className
      }
    >
      {name}
    </button>
  </Link>
);
const InvertedButton = ({ name, className,link }) => (
  <Link to={!link ? '/' : link}>
    <button
    className={
      "bg-gray-500 text-white py-[10px] px-[60px] rounded-full text-xs uppercase " +
      className
    }
  >
    {name}
  </button>
  </Link>
  
);
const Button = ({ name, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton name={name} {...otherProps} />;
};
//base buttona py px yazinca inverted da etkileniyor neden?
export default Button;
