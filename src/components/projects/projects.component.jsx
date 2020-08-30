import React from "react";
import "./projects.component.styles.scss";

import "./carousel.scss"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DATA from "../../projects.json";

import CarouselItem from '../carousel-item/carousel.item.component.jsx'

const Projects = () => {
  const PROJECTS_DATA = DATA;

  const carouselSettings = {
    showThumbs: false,
    showStatus: false,
    useKeyboardArrows: true,
  };

  return (
    <div className="projects">
      <div className="heading__secondary">
        <div className="heading__secondary__number">03.</div>
        <h2>Projects</h2>
      </div>
      <div className="container">
        <Carousel {...carouselSettings} className="presentation-mode">
          {PROJECTS_DATA.map(({ ...project }) => (
            <CarouselItem key={project.id} {...project} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
