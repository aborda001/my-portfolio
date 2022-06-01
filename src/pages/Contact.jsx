import React from "react";
import Layout from "../containers/Layout";
import ContactContent from "../components/contact/ContactContent";

const Contact = () => {
  return (
  <Layout activate={[false, false, false, false, true]}>
    <ContactContent />
  </Layout>
  );
};

export default Contact;
