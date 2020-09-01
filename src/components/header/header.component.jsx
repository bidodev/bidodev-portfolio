import React, { useEffect } from 'react';
import './header.component.styles.scss';
import anime from 'animejs/lib/anime.es.js';

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

    var loop = true;
    var easing = 'linear';
    var direction = 'alternate';

    anime({
      targets: '.ball',
      translateX: 470,
      translateY: 100,
      easing,
      loop,
      direction,
      background: [
        { value: '#573796' },
        { value: '#FB89FB' },
        { value: '#FBF38C' },
        { value: '#18FF92' },
        { value: '#5A87FF' },
      ],
    });
    var ballTimeline = anime.timeline({
      loop,
      direction,
    });
    var bar2Timeline = anime.timeline({
      loop,
      direction,
    });
    var bar1Timeline = anime.timeline({
      loop,
      direction,
    });
    ballTimeline
      .add({
        targets: '.ball',
        translateY: 100,
        translateX: 470,
        easing,
      })
      .add({
        targets: '.ball',
        translateY: 0,
        translateX: 0,
        easing,
      })
      .add({
        targets: '.ball',
        translateY: '-80',
        translateX: 470,
        easing,
      });
    bar2Timeline
      .add({
        targets: '.bar2',
        translateY: 100,
        easing,
        background: '#573796',
      })
      .add({
        targets: '.bar2',
        translateY: 0,
        easing,
        background: '#FB89FB',
      })
      .add({
        targets: '.bar2',
        translateY: '-100',
        easing,
        background: '#FBF38C',
      });
    bar1Timeline
      .add({
        targets: '.bar1',
        translateY: '-80',
        easing,
        background: '#18FF92',
      })
      .add({
        targets: '.bar1',
        translateY: 10,
        easing,
        background: '#5A87FF',
      })
      .add({
        targets: '.bar1',
        translateY: 60,
        easing,
        background: '#FF1461',
      });
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
        <div className="header__hero__name">
        <h1>Hey, I'm Claudinei Bido</h1>
          <h2>Software Engineer, Sysadmin and Curious</h2>
        </div>
        <div className="header__hero__container">
          <div className="bar bar1"></div>
          <div className="ball"></div>
          <div className="bar bar2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
