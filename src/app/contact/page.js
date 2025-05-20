"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from 'framer-motion';
import TabMenu from "@/components/molecules/TabMenu";
import Footer from "@/components/organisms/Footer";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ContactPage() {
  const [state, handleSubmit] = useForm("manoalyj");

  if (state.succeeded) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-primary text-secondary min-h-screen font-primary px-4 sm:px-6 lg:px-20 py-5"
      >
        <p className="text-center text-2xl text-green-400">
          Thanks for reaching out! We’ve received your message.
        </p>
        <Footer classname="w-full mt-10" />
      </motion.div>
    );
  }

  return (
    <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 lg:px-20 py-5 relative">
      <TabMenu className="absolute top-4 right-4" />

      {/* Title Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="mb-8"
      >
        <div className="flex items-center">
          <span className="text-3xl sm:text-5xl font-bold mr-4 leading-none">■</span>
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
        <h3 className="text-2xl lg:text-3xl font-bold mb-10 px-6">
          Friendly Specific Enquiries
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {[
            { name: 'Sara Muñoz', role: 'Director', img: '/assets/contact/sara-munoz.png', email: 'smuñoz@scala.com' },
            { name: 'Felipe Romero', role: 'Construction Manager', img: '/assets/contact/felipe-romero.png', email: 'fromero@scala.com' },
            { name: 'Esteban Marin', role: 'Senior Designer', img: '/assets/contact/esteban-marin.png', email: 'emarin@scala.com' },
            { name: 'Juan Cortes', role: '3D Visualization', img: '/assets/contact/juan-cortes.png', email: 'jcortes@scala.com' }
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
                <a href={`mailto:${person.email}`} className="text-sm hover:underline">
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
        <div className="flex items-center">
          <span className="text-3xl sm:text-5xl font-bold mr-6 leading-none">■</span>
          <a
            href="mailto:info@scala.com"
            className="text-xl sm:text-2xl hover:underline font-medium"
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
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
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
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
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
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
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
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </motion.div>

          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            type="submit"
            disabled={state.submitting}
            className="sm:col-span-2 justify-self-center bg-secondary text-primary px-10 py-3 rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {state.submitting ? "Sending…" : "Send"}
          </motion.button>
        </form>
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Footer classname="w-full" />
      </motion.div>
    </div>
  );
}
