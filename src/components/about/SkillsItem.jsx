import React from "react";

const SkillsItem = ({ url, alt }) => {
  return (
    <div className="slide">
      <img src={url} alt={alt} />
    </div>
  );
};

export default SkillsItem;
