import React, { useEffect } from 'react';
import './header.component.styles.scss';

import { ReactComponent as Logo } from '../../imgs/logo.svg';
import { ReactComponent as Linkedin } from '../../imgs/linkedin.svg';
import { ReactComponent as Github } from '../../imgs/github.svg';

import { ReactComponent as NumberOne } from '../../imgs/1.svg';
import { ReactComponent as NumberTwo } from '../../imgs/2.svg';
import { ReactComponent as NumberThree } from '../../imgs/3.svg';

const Header = () => {
  const nav = React.createRef();

  /*On component mount add eventListener */
  useEffect(() => {
    const handleScroll = () => {
      const className = 'fixed';
      const element = nav.current;

      window.requestAnimationFrame(() => {
        window.scrollY > 10
          ? element.classList.add(className)
          : element.classList.remove(className);
      });
    };

    window.addEventListener('scroll', handleScroll, true);
  }, [nav]);

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__nav" ref={nav}>
          <div className="header__nav__logo">
            <Logo />
          </div>
          <ul className="header__nav__links">
            <li>
              <a href="#about">
                <NumberOne /> About Me
              </a>
            </li>
            <li>
              <a href="#projects">
                <NumberTwo /> Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <NumberThree /> Contact
              </a>
            </li>
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

export default Header;
