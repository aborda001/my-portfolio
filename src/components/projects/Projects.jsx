import React from "react";
import useGetProjects from "../../hooks/useGetProjects";
import ProjectsItem from "./ProjectsItem";
import Title from "../title/Title";
import "./Projects.css";

const Projects = () => {
  const projects = useGetProjects();
  return (
    <section id="projects" className="main-container">
      <Title
        title="My portfolio"
        subTitle="My work"
        description="Here is some of my work that I've done in various programming languages."
      />
      <div className="portfolios">
        {projects.map((project) => (
          <ProjectsItem
            title={project.title}
            image={project.image}
            description={project.description}
            code={project.code}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
