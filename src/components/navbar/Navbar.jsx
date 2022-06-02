import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ activate }) => {
  const active = activate.map((item) => {
    return item ? "active-btn" : "";
  });

  return (
    <div className="controls">
      <Link to="/" className={`control ${active[0]}`}>
        <i className="fas fa-home"></i>
      </Link>
      <Link to="/about" className={`control ${active[1]}`}>
        <i className="fas fa-user"></i>
      </Link>
      <Link to="/projects" className={`control ${active[2]}`}>
        <i className="fas fa-briefcase"></i>
      </Link>
      <Link
        to="/blog"
        className={`control ${active[3]}`}
        style={{ display: "none" }}
      >
        <i className="far fa-newspaper"></i>
      </Link>
      <Link to="/contact" className={`control ${active[4]}`}>
        <i className="fas fa-envelope-open"></i>
      </Link>
    </div>
  );
};

export default Navbar;
