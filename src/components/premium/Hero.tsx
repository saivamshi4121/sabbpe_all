'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProductTour from '@/components/ProductTour';
import {
  QrCode,
  CreditCard,
  Send,
  ReceiptText,
  BarChart3,
  Shield,
  Repeat2,
  Building2,
  ArrowRight,
  Play,
} from 'lucide-react';
import ContactModal from '@/components/modals/ContactModal';

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
      className="w-10 h-10 xs:w-12 xs:h-12"
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
        stroke="#2563EB"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 60 18 Q 75 18 82 28 Q 86 36 80 46 Q 72 52 60 48"
        fill="none"
        stroke="#2563EB"
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
  isMobile: boolean;
}

const IconBubble = ({
  item: { Icon, label },
  index,
  totalIcons,
  hoveredIndex,
  onHover,
  isMobile,
}: IconBubbleProps) => {
  const angle = (index / totalIcons) * Math.PI * 2 - Math.PI / 2;
  const radius = isMobile ? 120 : 220;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const isHovered = hoveredIndex === index;
  const bubbleSize = isMobile ? 'w-14 h-14' : 'w-16 h-16 md:w-20 md:h-20';

  return (
    <motion.div
      className={`absolute ${bubbleSize}`}
      style={{
        left: '50%',
        top: '50%',
        marginLeft: isMobile ? '-28px' : '-32px',
        marginTop: isMobile ? '-28px' : '-32px',
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
        onMouseEnter={() => !isMobile && onHover(index)}
        onMouseLeave={() => !isMobile && onHover(null)}
        onClick={() => isMobile && onHover(isHovered ? null : index)}
        className="group relative w-full h-full rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all duration-300"
        whileHover={{
          scale: 1.1,
          borderColor: 'rgba(37, 99, 235, 0.4)',
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50/0 to-blue-100/0"
          animate={{
            backgroundColor: isHovered ? 'rgba(239, 246, 255, 1)' : 'rgba(255, 255, 255, 0)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary relative z-10 transition-transform duration-300 group-hover:scale-110" />

        {/* Label tooltip on hover */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={
            isHovered
              ? { opacity: 1, y: -40 }
              : { opacity: 0, y: 8 }
          }
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-white bg-slate-900 shadow-lg px-3 py-1.5 rounded-full pointer-events-none z-50"
        >
          {label}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

interface NetworkHubProps {
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  isMobile: boolean;
}

const NetworkHub = ({ hoveredIndex, onHover, isMobile }: NetworkHubProps) => {
  const svgSize = isMobile ? 'w-72 h-72' : 'w-96 h-96 lg:w-[500px] lg:h-[500px]';
  const lineRadius = isMobile ? 100 : 150;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* SVG Container for connecting lines */}
      <svg
        className={`absolute ${svgSize}`}
        viewBox="0 0 500 500"
        style={{ pointerEvents: 'none' }}
      >
        {FEATURE_ICONS.map((_, index) => {
          const angle = (index / FEATURE_ICONS.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * lineRadius;
          const y = Math.sin(angle) * lineRadius;
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
                opacity: isHovered ? 0.8 : 0.2,
                strokeWidth: isHovered ? 2.5 : 1.5,
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
        <defs>
          <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Hub */}
      <motion.div
        className="absolute w-20 h-20 xs:w-24 xs:h-24 rounded-2xl xs:rounded-3xl bg-white border border-slate-200 flex flex-col items-center justify-center shadow-xl z-20"
        animate={{
          scale: [1, 1.03, 1],
          boxShadow: [
            '0 0 40px rgba(37, 99, 235, 0.1)',
            '0 0 60px rgba(37, 99, 235, 0.2)',
            '0 0 40px rgba(37, 99, 235, 0.1)',
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
          className="absolute inset-0 rounded-2xl xs:rounded-3xl"
          animate={{
            boxShadow: [
              'inset 0 0 40px rgba(37, 99, 235, 0.05), 0 0 60px rgba(37, 99, 235, 0.1)',
              'inset 0 0 50px rgba(37, 99, 235, 0.1), 0 0 80px rgba(37, 99, 235, 0.15)',
              'inset 0 0 40px rgba(37, 99, 235, 0.05), 0 0 60px rgba(37, 99, 235, 0.1)',
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
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section id="hero-section" className="relative w-full min-h-[95vh] bg-background overflow-hidden flex items-center justify-center">
        {/* Subtle background - minimal grid only */}
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
        }} />

        {/* Soft Blurs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
            >
              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                  Payments
                  <br />
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-sabbpe-cyan bg-clip-text text-transparent">
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
                className="text-lg sm:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Unified UPI, Gateway, Payouts, BBPS & Analytics in one stack for India-scale payments.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                id="hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
              >
                {/* Get Started → Contact Modal */}
                <ContactModal
                  trigger={
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto group relative px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-blue-500/20 transition-all duration-300"
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  }
                />

                {/* Watch Demo → Product Tour */}
                <motion.button
                  onClick={() => setShowTour(true)}
                  whileHover={{ scale: 1.05, backgroundColor: '#F8FAFF' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group relative px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center gap-2 hover:border-blue-300 hover:text-primary transition-all duration-300 shadow-sm"
                >
                  <Play className="w-5 h-5 fill-slate-700 group-hover:fill-primary transition-colors" />
                  <span className="relative z-10">Take A Tour</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Network Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center order-1 lg:order-2"
            >
              {/* Network Hub */}
              <div className="relative w-full h-full flex items-center justify-center scale-90 lg:scale-100">
                <NetworkHub hoveredIndex={hoveredIndex} onHover={setHoveredIndex} isMobile={isMobile} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Tour */}
      <ProductTour isOpen={showTour} onClose={() => setShowTour(false)} />
    </>
  );
}
