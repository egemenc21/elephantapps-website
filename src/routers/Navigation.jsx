import React, { Fragment, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ElephantAppsIcon from '../assets/elephantappslogowhite.svg'
import NavbarList from "../components/NavbarList";
import { nanoid } from "nanoid";
const navbarNames = [
  "Home",
  "About us",
  "Services",
  "Projects",
  "Careers",
  "Contact Us",
];

export const lowercaseAndMergeName = (name) =>
  name.toLowerCase().replace(/\s/g, "");

const Navigation = () => {
  //Opening and closing the navigation bar in smaller screens
  const [nav, setNav] = useState(false);
  const [lang, setLang] = useState(false);

  //Changing the navbar when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleLang = () => {
    setLang(!lang);
  };

  return (
    <Fragment>
      <div className="fixed left-0 right-0 z-[100]">
        <div
          className={`flex justify-between items-center hover:cursor-pointer bg-white transition duration-700 ease-in-out
           ${!color ? null : "shadow-lg "} `}
        >
       
          <Link className="pl-4">
            <img src={ElephantAppsIcon} alt="" />
          </Link>
          <ul className="hidden lg:flex text-sm uppercase items-center">
            {navbarNames.map((name, index) => {
              return <NavbarList key={index} name={name} />;
            })}
            <button
              className="px-3 mx-4 text-gray-400 hover:text-black "
              onClick={handleLang}
            >
              {lang ? "EN" : "TR"}
            </button>
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
          <ul className=" text-xl flex flex-col items-center justify-center my-[25%]">
            <li onClick={handleNav}>
              <AiOutlineClose size={30} />
            </li>
            {navbarNames.map((name) => (
              <NavbarList name={name} key={nanoid()} />
            ))}
            <li onClick={handleLang}> {lang ? "EN" : "TR"} </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
