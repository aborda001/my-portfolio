import React from "react";
import "./Title.css";

const Title = ({ title, subTitle, description }) => {
  const titleSplited = title.split(" ");
  return (
    <div id="main-title">
      <div className="main-title">
        <h2>
          {titleSplited[0]} <span>{titleSplited[1]}</span>
          <span className="bg-text">{subTitle}</span>
        </h2>
      </div>
      <p className="port-text">
        {description}
      </p>
    </div>
  );
};

export default Title;
