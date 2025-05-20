import React from "react";

export default function Boton({
  label = "Dive in",
  width = 160,
  height = 50,
  onClick,
  className,
  color = "#E2E0D9",
}) {
  const cornerRadius = 4;
  const maskId = `mask-${label.replace(/\s+/g, "-")}`;
  const curveStart = width - cornerRadius;
  const roundedRectPath = `
    M0,0 
    H${curveStart} 
    a${cornerRadius},${cornerRadius} 0 0 1 ${cornerRadius},${cornerRadius}
    V${height - cornerRadius}
    a${cornerRadius},${cornerRadius} 0 0 1 -${cornerRadius},${cornerRadius}
    H0 
    Z
  `;

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
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <path d={roundedRectPath} fill="white" />
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
        <g mask={`url(#${maskId})`}>
          <path d={roundedRectPath} fill={color} />
        </g>
        <g mask={`url(#${maskId})`}>
          <path
            d={roundedRectPath}
            fill={color}
            style={{ filter: "brightness(90%)" }}
            className="
              -translate-x-full
              group-hover:translate-x-0
              transition-transform
              duration-500
              ease-in-out
            "
          />
        </g>
      </svg>
    </div>
  );
}
