import React from "react";
import Img from "gatsby-image";

import "../../styles/sections/intro.scss";

const Introduction: React.FC = () => (
  <div className="introduction-section">
    <div className="intro-cont">
      <h4 className="subTitle">Parham Saniei</h4>
      <p className="snippet">Full Stack Web Developer</p>
      <p className="snippet">“It works on my machine.”</p>
      <p className="snippet">Miami, Florida</p>
    </div>
  </div>
);

export default Introduction;
