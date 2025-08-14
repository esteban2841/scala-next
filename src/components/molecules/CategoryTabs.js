"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function CategoryTabs({ categories = [], active, onChange }) {

  const pathname = usePathname(); 
  const isProjectPage = pathname === "/projects";

  return (
    <div className="w-full">
      <nav className="relative w-full flex justify-center px-6 items-center">

        <div className={`flex flex-col w-full md:flex-row max-w-[1400px] gap-4 lg:gap-14 justify-center items-center py-6 px-12 my-8  border-y border-black/70 ${ isProjectPage ?  'bg-black' : '' }`} >
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => onChange(cat)}
                className="flex items-center transition-colors"
              >
                <span
                  className={`
                    text-sm sm:text-base md:text-lg uppercase
                  ${
                    isActive
                      ? `font-semibold text-black underline-offset-2 underline decoration-black  ${ isProjectPage ?  'text-white underline-offset-2 underline decoration-white' : '' }`
                      : ` text-black/50 hover:text-gray-400  ${ isProjectPage ?  'text-white/50' : '' }`
                  }
                `}
                >
                  {cat}
                </span>
              </button>
            );
          })}

        </div>
      </nav>
    </div>
  );
}
