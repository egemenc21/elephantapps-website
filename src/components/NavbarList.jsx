import React from "react";
import { NavLink } from "react-router-dom";

export const lowercaseAndMergeName = (name) =>
  name.toLowerCase().replace(/\s/g, "");

const NavbarList = ({ name }) => {
  return (
    <NavLink
      to={name !== "Home" ? lowercaseAndMergeName(name) : "/"}
      className={({ isActive }) =>
        (isActive
          ? "lg:border-t-[3px] text-[#000000]  lg:border-t-red-400 "
          : "") +
        " pt-7 lg:pb-[30px] px-[10px] lg:text-xs ml-2 text-gray-400 leading-relaxed hover:text-black"
      }
    >
      {name}
    </NavLink>
  );
};

export default NavbarList;
