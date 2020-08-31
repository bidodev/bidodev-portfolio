import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselItem = ({
  id,
  title,
  extra,
  description,
  date,
  city,
  cover,
  tecnologies,
  linkLive,
  linkGitHub,
}) => {
  return (
    <div className="custom__carousel">
      <div className="custom__carousel__wrapper">
        <div className="custom__carousel__informations">
          <div className="custom__carousel__informations__tecnologies">
            {tecnologies.map((tecnologie, i) => (
              <img
                key={i}
                src={`./icons/${tecnologie}.png`}
                title={tecnologie}
                alt={tecnologie}
              />
            ))}
          </div>
          <div className="custom__carousel__informations__title">
            <p>{title}</p>
            <p>
              {date} {city}
            </p>
          </div>
          <div className="custom__carousel__informations__paragraphs">
            <p>{extra}</p>
            <p>{description}</p>
            <p><FontAwesomeIcon  onClick={() => window.open(`${linkGitHub}`, '_blank')} icon={["fab", "github"]} className="icon" /></p>
          </div>

         
        </div>
        <div className="custom__carousel__project-image" onClick={() => window.open(`${linkLive}`, '_blank')}>
          <img key={id} src={`./projects/${cover}`} title={title} alt={cover} />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
