"use client";
import { home } from "@/data/content";
import Carrusel from "@/components/molecules/Carrusel";
import TabMenu from "@/components/molecules/TabMenu";

export default function Home() {

  return (
    <div className="relative w-full flex flex-col h-full items-center justify-center min-h-screen">
      <TabMenu
        className="absolute h-[140px]  w-full top-0"
        style="primary"
      />
      <Carrusel slides={home.slides} interval={7000} className="absolute z-0" />

    </div>
  );
}
