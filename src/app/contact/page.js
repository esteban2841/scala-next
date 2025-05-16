"use client";

import React from "react";
import Footer from "@/components/organisms/Footer";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import TabMenu from "@/components/molecules/TabMenu";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("manoalyj");

  if (state.succeeded) {
    return (
      <div className="bg-primary text-secondary min-h-screen font-primary px-4 sm:px-6 lg:px-20 py-5">
        <p className="text-center text-2xl text-green-400">
          Thanks for reaching out! We’ve received your message.
        </p>
        <Footer classname="w-full" />
      </div>
    );
  }
  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5">
      <TabMenu className="absolute w-full justify-end right-3" />
      {/* Title Section */}
      <section className="mb-8">
        <div className="flex items-center">
          {/* the dash */}
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">
            ■
          </span>
          {/* page title */}
          <h1 className="text-4xl sm:text-6xl font-medium">Start a project?</h1>
          {/* line */}
          <hr className="ml-6 flex-1 border-0 md:border-t-2 border-secondary" />
        </div>
      </section>

      {/* Hero Image */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-20 mb-10">
        <Image
          src="/assets/contact/hero.jpg"
          alt="People collaborating"
          width={1920}
          height={600}
          className="w-screen max-w-none h-auto object-cover"
        />
      </div>

      {/* Sub-heading */}
      <section className="bg-secondary py-4 mb-12 -mx-4 sm:-mx-6 lg:-mx-20">
        <h2 className="text-center font-bold text-xl sm:text-2xl lg:text-4xl font-primary text-primary">
          We are ready to answer your questions
        </h2>
      </section>

      {/* Friendly Specific Enquiries */}
      <section className="mb-12">
        <h3 className="text-2xl lg:text-3xl font-bold mb-10 px-6">
          Friendly Specific Enquiries
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Sara */}
          <div className="flex flex-col items-center text-start">
            <Image
              src="/assets/contact/sara-munoz.png"
              alt="Sara Muñoz"
              width={200}
              height={200}
              className=""
            />
            <div className="flex flex-col items-start justify-center">
              <span className="mt-4">Sara Muñoz</span>
              <span className="font-bold">Director</span>
              <a href="mailto:smuñoz@scala.com" className="hover:underline">
                smuñoz@scala.com
              </a>
            </div>
          </div>
          {/* Felipe */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact/felipe-romero.png"
              alt="Felipe Romero"
              width={200}
              height={200}
              className=""
            />
            <div className="flex flex-col items-start justify-center">
              <span className="mt-4">Felipe Romero</span>
              <span className="font-bold">Construction Manager</span>
              <a href="mailto:fromero@scala.com" className="hover:underline">
                fromero@scala.com
              </a>
            </div>
          </div>
          {/* Esteban */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact/esteban-marin.png"
              alt="Esteban Marin"
              width={200}
              height={200}
              className=""
            />
            <div className="flex flex-col items-start justify-center">
              <span className="mt-4">Esteban Marin</span>
              <span className="font-bold">Senior Designer</span>
              <a href="mailto:emarin@scala.com" className="hover:underline">
                emarin@scala.com
              </a>
            </div>
          </div>
          {/* Juan */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact/juan-cortes.png"
              alt="Juan Cortes"
              width={200}
              height={200}
              className=""
            />
            <div className="flex flex-col items-start justify-center">
              <span className="mt-4">Juan Cortes</span>
              <span className="font-bold">3D Visualization</span>
              <a href="mailto:jcortes@scala.com" className="hover:underline">
                jcortes@scala.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* General enquiries */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">For general enquiries</h3>
        {/* the dash */}
        <span className="text-3xl sm:text-5xl font-bold mr-6 leading-none">
          ■
        </span>
        <a
          href="mailto:info@scala.com"
          className="text-xl sm:text-2xl  hover:underline font-medium"
        >
          info@scala.com
        </a>
      </section>

      {/* Get in touch form */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-4 bg-secondary  text-primary rounded-2xl"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Message (columna derecha, 3 filas) */}
          <div className="sm:col-start-2 sm:row-start-1 sm:row-span-3 flex flex-col">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              rows={6}
              className="p-4 bg-secondary text-primary rounded-2xl h-full resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Mail"
              required
              className="p-4 bg-secondary text-primary rounded-2xl"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="p-4 bg-secondary text-primary rounded-2xl"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="
        sm:col-span-2
        justify-self-center
        bg-secondary text-primary
        px-10 py-3
        rounded-lg
        hover:bg-opacity-90
        transition
        disabled:opacity-50
      "
          >
            {state.submitting ? "Sending…" : "Send"}
          </button>
        </form>
      </section>

      <Footer classname="w-full" />
    </div>
  );
}
