import React from "react";

import SkillsItem from "./SkillsItem";
import useGetSkills from "../../hooks/useGetSkills";

const Skills = () => {
  const skills = useGetSkills();
  return (
    <div className="about-stats">
      <h4 className="stat-title">My Skills</h4>

      <div className="slider">
        <div className="slide-track">
          {skills.map((skill, index) => (
            <SkillsItem
            url={skill.url}
            alt={skill.alt}
            key={index}
            />
          ))}
          {skills.map((skill, index) => (
            <SkillsItem
            url={skill.url}
            alt={skill.alt}
            key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
