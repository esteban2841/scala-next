"use client";
import { home } from "@/data/content";
import Carrusel from "@/components/molecules/Carrusel";
import RedesSociales from "@/components/molecules/RedesSociales";
import Image from "next/image";
import TabMenu from "@/components/molecules/TabMenu";
import {
  ChatbotButton,
  ChatWindow,
} from "@/components/molecules/ChatbotButton";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <TabMenu
        className="absolute w-full justify-end right-3 top-3"
        style="primary"
      />
      <Carrusel slides={home.slides} interval={6000} className="absolute z-0" />
      <RedesSociales
        className={"absolute z-10  bottom-4 right-8 flex"}
        iconClassName="text-primary hover:text-secondary hover:bg-primary"
      />
      <Image
        src="/assets/logos/scala_logo_v1_white.svg"
        alt="Scala Logo"
        width={50}
        height={50}
        className="
          absolute z-10 bottom-8 left-8
          h-4 sm:h-6 md:h-8 lg:h-14
          w-auto 
        "
      />
      <div className="absolute z-10 top-4 right-4 flex"></div>
{/*       <ChatbotButton onClick={() => setOpen((prev) => !prev)} />
      {open && <ChatWindow onClose={() => setOpen(false)} />} */}
    </div>
  );
}
