'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
  const radius = 140;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        y: isHovered ? -8 : [0, -6, 0],
      }}
      transition={{
        y: isHovered
          ? { duration: 0.3 }
          : { duration: 4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <motion.button
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        className="group relative w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl bg-white/8 border border-white/15 shadow-lg hover:shadow-xl transition-all duration-300"
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
        <Icon className="w-6 h-6 text-cyan-300 relative z-10 transition-transform duration-300 group-hover:scale-110" />

        {/* Label tooltip on hover */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={
            isHovered
              ? { opacity: 1, y: -40 }
              : { opacity: 0, y: 8 }
          }
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 pointer-events-none"
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
  const angle = (index / totalIcons) * Math.PI * 2 - Math.PI / 2;
  const radius = 140;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const isHovered = hoveredIndex === index;

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      style={{ pointerEvents: 'none' }}
    >
      <motion.line
        x1="200"
        y1="200"
        x2={200 + x}
        y2={200 + y}
        stroke="url(#gradient)"
        strokeWidth="1.5"
        animate={{
          opacity: isHovered ? 0.8 : 0.3,
          strokeWidth: isHovered ? 2.5 : 1.5,
        }}
        transition={{ duration: 0.3 }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity={isHovered ? 0.8 : 0.3} />
          <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity={isHovered ? 0.2 : 0} />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

interface NetworkHubProps {
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

const NetworkHub = ({ hoveredIndex, onHover }: NetworkHubProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Connecting Lines */}
      {FEATURE_ICONS.map((_, index) => (
        <ConnectingLine
          key={`line-${index}`}
          index={index}
          totalIcons={FEATURE_ICONS.length}
          hoveredIndex={hoveredIndex}
        />
      ))}

      {/* Center Hub */}
      <motion.div
        className="absolute w-24 h-24 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex flex-col items-center justify-center shadow-2xl"
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
        <div className="relative z-10 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-1">
            S
          </div>
          <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider">
            Core
          </div>
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
    <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-slate-900 via-[#02040a] to-[#02040a] overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] opacity-30" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 w-fit"
            >
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-300">
                Trusted by merchants across India
              </span>
            </motion.div>

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
              className="text-lg md:text-xl text-white/70 max-w-md leading-relaxed font-light"
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
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold flex items-center justify-center gap-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl bg-white/8 backdrop-blur-xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:border-white/40 transition-all duration-300"
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
            className="relative h-full min-h-[500px] md:min-h-[600px]"
          >
            {/* Glass Panel Container */}
            <div className="absolute inset-0 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-2xl overflow-hidden">
              {/* Inner shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

              {/* Network Hub */}
              <NetworkHub hoveredIndex={hoveredIndex} onHover={setHoveredIndex} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
