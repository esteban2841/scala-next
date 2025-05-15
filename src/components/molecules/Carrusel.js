"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Boton from "../atoms/Boton";

export default function Carrusel({
  slides = [],
  interval = 5000,
  className = "",
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      interval
    );
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Contenedor de las slides */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${current * 100}%)`, 
        }}
      >
        {slides.map(({ src, subtitle, title }, idx) => (
          <div key={idx} className="relative w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={title || `slide-${idx}`}
              fill
              className="object-cover"
              priority={idx === current}
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute top-1/3 left-0 right-16 z-20 text-white">
              {subtitle && (
                <p className="uppercase ml-8 tracking-wide text-xs sm:text-sm md:text-base mb-2 sm:mb-4">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="font-bold text-5xl ml-9 sm:text-5xl md:text-5xl lg:text-6xl mb-6 md:mb-8 break-words">
                  {title}
                </h2>
              )}
              <div className="hidden md:block w-80 h-1 rounded bg-white mb-4" />
              <Boton className="w-24 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12 lg:w-48 lg:h-14">
                Dive in
              </Boton>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores (dots) */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
