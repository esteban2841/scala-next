"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/atoms/SplashScreen";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const [initialLoading, setInitialLoading] = useState(true);
  const [transitionLoading, setTransitionLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setTransitionLoading(true);
    const timer = setTimeout(() => setTransitionLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {(initialLoading || transitionLoading) && <SplashScreen />}
      {children}
    </>
  );
}
