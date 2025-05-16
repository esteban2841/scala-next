"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EmptyCarrusel({
  slides = [],
  interval = 5000,
  className = "",
}) {
  const [current, setCurrent] = useState(0);
  const [zoomedSlide, setZoomedSlide] = useState(null);
  const containerRef = useRef(null);

  // Auto-advance effect
  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      interval
    );
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  // Scroll to current slide when index changes
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: containerRef.current.clientWidth * current,
      behavior: "smooth",
    });
  }, [current]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>      
      {/* Scrollable slides container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto touch-pan-x scroll-snap-x scroll-snap-mandatory h-full"
      >
        {slides.map(({ src }, idx) => (
          <div
            key={idx}
            onClick={() => setZoomedSlide(idx)}
            className="snap-start flex-shrink-0 w-full h-full relative cursor-pointer"
          >
            <Image
              src={src}
              alt={`slide-${idx}`}
              fill
              className="object-cover transition-transform duration-300"
              priority={idx === current}
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
          </div>
        ))}
      </div>

      {/* Left arrow button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Zoom overlay */}
      {zoomedSlide !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setZoomedSlide(null)}
        >
          <Image
            src={slides[zoomedSlide].src}
            alt={`zoomed-${zoomedSlide}`}
            width={1920}
            height={1080}
            className="object-contain max-w-full max-h-full transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
}
