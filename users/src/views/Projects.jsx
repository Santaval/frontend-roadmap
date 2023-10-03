import React from "react";
import ProjectPreview from "../components/ProjectPreview";

function Projects() {
  return (
    <section className="min-h-screen py-24 px-8 md:px-16">
      <h5>Mis sitios web</h5>

      <div className="mt-8">
        <ProjectPreview />

      </div>
    </section>
  );
}

export default Projects;
