import React from "react";
import "./projects.component.styles.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DATA from "../../projects.json";

const Projects = () => {
  const PROJECTS_DATA = DATA;
  console.log(PROJECTS_DATA);

  const carouselSettings = {
    showThumbs: false,
    showStatus: false,
    useKeyboardArrows: true,
  };

  const CarouselItem = ({ id, title, description, date, city, tecnologies }) => {
    return (
      <div>
        <div className="a">
          <div className="c">
            <div className="tecnologies">
              {tecnologies.map((tecnologie) => <h3>{tecnologie}</h3>)}
            </div>
            <div className="title">
              <p>{title}</p>
              <p>{date} {city}</p>
            </div>
            <p>{description}</p>
          </div>
          <div className="d">{id}</div>
        </div>
      </div>
    );
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
