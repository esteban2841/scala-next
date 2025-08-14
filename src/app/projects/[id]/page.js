"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import EmptyCarrusel from "@/components/molecules/EmptyCarrusel";
import TabMenu from "@/components/molecules/TabMenu";
import Footer from "@/components/organisms/Footer";
import Image from "next/image";
import { projects } from "@/data/content";
import { motion } from "framer-motion";
import ButtonRedirect from "@/components/atoms/ButtonRedirect";

export default function Page({ params }) {
  const router = useRouter();
  const { id } = use(params);
  const project = projects.projectDetails[id];
  console.log("🚀 ~ Page ~ project:", project)
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
    <div className=" flex flex-col justify-center w-full items-center bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      
      <TabMenu  />

      {/* Title Section */}
      <motion.section {...fadeIn} className="w-full flex flex-col justify-center items-center my-16">
        <div className="mb-16 w-full max-w-[1400px]">
          <div className="flex items-center border-y border-y-black py-8">
            <h1 className="text-4xl uppercase sm:text-6xl font-medium">
              {project.title}
            </h1>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-6 lg:-mx-20 mb-20">
          <img
            src={project.headerImage}
            alt={project.title}
            className="w-screen max-w-none h-auto max-h-[85vh] object-cover"
          />
        </div>
        <div className="text-center flex justify-center items-center w-full">

          <div className="flex justify-center items-center w-full text-base sm:text-xl max-w-7xl mx-auto my-8">
            {[
              ["Location", project.location],
              ["Year", project.year],
              ["SQFT", project.sqft],
            ].map(([label, value]) => (
              <div
                key={label}
                className={`flex flex-col justify-center text-left items-center px-10 md:px-40  ${label !== 'SQFT' ? 'border-r border-black/60 ' : 'border-r-0'} `}
              >
                <div className="flex flex-col justify-center items-start">

                  <span className="font-bold">{label}</span>
                  <span>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Description Section */}
      <motion.section
        {...fadeIn}
        className="my-20 flex flex-col sm:flex-row justify-center w-full max-w-[1400px] items-center space-y-4 sm:space-y-0 sm:space-x-10 md:space-x-12"
      >
        <div className="flex flex-col gap-8 w-full" >
            {
              project.descriptions?.map((description, index) => (
                <p key={index} className=" w-full  font-primary leading-loose text-sm sm:text-xl">
                  {description}
                </p>
              ))
            }
         
        </div>
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
        className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-14 mb-32"
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


      {/* <div className="-mx-4 sm:-mx-6 lg:-mx-20 mb-10">
        <img
          src={project.endImage}
          alt={project.title}
          className="w-screen max-w-none h-auto object-cover"
        />
      </div> */}

      {/* Navigation Section */}
      <section className="flex flex-row justify-around items-center gap-6 mb-12">
        <div
          onClick={() => router.push(project.prevRoute)}
          className="relative cursor-pointer group"
        >
          <ButtonRedirect
          className="px-12 py-2 border-black  transition text-sm sm:text-base"
            label="< Previous Project"
          />
        </div>
        <div
          onClick={() => router.push(project.nextRoute)}
          className="relative cursor-pointer group"
        >
          <ButtonRedirect
          className="px-12 py-2 border-black  transition text-sm sm:text-base"
            label="Next Project >"

          />
        </div>
      </section>

      <Footer classname="w-full" />
    </div>
  );
}
