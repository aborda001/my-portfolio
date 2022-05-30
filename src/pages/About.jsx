import React from "react";

import Layout from "../containers/Layout";
import AboutContent from "../components/about/AboutContent";

const About = () => {
  return (
    <Layout activate={[false, true, false, false, false]}>
      <AboutContent />
    </Layout>
  );
};

export default About;
