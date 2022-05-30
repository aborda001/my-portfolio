import React from "react";

import useGetTimeline from "../../hooks/useGetTimeline";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const data = useGetTimeline();

  return (
    <>
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        {data.map((item, index) => (
          <TimelineItem
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            date={item.date}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Timeline;
