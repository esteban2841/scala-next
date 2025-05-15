"use client";
import React from "react";
import ProjectCard from "@/components/atoms/ProjectCard";

export default function ProjectsGrid({ projects = []}) {
  if (projects.length === 0) {
    return <p className="text-center text-secondary">No hay proyectos para esta categoría.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
      {projects.map(({ title, location, img, route }) => (
        <ProjectCard
          key={title}
          title={title}
          location={location}
          img={img}
          redirectTo={route}
        />
      ))}
    </div>
  );
}
