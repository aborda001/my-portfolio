import React from "react";

import useGetTimeline from "../../hooks/useGetTimeline";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const [work, academic] = useGetTimeline();

  return (
    <>
      <h4 className="stat-title">My Work Experience </h4>
      <div className="timeline">
        {work.map((item, index) => (
          <TimelineItem
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            date={item.date}
            icon="fas fa-briefcase"
            key={index}
          />
        ))}
      </div>
      <h4 className="stat-title">My academic information</h4>
      <div className="timeline">
        {academic.map((item, index) => (
          <TimelineItem
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            date={item.date}
            icon="fas fa-graduation-cap"
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Timeline;
