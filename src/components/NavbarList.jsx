import React from "react";
import { NavLink } from "react-router-dom";
import { lowercaseAndMergeName } from "../routers/Navigation";

const NavbarList = ({ name }) => {
  return (
    <NavLink
      to={name !== "Home" ? lowercaseAndMergeName(name) : "/"}
      className={({ isActive }) =>
        (isActive
          ? "lg:border-t-[3px] lg:border-t-red-400 text-[#020000] "
          : "") +
        " py-4 text-xs px-2 ml-2 text-gray-400 leading-relaxed hover:text-black"
      }
    >
      {name}
    </NavLink>
  );
};

export default NavbarList;
