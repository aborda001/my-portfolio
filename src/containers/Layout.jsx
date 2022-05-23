import React from "react";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children, activate }) => {
  return (
    <>
      <Navbar activate={activate} />
      {children}
    </>
  );
};

export default Layout;
