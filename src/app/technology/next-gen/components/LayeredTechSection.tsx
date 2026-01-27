"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TechCard } from "./TechCard";

interface LayeredTechSectionProps {
  cards: {
    id: string;
    content: React.ReactNode;
  }[];
}

export function LayeredTechSection({ cards }: LayeredTechSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {cards.map((card, index) => {
          const cardCount = cards.length;
          const cardProgress = 1 / cardCount;
          const start = index * cardProgress;
          const end = (index + 1) * cardProgress;

          // Calculate transitions based on scroll position
          const opacity = useTransform(
            scrollYProgress,
            [
              Math.max(0, start - cardProgress * 0.2),
              start,
              start + cardProgress * 0.05,
              end - cardProgress * 0.05,
              end,
              Math.min(1, end + cardProgress * 0.2)
            ],
            [0, 0.5, 1, 1, 0.5, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [
              Math.max(0, start - cardProgress * 0.2),
              start,
              end,
              Math.min(1, end + cardProgress * 0.2)
            ],
            [0.96, 1, 1, 0.96]
          );

          const y = useTransform(
            scrollYProgress,
            [
              Math.max(0, start - cardProgress * 0.2),
              start,
              end,
              Math.min(1, end + cardProgress * 0.2)
            ],
            ["100px", "0px", "0px", "-100px"]
          );

          const zIndex = useTransform(
            scrollYProgress,
            [start - 0.001, start, end, end + 0.001],
            [index, index + 10, index + 10, index]
          );

          return (
            <TechCard
              key={card.id}
              opacity={opacity}
              scale={scale}
              y={y as any}
              zIndex={zIndex}
            >
              {card.content}
            </TechCard>
          );
        })}
      </div>
    </div>
  );
}
