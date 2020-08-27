import React, { useEffect } from "react";
import "./app.scss";
import { ReactComponent as Logo } from "./imgs/logo.svg";
import { ReactComponent as Linkedin } from "./imgs/linkedin.svg";
import { ReactComponent as Github } from "./imgs/github.svg";

const Header = ({ nav }) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__nav" ref={nav}>
          <Logo className="header__nav__logo" />
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
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <div className="heading__secondary">
        <div className="heading__secondary__number">03.</div>
        <h2>Projects</h2>
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
    </div>
  );
};


const Footer = () => {
  return (
    <div className="footer">

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
