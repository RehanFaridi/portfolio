import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div>
      <div className="contact" id="contact">
        <h1>Get In Touch</h1>
        <p className="myself">
          Whether you want to discuss an idea or just say hi, I’m happy to see
          you!
        </p>
        <p className="myself">Currently : Coding ☕ </p>
        <p className="myself">Availble For : Team Work 🤝 </p>
        <div className="getin-touch">
          <ul type="none">
            <FontAwesomeIcon icon={faGithub} className="icon-back github" />
            <FontAwesomeIcon icon={faLinkedin} className="icon-back linkedin" />
            <FontAwesomeIcon icon={faGoogle} className="icon-back google" />
            <FontAwesomeIcon icon={faFacebook} className="icon-back facebook" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
