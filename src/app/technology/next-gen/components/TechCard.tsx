"use client";

import { motion, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface TechCardProps {
  children: ReactNode;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  y: any;
  zIndex: MotionValue<number>;
}

export function TechCard({ children, opacity, scale, y, zIndex }: TechCardProps) {
  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        zIndex,
      }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
    >
      <div className="relative w-full h-full max-w-[1400px] bg-gradient-to-b from-white to-gray-50 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-y-auto scrollbar-hide">
        <div className="p-8 md:p-12 lg:p-16">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
