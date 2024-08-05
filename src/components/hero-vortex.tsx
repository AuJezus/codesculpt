"use client";

import { useMediaQuery } from "@/lib/use-media-query";
import { Vortex } from "./ui/vortex";

function HeroVortex({ children }: { children: React.ReactNode }) {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <Vortex
      backgroundColor="transparent"
      rangeY={400}
      particleCount={isTablet ? 100 : 10}
      baseHue={220}
      containerClassName="overflow-x-hidden overflow-y-visible"
    >
      {children}
    </Vortex>
  );
}

export default HeroVortex;
