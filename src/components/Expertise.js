import React from "react";
import devexp from "../assets/dev-expertise.png";

const Expertise = () => {
  return (
    <div className="flex" id="expertise">
      <div className="exp-div1">
        <h1>Expertise</h1>
        <br />
        <h3>Front-End/Design</h3>
        <br />
        <div className="prog-back">
          <div className="prog1"></div>
        </div>
        <br />
        <h3>Back-End</h3>
        <br />
        <div className="prog-back">
          <div className="prog2"></div>
        </div>
        <br />
        <h3>Programming</h3>
        <br />
        <div className="prog-back">
          <div className="prog3"></div>
        </div>
        <br />
      </div>
      <div className="exp-div2">
        <img src={devexp} alt="Expertise" />
      </div>
    </div>
  );
};

export default Expertise;
