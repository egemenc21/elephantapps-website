import { Routes, Route } from "react-router-dom";
import Navigation from "./routers/Navigation";
import Home from "./routers/Home";
import AboutUs from "./routers/AboutUs";
import Services from "./routers/Services/Services";
import Projects from "./routers/Projects";
import Careers from "./routers/Careers";
import ContactUs from "./routers/ContactUs";
import NavigationDark from "./routers/NavigationDark";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
      <Route path="/" element={<NavigationDark/>}>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services/*" element={<Services />}/>
      </Route>
    </Routes>
  );
}

export default App;
