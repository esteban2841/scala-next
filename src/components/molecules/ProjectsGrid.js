"use client";
import React from "react";
import ProjectCard from "@/components/atoms/ProjectCard";

export default function ProjectsGrid({ projects = [] }) {
  if (projects.length === 0) {
    return <p className="text-center text-secondary">No hay proyectos para esta categoría.</p>;
  }

  // Calculate columns based on project count for centering
  let gridCols = "grid-cols-1";
  if (projects.length === 2) gridCols = "sm:grid-cols-2";
  else if (projects.length === 3) gridCols = "md:grid-cols-3";
  else if (projects.length >= 4) gridCols = "lg:grid-cols-4";

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-6 justify-items-center `}
    >
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
