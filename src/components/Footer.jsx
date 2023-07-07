import React from "react";
import { Link } from "react-router-dom";
export const FooterLinks = ({ name,link }) => {
  return (
    <li className="text-[16px] pt-6 text-gray-500">
      <Link to={link ? link : name.toLowerCase().replace(/\s/g, "")}>{name}</Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="py-16 px-[25px]">
      <span className="p-2">ElephantApps</span>
      <div className="grid md:grid-cols-4 ">
        <h4 className="text-md pt-8">Simplify your life.</h4>
        <ul>
          <li className="text-sm text-black uppercase font-bold">About</li>
          <FooterLinks name={"About Us"} />
          <FooterLinks name={"Services"} />
          <FooterLinks name={"Projects"} />
        </ul>
        <ul>        
        <li className="text-sm text-black uppercase font-bold">Careers</li>
          <FooterLinks name={"Open Positions"} link='/careers'/>
        </ul>
        <ul>
        <li className="text-sm text-black uppercase font-bold">Contact us</li>
            <FooterLinks name={'Head Office — TR: +90 (216) 225-8364'}/>
            <FooterLinks name={'USA Office — USA: +1 305-521-3378'}/>
            <FooterLinks name={'info@elephantapps.co'}/>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
