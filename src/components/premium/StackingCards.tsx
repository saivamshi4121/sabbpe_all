'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Zap, CreditCard, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CardData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

interface StackingCardsProps {
  items: CardData[];
}

const Card = ({
  item,
  index,
  activeLayer,
  total,
  scrollProgress,
  onSelect,
  isMobile
}: {
  item: CardData;
  index: number;
  activeLayer: number | null;
  total: number;
  scrollProgress: any;
  onSelect: (e: React.MouseEvent) => void;
  isMobile: boolean;
}) => {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;

  const scrollScale = useTransform(
    scrollProgress,
    [start - 0.1, start, end, end + 0.1],
    [0.95, 1, 1, 0.95]
  );

  const isActive = activeLayer === index;

  // Mobile: smaller stacking offset, taller cards
  const topOffset = isMobile ? `calc(10vh + ${index * 30}px)` : `calc(12vh + ${index * 50}px)`;
  const cardHeight = isMobile ? '75vh' : '65vh';

  return (
    <motion.div
      onClick={onSelect}
      layout
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border transition-all duration-700 bg-white cursor-pointer shadow-2xl",
        isActive ? "border-primary shadow-[0_20px_80px_-12px_rgba(37,99,235,0.3)]" : "border-slate-200 hover:border-primary/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      )}
      style={{
        top: topOffset,
        height: cardHeight,
        width: '100%',
        position: 'sticky',
        zIndex: isActive ? 1000 : index,
      }}
      animate={{
        scale: isActive ? (isMobile ? 1.05 : 1.1) : 1,
        y: isActive ? (isMobile ? -20 : -40) : 0,
        rotateX: isActive ? 0 : 2,
        z: isActive ? 200 : 0,
        filter: activeLayer !== null && !isActive ? "blur(8px) brightness(0.95)" : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 18,
        mass: 0.8
      }}
    >
      {/* Solid Background */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* Holographic Mesh Background - Light Mode */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Active Selection Glow */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-blue-100/30 to-cyan-50/50 z-0"
          />
        )}
      </AnimatePresence>

      <div className="absolute left-4 md:left-10 top-4 md:top-10 z-20 flex flex-col gap-2">
        <motion.div
          layout
          className="flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full pr-3 md:pr-4 pl-1 py-1 shadow-sm"
        >
          <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary text-[9px] md:text-[10px] font-black text-white shadow-md">
            {index + 1}
          </span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Protocol Layer</span>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <motion.img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover opacity-0 transition-transform duration-[2000ms] group-hover:scale-110"
          animate={{ scale: isActive ? 1.15 : 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6 xs:p-8 md:p-10 lg:p-16">
        <motion.div
          layout
          className="mb-4 md:mb-8 flex items-center gap-3 md:gap-4"
        >
          <div className="h-px w-8 md:w-12 bg-primary/50" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary">{item.category}</span>
        </motion.div>

        <motion.h3
          layout
          className="mb-4 md:mb-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 font-display leading-[0.9]"
        >
          {item.title}
        </motion.h3>

        <motion.div
          layout
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8"
        >
          <p className="max-w-xl text-sm xs:text-base md:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed">
            {item.description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn relative h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-lg"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
            <ArrowRight className="relative z-10 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-black group-hover/btn:text-white transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Futuristic Scanline Effect - Subtle Light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-1/2 w-full" />
      </div>
    </motion.div>
  );
};

export function StackingCards({ items }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = scrollTop + rect.top + (index * (container.offsetHeight / items.length));
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setActiveLayer(index);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full px-4 sm:px-6 md:px-10 lg:px-20 pb-40 md:pb-60 pt-16 md:pt-20"
      onClick={() => setActiveLayer(null)}
    >
      {/* Navigation Pills - Vertical on mobile, horizontal on desktop */}
      <div className={cn(
        "sticky z-[1100] mb-20 md:mb-32 flex",
        isMobile ? "top-20 left-4 flex-col" : "top-28 justify-center"
      )}>
        <div
          className={cn(
            "flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 backdrop-blur-3xl shadow-[0_10px_30px_-8px_rgba(0,0,0,0.1)]",
            isMobile ? "flex-col" : "flex-row justify-center"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((item, idx) => {
            const Icon = [CreditCard, Zap, Shield, BarChart3][idx] || Zap;
            return (
              <button
                key={`nav-${item.id}`}
                onClick={() => scrollToSection(idx)}
                title={item.title}
                className={cn(
                  "group relative flex items-center justify-center h-10 w-10 rounded-full transition-all duration-500",
                  activeLayer === idx
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110"
                    : "bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-transform duration-500",
                  activeLayer === idx ? "scale-110 rotate-12" : "group-hover:scale-110"
                )} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-[60vh] relative perspective-[2000px]">
        <div className="h-[15vh] md:h-[20vh]" />
        {items.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            activeLayer={activeLayer}
            total={items.length}
            scrollProgress={scrollYProgress}
            isMobile={isMobile}
            onSelect={(e) => {
              e.stopPropagation();
              setActiveLayer(index === activeLayer ? null : index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
