import React from "react";

import "./Contact.css";
import Title from "../title/Title";
import LeftComponent from "./leftComponent/LeftComponent";
import RightComponent from "./rightComponent/RightComponent";

const ContactContent = () => {
  return (
    <section className="main-container">
      <Title title="Contact me" subTitle="Contact" description="" />
      <div className="contact-content">
        <LeftComponent />
        <RightComponent />
      </div>
    </section>
  );
};

export default ContactContent;
