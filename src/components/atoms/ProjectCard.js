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
      className="relative group overflow-hidden shadow-lg rounded-none border border-gray-200 cursor-pointer transition-transform duration-300 transform hover:scale-95"
    >
      {/* Imagen siempre visible */}
      <div className="w-full aspect-square">
        <img
          src={img}
          alt={title}
          className="
            object-cover object-center w-full h-full
            transition-transform duration-300 transform
            group-hover:scale-105
          "
        />
      </div>

      {/* Overlay y texto sólo en hover */}
      <div
        className="
          absolute inset-0
          flex flex-col justify-center items-center
          text-center
          bg-black bg-opacity-0
          transition duration-300 transform
          group-hover:bg-opacity-40
          group-hover:scale-105
        "
      >
        <h3
          className="
            text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white
            text-wrap text-center
            px-2 sm:px-4
            opacity-0 group-hover:opacity-100
            transition duration-300 transform
            group-hover:scale-105
            [@media(min-width:440px)]:text-xl
            [@media(min-width:630px)]:text-lg
          "
        >
          {title}
        </h3>
        <hr
          className="
            border-t border-white mt-2 mb-1 w-[60%] sm:w-[70%]
            opacity-0 group-hover:opacity-100
            transition duration-300 transform
            group-hover:scale-105
          "
        />
        <p
          className="
            text-[10px] sm:text-xs md:text-sm lg:text-base text-white
            font-bold
            opacity-0 group-hover:opacity-100
            transition duration-300 transform
            group-hover:scale-105
            [@media(min-width:440px)]:text-lg
            [@media(min-width:630px)]:text-base
          "
        >
          {location}
        </p>
      </div>
    </div>
  );
}
