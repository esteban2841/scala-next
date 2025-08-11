'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Background*/}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{
          duration: 5,
          times:    [0, 0.8, 1],  
          ease:     'easeInOut',
        }}
      />

      {/* Logo */}
      <motion.div
        className="relative"
        style={{ width: '50vw', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        initial={{
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          opacity: 0,
        }}
        animate={{
          clipPath: [
            'polygon(0 0, 0 0, 0 100%, 0 100%)',  // hidden
            'polygon(0 0,100% 0,100% 100%,0 100%)', // full reveal
            'polygon(0 0,100% 0,100% 100%,0 100%)', // hold
            'polygon(0 0,  0 0,  0 100%, 0 100%)',  // hide
          ],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          times:    [0, 0.2, 0.6, 0.8], 
          ease:     'easeInOut',
        }}
      >
        <Image
          src="/assets/logos/scala_logo_v2_black.svg"
          alt="Scala Logo"
          width={800}
          height={800}
          className="w-1/2 h-auto object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
