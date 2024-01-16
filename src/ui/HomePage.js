import React, { useEffect } from "react";
import Slider from "../components/slider/Slider";
import "./HomePage.css";
import Analytic from "../components/analytic/Analytic";
import Portfolio from "../components/portfolio/Portfolio";
import Quote from "../components/quote/Quote";
import Skill from "../components/skill/Skill";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="hp">
      <div id="top">
        <Slider />
        <Analytic />
        <div className="hp-content" id='portfolio-section'>
          <h3 className="hp-title">Portfolio</h3>
          <Portfolio />
        </div>
        <div className="hp-content" id="skills-section">
          <h3 className="hp-title">Skills</h3>
          <Skill />
        </div>
        <Quote />
      </div>
    </div>
  );
};

export default HomePage;
