"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import EmptyCarrusel from "@/components/molecules/EmptyCarrusel";
import TabMenu from "@/components/molecules/TabMenu";
import Footer from "@/components/organisms/Footer";
import Image from "next/image";
import { projects } from "@/data/content";
import { motion } from "framer-motion";

export default function Page({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const project = projects.projectDetails[id];
  const [zoomedSlide, setZoomedSlide] = useState(null);

  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  const prevZoom = (e) => {
    e.stopPropagation();
    setZoomedSlide((i) =>
      i === null
        ? null
        : (i - 1 + project.images.length) % project.images.length
    );
  };
  const nextZoom = (e) => {
    e.stopPropagation();
    setZoomedSlide((i) =>
      i === null ? null : (i + 1) % project.images.length
    );
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      
      <TabMenu className="absolute w-full justify-end right-3" />

      {/* Title Section */}
      <motion.section {...fadeIn} className="my-16">
        <div className="mb-16">
          <div className="flex items-center">
            <span className="text-xl sm:text-3xl font-bold mr-4 leading-none">
              ■
            </span>
            <h1 className="text-4xl sm:text-6xl font-medium">
              {project.title}
            </h1>
            <hr className="ml-6 flex-1 border-0 md:border-t-2 border-secondary" />
          </div>
        </div>
        <div className="-mx-4 sm:-mx-6 lg:-mx-20 mb-20">
          <img
            src={project.headerImage}
            alt={project.title}
            className="w-screen max-w-none h-auto max-h-[85vh] object-cover"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 uppercase text-base sm:text-xl max-w-7xl mx-auto my-8">
          {[
            ["YEAR", project.year],
            ["CATEGORY", project.category],
            ["CLIENT", project.client],
            ["SQFT", project.sqft],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col justify-center items-center"
            >
              <span className="font-bold">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Description Section */}
      <motion.section
        {...fadeIn}
        className="my-20 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-10 md:space-x-12"
      >
        <Image
          src="/assets/projects/up-arrow.png"
          alt=""
          width={40}
          height={40}
          className="hidden sm:block rotate-180 w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28"
        />
        <p className="mb-4 w-full  font-primary leading-loose text-sm sm:text-xl">
          {project.description1}
        </p>
      </motion.section>

      {/* Mobile Carousel */}
      <motion.div {...fadeIn} className="sm:hidden mb-12">
        <EmptyCarrusel
          slides={project.images.map((src) => ({ src }))}
          interval={5000}
          onSlideClick={setZoomedSlide}
        />
      </motion.div>

      {/* Desktop Grid */}
      <motion.div
        {...fadeIn}
        className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-14 mb-32"
      >
        {project.images.map((src, idx) => (
          <div
            key={idx}
            onClick={() => setZoomedSlide(idx)}
            className="relative cursor-pointer group"
          >
            <img
              src={src}
              alt={`${project.title} ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-80 transition" />
          </div>
        ))}
      </motion.div>

      {/* OVERLAY */}
      {zoomedSlide !== null && (
        <div
          className="fixed inset-0 bg-gradient-overlay flex items-center justify-center z-50"
          onClick={() => setZoomedSlide(null)}
        >
          <button
            onClick={prevZoom}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2"
          >
            {/* ← SVG */}
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={project.images[zoomedSlide]}
              alt={`zoomed-${zoomedSlide}`}
              width={1920}
              height={1080}
              className="object-contain max-w-full max-h-[90vh]"
            />
          </div>
          <button
            onClick={nextZoom}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2"
          >
            {/* → SVG */}
          </button>
        </div>
      )}

      <section className="mb-32">
        <p className="text-sm sm:text-xl font-primary text-secondary leading-loose text-justify px-6 md:px-52">
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
      <section className="flex flex-row justify-center items-center gap-6 mb-12">
        <div
          onClick={() => router.push(project.prevRoute)}
          className="relative cursor-pointer group"
        >
          <img
            src={project.prevImage}
            alt="Previous Project"
            className="w-32 sm:w-40 md:w-[20vw] h-auto mx-auto"
          />
          <div className="absolute inset-0 bg-secondary bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-sm sm:text-base md:text-lg text-center font-primary font-bold text-primary text-wrap">
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
            className="w-32 sm:w-40 md:w-[20vw] h-auto mx-auto"
          />
          <div className="absolute inset-0 bg-secondary bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <span className="text-sm sm:text-base md:text-lg text-center font-primary font-bold text-primary text-wrap">
              Next Project
            </span>
          </div>
        </div>
      </section>

      <Footer classname="w-full" />
    </div>
  );
}
