import { Routes, Route } from "react-router-dom";
import Navigation from "./routers/Navigation";
import Home from "./routers/Home";
import AboutUs from "./routers/AboutUs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
      </Route>
    </Routes>
  );
}

export default App;
