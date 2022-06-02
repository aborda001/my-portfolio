import React from "react";

import Download from "../../download/Download";

const RightComponent = () => {
  return (
    <div className="right-contact">
      <div className="contact-form">
        <div className="input-control i-c-2">
          <input type="text" required placeholder="YOUR NAME" />
          <input type="email" required placeholder="YOUR EMAIL" />
        </div>
        <div className="input-control">
          <input type="text" required placeholder="ENTER SUBJECT" />
        </div>
        <div className="input-control">
          <textarea
            name=""
            id=""
            cols="15"
            rows="8"
            placeholder="Message Here..."
          ></textarea>
        </div>
        <div className="submit-btn">
          <button className="send-btn">
            <span className="text">SUBMIT</span>
            <i className="fas fa-check icon"></i>
          </button>
          <Download />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
