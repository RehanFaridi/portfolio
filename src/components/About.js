import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import dev from "../assets/programmer.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="div-1">
        <div className="heading">
          <h1 className="tag">Hii there </h1>
          <h1 className="wave">&nbsp;👋</h1>
          <br />
        </div>
        <div className="name">
          <p className="tag">I'm Rehan Faridi</p>
        </div>
        <br />
        <p className="myself">
          I am a full-stack developer skilled in Node.js, Express, and React.js,
          with comprehensive experience in building both front-end and back-end
          applications.
        </p>
        <ul type="none">
          <FontAwesomeIcon icon={faGithub} className="icon-back" />
          <FontAwesomeIcon icon={faLinkedin} className="icon-back" />
          <FontAwesomeIcon icon={faGoogle} className="icon-back" />
          <FontAwesomeIcon icon={faFacebook} className="icon-back" />
        </ul>
        <br />
        <button>Contact Us</button>
        <button>See My Resume</button>
      </div>
      <div className="div-2">
        <div>
          <img src={dev} alt="dev" className="dev-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
