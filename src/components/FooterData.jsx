import React from "react";
import AboutUsImage from "../assets/aboutus.jpg";
import ProjectsImage from "../assets/projects.jpg";
import ServicesImage from "../assets/services.jpg";
import AppDevImage from "../assets/app-development.svg";
import TrustLogo from "../assets/trustpilot-logo.png";
import { motion } from "framer-motion";

export const footerImagesData = [
  { id: 1, image: AboutUsImage, heading: "About Us" },
  { id: 2, image: ProjectsImage, heading: "Projects" },
  { id: 3, image: ServicesImage, heading: "Services" },
];

// export const FooterDataElement = ({ image, heading }) => {
//   return (
//     <div>
//       <img className="w-[550px]" src={image} alt="images" />
//       <h3 className="text-center">{heading}</h3>
//     </div>
//   );
// };
export const FooterDataElements = () => {
  return (
    <motion.div
      variants={{
        offscreen: {
          x: -300,         
        },
        onscreen: {
          x: 0,          
          transition: {
            type: "spring",
            duration: 1.2,
            ease:"ease",            
          },
        },
      }}
      className="grid sm:grid-cols-3 gap-5"
    >
      {footerImagesData.map(({ image, heading, id }) => (
        <div key={id}>
          <img className="w-[550px]" src={image} alt="images" />
          <h3 className="text-center py-4">{heading}</h3>
        </div>
      ))}
    </motion.div>
  );
};

const FooterData = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="py-8 px-[25px] "
    >
      <FooterDataElements />
      <div className="flex justify-evenly items-center gap-10">
        <a href="https://www.goodfirms.co/company/elephantapps" target="_blank" rel="noreferrer">
          <img className="w-[200px]" src={AppDevImage} alt="AppDevImage" />
        </a>
        <a
          href="https://www.trustpilot.com/review/elephantapps.co"
          target="_blank" rel="noreferrer"
        >
          <img className="w-[300px]" src={TrustLogo} alt="TrustLogo" />
        </a>
      </div>
    </motion.div>
  );
};

export default FooterData;
