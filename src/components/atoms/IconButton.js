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
          w-5 h-5       /* base size */
          sm:w-6 sm:h-6 /* ≥640px */
          md:w-8 md:h-8 /* ≥768px */
        `}
      />
    </button>
  );
}
