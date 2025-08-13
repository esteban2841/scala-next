"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function CategoryTabs({ categories = [], active, onChange }) {

  const pathname = usePathname(); 
  const isProjectPage = pathname === "/projects";

  return (
    <div>
      <nav className="relative w-full flex p-4 ">

        <div className={`flex flex-col md:flex-row  gap-4 justify-between items-center p-6 font-primary my-8 w-full border-y 'border-black/60' ${ isProjectPage ?  'bg-black' : '' }`} >
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
                    text-sm sm:text-2xl md:text-3xl uppercase
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
