import React from 'react';
import './contact.component.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="heading__secondary">
        <div className="heading__secondary__number">03.</div>
        <h2>contact</h2>
      </div>
      <div className="contact__info">
        <form className="contact__info__form" onSubmit={(event)=> event.preventDefault() }>
          <input placeholder="Name" required type="text"></input>
          <input placeholder="Email" type="email"></input>
          <textarea className="textarea"
            name="text"
            rows="10"
            required
            placeholder="Your message here"
          ></textarea>
          <button type="submit">Send</button>
        </form>
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
              <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bidodev"
            >
              <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/claudineibido/"
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
