import React from 'react'
import './about.component.styles.scss'


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
  
export default About
