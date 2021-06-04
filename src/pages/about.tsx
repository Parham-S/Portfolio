import React from "react";

import Layout from "../components/layouts/home-layout";
import Contact from "../components/sections/contact";
import SEO from "../components/seo";

import "../styles/about.scss";

const About: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about-route">
      <h1 className="section-title">About me</h1>
      <div className="about-cont">
        <h2>Background</h2>
        <p className="info">My name is Parham </p>
        <h2>Education</h2>
        <ul>
          <li>
            <p>Florida International University - 2018</p>
            <p>Bachelor of Arts in Political Science</p>
            <p>3.4 GPA</p>
          </li>
          <li>
            <p>Wyncode - BrainStation - 2021</p>
            <p>Full Stack Web Development Diploma Program</p>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  </Layout>
);

export default About;
