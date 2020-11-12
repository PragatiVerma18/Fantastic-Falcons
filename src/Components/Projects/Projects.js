import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div>
      <h1 className="text-center">
        <strong>Projects</strong>
      </h1>
      <div className="container">
        <div className="row">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
