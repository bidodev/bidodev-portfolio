import React from "react";

const CarouselItem = ({
  id,
  title,
  extra,
  description,
  date,
  city,
  cover,
  tecnologies,
  link,
}) => {
  return (
    <div className="react-carousel">
      <div className="a">
        <div className="c">
          <div className="tecnologies">
            {tecnologies.map((tecnologie, i) => (
              <img key={i} src={`./icons/${tecnologie}.png`} alt={tecnologie} />
            ))}
          </div>
          <div className="title">
            <p>{title}</p>
            <p>
              {date} {city}
            </p>
          </div>
                  <div className="paragraphs">
                  <p>{extra}</p>
          <p>{description}</p>
            </div>
        </div>
        <div className="d" onClick={() => window.open(`${link}`, "_blank")}>
          <img
            key={id}
            src={`./projects/${cover}`}
            title={title}
            alt={cover}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
