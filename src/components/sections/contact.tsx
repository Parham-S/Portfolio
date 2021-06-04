/*eslint  jsx-a11y/control-has-associated-label: "off"*/
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

import "../../styles/sections/contact.scss";

const Contact: React.FC = () => (
  <div className="contact-section">
    <div className="content-cont">
      <h1 className="section-title">Contact Me</h1>
      <p>Direct Email</p>
      <a
        href="https://mail.google.com/mail/u/0/?fs=1&to=psaniei@hotmail.com&su=Developer%20Inquiry&tf=cm"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <HiOutlineMail />
        </button>
      </a>
    </div>
    <div className="content-cont">
      <p>Other Platforms</p>
      <div className="button-cont">
        <a href="https://github.com/Parham-S" target="_blank" rel="noreferrer">
          <button>
            <SiGithub />
          </button>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <button>
            <SiLinkedin />
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
