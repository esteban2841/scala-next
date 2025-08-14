'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Boton from '../atoms/Boton';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import RedesSociales from "@/components/molecules/RedesSociales";
import {
  ChatbotButton,
  ChatWindow,
} from "@/components/molecules/ChatbotButton";

export default function Carrusel({
  slides = [],
  interval = 5000,
  className = '',
}) {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const router                    = useRouter();
  const wheelLock                 = useRef(false);
  const [open, setOpen] = useState(false);

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
          const { src, srcMobile, subtitle, title, href } = slide;

          return (
            <motion.div
              key={idx}
              custom={direction}
              className="w-full absolute inset-0"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: IMAGE_TRANSITION }}
            >
              {/* IMAGE + ZOOM */}
              <motion.div
                className="w-full absolute inset-0"
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
                  className="object-cover hidden md:block"
                  priority
                />
                <Image
                  src={srcMobile}
                  alt={title || `slide-${idx}`}
                  fill
                  className="object-cover md:hidden"
                  priority
                />
              </motion.div>

              {/* DARK OVERLAY */}
              <div className="absolute w-full inset-0 bg-gradient-overlay z-10" />

              {/* TEXT & BUTTON (static container for zoom) */}
              <motion.div
                className="text-white w-full uppercase h-full z-20 relative flex justify-center items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay:    TEXT_DELAY,
                  duration: TEXT_TRANSITION,
                  ease:     'easeOut',
                }}
              >
                <div className='flex flex-col w-full px-10 xl:px-0 gap-4 h-full py-40 max-w-[1400px] justify-end items-start relative'>
                  {subtitle && (
                    <p className="uppercase font-extrabold tracking-wide text-xs sm:text-sm md:text-base ">
                      {subtitle}
                    </p>
                  )}
                  {title && (
                    <h2 className="font-light text-4xl mb-8 sm:text-2xl md:text-2xl lg:text-4xl break-words">
                      {title}
                    </h2>
                  )}
                  <Boton
                    className="w-32 h-8 sm:w-32 sm:h-8 md:w-40 md:h-12 lg:w-48 lg:h-10"
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

      <div className='w-full max-w-[1400px] h-screen flex relative right-0'>

        <RedesSociales
          className={"absolute py-32  px-10 xl:px-0 z-10 right-0 bottom-0 flex"}
          iconClassName="text-primary hover:text-secondary hover:bg-primary"
        />
        {/* <div className="absolute z-10 top-4 right-4 flex"></div> */}
        <ChatbotButton onClick={() => setOpen((prev) => !prev)} />
        {open && <ChatWindow onClose={() => setOpen(false)} />}

        {/* INDICATORS */}
        <div className="absolute  px-10 xl:px-0 right-0 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-2">
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

    </div>
  );
}