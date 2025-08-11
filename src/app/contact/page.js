"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import TabMenu from "@/components/molecules/TabMenu";
import Footer from "@/components/organisms/Footer";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  const [state, handleSubmit] = useForm("manoalyj");
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent"

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;          
    setStatus("sending");                      
    await handleSubmit(e);                     
    if (state.succeeded) {
      setStatus("sent");                       
    } else {
      setStatus("idle");                      
    }
  };

  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5 relative font-primary">
      {/* Logo & Menu */}
      
      <TabMenu className="absolute top-4 right-4" />

      {/* Title */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="my-16"
      >
        <div className="flex items-center">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">
            ■
          </span>
          <h1 className="text-4xl sm:text-6xl font-medium">Start a project?</h1>
          <hr className="ml-6 flex-1 border-0 md:border-t-2 border-secondary" />
        </div>
      </motion.section>

      {/* Hero Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="-mx-4 sm:-mx-6 lg:-mx-20 mb-10 overflow-hidden rounded-lg max-h-[60vh]"
      >
        <Image
          src="/assets/contact/hero.jpg"
          alt="People collaborating"
          width={1920}
          height={600}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Sub-heading */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-secondary py-4 mb-12 -mx-4 sm:-mx-6 lg:-mx-20 rounded-lg"
      >
        <h2 className="text-center font-bold text-xl sm:text-2xl lg:text-4xl font-primary text-primary">
          We are ready to answer your questions
        </h2>
      </motion.section>

      {/* Friendly Specific Enquiries */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="mb-12"
      >
        <h3 className="text-2xl lg:text-3xl font-bold mb-10">
          Friendly Specific Enquiries
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {[
            {
              name: "Sara Muñoz",
              role: "Director",
              img: "/assets/contact/sara-munoz.png",
              email: "smuñoz@scala.com",
            },
            {
              name: "Felipe Romero",
              role: "Construction Manager",
              img: "/assets/contact/felipe-romero.png",
              email: "fromero@scala.com",
            },
            {
              name: "Esteban Marin",
              role: "Senior Designer",
              img: "/assets/contact/esteban-marin.png",
              email: "emarin@scala.com",
            },
            {
              name: "Juan Cortes",
              role: "3D Visualization",
              img: "/assets/contact/juan-cortes.png",
              email: "jcortes@scala.com",
            },
          ].map((person) => (
            <motion.div
              key={person.email}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={person.img}
                alt={person.name}
                width={200}
                height={200}
                className="rounded-full"
              />
              <div className="mt-4 text-left">
                <span className="block font-medium">{person.name}</span>
                <span className="block font-bold text-sm">{person.role}</span>
                <a
                  href={`mailto:${person.email}`}
                  className="text-sm hover:underline"
                >
                  {person.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* General Enquiries */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold mb-4">For general enquiries</h3>
        <div className="flex flex-row items-center">
          <span className="text-3xl sm:text-5xl font-bold mr-6 align-middle">
            ■
          </span>
          <a
            href="mailto:info@scala.com"
            className="text-xl sm:text-2xl hover:underline font-medium text-center align-middle relative top-0.5 md:top-1.5"
          >
            info@scala.com
          </a>
        </div>
      </motion.section>

      {/* Get in touch form */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="flex flex-col"
          >
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-4 bg-secondary text-primary rounded-2xl"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </motion.div>

          {/* Message */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="sm:col-start-2 sm:row-start-1 sm:row-span-3 flex flex-col"
          >
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              rows={6}
              className="p-4 bg-secondary text-primary rounded-2xl resize-none h-full"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="flex flex-col"
          >
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
          </motion.div>

          {/* Phone */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="flex flex-col"
          >
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
          </motion.div>

          {/* Full-width Send Button */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            className="
              sm:col-span-2
              w-full
              relative
              overflow-hidden
              px-6
              py-3
              rounded-lg
              bg-secondary
              text-primary
              flex
              justify-center
              items-center
            "
          >
            {/* 1. Primary‐color fade (only during “sending”) */}
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: status === "sending" ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />

            {/* 2. Secondary‐color slide (during & after sending) */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-secondary"
              style={{ width: 0 }}
              animate={{
                width:
                  status === "sending" || status === "sent"
                    ? "100%"
                    : 0,
              }}
              transition={{
                delay: status === "sending" ? 0.3 : 0,
                duration: 1.5,
              }}
            />

            {/* 3. Label (text flips color only while sending) */}
            <span
              className={`relative z-10 ${
                status === "sending" ? "text-secondary" : "text-primary"
              }`}
            >
              {status === "idle" && "Send"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "Contact information sent!"}
            </span>
          </motion.button>
        </form>
      </motion.section>

      {/* Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <Footer classname="w-full" />
      </motion.div>
    </div>
  );
}
