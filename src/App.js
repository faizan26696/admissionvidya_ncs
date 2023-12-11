import React, { useEffect } from "react";
// eslint-disable-next-line
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";

import CounselingRegForm from "./Components/CounselingRegistration/CounselingRegForm";
import Headroom from "react-headroom";
import AboutUs from "./Pages/NavLinksPages/More/AboutUs/AboutUs";
import Blog from "./Pages/NavLinksPages/More/Blog/Blog";

import GateExamsTabs from "./Pages/NavLinksPages/Exams/GateExamTabs/GateExamsTabs";
import Colleges from "./Pages/NavLinksPages/Colleges/Colleges";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="App">
      <Headroom
        style={{
          WebkitTransition: "all .5s ease-in-out",
          MozTransition: "all .5s ease-in-out",
          OTransition: "all .5s ease-in-out",
          transition: "all .5s ease-in-out",
        }}
      >
        <Navbar />
      </Headroom>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/counselingRegForm" element={<CounselingRegForm />} />

        <Route path="/colleges" element={<Colleges />} />

        <Route path="/gateexams" element={<GateExamsTabs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
