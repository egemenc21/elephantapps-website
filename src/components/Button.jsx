import React from "react";
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const BaseButton = ({name}) => <button className="bg-[#ff5354] text-white py-[15px] px-[30px] rounded-full text-xs uppercase">{name}</button>;
const InvertedButton = ({name}) => <button className="bg-gray-500 text-white w-[80%] rounded-full text-xs uppercase">{name}</button>;
const Button = ({ name, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton name={name} {...otherProps}></CustomButton>;
};

export default Button;
