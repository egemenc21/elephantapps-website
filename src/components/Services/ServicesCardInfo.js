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
        text: "Progressive Web App Development with React JS",
      },
      {
        image: NativeMobileApp,
        text: "Native Mobile App Development - iOS & Android",
      },
      {
        image: CrossPlatform,
        text: "Crossplatform Mobile App Development With React-Native",
      },
    ],
  },
  {
    id: 2,
    name: "BackEnd Development",
    cards: [
      {
        image: Database,
        text: "Database Application Development",
      },
      {
        image: AppService,
        text: "Application Service Development",
      },
      {
        image: Api,
        text: "Api Development",
      },
      {
        image: Middleware,
        text: "Middleware Software Development",
      },
    ],
  },
  {
    id: 3,
    name: "Hardware",
    cards: [
      {
        image: HardwareDevelopment,
        text: "Hardware development",
      },
      {
        image: IotProjects,
        text: "IOT Projects",
      },
      {
        image: IotProjects,
        text: "Hardware Products",
      },
    ],
  },
  {
    id: 4,
    name: "Consulting",
    cards: [
      {
        image: Consulting,
        text: "Software Project Consulting",
      },
      {
        image: Consulting,
        text: "IT Consulting",
      },
      {
        image: Consulting,
        text: "MIS Consulting",
      },
    ],
  },
];
