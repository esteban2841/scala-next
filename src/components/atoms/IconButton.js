"use client";

import React from "react";

export default function IconButton({
  icon: Icon,
  label,
  onClick,
  className = ""
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        p-1            /* base padding */
        sm:p-2         /* ≥640px */
        md:p-3         /* ≥768px */
        ${className}
      `}
    >
      <Icon
        aria-hidden="true"
        className={`
          w-4 h-4       /* base size */
          sm:w-5 sm:h-5 /* ≥640px */
          md:w-6 md:h-6 /* ≥768px */
        `}
      />
    </button>
  );
}
