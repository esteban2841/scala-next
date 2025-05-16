// app/about/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/organisms/Footer";
import TabMenu from "@/components/molecules/TabMenu";

const visionTextLeft = `Imagine stepping into a space that resonates with your very essence, an environment where every line,
every texture, tells a story of intention and beauty. This is the promise of Scala. Since 1996, we&#39;ve been
more than creators of architectural solutions; we&#39;ve been storytellers in steel, light, and form, shaping
the backdrops for countless lives across the globe.
In 2022, fueled by a desire to deepen our impact, Scala embraced a powerful evolution. Like a sculptor
refining their masterpiece, we sharpened our focus, amplifying our commitment to crafting spaces that
not only serve a purpose but also stir the soul.`;

const visionTextRight = `Today, Scala is a vibrant movement—a collective of visionary designers, artists, and thinkers united by
the belief that extraordinary spaces have the power to inspire, connect, and endure. We don&#39;t just see
buildings or interiors—we envision the experiences they will hold, the memories they will frame.
Step into the world of Scala, where our vision goes beyond simple design. We meticulously consider the
soul of every space, hand-selecting materials that tell stories of quality and intention, and imbue each
project with a profound sense of purpose. Here, spaces are not simply transformed, they are cultivated
into immersive experiences that elevate the very fabric of everyday life.`;

const values = [
  {
    id: "I.",
    title: "Creativity: The Unfolding of Innovation",
    description: `For us, design is a dance of imagination, a constant exploration of what could be. We push beyond the
familiar, seeking innovative solutions that are both strikingly beautiful and exceptionally functional. We
believe that true artistry lies in the courage to reimagine the world around us.`,
  },
  {
    id: "II.",
    title: "Sustainability: Designing in Harmony with the Future",
    description: `Our commitment to the planet runs through every line we draw. We believe in creating spaces that not
only enhance the present but also honor the future. Sustainability is not a trend; it;s a fundamental
principle guiding our material choices, construction methods, and enduring vision.`,
  },
  {
    id: "III.",
    title: "Client-Centricity: Your Narrative, Our Expertise",
    description: `At the core of Scala is a deep and abiding respect for you, our client. We listen with intent, collaborate
with passion, and tailor our expertise to bring your unique narrative to life in the spaces we create. Your
dreams are the compass that guides our design journey.
Join us at Scala, where we believe that every space has a story to tell—and we are the artists dedicated
to bringing those stories to life with beauty, intention, and meaningful impact.`,
  }
];

const teamMembers = [
  // add your other portraits here:
  {
    name: "Ana González",
    role: "Architect",
    src: "/assets/about/team/team-1.png",
  },
  {
    name: "Luis Pérez",
    role: "Engineer",
    src: "/assets/about/team/team-2.png",
  },
  {
    name: "María López",
    role: "Designer",
    src: "/assets/about/team/team-3.png",
  },
  {
    name: "Carlos Ruiz",
    role: "Coordinator",
    src: "/assets/about/team/team-4.png",
  },
  {
    name: "Camila Díaz",
    role: "Consultant",
    src: "/assets/about/team/team-5.png",
  },
  {
    name: "Jorge Martínez",
    role: "Supervisor",
    src: "/assets/about/team/team-6.png",
  },
  {
    name: "Andrés Gómez",
    role: "Strategist",
    src: "/assets/about/team/team-7.png",
  },
  {
    name: "Felipe Romero",
    role: "Construction Manager",
    src: "/assets/about/team/team-8.png",
  },
  {
    name: "Sara Muñoz",
    role: "Director",
    src: "/assets/about/team/team-9.png",
  },
  {
    name: "Esteban Marín",
    role: "Senior Designer",
    src: "/assets/about/team/team-10.png",
  },
  {
    name: "Juan Cortés",
    role: "3D Visualization",
    src: "/assets/about/team/team-11.png",
  },
];

export default function AboutPage() {
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
          className="w-full max-w-none h-auto object-cover"
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
        <p className="text-justify leading-loose ">{visionTextLeft}</p>
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
          <h2 className="text-3xl sm:text-5xl font-bold">The Heart of Our Craft: Our Guiding Values</h2>
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
        <div className="flex items-center mb-6">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">
            ■
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold">Our Team</h2>
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
