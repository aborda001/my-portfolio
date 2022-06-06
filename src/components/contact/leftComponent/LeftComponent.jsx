import React from "react";

import Information from "./Information";

const LeftComponent = () => {
  return (
    <div className="left-contact">
      <h4>Contact me here</h4>
      <p>
        Let's talk about your project, or just say hello. I am always open to
        new ideas and challenges. You can contact me through the following ways:
        <br />
        <br />
      </p>
      <div className="contact-info">
        <Information />
      </div>
    </div>
  );
};

export default LeftComponent;
