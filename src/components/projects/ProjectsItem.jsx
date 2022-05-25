import React from "react";
import "./Projects";

const ProjectsItem = ({ title, image, description, code, link }) => {
  return (
    <div className="portfolio-item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="hover-items">
        <h3>{title}</h3>
        <div className="icons">
          <a href={code} className="icon">
            <i className="fab fa-github"></i>
          </a>
          <a href={link} className="icon">
            <i className="fab fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
