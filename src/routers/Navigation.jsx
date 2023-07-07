import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavbarList from "../components/NavbarList";

const navbarNames = [
  "Home",
  "About us",
  "Services",
  "Projects",
  "Careers",
  "Contact Us",
  "TR",
];

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
 
  return (
    <Fragment>
      <div className="fixed left-0 right-0">
        <div className="flex justify-between items-center mx-4 hover:cursor-pointer bg-white">
          <span className="p-2">ElephantApps</span>
          <ul className="hidden lg:flex font-bold text-sm uppercase ">
            {navbarNames.map((name, index) => {
              if (index === 0) {
                return (
                  <NavbarList
                    className=" border-t-[3px] border-t-red-400 text-black"                     
                    name={"Home"}
                  />
                );
              }
              return <NavbarList name={name} />;
            })}
          </ul>
          <div
            className="lg:hidden block hover:cursor-pointer my-4"
            onClick={handleNav}
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] h-[100vh] bg-white ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="font-bold text-xl flex flex-col items-center justify-center my-[25%]">
            <li onClick={handleNav}>
              <AiOutlineClose size={30} />
            </li>
            {navbarNames.map((name) => (
              <NavbarList name={name} />
            ))}
          </ul>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
