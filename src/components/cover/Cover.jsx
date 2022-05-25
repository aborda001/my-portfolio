import React from "react";
import { Link } from "react-router-dom";
import "./Cover.css";

const Cover = () => {
  return (
    <div id="hero">
      <div className="hero container">
        <div>
          <h1>
            Hello, <span></span>
          </h1>
          <h1>
            My name is <span></span>
          </h1>
          <h1>
            Arnaldo <span></span>
          </h1>
          <Link to="/projects" className="cta">
            Portafolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;
