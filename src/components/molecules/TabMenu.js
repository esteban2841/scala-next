"use client";
import React, { useState } from "react";
import IconButton from "@/components/atoms/IconButton";
import { RxHamburgerMenu, RxCross2, RxChevronDown } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { menuItems } from "@/data/content"; 



export default function TabMenu({ className = "", style= "secondary" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const router = useRouter();
  const handleLinkClick = (href) => {
    router.push(href);
    router.refresh();
    closeMenu();
  };

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => {
    setIsOpen(false);
    setExpanded(null);
  };
  const toggleExpand = (lbl) =>
    setExpanded((prev) => (prev === lbl ? null : lbl));

  return (
    <>
      {/* Botón hamburguesa / cerrar */}
      <div className={`flex ${className}`}>
        <IconButton
          icon={isOpen ? RxCross2 : RxHamburgerMenu}
          label={isOpen ? "Cerrar menú" : "Menú"}
          onClick={toggleMenu}
          className={`text-${style} filter z-50 hover:brightness-90 transition`}
        />
      </div>

      {/* Overlay + drawer */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0
          bg-black bg-opacity-80
          z-30
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className="h-full flex items-center justify-center"
        >
          <ul className="flex flex-col items-center justify-center gap-5 p-0 m-0 list-none">
            {menuItems.map((item) => (
              <li key={item.label} className="p-0 m-0 list-none">
                {item.subItems ? (
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="flex items-center text-white text-2xl sm:text-3xl md:text-4xl  font-semibold hover:text-primary transition"
                  >
                    {item.label}
                    <RxChevronDown
                      className={`
                        ml-2 transform transition-transform duration-300
                        ${expanded === item.label ? "-rotate-90" : "rotate-0"}
                      `}
                    />
                  </button>
                ) : (
                  <a
                    onClick={() => handleLinkClick(item.href)}
                    className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold hover:text-primary transition cursor-pointer"
                  >
                    {item.label}
                  </a>
                )}

                {item.subItems && (
                  <ul
                    className={`
                      flex flex-col items-center gap-4 p-0 m-0 list-none
                      overflow-hidden transition-all duration-300
                      ${expanded === item.label ? "max-h-96 mt-2" : "max-h-0"}
                    `}
                  >
                    {item.subItems.map((sub) => (
                      <li key={sub.label} className="p-0 m-0 list-none">
                        <a
                          onClick={() => handleLinkClick(sub.href)}
                          className="text-white text-xl md:text-2xl font-medium hover:text-primary transition cursor-pointer"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Image
            src="/assets/logos/scala_logo_v1_white.svg"
            alt="Scala Logo"
            width={50}
            height={50}
            className="
      absolute bottom-8 left-8
      hidden sm:block /* Oculto en móvil, visible en sm+ */
      h-6 md:h-16 lg:h-14
      w-auto
    "
          />
        </nav>
      </div>
    </>
  );
}
