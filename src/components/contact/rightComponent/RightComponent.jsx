import React, { useRef, useState } from "react";
import { send } from "@emailjs/browser";

import Download from "../../download/Download";

const RightComponent = () => {
  const form = useRef(null);
  const [isSending, setSending] = useState(false);
  const [isSended, setSended] = useState(false);

  const handleSubmit = () => {
    setSending(true);
    const {
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      REACT_APP_PUBLIC_KEY,
    } = process.env;
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      subject: formData.get("subject"),
    };

    send(
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      data,
      REACT_APP_PUBLIC_KEY
    ).then(() => {
      form.current.reset();
      setSended(true);
    });
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
          <button
            className={`send-btn ${isSended && "sending"} `}
            onClick={handleSubmit}
            type="button"
          >
            <span className="text">{isSending ? "SENDING..." : "SUBMIT"}</span>
            <i className="fas fa-check icon"></i>
          </button>
          <Download />
        </div>
      </form>
    </div>
  );
};

export default RightComponent;
