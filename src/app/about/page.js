"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/organisms/Footer";
import TabMenu from "@/components/molecules/TabMenu";
import { about } from "@/data/content";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const { visionTextLeft, visionTextRight, values, teamMembers } = about;

  return (
    <div className="bg-primary text-secondary min-h-screen px-6 sm:px-8 lg:px-32 py-8">
      <Image
        src="/assets/logos/scala_logo_v1_black.svg"
        alt="Scala Logo"
        className="absolute top-3 left-5 w-auto h-14 sm:left-10 sm:h-26"
        width={64}
        height={64}
      />
      {/* Tab Menu */}
      <TabMenu className="absolute w-full justify-end right-4 top-4" />

      {/* Title */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
        className="my-16"
      >
        <div className="flex items-center">
          <span className="text-2xl sm:text-4xl font-bold mr-4 leading-none">
            ■
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium">About us</h1>
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
        </div>
      </motion.section>

      {/* Hero Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
        className="-mx-6 sm:-mx-8 lg:-mx-32 mb-12"
      >
        <Image
          src="/assets/about/hero.jpg"
          alt="Our team at work"
          width={1920}
          height={600}
          className="w-full max-w-none max-h-[60vh] object-cover"
        />
      </motion.div>

      {/* Subtitle */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <p className="font-primary font-bold text-base sm:text-xl mb-8">
          We are SCALA
        </p>
      </motion.section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
        className="w-[100vw] -left-6 sm:-left-8 lg:-left-32 right-1/2 relative overflow-hidden mt-8 mb-16"
      >
        <div className="bg-secondary py-3 px-6 overflow-hidden text-center w-full">
          <h2 className="font-bold text-primary text-sm sm:text-lg">
            Where Spaces Inspire and Transformation Takes Form
          </h2>
        </div>
      </motion.div>
      {/* Vision Paragraphs */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        variants={fadeIn}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 text-sm sm:text-base leading-relaxed px-4 sm:px-4 md:px-4  lg:px-32"
      >
        <p className="text-justify">{visionTextLeft}</p>
        <p className="text-justify">{visionTextRight}</p>
      </motion.section>

      {/* Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        variants={fadeIn}
        className="mb-16"
      >
        <hr className="border-y-2 border-gray-700 mb-6" />
        <div className="flex items-center gap-8 justify-end mb-6">
          <Image
            src="/assets/projects/up-arrow.png"
            alt="arrow"
            width={40}
            height={40}
            className="rotate-180"
          />
          <h2 className="text-2xl sm:text-4xl font-bold">
            The Heart of Our Craft: Our Guiding Values
          </h2>
        </div>
        <hr className="border-y-2 border-gray-700 mb-8" />
        <div className="space-y-6 ">
          {values.map((v) => (
            <div
              key={v.id}
              className="grid grid-cols-[auto,1fr] gap-3 items-start px-[10%]"
            >
              <span className="font-bold text-2xl">{v.id}</span>
              <div className="flex flex-col justify-center align-middle md:justify-end md:items-end">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-justify md:text-right max-w-[80%] leading-loose">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.0 }}
        variants={fadeIn}
        className="mb-16"
      >
        <div className="flex items-center mb-12">
          <span className="text-2xl sm:text-4xl font-bold mr-4 leading-none">
            ■
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold">Our Team</h2>
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-8 lg:px-16">
          {teamMembers.map((m) => (
            <motion.div
              key={m.name}
              className="relative group overflow-hidden rounded-lg"
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 0.9 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                stiffness: 300,
              }}
              variants={fadeIn}
            >
              <Image
                src={m.src}
                alt={m.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300"
                // no more group-hover:scale here
              />

              <div className="absolute inset-0 bg-secondary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-90" />

              <div className="absolute bottom-10 left-0 right-0 text-center pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-base font-semibold text-primary">{m.name}</p>
                <hr className="mx-auto border-t border-primary w-1/2 my-1" />
                <p className="text-xs text-primary">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer classname="w-full pt-8" />
    </div>
  );
}
