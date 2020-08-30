import React from "react";

const CarouselItem = ({
  id,
  title,
  description,
  date,
  city,
  cover,
  tecnologies,
  link,
}) => {
  return (
    <div>
      <div className="a">
        <div className="c">
          <div className="tecnologies">
            {tecnologies.map((tecnologie, i) => (
              <img
                key={i}
                src={`./icons/${tecnologie}.png`}
                alt={tecnologie}
              />
            ))}
          </div>
          <div className="title">
            <p>{title}</p>
            <p>
              {date} {city}
            </p>
          </div>
          <p>{description}</p>
        </div>
        <div className="d" onClick={() => window.open(`${link}`, '_blank')}>
          <img
            key={id}
            src={`./projects/${cover}.png`}
            title={title}
            alt={cover}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
