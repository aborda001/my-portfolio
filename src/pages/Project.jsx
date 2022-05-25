import React from "react";

import Layout from "../containers/Layout";
import Projects from "../components/projects/Projects";

const Project = () => {
  return (
    <Layout activate={[false, false, true, false, false]}>
      <Projects />
    </Layout>
  );
};

export default Project;
