import React from "react";
import { Link } from "react-router-dom";
import { lowercaseAndMergeName } from "../routers/Navigation";
import ElephantAppsLogo from "../assets/elephantappslogowhite.svg";
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineLinkedin,AiOutlineFacebook,} from 'react-icons/ai'

export const FooterLinks = ({ name, link, target }) => {
  return (
    <li className="text-[16px] pt-6 text-gray-500">
      <Link to={link ? link : lowercaseAndMergeName(name)} target={target}>
        {name}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="py-16 px-[25px]">
      <img src={ElephantAppsLogo} alt="ElephantAppsLogo" />
      <div className="grid md:grid-cols-4 ">
        <h4 className="text-md text-gray-500 pt-8">Simplify your life.</h4>
        <ul>
          <li className="text-sm text-black uppercase pt-2">About</li>
          <FooterLinks name={"About Us"} />
          <FooterLinks name={"Services"} />
          <FooterLinks name={"Projects"} />
        </ul>
        <ul>
          <li className="text-sm text-black uppercase pt-2">Careers</li>
          <FooterLinks name={"Open Positions"} link="/careers" />
        </ul>
        <ul>
          <li className="text-sm text-black uppercase pt-2">Contact us</li>
          <FooterLinks
            name={"Head Office — TR: +90 (216) 225-8364"}
            link={"https://www.google.com"}
            target="_blank"
          />
          <FooterLinks
            name={"USA Office — USA: +1 305-521-3378"}
            link={"https://www.google.com"}
            target="_blank"
          />
          <FooterLinks
            name={"info@elephantapps.co"}
            link={"mailto:info@elephantapps.co"}
          />
          <li className="flex gap-5 pt-2">
            <AiOutlineInstagram className="text-gray-500" size={25}/>
            <AiOutlineFacebook className="text-gray-500" size={25}/>
            <AiOutlineLinkedin className="text-gray-500" size={25}/>
            <AiOutlineTwitter className="text-gray-500" size={25}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
