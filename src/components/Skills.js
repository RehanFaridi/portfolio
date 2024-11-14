import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faReact,
  faNode,
  faCss3Alt,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import skildev from "../assets/skill-dev.png";

const Skills = () => {
  return (
    <div className="flex" id="skills">
      <div className="skill-div1">
        <img src={skildev} alt="tech stack" className="center-tech" />
      </div>
      <div className="skill-div2">
        <h1>Skills</h1>
        <p className="myself">What I do ?</p>
        <p className="myself">
          <i>
            Enthusiastic full-stack developer eager to explore and learn more
          </i>
        </p>

        <ul type="none">
          <FontAwesomeIcon icon={faHtml5} className="icon-back2" />
          <FontAwesomeIcon icon={faCss3Alt} className="icon-back2" />
          <FontAwesomeIcon icon={faJs} className="icon-back2" />
          <FontAwesomeIcon icon={faReact} className="icon-back2" />
          <FontAwesomeIcon icon={faNode} className="icon-back2" />
          <FontAwesomeIcon icon={faNpm} className="icon-back2" />
        </ul>
        <p className="myself skill-use">
          I create engaging, intuitive designs using Tailwind CSS.
          <br />
          I leverage React for a well-structured, component-based file system.
          <br />
          I use Node.js to provide a powerful JavaScript runtime environment.
          <br />
          I integrate Express for efficient server-side functionality.
          <br />
          Together, these tools enable me to build dynamic, responsive web
          applications.
        </p>
      </div>
    </div>
  );
};

export default Skills;
