// components/TabMenu.jsx
"use client";

import React, { useState, useEffect } from "react";
import IconButton from "@/components/atoms/IconButton";
import { RxHamburgerMenu, RxCross2, RxChevronDown } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { menuItems } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function TabMenu({ className = "", style = "secondary" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  
  const handleLinkClick = (href) => {
    router.push(href);
    router.refresh();
    closeMenu();
  };
  
  const toggleMenu = () => {
    if (isOpen) {
      setExpanded(null)
    }
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
    setExpanded(null);
  };
  const toggleExpand = (lbl) => {
    return setExpanded((prev) => (prev === lbl ? null : lbl));
  };

  const setActiveRouteUi = (label) => {
    const isActive = label === "Home" ? pathname === "/" : pathname.includes(label.toLowerCase());
    return isActive ? "text-white/100 uppercase": "uppercase"
  };
  // Prevent rapid toggling from skipping animations
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => e.preventDefault();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(()=>{
    console.log("🚀 ~ TabMenu ~ pathname:", pathname)
  },[pathname])

  return (
    <>
      {/* Botón hamburguesa / cerrar */}
      <div className={`flex ${className}`}>
        <IconButton
          icon={isOpen ? RxCross2 : RxHamburgerMenu}
          label={isOpen ? "Cerrar menú" : "Menú"}
          onClick={toggleMenu}
          className={`text-${style} ${
            isOpen ? "text-white" : ""
          } filter z-50 hover:brightness-90 transition`}
        />
      </div>

      {/* Overlay + drawer */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black bg-opacity-80 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onClick={closeMenu}
          >
            <motion.nav
              className="h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                },
                opacity: { duration: 0.3 },
              }}
            >
              {/* Menu items (and logo) fade in after background & drawer */}
              <motion.ul
                className={`flex flex-col items-start justify-center gap-5 px-20 p-0 m-0 list-none ${expanded ? 'border-r border-r-white' : ''}`} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                {menuItems.map((item) => (
                  <li key={item.label} className="p-0 m-0 list-none">
                    {item.subItems ? (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => toggleExpand(item.label)}
                          className={`"flex items-center text-white/50 text-2xl sm:text-3xl md:text-4xl hover:text-primary transition" ${setActiveRouteUi(item.label)}`}
                        >
                          {item.label}
                          
                        </button>
                        
                      </div>
                    ) : (
                      <a
                        onClick={() => handleLinkClick(item.href)}
                        className={`text-white/50 text-2xl sm:text-3xl md:text-4xl hover:text-primary transition cursor-pointer ${setActiveRouteUi(item.label)}`}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
                {/* Logo fades in with menu items */}
                <motion.li
                  className="list-none mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <Image
                    src="/assets/logos/scala_logo_v1_white.svg"
                    alt="Scala Logo"
                    width={50}
                    height={50}
                    className="absolute bottom-8 left-8
          h-14 sm:h-14 md:h-17 lg:h-20
          w-auto "
                  />
                </motion.li>
              </motion.ul>
                {menuItems.map((item) => (
                  <li key={item.label} className="p-0 m-0 list-none">
                    {item.subItems && (
                      <div className="flex items-center justify-center gap-2">
                        <AnimatePresence initial={false}>
                          {expanded === item.label && (
                            <motion.ul
                              key="submenu"
                              className="flex flex-col items-start gap-5 px-20 p-0 mt-3 list-none overflow-hidden"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.subItems.map((sub) => (
                                <li
                                  key={sub.label}
                                  className="p-0 m-0 list-none"
                                >
                                  <a
                                    onClick={() => handleLinkClick(sub.href)}
                                    className="text-white/50 uppercase text-xl md:text-2xl font-medium hover:text-primary transition cursor-pointer"
                                  >
                                    {sub.label}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) }
                  </li>
                ))}
              
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
