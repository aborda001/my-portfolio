import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import "./Cover.css";

const Cover = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div id="hero">
          <div className="hero container">
            <div>
              <h1>
                Hello, <span></span>
              </h1>
              <h1>
                My name is <span></span>
              </h1>
              <h1>
                Arnaldo Borda<span></span>
              </h1>
              <Link to="/projects" className="cta">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cover;
