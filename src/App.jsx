import React, { useEffect } from "react";
import "./app.scss";
import { ReactComponent as Logo } from "./imgs/logo.svg";
import { ReactComponent as Linkedin } from "./imgs/linkedin.svg";
import { ReactComponent as Github } from "./imgs/github.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const About = () => {
  return (
    <div className="about">
      <div className="heading__secondary">
        <div className="heading__secondary__number">01.</div>
        <h2>About Me</h2>
      </div>
      <div className="about__wrapper">
        <div className="about__wrapper__img"></div>
        <div className="about__wrapper__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
            fermentum diam ac volutpat si. Mi lacus ultrices eget porttitor leo.
            Sed suspendisse ac nulla orci, risus. Massa pulvinar in quisque
            lorem ac quam pretium placerat nulla. Sagittis non urna bibendum
            vel. Netus etiam egestas ut sed ante est.
          </p>

          <p>
            Nec tortor quisque adipiscing mauris urna pharetra facilisi nec.
            Porta felis, nunc, suspendisse ltrices purus sollicitudin. Nibh
            tincidunt suspendisse rhoncus duis. A amet facilisis odio pharetra
            at ullamcorper mattis quam et. Massa arcu nunc, urna tellus nunc,
            turpis.
          </p>

          <p>
            Leo et enim malesuada tempor enim. Vel nunc, viverra arcu nisi, sit
            eu, augue tincidunt eget. Lectus magna proin enim, orci massa
            egestas aliquam porttitor magna.
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <div className="heading__secondary">
        <div className="heading__secondary__number">03.</div>
        <h2>Projects</h2>
        <div></div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="heading__secondary">
        <div className="heading__secondary__number">04.</div>
        <h2>contact</h2>
      </div>
      <div className="contact__info">
        <div className="contact__info__form">
          <input type="text"></input>
          <input type="email"></input>
          <input type="text"></input>
          <button>Send</button>
        </div>
        <div className="contact__info__contact">
          <div className="contact__info__contact__details">
            <div>
              <h2>Phone</h2>
              <p>+49 1791037171</p>
            </div>
            <div>
              <h2>E-Mail</h2>
              <p>claudinei.bido@gmail.com</p>
            </div>
          </div>

          <div className="contact__info__icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bidoc/"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
            </a>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bidodev"
          >
            <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
          </a>
            
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/claudineibido/"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} className="icon" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>COPYRIGHT © CLAUDINEIBIDO. ALL RIGHTS RESERVED. </p>
    </div>
  );
};

const App = () => {
  const nav = React.createRef();

  /*On component mount add eventListener */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        window.requestAnimationFrame(() => {
          nav.current.classList.add("fixed");
        });
      } else {
        window.requestAnimationFrame(() => {
          nav.current.classList.remove("fixed");
        });
      }
    };

    window.addEventListener("scroll", handleScroll, true);
  }, [nav]);

  return (
    <div className="app">
      <Header nav={nav} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
