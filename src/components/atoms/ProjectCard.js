"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProjectCard({ title, location, img, redirectTo }) {
  const router = useRouter();

  const handleClick = () => {
    if (redirectTo) {
      router.push(redirectTo); 
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex flex-col group overflow-hidden shadow-lg 
      rounded-none border border-[#D2D2D2] border-b-4 border-b-[#000]/70 cursor-pointer "
    >
      {/* Imagen siempre visible */}
      <div className="w-full relative h-[500px] flex flex-col items-center justify-center ">
        <div className="w-full overflow-hidden h-[350px] relative">

          <img
            src={img}
            alt={title}
            className="
              object-contain object-center aspect-auto w-full

            "
          />
        </div>
        <div
          className="
            flex flex-col justify-center items-start
            text-center
            bg-[#D2D2D2] 
            w-full
            h-[150px]
            gap-4 px-8 py-2
          "
        >
          <h3
            className="
              text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black
              text-wrap text-center uppercase
              
            "
          >
            {title}
          </h3>

          <p
            className="
              text-[10px] sm:text-xs md:text-sm lg:text-base text-black
              font-medium 
            
            "
          >
            {location}
          </p>
        </div>
      </div>

    </div>
  );
}
