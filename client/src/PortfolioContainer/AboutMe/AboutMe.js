import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import "./AboutMe.css";

export default function AboutMe(props) {
  
 

  const SCREEN_CONSTSANTS = {
    description:
      "Full stack web and mobile developer, along with a knack of building applications with utmost efficiency.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Interactive Front End as per the design",
        "React and Vue Framework",
        "Django Framework",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span><strong>{value}</strong></span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span><b>{SCREEN_CONSTSANTS.highlights.heading}</b></span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a href="Ines Bouguerra CV.pdf" download="Ines Bouguerra.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
