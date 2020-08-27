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
          <a target='_blank' rel="noopener noreferrer" href="https://github.com/bidodev"><Github /></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/bidoc/"><Linkedin /></a>

        </div>
      </div>
      <div className="header__hero">
        <h1>Hey, I'm Claudinei Bido</h1>
        <h2>Software Engineer, Sysadmin and Curious</h2>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <div className="main__heading">
        {/* icon / numbers */}
        <h2>About Me</h2>
      </div>
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
      <Main />
    </div>
  );
};

export default App;
