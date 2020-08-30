import React from 'react'
import './header.component.styles.scss'

import { ReactComponent as Logo } from "../../imgs/logo.svg";
import { ReactComponent as Linkedin } from "../../imgs/linkedin.svg";
import { ReactComponent as Github } from "../../imgs/github.svg";

const Header = ({ nav }) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__nav" ref={nav}>
          <div className="header__nav__logo">
            <Logo />
          </div>
          <ul className="header__nav__links">
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="header__wrapper__social">
          <span></span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bidodev"
          >
            <Github />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bidoc/"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="header__hero">
        <h1>Hey, I'm Claudinei Bido</h1>
        <h2>Software Engineer, Sysadmin and Curious</h2>
      </div>
    </div>
  );
};

export default Header
