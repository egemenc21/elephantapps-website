import PwaReact from "../../assets/services/pwa_react.png";
import NativeMobileApp from "../../assets/services/native_mobileapp.png";
import CrossPlatform from "../../assets/services/cross_platform.png";
import Api from "../../assets/services/api.png";
import AppService from "../../assets/services/appservice.png";
import Consulting from "../../assets/services/consulting.png";
import Database from "../../assets/services/database.png";
import HardwareDevelopment from "../../assets/services/hardwaredevelopment.png";
import IotProjects from "../../assets/services/iotprojects.png";
import Middleware from "../../assets/services/middleware.png";

export const servicesCardItems = [
  {
    id: 1,
    name: "FrontEnd Development",
    cards: [
      {
        image: PwaReact,
        heading: "Progressive Web App Development with React JS",        
      },
      {
        image: NativeMobileApp,
        heading: "Native Mobile App Development - iOS & Android",
      },
      {
        image: CrossPlatform,
        heading: "Crossplatform Mobile App Development With React-Native",
      },
    ],
  },
  {
    id: 2,
    name: "BackEnd Development",
    cards: [
      {
        image: Database,
        heading: "Database Application Development",
      },
      {
        image: AppService,
        heading: "Application Service Development",
      },
      {
        image: Api,
        heading: "Api Development",
      },
      {
        image: Middleware,
        heading: "Middleware Software Development",
      },
    ],
  },
  {
    id: 3,
    name: "Hardware",
    cards: [
      {
        image: HardwareDevelopment,
        heading: "Hardware development",
      },
      {
        image: IotProjects,
        heading: "IOT Projects",
      },
      {
        image: IotProjects,
        heading: "Hardware Products",
      },
    ],
  },
  {
    id: 4,
    name: "Consulting",
    cards: [
      {
        image: Consulting,
        heading: "Software Project Consulting",
      },
      {
        image: Consulting,
        heading: "IT Consulting",
      },
      {
        image: Consulting,
        heading: "MIS Consulting",
      },
    ],
  },
];
