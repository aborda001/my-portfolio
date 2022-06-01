import React from "react";

import "./Download.css";

const Download = () => {
  return (
    <div className="btn-con">
      <a href="/" className="main-btn">
        <span className="btn-text">Download CV</span>
        <span className="btn-icon">
          <i className="fas fa-download"></i>
        </span>
      </a>
    </div>
  );
};

export default Download;
