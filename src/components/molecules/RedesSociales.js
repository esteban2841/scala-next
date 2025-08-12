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

  const alignmentClasses = horizontal
    ? "flex-row "
    : "flex-col sm:flex-row ";

  return (
    <div className={`flex z-30 rounded ${alignmentClasses} gap-2 md:gap-5 ${className}`}>
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
