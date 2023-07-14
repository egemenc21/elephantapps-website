import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ElephantAppsIconBlack from "../assets/elephantappslogoblack.svg";
import ElephantAppsIconWhite from "../assets/elephantappslogowhite.svg";
import NavbarDarkList from "../components/NavbarDarkList";
import NavbarList from "../components/NavbarList";
import TRLogo from "../assets/originalAssets/lang/tr.svg";
import ENLogo from "../assets/originalAssets/lang/en.svg";
import { SmallScreenNavigation } from "../components/SmallScreenNavigation";
import { nanoid } from "nanoid";

export const LangButton = ({ logo, lang }) => (
  <>
    {lang}
    <img className="w-5 " src={logo} alt="Logo" />
  </>
);
export const navbarNames = [
  "Home",
  "About us",
  "Services",
  "Projects",
  "Careers",
  "Contact Us",
];
export const useFindPath = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  return currentPath;
};

const Navigation = () => {
  //Opening and closing the navigation bar in smaller screens
  const [nav, setNav] = useState(false);
  const [lang, setLang] = useState(false);
  const [navDark, setNavDark] = useState(false);
  //Changing the navbar when scrolling
  const [color, setColor] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleLang = () => {
    setLang(!lang);
  };
  const path = useFindPath();
  useEffect(() => {
    if (path === "/aboutus" || path === "/services") {
      setNavDark(true);
    } else {
      setNavDark(false);
    }
  }, [path]);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);

  const location = useLocation();
  const isSubRoute = location.pathname.startsWith("/services");
  return !navDark ? (
    <Fragment>
      <div className="fixed left-0 right-0 z-[100]">
        <div
          className={`flex justify-between items-center hover:cursor-pointer bg-white transition duration-700 ease-in-out
     ${!color ? null : "shadow-lg "} `}
        >
          <Link to={"/"} className="pl-4">
            <img src={ElephantAppsIconBlack} alt="ElephantAppsIconBlack" />
          </Link>
          <ul className="hidden lg:flex text-sm uppercase items-center">
            {navbarNames.map((name, index) => (
              <NavbarList key={index} name={name} />
            ))}
            <li
              className="px-4 py-2 mx-4 bg-[#fafafa] text-[#ff5354] mr-[80px] flex justify-between gap-1"
              onClick={handleLang}
            >
              {lang ? (
                <LangButton logo={ENLogo} lang={"EN"} />
              ) : (
                <LangButton logo={TRLogo} lang={"TR"} />
              )}
            </li>
          </ul>
          <div
            className="lg:hidden block hover:cursor-pointer my-4"
            onClick={handleNav}
          >
            <AiOutlineMenu className="mr-4" size={30} />
          </div>
          <SmallScreenNavigation
            nav={nav}
            handleLang={handleLang}
            handleNav={handleNav}
            lang={lang}
          />
        </div>
      </div>
      <Outlet />
    </Fragment>
  ) : (
    <Fragment>
      {isSubRoute && location.pathname !== "/services" ? (
        <div className="fixed left-0 right-0 z-[100]">
          <div
            className={`flex justify-between items-center hover:cursor-pointer bg-white transition duration-700 ease-in-out
   ${!color ? null : "shadow-lg "} `}
          >
            <Link to={"/"} className="pl-4">
              <img src={ElephantAppsIconWhite} alt="ElephantAppsIconWhite" />
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
              <AiOutlineMenu size={30} className="mr-4" />
            </div>
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[100%] h-[100vh] bg-white ease-in-out duration-700"
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
      ) : color ? (
        <div className="fixed left-0 right-0 z-[100]">
          <div
            className={`flex justify-between items-center hover:cursor-pointer bg-white transition duration-700 ease-in-out
 ${!color ? null : "shadow-lg "} `}
          >
            <Link to={"/"} className="pl-4">
              <img src={ElephantAppsIconBlack} alt="ElephantAppsIconBlack" />
            </Link>
            <ul className="hidden lg:flex text-sm uppercase items-center">
              {navbarNames.map((name, index) => {
                return <NavbarList key={index} name={name} />;
              })}

              <li
                className="px-4 py-2 mx-4 bg-[#fafafa] text-[#ff5354] mr-[80px] flex justify-between gap-1"
                onClick={handleLang}
              >
                {" "}
                {lang ? (
                  <LangButton logo={ENLogo} lang={"EN"} />
                ) : (
                  <LangButton logo={TRLogo} lang={"TR"} />
                )}{" "}
              </li>
            </ul>
            <div
              className="lg:hidden block hover:cursor-pointer my-4"
              onClick={handleNav}
            >
              <AiOutlineMenu size={30} className="mr-4" />
            </div>
            <SmallScreenNavigation
              nav={nav}
              handleNav={handleNav}
              handleLang={handleLang}
              lang={lang}
            />
          </div>
        </div>
      ) : (
        <div className="fixed left-0 right-0 z-[100] ease-in-out duration-700">
          <div
            className={`flex justify-between items-center hover:cursor-pointer bg-transparent transition`}
          >
            <Link to={"/"} className="pl-4">
              <img src={ElephantAppsIconWhite} alt="ElephantAppsIconWhite" />
            </Link>
            <ul className="hidden lg:flex text-sm uppercase items-center">
              {navbarNames.map((name, index) => {
                return <NavbarDarkList key={index} name={name} />;
              })}
              <li
                className="px-4 py-2 mx-4 bg-transparent text-gray-400 mr-[80px] flex justify-between gap-1"
                onClick={handleLang}
              >
                {lang ? (
                  <LangButton logo={ENLogo} lang={"EN"} />
                ) : (
                  <LangButton logo={TRLogo} lang={"TR"} />
                )}
              </li>
            </ul>
            <div
              className="lg:hidden block hover:cursor-pointer my-4"
              onClick={handleNav}
            >
              <AiOutlineMenu size={30} className="text-white mr-4" />
            </div>
          </div>
          <SmallScreenNavigation
            nav={nav}
            handleNav={handleNav}
            handleLang={handleLang}
            lang={lang}
          />
        </div>
      )}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
