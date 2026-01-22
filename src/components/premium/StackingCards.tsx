'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Shield, Zap, CreditCard, BarChart3 } from 'lucide-react';
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
  onSelect 
}: { 
  item: CardData; 
  index: number; 
  activeLayer: number | null;
  total: number;
  scrollProgress: any;
  onSelect: (e: React.MouseEvent) => void;
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

  
  return (
    <motion.div
      onClick={onSelect}
      layout
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 bg-card cursor-pointer shadow-2xl animate-scanline",
        isActive ? "border-primary shadow-[0_0_80px_-12px_rgba(37,99,235,0.6)]" : "border-white/10 hover:border-primary/50"
      )}
      style={{
        top: `calc(12vh + ${index * 50}px)`,
        height: '65vh',
        width: '100%',
        position: 'sticky',
        zIndex: isActive ? 1000 : index,
      }}
      animate={{
        scale: isActive ? 1.1 : 1,
        y: isActive ? -40 : 0,
        rotateX: isActive ? 0 : 2,
        z: isActive ? 200 : 0,
        filter: activeLayer !== null && !isActive ? "blur(15px) brightness(0.2) saturate(0)" : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 18,
        mass: 0.8
      }}
    >
      {/* Solid Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 to-black" />
      
      {/* Holographic Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-10 bg-grid-white pointer-events-none" />
      
      {/* Active Selection Glow */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-blue-500/10 to-cyan-400/20 z-0"
          />
        )}
      </AnimatePresence>

      <div className="absolute left-10 top-10 z-20 flex flex-col gap-2">
        <motion.div 
          layout
          className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full pr-4 pl-1 py-1"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white shadow-lg">
            {index + 1}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Protocol Layer</span>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <motion.img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-cover opacity-0 transition-transform duration-[2000ms] group-hover:scale-110" 
          animate={{ scale: isActive ? 1.15 : 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-10 md:p-16">
        <motion.div 
          layout
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-primary/50" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">{item.category}</span>
        </motion.div>
        
        <motion.h3 
          layout
          className="mb-6 text-5xl font-black tracking-tighter text-white md:text-8xl font-display leading-[0.9]"
        >
          {item.title}
        </motion.h3>
        
        <motion.div
          layout
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed">
            {item.description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn relative h-16 w-16 md:h-20 md:w-20 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
            <ArrowRight className="relative z-10 h-6 w-6 md:h-8 md:w-8 text-black group-hover/btn:text-white transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Futuristic Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full" />
      </div>
    </motion.div>
  );
};

export function StackingCards({ items }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  
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
      className="relative w-full px-4 pb-60 md:px-10 lg:px-20 pt-20"
      onClick={() => setActiveLayer(null)}
    >
      <div className="sticky top-28 z-[1100] mb-32 flex justify-center">
        <div 
          className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/70 p-2 backdrop-blur-3xl shadow-[0_10px_30px_-8px_rgba(0,0,0,0.8)]"
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
                    ? "bg-primary text-white shadow-[0_0_30px_rgba(37,99,235,0.6)] scale-110" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
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
        <div className="h-[20vh]" />
        {items.map((item, index) => (
          <Card 
            key={item.id} 
            item={item} 
            index={index} 
            activeLayer={activeLayer}
            total={items.length} 
            scrollProgress={scrollYProgress}
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
