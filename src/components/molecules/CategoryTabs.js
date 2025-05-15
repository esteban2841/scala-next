"use client";
import React from "react";

export default function CategoryTabs({ categories = [], active, onChange }) {
  return (
    <div>
      <nav className="relative w-full flex justify-between items-center py-6 font-primary">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className="flex items-center transition-colors"
            >
              {isActive && (
                <span className="block w-2 h-2 bg-gray-900 mr-2 rounded-sm" />
              )}
              <span
                className={`
                text-xs sm:text-2xl md:text-3xl
                ${
                  isActive
                    ? "font-semibold text-gray-900"
                    : "font-extralight text-gray-500 hover:text-gray-700"
                }
              `}
              >
                {cat}
              </span>
            </button>
          );
        })}

        {/* Línea continua bajo TODO el nav */}
        <span className="absolute bottom-0 left-0 w-full border-t-2 border-gray-900" />
      </nav>
    </div>
  );
}
