"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProjectCard({ title, location, img, redirectTo }) {
  const router = useRouter();

  const handleClick = () => {
    console.log("Card clicked:", title);
    console.log("Redirecting to:", redirectTo); 
    if (redirectTo) {
      router.push(redirectTo); 
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex flex-col group overflow-hidden shadow-lg 
      rounded-none border border-gray-200 cursor-pointer "
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
            flex flex-col justify-center items-center
            text-center
            bg-black bg-opacity-0
            w-full
            h-[150px]
          "
        >
          <h3
            className="
              text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white
              text-wrap text-center
              px-2 sm:px-4
            "
          >
            {title}
          </h3>
          <hr
            className="
              border-t border-white mt-2 mb-1 w-[60%] sm:w-[70%]
            
            "
          />
          <p
            className="
              text-[10px] sm:text-xs md:text-sm lg:text-base text-white
              font-bold
            
            "
          >
            {location}
          </p>
        </div>
      </div>

    </div>
  );
}
