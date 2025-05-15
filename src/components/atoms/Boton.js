import React from "react";

export default function Boton({
  label = "Dive in",
  width = 160,
  height = 50,
  onClick,
  className,
  // Color base del botón
  color = "#E2E0D9",
}) {
  const maskId = `mask-${label.replace(/\s+/g, "-")}`;

  return (
    <div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMin meet"
        onClick={onClick}
        className={`block ${className} group`}
        style={{ cursor: onClick ? "pointer" : "default" }}
      >
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            {/* Blanco = opaco, texto negro = hueco */}
            <rect
              x="0"
              y="0"
              width={width}
              height={height}
              rx="4"
              ry="4"
              fill="white"
            />
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              fontSize={`${height * 0.45}px`}
              fontFamily="Montserrat"
              fontWeight="bold"
              fill="black"
            >
              {label}
            </text>
          </mask>
        </defs>

        {/* Fondo base masked para letras recortadas */}
        <g mask={`url(#${maskId})`}>
          <rect
            x="0"
            y="0"
            width={width}
            height={height}
            rx="4"
            ry="4"
            fill={color}
          />
        </g>

        {/* Overlay deslizable más oscuro, también masked */}
        <g mask={`url(#${maskId})`}>
          <rect
            x="0"
            y="0"
            width={width}
            height={height}
            rx="4"
            ry="4"
            fill={color}
            style={{ filter: "brightness(90%)" }}
            className={
              `
              -translate-x-full
              group-hover:translate-x-0
              transition-transform
              duration-500
              ease-in-out
            `}
          />
        </g>
      </svg>
    </div>
  );
}
