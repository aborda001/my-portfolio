import React from "react";

const TimelineItem = ({ title, subTitle, description, date, icon }) => {
  return (
    <div className="timeline-item">
      <div className="tl-icon">
        <i className={icon}></i>
      </div>
      <p className="tl-duration">{date}</p>
      <h5>
        {title}
        <span> - {subTitle}</span>
      </h5>
      {description && <p>{description}</p>}
    </div>
  );
};

export default TimelineItem;
