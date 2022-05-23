import React from "react";
import Cover from "../components/cover/Cover";
import Layout from "../containers/Layout";

const Home = () => {
  return (
    <Layout activate={[true, false, false, false, false]}>
      <Cover />
    </Layout>
  );
};

export default Home;
