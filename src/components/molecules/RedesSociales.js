"use client";
import React from "react";
import IconButton from "@/components/atoms/IconButton";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function RedesSociales({
  className = "",
  iconClassName = "",
  horizontal = false,
}) {
  const socials = [
    { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/yourprofile" },
    { Icon: FaYoutube, label: "YouTube", href: "https://youtube.com/yourchannel" },
    { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/573001234567" },
    { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  ];

  // Conditional alignment based on `horizontal` and responsiveness
  const alignmentClasses = horizontal
    ? "flex-row space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12"
    : "flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-12";

  return (
    <div className={`flex ${alignmentClasses} ${className}`}>
      {socials.map(({ Icon, label, href }) => (
        <IconButton
          key={label}
          icon={Icon}
          label={label}
          onClick={() => window.open(href, "_blank")}
          className={`filter hover:brightness-1 transition ${iconClassName}`}
        />
      ))}
    </div>
  );
}
