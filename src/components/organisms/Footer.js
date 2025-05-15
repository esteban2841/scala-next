// components/molecules/Footer.jsx
"use client";
import React from "react";
import RedesSociales from "@/components/molecules/RedesSociales";
import Image from "next/image";

export default function Footer({ classname = "" }) {
  return (
    <div className={classname}>
      <footer className="box-border py-8 ">
        {/* Línea superior */}
        <hr className="border-y-2 border-gray-700" />

        {/* Back to top */}
        <div className="flex justify-end py-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="
              flex items-center space-x-2
              text-secondary hover:text-opacity-80
              transition font-primary gap-5
              p-1 sm:p-2 md:p-3
              group
            "
          >
            <Image
              src="/assets/projects/up-arrow.png"
              alt=""
              width={40}
              height={40}
              className="
                w-6 h-6
                sm:w-8 sm:h-8
                md:w-10 md:h-10
                transition-opacity duration-300
                group-hover:opacity-80
              "
            />
            <span
              className="
                font-bold text-3xl
                transition-opacity duration-300
                group-hover:opacity-80
                md:text-3xl
                lg:text-4xl
              "
            >
              Back to the top
            </span>
          </button>
        </div>

        {/* Línea inferior */}
        <hr className="border-y-2 border-gray-700" />

        {/* Marca + redes */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
          {/* Logo + copy */}
          <div className="flex items-end space-x-2">
            <Image
              src="/assets/logos/scala_logo_v1_black.png"
              alt="Scala Logo"
              width={100} 
              height={100} 
              className="
                w-auto h-8
                sm:h-20
                md:h-24
                lg:h-14
                transition-opacity duration-300
                group-hover:opacity-80
              "
            />
            <span className="text-sm text-secondary font-primary font-medium">All rights reserved</span>
          </div>

          {/* Redes sociales */}
          <RedesSociales
            className="mt-4 md:mt-0 flex flex-row space-x-4 "
            iconClassName="bg-secondary text-primary hover:text-secondary hover:bg-primary transition duration-300 "
            horizontal={true}
          />
        </div>
      </footer>
    </div>
  );
}
