import React from "react";

import Download from "../download/Download";

const Information = () => {
  return (
    <div className="info-container">
      <div className="left-about">
        <h4>Information About me</h4>
        <p>
          Computer Engineering student. I love programming and everything
          related to technology. I am passionate about learning new things,
          regardless of the area.
          <br /> <br />I am a self-taught programmer and i'm always looking for
          new ways to improve my skills.
        </p>
        <Download />
      </div>
    </div>
  );
};
export default Information;
