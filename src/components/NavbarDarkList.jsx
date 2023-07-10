import React from "react";
import { NavLink } from "react-router-dom";
import { lowercaseAndMergeName } from "../routers/Navigation";

const NavbarDarkList = ({ name }) => {
  return (
    <NavLink      
      to={name !== "Home" ? lowercaseAndMergeName(name) : "/"}
      className={({ isActive }) =>
        (isActive
          ? "lg:border-t-[3px] lg:border-t-white text-[#e1e1e1] "
          : "") +
        " py-4 text-xs px-2 ml-2 text-gray-400 leading-relaxed hover:text-white  "
      }
    >
      {name}
    </NavLink>
  );
};

export default NavbarDarkList;
