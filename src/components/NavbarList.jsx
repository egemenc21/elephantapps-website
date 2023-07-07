import React from "react";
import { Link } from "react-router-dom";

const NavbarList = ({ name, className }) => {
  return (
    <li
      className={"py-4 px-2 mx-2 text-gray-400 hover:text-black " + className}
    >
      <Link to={name !== "Home" ? name.toLowerCase().replace(/\s/g, "") : "/"}>
        {name}
      </Link>
    </li>
  );
};

export default NavbarList;
