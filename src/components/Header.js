import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo-img" />
        <div>
          <ul type="none" className="header-item">
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#project">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact Me</li>
            </a>
            <button className="btn">My Resume</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
