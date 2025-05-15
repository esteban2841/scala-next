"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProjectCard({ title, location, img, redirectTo }) {
  const router = useRouter();

  const handleClick = () => {
    console.log("Card clicked:", title); // Log the title of the clicked card
    console.log("Redirecting to:", redirectTo); // Log the redirect URL
    if (redirectTo) {
      router.push(redirectTo); // Redirect to the specified URL
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
            w-full h-full object-cover
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
          bg-black bg-opacity-0
          transition duration-300 transform
          group-hover:bg-opacity-40
          group-hover:scale-105
        "
      >
        <h3
          className="
            text-3xl font-bold text-white
            text-wrap text-center
            px-8
            opacity-0 group-hover:opacity-100
            transition duration-300 transform
            group-hover:scale-105 sm:text-3x1 md:text-3xl lg:text-4xl
          "
        >
          {title}
        </h3>
        <hr
          className="
            border-t border-white mt-2 mb-1 w-[80%]
            opacity-0 group-hover:opacity-100
            transition duration-300 transform
            group-hover:scale-105
          "
        />
        <p
          className="
            text-base text-white
            font-bold
            opacity-0 group-hover:opacity-100
            transition duration-300 transform
            group-hover:scale-105
            sm:text-base md:text-base lg:text-xl
          "
        >
          {location}
        </p>
      </div>
    </div>
  );
}
