import React from "react";

import "./About.css";
import Title from "../title/Title";
import Information from "./Information";
import Skills from "./Skills";
import Timeline from "./Timeline";

const AboutContent = () => {
  return (
    <section className="main-container">
      <Title title="About me" subTitle="My stats" description="" />

      <Information />
      <Skills />
      <Timeline />
    </section>
  );
};

export default AboutContent;
