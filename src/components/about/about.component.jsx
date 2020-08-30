import React from 'react';
import './about.component.styles.scss';

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
            I am a Software Engineer with experience in Javascript/ES6 / NodeJS
            / React / Redux / Express / MongoDB, side experiences on C / C++
            Pascal / Delphi / SQL / PHP, System Administration, Technical
            Support, Databases, Management.
          </p>

          <p>
            Computers and coding have always been part of my life. Since I was a
            kid, I loved to assemble e dissemble things in order to know how the
            technology works. It led me to take the Computer Technician course,
            where I specialized in Linux Servers and Networks. My first coding
            experience was with Pascal / Delphi, and at University, during the
            Science Computer course, I had contact with C and C++.
          </p>

          <p>
            After University, I dedicated myself to the Hardware field, working
            mainly as Sysadmin and Technical Support, having contact with PHP,
            Lua, Shell Script, and SQL. I define myself as a problem solver who
            loves challenges when there is a problem I will work towards a
            solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
