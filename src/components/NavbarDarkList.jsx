import React from "react";
import { NavLink } from "react-router-dom";
import { lowercaseAndMergeName } from "../components/NavbarList";

const NavbarDarkList = ({ name }) => {
  return (
    <NavLink      
      to={name !== "Home" ? lowercaseAndMergeName(name) : "/"}
      className={({ isActive }) =>
        (isActive
          ? "lg:border-t-[3px] text-white lg:border-t-white  "
          : "") +
        " pt-7 pb-[30px] px-[10px] text-xs ml-2 text-gray-400 leading-relaxed hover:text-white  "
      }
      
    >
      {name}
    </NavLink>
  );
};

export default NavbarDarkList;
