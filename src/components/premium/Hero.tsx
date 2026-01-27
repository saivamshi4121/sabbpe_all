'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import {
  QrCode,
  CreditCard,
  Send,
  ReceiptText,
  BarChart3,
  Shield,
  Repeat2,
  Building2,
  CheckCircle,
  ArrowRight,
  Play,
} from 'lucide-react';

const FEATURE_ICONS = [
  { Icon: QrCode, label: 'UPI' },
  { Icon: CreditCard, label: 'Gateway' },
  { Icon: Send, label: 'Payouts' },
  { Icon: ReceiptText, label: 'BBPS' },
  { Icon: Building2, label: 'Settlement' },
  { Icon: BarChart3, label: 'Analytics' },
  { Icon: Repeat2, label: 'Subscriptions' },
  { Icon: Shield, label: 'Security' },
];

const SabbPeLogo = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-12 h-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* S */}
      <path
        d="M 25 30 Q 15 25 25 18 Q 38 12 48 18 Q 52 20 50 28"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 50 28 Q 52 38 42 48 Q 28 60 15 52"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* P */}
      <path
        d="M 60 18 L 60 52"
        stroke="#1D4ED8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 60 18 Q 75 18 82 28 Q 86 36 80 46 Q 72 52 60 48"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Speed lines */}
      <line x1="65" y1="24" x2="80" y2="20" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <line x1="65" y1="32" x2="82" y2="26" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
};

interface IconBubbleProps {
  item: (typeof FEATURE_ICONS)[0];
  index: number;
  totalIcons: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

const IconBubble = ({
  item: { Icon, label },
  index,
  totalIcons,
  hoveredIndex,
  onHover,
}: IconBubbleProps) => {
  const angle = (index / totalIcons) * Math.PI * 2 - Math.PI / 2;
  const radius = 220;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      className="absolute w-20 h-20"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: '-40px',
        marginTop: '-40px',
      }}
      initial={{ x: x, y: y, opacity: 0 }}
      animate={{
        x: x,
        y: y,
        opacity: 1,
        translateY: isHovered ? -8 : [0, -6, 0],
      }}
      transition={{
        x: { type: 'spring', stiffness: 500, damping: 100 },
        y: { type: 'spring', stiffness: 500, damping: 100 },
        translateY: isHovered
          ? { duration: 0.3 }
          : { duration: 4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 0.6 },
      }}
    >
      <motion.button
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        className="group relative w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-xl bg-white/8 border border-white/15 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{
          scale: 1.1,
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderColor: 'rgba(34, 211, 238, 0.4)',
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-blue-500/0"
          animate={{
            boxShadow: isHovered
              ? '0 0 30px rgba(34, 211, 238, 0.4)'
              : '0 0 15px rgba(34, 211, 238, 0)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <Icon className="w-7 h-7 text-cyan-300 relative z-10 transition-transform duration-300 group-hover:scale-110" />

        {/* Label tooltip on hover */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={
            isHovered
              ? { opacity: 1, y: -40 }
              : { opacity: 0, y: 8 }
          }
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 pointer-events-none z-50"
        >
          {label}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

interface ConnectingLineProps {
  index: number;
  totalIcons: number;
  hoveredIndex: number | null;
}

const ConnectingLine = ({
  index,
  totalIcons,
  hoveredIndex,
}: ConnectingLineProps) => {
  // This component is now deprecated - lines are rendered in NetworkHub SVG
  return null;
};

interface NetworkHubProps {
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

const NetworkHub = ({ hoveredIndex, onHover }: NetworkHubProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* SVG Container for connecting lines */}
      <svg
        className="absolute w-96 h-96 md:w-[500px] md:h-[500px]"
        viewBox="0 0 500 500"
        style={{ pointerEvents: 'none' }}
      >
        {FEATURE_ICONS.map((_, index) => {
          const angle = (index / FEATURE_ICONS.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isHovered = hoveredIndex === index;

          return (
            <motion.line
              key={`line-${index}`}
              x1="250"
              y1="250"
              x2={250 + x}
              y2={250 + y}
              stroke="url(#gradientLine)"
              strokeWidth="1.5"
              animate={{
                opacity: isHovered ? 0.8 : 0.3,
                strokeWidth: isHovered ? 2.5 : 1.5,
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
        <defs>
          <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Hub */}
      <motion.div
        className="absolute w-24 h-24 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex flex-col items-center justify-center shadow-2xl z-20"
        animate={{
          scale: [1, 1.03, 1],
          boxShadow: [
            '0 0 40px rgba(6, 182, 212, 0.2)',
            '0 0 60px rgba(6, 182, 212, 0.4)',
            '0 0 40px rgba(6, 182, 212, 0.2)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Glow ring behind */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={{
            boxShadow: [
              'inset 0 0 40px rgba(34, 211, 238, 0.1), 0 0 60px rgba(34, 211, 238, 0.15)',
              'inset 0 0 50px rgba(34, 211, 238, 0.2), 0 0 80px rgba(34, 211, 238, 0.25)',
              'inset 0 0 40px rgba(34, 211, 238, 0.1), 0 0 60px rgba(34, 211, 238, 0.15)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center flex items-center justify-center">
          <SabbPeLogo />
        </div>
      </motion.div>

      {/* Icon Bubbles */}
      {FEATURE_ICONS.map((item, index) => (
        <IconBubble
          key={`icon-${index}`}
          item={item}
          index={index}
          totalIcons={FEATURE_ICONS.length}
          hoveredIndex={hoveredIndex}
          onHover={onHover}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-[100vh] bg-[#02040a] overflow-hidden">
      {/* Subtle background - minimal grid only */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Payments
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Simplified.
                </span>
                <br />
                Business Amplified.
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed font-light"
            >
              Unified UPI, Gateway, Payouts, BBPS & Analytics in one stack for India-scale payments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold flex items-center justify-center gap-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-lg bg-white/8 backdrop-blur-xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:border-white/40 transition-all duration-300"
              >
                <Play className="w-5 h-5 fill-white" />
                <span className="relative z-10">Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Network Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-full min-h-[500px] md:min-h-[600px] flex items-center justify-center"
          >
            {/* Network Hub - No background panel */}
            <div className="relative w-full h-full flex items-center justify-center">
              <NetworkHub hoveredIndex={hoveredIndex} onHover={setHoveredIndex} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
