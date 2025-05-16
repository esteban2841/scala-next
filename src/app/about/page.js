// app/about/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/organisms/Footer";
import TabMenu from "@/components/molecules/TabMenu";

const visionTextLeft = `SCALA is a ground-breaking design firm that marries
contemporary interior design with an
innovative approach to space planning, while
delivering seamless project experiences
through strategic partnerships, technical
expertise and flawless execution.`;

const visionTextRight = `SCALA is more than just a design firm—it’s a
true-partner, co-defining interior experiences
with a strategic approach, unmatched portfolio,
and a complete project lifecycle service.
As we continue to grow in commercial and
residential markets, our reputation for quality
and attention to detail guarantees exceptional
high-end results.`;

const values = [
  {
    id: "I.",
    title: "Elegance & Innovation",
    description: `We seamlessly merge artistry and engineering
to deliver refined, forward-thinking interiors
that set cutting-edge standards.`,
  },
  {
    id: "II.",
    title: "Creative Team",
    description: `Our multidisciplinary team thrives on creativity,
passion and expertise, pushing boundaries
to craft spaces that inspire.`,
  },
  {
    id: "III.",
    title: "Global Reach",
    description: `With international partnerships and deep local
understanding, we deliver world-class designs
tailored to each cultural context.`,
  },
  {
    id: "IV.",
    title: "Seamless Execution",
    description: `From concept to completion, we ensure flawless
project management and top-quality finishes
that exceed expectations.`,
  },
];

const teamMembers = [
  {
    name: "Felipe Romero",
    role: "Construction Manager",
    src: "/assets/contact/felipe-romero.jpg",
  },
  {
    name: "Sara Muñoz",
    role: "Director",
    src: "/assets/contact/sara-munoz.jpg",
  },
  {
    name: "Esteban Marín",
    role: "Senior Designer",
    src: "/assets/contact/esteban-marin.jpg",
  },
  {
    name: "Juan Cortés",
    role: "3D Visualization",
    src: "/assets/contact/juan-cortes.jpg",
  },
  // add your other portraits here:
  { name: "Ana González", role: "Architect", src: "/assets/about/team/ana-gonzalez.jpg" },
  { name: "Luis Pérez", role: "Engineer",  src: "/assets/about/team/luis-perez.jpg"  },
  { name: "María López", role: "Designer",  src: "/assets/about/team/maria-lopez.jpg" },
  { name: "Carlos Ruiz", role: "Coordinator", src: "/assets/about/team/carlos-ruiz.jpg" },
  { name: "Camila Díaz", role: "Consultant", src: "/assets/about/team/camila-diaz.jpg" },
  { name: "Jorge Martínez", role: "Supervisor", src: "/assets/about/team/jorge-martinez.jpg" },
  { name: "Andrés Gómez", role: "Strategist", src: "/assets/about/team/andres-gomez.jpg" },
];

export default function AboutPage() {
  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      {/* Tab Menu */}
      <TabMenu className="absolute w-full justify-end right-3"/>
      {/* Title */}
      <section className="mb-8">
        <div className="flex items-center">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">■</span>
          <h1 className="text-4xl sm:text-8xl font-bold">About us</h1>
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
        <p className="font-primary text-lg sm:text-xl">We are SCALA</p>
        <div className="bg-secondary inline-block px-4 py-2 mt-2">
          <span className="text-base sm:text-lg font-bold text-primary">
            A New Vision for Interior Design & Housing Solutions
          </span>
        </div>
      </section>

      {/* Vision paragraphs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <p className="text-justify leading-relaxed">{visionTextLeft}</p>
        <p className="text-justify leading-relaxed">{visionTextRight}</p>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">■</span>
          <h2 className="text-3xl sm:text-5xl font-bold">Our Values</h2>
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
        </div>

        <div className="space-y-8">
          {values.map((v) => (
            <div key={v.id} className="grid grid-cols-[auto,1fr] gap-6 items-start">
              <span className="font-bold text-xl">{v.id}</span>
              <div>
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">■</span>
          <h2 className="text-3xl sm:text-5xl font-bold">Our Team</h2>
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {teamMembers.map((m) => (
            <div key={m.name} className="text-center">
              <Image
                src={m.src}
                alt={m.name}
                width={300}
                height={300}
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">{m.name}</p>
              <p className="text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with Back-to-top */}
      <Footer classname="w-full" />
    </div>
  );
}
