import React from "react";

const TimelineItem = ({ title, subTitle, description, date }) => {
  return (
    <div className="timeline-item">
      <div className="tl-icon">
        <i className="fas fa-briefcase"></i>
      </div>
      <p className="tl-duration">{date}</p>
      <h5>
        {title}
        <span> - {subTitle}</span>
      </h5>
      <p>{description}</p>
    </div>
  );
};

export default TimelineItem;
