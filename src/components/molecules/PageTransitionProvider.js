// src/components/PageTransitionProvider.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const TransitionContext = createContext({});

export function PageTransitionProvider({ children }) {
  const router = useRouter();
  const [nextPath, setNextPath] = useState(null);
  const [isActive, setIsActive] = useState(false);

  // 1) Intercept all internal link clicks
  useEffect(() => {
    const handler = (e) => {
      // only left-clicks, no modifier keys
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
        return;

      const a = e.target.closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      // only intercept same-origin internal navigations
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;

      e.preventDefault();
      setNextPath(href);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // 2) When nextPath is set, fire overlay → then navigate → then clear it
  useEffect(() => {
    if (!nextPath) return;

    setIsActive(true);
    const enterDuration = 500; // overlay fade-in + logo
    const exitBuffer   = 300;  // after navigation, fade out

    const t1 = setTimeout(() => {
      router.push(nextPath);
      const t2 = setTimeout(() => {
        setIsActive(false);
        setNextPath(null);
      }, exitBuffer);
      return () => clearTimeout(t2);
    }, enterDuration);

    return () => clearTimeout(t1);
  }, [nextPath, router]);

  return (
    <TransitionContext.Provider value={{}}>
      {children}

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="/assets/logos/scala_logo_v2_white.png"
              alt="Logo"
              className="w-32 h-32"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
