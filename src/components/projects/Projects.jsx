import React from "react";
import useGetProjects from "../../hooks/useGetProjects";
import ProjectsItem from "./ProjectsItem";
import "./Projects.css";

const Projects = () => {
  const projects = useGetProjects();
  return (
    <section id="projects" className="main-container">
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
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
