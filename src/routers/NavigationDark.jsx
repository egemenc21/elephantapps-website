import React, { Fragment, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ElephantAppsIconBlack from "../assets/elephantappslogoblack.svg";
import ElephantAppsIconWhite from "../assets/elephantappslogowhite.svg";
import { nanoid } from "nanoid";
import NavbarDarkList from "../components/NavbarDarkList";
import NavbarList from "../components/NavbarList";

const navbarNames = [
  "Home",
  "About us",
  "Services",
  "Projects",
  "Careers",
  "Contact Us",
];

const NavigationDark = () => {
  const [nav, setNav] = useState(false);
  const [lang, setLang] = useState(false);

  //Changing the navbar when scrolling
  const [color, setColor] = useState(false);
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
  const handleNav = () => {
    setNav(!nav);
  };
  const handleLang = () => {
    setLang(!lang);
  };


  // const NavbarDark = () => (
  //   <div className="fixed left-0 right-0 z-[100] ease-in-out duration-700">
  //     <div
  //       className={`flex justify-between items-center hover:cursor-pointer bg-transparent transition`}
  //     >
  //       <Link className="pl-4">
  //         <img src={ElephantAppsIconBlack} alt="ElephantAppsIconBlack" />
  //       </Link>
  //       <ul className="hidden lg:flex text-sm uppercase items-center">
  //         {navbarNames.map((name, index) => {
  //           return <NavbarDarkList key={index} name={name} />;
  //         })}
  //         <button
  //           className="px-3 mx-4 text-gray-400 hover:text-black "
  //           onClick={handleLang}
  //         >
  //           {lang ? "EN" : "TR"}
  //         </button>
  //       </ul>
  //       <div
  //         className="lg:hidden block hover:cursor-pointer my-4"
  //         onClick={handleNav}
  //       >
  //         <AiOutlineMenu size={30}  className="text-white mr-4"/>
  //       </div>
  //     </div>
  //     <div
  //       className={
  //         nav
  //           ? "fixed left-0 top-0 w-[100%] h-[100vh] bg-white ease-in-out duration-500"
  //           : "fixed left-[-100%]"
  //       }
  //     >
  //       <ul className=" text-xl flex flex-col items-center justify-center my-[25%]">
  //         <li onClick={handleNav} >
  //           <AiOutlineClose size={30}/>
  //         </li>
  //         {navbarNames.map((name) => (
  //           <NavbarList name={name} key={nanoid()} />
  //         ))}
  //         <li onClick={handleLang} > {lang ? "EN" : "TR"} </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
  // const NavbarSecondary = () => (
  //   <div className="fixed left-0 right-0 z-[100]">
  //   <div
  //     className={`flex justify-between items-center hover:cursor-pointer bg-white transition duration-700 ease-in-out
  //      ${!color ? null : "shadow-lg "} `}
  //   >
   
  //     <Link className="pl-4">
  //       <img src={ElephantAppsIconWhite} alt="" />
  //     </Link>
  //     <ul className="hidden lg:flex text-sm uppercase items-center">
  //       {navbarNames.map((name, index) => {
  //         return <NavbarList key={index} name={name} />;
  //       })}
  //       <button
  //         className="px-3 mx-4 text-gray-400 hover:text-black "
  //         onClick={handleLang}
  //       >
  //         {lang ? "EN" : "TR"}
  //       </button>
  //     </ul>
  //     <div
  //       className="lg:hidden block hover:cursor-pointer my-4"
  //       onClick={handleNav}
  //     >
  //       <AiOutlineMenu size={30} />
  //     </div>
  //   </div>
  //   <div
  //     className={
  //       nav
  //         ? "fixed left-0 top-0 w-[100%] h-[100vh] bg-white ease-in-out duration-700"
  //         : "fixed left-[-100%]"
  //     }
  //   >
  //     <ul className=" text-xl flex flex-col items-center justify-center my-[25%]">
  //       <li onClick={handleNav}>
  //         <AiOutlineClose size={30} />
  //       </li>
  //       {navbarNames.map((name) => (
  //         <NavbarList name={name} key={nanoid()} />
  //       ))}
  //       <li onClick={handleLang}> {lang ? "EN" : "TR"} </li>
  //     </ul>
  //   </div>
  // </div>
  // );

  return (
    <Fragment>
      {color ? ( <div className="fixed left-0 right-0 z-[100]">
    <div
      className={`flex justify-between items-center hover:cursor-pointer bg-white transition duration-700 ease-in-out
       ${!color ? null : "shadow-lg "} `}
    >
   
      <Link className="pl-4">
        <img src={ElephantAppsIconWhite} alt="" />
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
        <AiOutlineMenu size={30} className="mr-4"/>
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
  </div>) : (<div className="fixed left-0 right-0 z-[100] ease-in-out duration-700">
      <div
        className={`flex justify-between items-center hover:cursor-pointer bg-transparent transition`}
      >
        <Link className="pl-4">
          <img src={ElephantAppsIconBlack} alt="ElephantAppsIconBlack" />
        </Link>
        <ul className="hidden lg:flex text-sm uppercase items-center">
          {navbarNames.map((name, index) => {
            return <NavbarDarkList key={index} name={name} />;
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
          <AiOutlineMenu size={30}  className="text-white mr-4"/>
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
          <li onClick={handleNav} >
            <AiOutlineClose size={30}/>
          </li>
          {navbarNames.map((name) => (
            <NavbarList name={name} key={nanoid()} />
          ))}
          <li onClick={handleLang} > {lang ? "EN" : "TR"} </li>
        </ul>
      </div>
    </div>)}
  {/* neden <NavbarDark /> olarak girince kucuk ekranda menu barindaki ease-in-out duration-700 kodu calismiyor? 
  ve navbarlari degistirirken de transitionlar calismiyor */}
      
      <Outlet />
    </Fragment>
  );
};

export default NavigationDark;
