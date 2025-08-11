'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Boton from '../atoms/Boton';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Carrusel({
  slides = [],
  interval = 5000,
  className = '',
}) {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const router                    = useRouter();
  const wheelLock                 = useRef(false);

  // timings (in seconds)
  const IMAGE_TRANSITION = 1;                       // 1s to slide in
  const pauseDuration    = interval / 1000 - 1;     // rest of time for zoom
  const TEXT_DELAY       = 1.5;                     // when text starts
  const TEXT_TRANSITION  = 1.2;

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      const next = (current + 1) % slides.length;
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    }, interval);
    return () => clearInterval(timer);
  }, [current, slides.length, interval]);

  const paginate = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  // slide movement
  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  // WINDOW WHEEL NAVIGATION
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelLock.current) return;
      wheelLock.current = true;

      if (e.deltaY > 0) {
        paginate((current + 1) % slides.length);
      } else if (e.deltaY < 0) {
        paginate((current - 1 + slides.length) % slides.length);
      }

      setTimeout(() => {
        wheelLock.current = false;
      }, IMAGE_TRANSITION * 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [paginate, current, slides.length, IMAGE_TRANSITION]);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      <AnimatePresence custom={direction} initial={false}>
        {slides.map((slide, idx) => {
          if (idx !== current) return null;
          const { src, subtitle, title, href } = slide;

          return (
            <motion.div
              key={idx}
              custom={direction}
              className="absolute inset-0"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: IMAGE_TRANSITION }}
            >
              {/* IMAGE + ZOOM */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{
                  delay:    IMAGE_TRANSITION,
                  duration: pauseDuration,
                  ease:     'easeOut'
                }}
              >
                <Image
                  src={src}
                  alt={title || `slide-${idx}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30 z-10" />

              {/* TEXT & BUTTON (static container for zoom) */}
              <motion.div
                className="text-white w-full h-full z-20 relative flex"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay:    TEXT_DELAY,
                  duration: TEXT_TRANSITION,
                  ease:     'easeOut',
                }}
              >
                <div className='flex flex-col w-full h-full max-w-[1200px] justify-center items-start relative'>
                  {subtitle && (
                    <p className="uppercase ml-9 tracking-wide text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                      {subtitle}
                    </p>
                  )}
                  {title && (
                    <h2 className="font-bold text-5xl ml-9 sm:text-5xl md:text-5xl lg:text-6xl mb-6 md:mb-8 break-words">
                      {title}
                    </h2>
                  )}
                  <div className="hidden md:block w-80 h-1 bg-white mb-4" />
                  <Boton
                    className="w-24 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12 lg:w-48 lg:h-14"
                    onClick={() => router.push(href)}
                  />

                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* LOADER */}
      <motion.div
        key={current}                
        className="absolute bottom-0 left-0 h-1 bg-white z-20"
        initial={{ width: '0%' }}    
        animate={{ width: '100%' }}  
        transition={{
          duration: interval / 1000,  
          ease: 'linear',
        }}
      />

      {/* INDICATORS */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => paginate(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}