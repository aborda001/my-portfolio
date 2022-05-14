import React from "react";
import "./Services.css";

const ServicesItem = ({ title, image, description }) => {
  return (
    <div className="service-item">
      <div className="icon">
        <img src={image} alt="Background" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesItem;
