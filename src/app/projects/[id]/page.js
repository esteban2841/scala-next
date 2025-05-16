"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import { use } from "react";
import EmptyCarrusel from "@/components/molecules/EmptyCarrusel";
import Image from "next/image";
import { projects } from "@/data/content";
import TabMenu from "@/components/molecules/TabMenu";

export default function Page({ params }) {
  const router = useRouter();
  const { id } = use(params); // Unwrap the params Promise
  const project = projects.projectDetails[id];

  if (!project) {
    return (
      <div className="bg-primary text-secondary p-8">Project not found</div>
    );
  }

  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      <TabMenu className="absolute w-full justify-end right-3"/>
      {/* Title Section */}
      <section className="mb-8">
        <section className="mb-8">
          <div className="flex items-center">
            {/* the dash */}
            <span className="text-xl sm:text-3xl font-bold mr-4 leading-none">
              ■
            </span>

            {/* your title */}
            <h1 className="text-2xl lg:text-6xl font-bold">{project.title}</h1>

            {/* the line that fills the rest of the row */}
            <hr className="ml-6 flex-1 border-0 md:border-t-2 border-secondary" />
          </div>
        </section>
        <div className="-mx-4 sm:-mx-6 lg:-mx-20 mb-10">
          <img
            src={project.headerImage}
            alt={project.title}
            className="w-screen max-w-none h-auto object-cover"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 uppercase text-base sm:text-xl">
          <div className="flex flex-col">
            <span className="font-bold">YEAR</span>
            <span>{project.year}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">CATEGORY</span>
            <span>{project.category}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">CLIENT</span>
            <span>{project.client}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">SQFT</span>
            <span>{project.sqft}</span>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="mb-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-10">
        <Image
          src="/assets/projects/up-arrow.png"
          alt=""
          width={40}
          height={40}
          className="
            w-6 h-6
            hidden
            sm:block
            sm:w-8 sm:h-8
            md:w-16 md:h-16
            lg:w-20 lg:h-20
            xl:w-28 xl:h-28
            rotate-180
          "
        />
        <p className="mb-4 font-primary leading-loose text-base sm:text-xl">
          {project.description1}
        </p>
      </section>

      {/* ← Gallery Section */}
      {/* Mobile: show carousel */}
      <div className="sm:hidden mb-12">
        <EmptyCarrusel
          slides={project.images.map((src) => ({ src }))}
          interval={5000}
        />
      </div>

      {/* Desktop+Tablet: show grid */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20 mb-12">
        {project.images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${project.title} ${idx + 1}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
      <section className="mb-8">
        <p className="text-base sm:text-xl font-primary text-secondary leading-loose text-justify">
          {project.description2}
        </p>
      </section>
      <div className="-mx-4 sm:-mx-6 lg:-mx-20 mb-10">
        <img
          src={project.endImage}
          alt={project.title}
          className="w-screen max-w-none h-auto object-cover"
        />
      </div>

      {/* Navigation Section */}
      <section className="flex flex-col sm:flex-row gap-4 sm:gap-32 mb-8">
        <div
          onClick={() => router.push(project.prevRoute)}
          className="relative cursor-pointer group"
        >
          <img
            src={project.prevImage}
            alt="Previous Project"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-secondary bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-2xl md:text-4xl lg:text-8xl text-center font-primary font-bold text-primary text-wrap">
              Previous Project
            </span>
          </div>
        </div>
        <div
          onClick={() => router.push(project.nextRoute)}
          className="relative cursor-pointer group"
        >
          <img
            src={project.nextImage}
            alt="Next Project"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-secondary bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-2xl md:text-4xl lg:text-8xl text-center font-primary font-bold text-primary text-wrap">
              Next Project
            </span>
          </div>
        </div>
      </section>

      <Footer classname="w-full" />
    </div>
  );
}
