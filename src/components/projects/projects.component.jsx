import React from "react";
import "./projects.component.styles.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  const PROJECTS_DATA = [{ id: "1" }, { id: "2" }, { id: "3" }];

  const CarouselItem = ({ id }) => {
    return (
      <div>
        <div className="a">
          <div className="c">
            <div className="tecnologies"></div>
            <div className="title">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>2020.09.10 BERLIN</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              quaerat impedit, eius libero ducimus quo rem corporis beatae eum
              quia.
            </p>
          </div>
          <div className="d">ddddddddd</div>
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
        <Carousel>
          {PROJECTS_DATA.map((project) => (
            <CarouselItem key={project.id} id={project.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
