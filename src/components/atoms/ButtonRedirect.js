import React from "react";

export default function ButtonRedirect({
  label = "Dive in",
  onClick,
  className,
  color = "#000",
  bgColor = "transparent",
}) {


  return (
    <button onClick={onClick} className={`${'text-'+color} ${'bg-'+bgColor} px-4 transition-transform hover:transition-opacity duration-900 hover:bg-white/30 font-extrabold text-base border bg-transparent uppercase flex items-center justify-center ${className}`}>
      <label>
        {label}
      </label>
    </button>
  );
}
