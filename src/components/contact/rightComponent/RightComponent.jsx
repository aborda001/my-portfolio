import React, { useRef } from "react";
import { send } from "@emailjs/browser";
import Download from "../../download/Download";

const RightComponent = () => {
  const form = useRef(null);
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = process.env;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      subject: formData.get("subject"),
    };
    form.current.reset();

    send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
  };

  return (
    <div className="right-contact">
      <form className="contact-form" ref={form}>
        <div className="input-control i-c-2">
          <input
            type="text"
            required
            placeholder="YOUR NAME"
            name="name"
            id="name"
          />
          <input
            type="email"
            required
            placeholder="YOUR EMAIL"
            name="email"
            id="email"
          />
        </div>
        <div className="input-control">
          <input
            type="text"
            required
            placeholder="ENTER SUBJECT"
            name="subject"
            id="subject"
          />
        </div>
        <div className="input-control">
          <textarea
            name="message"
            id="message"
            cols="15"
            rows="8"
            placeholder="Message Here..."
          ></textarea>
        </div>
        <div className="submit-btn">
          <button className="send-btn" onClick={handleSubmit} type="button">
            <span className="text">SUBMIT</span>
            <i className="fas fa-check icon"></i>
          </button>
          <Download />
        </div>
      </form>
    </div>
  );
};

export default RightComponent;
