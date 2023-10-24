import React from "react";
import ProjectNav from "../components/ProjectNav";
import Details from "../screens/project/Details";


function Project() {
  return (
    <section className="py-24 flex gap-4  min-h-screen">
     <ProjectNav />
     <Details />
    </section>
  );
}

export default Project;
