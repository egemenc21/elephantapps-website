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
          ? "lg:border-t-[3px] lg:border-t-red-400 text-[#000000] "
          : "") +
        " py-4 text-xs px-2 ml-2 text-gray-400 leading-relaxed hover:text-black"
      }
    >
      {name}
    </NavLink>
  );
};

export default NavbarList;
