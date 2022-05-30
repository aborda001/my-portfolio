import React from "react";

const Information = () => {
  return (
    <div className="info-container">
      <div className="left-about">
        <h4>Information About me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          labore nihil obcaecati consequatur. Debitis error doloremque, vero eos
          vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
          delectus dolore fugiat exercitationem a, ipsum quidem quo enim natus
          accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Harum non necessitatibus deleniti eum
          soluta.
        </p>
        <div className="btn-con">
          <a href="/" className="main-btn">
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Information;
