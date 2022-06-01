import React from "react";

import Information from "./Information";

const LeftComponent = () => {
  return (
    <div className="left-contact">
      <h4>Contact me here</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum
        numquam? Quam excepturi perspiciatis quas quasi.
      </p>
      <div className="contact-info">
        <Information />
      </div>
    </div>
  );
};

export default LeftComponent;
