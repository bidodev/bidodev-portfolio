import React from 'react'
import './contact.component.styles.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
      <div className="contact">
        <div className="heading__secondary">
          <div className="heading__secondary__number">04.</div>
          <h2>contact</h2>
        </div>
        <div className="contact__info">
          <div className="contact__info__form">
            <input type="text"></input>
            <input type="email"></input>
            <input type="text"></input>
            <button>Send</button>
          </div>
          <div className="contact__info__contact">
            <div className="contact__info__contact__details">
              <div>
                <h2>Phone</h2>
                <p>+49 1791037171</p>
              </div>
              <div>
                <h2>E-Mail</h2>
                <p>claudinei.bido@gmail.com</p>
              </div>
            </div>
  
            <div className="contact__info__icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bidoc/"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
              </a>
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bidodev"
            >
              <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
            </a>
              
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/claudineibido/"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} className="icon" />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Contact
