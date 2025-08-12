import React from "react";

export default function Boton({
  label = "Dive in",
  onClick,
  className,
  color = "#fff",
}) {


  return (
    <button onClick={onClick} className={`${'text-'+color} px-4 transition-transform hover:transition-opacity duration-900 hover:bg-white/30 font-extrabold text-base border border-white bg-transparent uppercase flex items-center justify-center ${className}`}>
      <label>
        {label}
      </label>
    </button>
  );
}
