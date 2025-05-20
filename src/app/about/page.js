// app/about/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/organisms/Footer";
import TabMenu from "@/components/molecules/TabMenu";
import { about } from "@/data/content";

export default function AboutPage() {
  const { visionTextLeft, visionTextRight, values, teamMembers } = about;

  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      {/* Tab Menu */}
      <TabMenu className="absolute w-full justify-end right-3" />
      {/* Title */}
      <section className="mb-8">
        <div className="flex items-center">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">
            ■
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold">About us</h1>
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
        </div>
      </section>

      {/* Hero */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-20 mb-10">
        <Image
          src="/assets/about/hero.jpg"
          alt="Our team at work"
          width={1920}
          height={600}
          className="w-full max-w-none max-h-[70vh] object-cover"
        />
      </div>

      {/* “We are SCALA” + subtitle */}
      <section className="text-center mb-12">
        <p className="font-primary font-bold text-lg sm:text-3xl mb-10">
          We are SCALA
        </p>
        <div className="bg-secondary py-4 mb-12 -mx-4 sm:-mx-6 lg:-mx-20">
          <span className="text-base sm:text-8xl lg:text-4xl font-bold text-primary">
            Where Spaces Inspire and Transformation Takes Form
          </span>
        </div>
      </section>

      {/* Vision paragraphs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <p className="text-justify leading-loose">{visionTextLeft}</p>
        <p className="text-justify leading-loose">{visionTextRight}</p>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <hr className="border-y-2 border-gray-700" />
        <div className="flex items-center gap-20 justify-end my-6">
          <Image
            src="/assets/projects/up-arrow.png"
            alt="arrow"
            width={50}
            height={50}
            className="rotate-180"
          />
          <h2 className="text-3xl sm:text-5xl font-bold">
            The Heart of Our Craft: Our Guiding Values
          </h2>
        </div>
        <hr className="border-y-2 border-gray-700 mb-10" />

        <div className="space-y-8">
          {values.map((v) => (
            <div
              key={v.id}
              className="grid grid-cols-[auto,1fr] gap-6 items-start"
            >
              <span className="font-bold text-4xl">{v.id}</span>
              <div className="flex flex-col justify-end items-end">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-base text-right leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <div className="flex items-center mb-20">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">
            ■
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold">Our Team</h2>
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-16 px-44">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Imagen con escala en hover */}
              <Image
                src={m.src}
                alt={m.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-90"
              />

              {/* Overlay semitransparente */}
              <div className="absolute inset-0 bg-secondary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Texto nombre + rol en el fondo */}
              <div className="absolute bottom-0 left-0 right-0 text-center pb-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-semibold text-primary">{m.name}</p>
                <hr className="mx-auto border-t border-primary w-[70%] my-1" />
                <p className="text-sm text-primary">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with Back-to-top */}
      <Footer classname="w-full" />
    </div>
  );
}
