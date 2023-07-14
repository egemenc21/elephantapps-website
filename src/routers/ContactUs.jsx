import React from "react";
import { ReactComponent as LocationLogo } from "../assets/originalAssets/general/placeholder.inline.svg";
import { ReactComponent as TelephoneLogo } from "../assets/originalAssets/general/telephone.inline.svg";
import { ReactComponent as MailLogo } from "../assets/originalAssets/general/email.inline.svg";
import Footer from "../components/Footer";
const ContactUsInfo = ({ office, location, telephone, className }) => (
  <div className={"w-[50%] px-[50px] pt-[20px] pb-[30px] " + className}>
    <h4 className="text-center mb-4 uppercase font-light">{office}</h4>
    <div className="flex flex-col items-center text-center gap-5 text-gray-500">
      <LocationLogo className="w-[40px] fill-gray-500" />
      <p>{location}</p>
      <TelephoneLogo className="w-[40px] fill-gray-500" />
      <a href={"tel:" + telephone}>{telephone}</a>
    </div>
  </div>
);

const ContactUs = () => {
  return (
    <div className="pt-[150px] bg-[#fafafa] px-6 ">
      <div>
        <h1 className="text-4xl font-light text-center pb-8">Contact us</h1>
        <div className="flex flex-col md:flex-row justify-center max-md:items-center">
          <ContactUsInfo
            className="max-md:border-b-2 md:border-r-2 border-gray-500"
            office="Head Office"
            location="İçerenköy Mh. Topçu İbrahim Sk. (E-5 Yan yol üzeri) AND Binası
      No: 8/10D İç Kapı No: 5, Kozyatağı, Ataşehir, İSTANBUL / TÜRKİYE"
            telephone="+90 (216) 225-8364"
          />
          <ContactUsInfo            
            office="USA Office"
            location="2540 Shell Road STE C, Georgetown TX 78628 / USA"
            telephone={"+1 305-521-3378"}
          />
        </div>
        <div className="flex flex-col items-center text-gray-500 p-12">
          <MailLogo className="w-[40px] fill-gray-500" />
          <a href="mailto:info@elephantapps.co">info@elephantapps.co</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
