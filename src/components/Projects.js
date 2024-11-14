import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGithub,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div>
      <div className="projects" id="project">
        <h1>My Projects</h1>
      </div>
      <div>
        <ul type="none" className="project-list">
          <li>
            <h2>
              <FontAwesomeIcon icon={faGithub} /> React Calculator ➕
            </h2>
            <p>React + Tailwind </p>
            <p>
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#F0DB4F", fontSize: "1.5rem" }}
              />{" "}
              JavaScript{" "}
            </p>
          </li>
          <li>
            <h2>
              <FontAwesomeIcon icon={faGithub} /> My Portfolio 🧑‍💻
            </h2>
            <p>React + Material UI </p>
            <p>
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#F0DB4F", fontSize: "1.5rem" }}
              />{" "}
              JavaScript{" "}
              <FontAwesomeIcon
                icon={faBootstrap}
                style={{ color: "blue", fontSize: "1.5rem" }}
              />{" "}
              Bootstrap{" "}
            </p>
          </li>
          <li>
            <h2>
              <FontAwesomeIcon icon={faGithub} /> Landing Page 🧑
            </h2>
            <p>React + Material UI </p>
            <p>
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#F0DB4F", fontSize: "1.5rem" }}
              />{" "}
              JavaScript{" "}
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: "blue", fontSize: "1.5rem" }}
              />{" "}
              React{" "}
            </p>
          </li>
          <li>
            <h2>
              <FontAwesomeIcon icon={faGithub} /> E-Commerce App 🛒
            </h2>
            <p>React + Material UI </p>
            <p>
              <FontAwesomeIcon
                icon={faNode}
                style={{ color: "green", fontSize: "1.5rem" }}
              />{" "}
              Node Js{" "}
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#F0DB4F", fontSize: "1.5rem" }}
              />{" "}
              JavaScript{" "}
            </p>
          </li>
          <li>
            <h2>
              <FontAwesomeIcon icon={faGithub} /> Quiz Maker 💯
            </h2>
            <p>React + Material UI </p>
            <p>
              <FontAwesomeIcon
                icon={faCss3}
                style={{ color: "blue", fontSize: "1.5rem" }}
              />{" "}
              CSS{" "}
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#F0DB4F", fontSize: "1.5rem" }}
              />{" "}
              JavaScript{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
<div>
  <div className="projects">
    <h1>Expertise</h1>
  </div>
</div>;
