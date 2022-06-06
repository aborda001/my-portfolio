import React from "react";

import "./Download.css";
import pdf from "../../assets/files/Arnaldo_Borda_CV.pdf";

const Download = () => {
  return (
    <div className="btn-con">
      <a
        href={pdf}
        className="main-btn"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="btn-text">Download CV</span>
        <span className="btn-icon">
          <i className="fas fa-download"></i>
        </span>
      </a>
    </div>
  );
};

export default Download;
