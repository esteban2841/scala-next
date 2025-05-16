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
      <TabMenu className="absolute w-full justify-end right-3"/>
      {/* Title Section */}
      <section className="mb-8">
        <div className="flex items-center">
          {/* the dash */}
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">
            ■
          </span>
          {/* page title */}
          <h1 className="text-4xl sm:text-8xl font-bold">Start a project?</h1>
          {/* line */}
          <hr className="ml-6 flex-1 border-t-2 border-secondary" />
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
      <section className="bg-secondary py-4 mb-12">
        <h2 className="text-center text-xl sm:text-2xl font-primary text-primary">
          We are ready to answer your questions
        </h2>
      </section>

      {/* Friendly Specific Enquiries */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Friendly Specific Enquiries</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Sara */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact/sara-munoz.png"
              alt="Sara Muñoz"
              width={200}
              height={200}
              className="rounded"
            />
            <span className="mt-4 font-bold">Sara Muñoz</span>
            <span>Director</span>
            <a href="mailto:smuñoz@scala.com" className="hover:underline">
              smuñoz@scala.com
            </a>
          </div>
          {/* Felipe */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact/felipe-romero.png"
              alt="Felipe Romero"
              width={200}
              height={200}
              className="rounded"
            />
            <span className="mt-4 font-semibold">Felipe Romero</span>
            <span>Construction Manager</span>
            <a href="mailto:fromero@scala.com" className="hover:underline">
              fromero@scala.com
            </a>
          </div>
          {/* Esteban */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact/esteban-marin.png"
              alt="Esteban Marin"
              width={200}
              height={200}
              className="rounded"
            />
            <span className="mt-4 font-semibold">Esteban Marin</span>
            <span>Senior Designer</span>
            <a href="mailto:emarin@scala.com" className="hover:underline">
              emarin@scala.com
            </a>
          </div>
          {/* Juan */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/contact/juan-cortes.png"
              alt="Juan Cortes"
              width={200}
              height={200}
              className="rounded"
            />
            <span className="mt-4 font-semibold">Juan Cortes</span>
            <span>3D Visualization</span>
            <a href="mailto:jcortes@scala.com" className="hover:underline">
              jcortes@scala.com
            </a>
          </div>
        </div>
      </section>

      {/* General enquiries */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">For general enquiries</h3>
        <a href="mailto:info@scala.com" className="text-xl hover:underline">
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
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-4 bg-secondary text-primary rounded-md"
          />

          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Mail"
            required
            className="p-4 bg-secondary rounded-md"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-4 bg-secondary text-primary rounded-md sm:col-span-2"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows={6}
            className="p-4 bg-secondary rounded-md sm:col-span-2"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="
              sm:col-span-2
              bg-secondary text-primary
              px-6 py-3
              rounded-md
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
