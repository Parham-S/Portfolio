/*eslint  jsx-a11y/no-noninteractive-element-interactions: "off"*/
/*eslint  jsx-a11y/control-has-associated-label: "off"*/
/*eslint  jsx-a11y/click-events-have-key-events: "off"*/
import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import "../../styles/sections/skills.scss";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
  SiMysql,
  SiGraphql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMariadbfoundation,
  SiAmazonaws,
  SiMicrosoftazure,
  SiNetlify,
  SiHeroku,
  SiGithub,
  SiNpm,
} from "react-icons/si";
import { DiSass, DiPostgresql } from "react-icons/di";
import { RiGatsbyLine, RiHtml5Line, RiCss3Fill } from "react-icons/ri";

const Skills: React.FC = () => {
  const [tab, setTab] = useState<object>({ b: true });

  const Tab = ({ children, t }) => (
    <li
      className={tab[t] ? "active-tab" : ""}
      onClick={() => !Object.keys(tab).includes(t) && setTab({ [t]: true })}
    >
      {children}
    </li>
  );

  const Anim = ({ Icon, name }) => (
    <ScrollAnimation
      className="project-anim"
      initiallyVisible={true}
      animateIn="pulse"
      animateOnce={true}
      duration={0.5}
    >
      <li>
        <p>
          <Icon />
        </p>
        <p>{name}</p>
      </li>
    </ScrollAnimation>
  );

  const Icons = ({ children, t }) => (
    <>
      {tab[t] && (
        <section>
          <ul>{children}</ul>
        </section>
      )}
    </>
  );

  return (
    <div className="skills-section">
      <h1 className="section-title">Technology Stack</h1>
      <div className="skills-cont">
        <ul className="tabs">
          <Tab t="a">
            <span>Programming </span>
            <span>Languages</span>
          </Tab>
          <Tab t="b">
            <span>Front-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="c">
            <span>Back-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="d">
            <span>Database </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="e">
            <span>Storage and</span>
            <span>Deployment</span>
          </Tab>
        </ul>
        <Icons t="a">
          <Anim Icon={SiJavascript} name="JavaScript" />
          <Anim Icon={SiTypescript} name="TypeScript" />
        </Icons>
        <Icons t="b">
          <Anim Icon={SiReact} name="React" />
          <Anim Icon={RiGatsbyLine} name="Gatsby" />
          <Anim Icon={SiNextDotJs} name="Next" />
          <Anim Icon={RiHtml5Line} name="HTML" />
          <Anim Icon={RiCss3Fill} name="CSS" />
          <Anim Icon={DiSass} name="SASS" />
        </Icons>
        <Icons t="c">
          <Anim Icon={SiNodeDotJs} name="Express.js" />
          <Anim Icon={SiGraphql} name="GraphQL" />
        </Icons>
        <Icons t="d">
          <Anim Icon={SiMysql} name="MySQL" />
          <Anim Icon={DiPostgresql} name="PostgreSQL" />
          <Anim Icon={SiMicrosoftsqlserver} name="SQL Server" />
          <Anim Icon={SiMongodb} name="Mongo DB" />
          <Anim Icon={SiMariadbfoundation} name="Maria DB" />
        </Icons>
        <Icons t="e">
          <Anim Icon={SiAmazonaws} name="AWS" />
          <Anim Icon={SiMicrosoftazure} name="Azure" />
          <Anim Icon={SiGithub} name="Github" />
          <Anim Icon={SiNetlify} name="Netlify" />
          <Anim Icon={SiNpm} name="NPM" />
          <Anim Icon={RiGatsbyLine} name="Gatsby Cloud" />
          <Anim Icon={SiHeroku} name="Heroku" />
        </Icons>
      </div>
    </div>
  );
};

export default Skills;
