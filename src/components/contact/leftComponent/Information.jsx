import React from "react";

const Information = () => {
  return (
    <>
      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
          <span>Location</span>
        </div>
        <p>: Misiones, Paraguay</p>
      </div>
      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-envelope"></i>
          <span>Email</span>
        </div>
        <p>
          <span>: loremipsum@gmail.com</span>
        </p>
      </div>
      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-user-graduate"></i>
          <span>Education</span>
        </div>
        <p>
          <span>: Nosexd, University</span>
        </p>
      </div>
      <div className="contact-item">
        <div className="icon">
          <i className="fas fa-globe-africa"></i>
          <span>Languages</span>
        </div>
        <p>
          <span>: English, Spanish, Guaraní</span>
        </p>
      </div>
      <div class="contact-icons">
        <div class="contact-icon">
          <a href="/" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="/" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="/" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="/" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Information;
