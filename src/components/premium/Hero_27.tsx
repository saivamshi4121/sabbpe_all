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

/* ---------------- LOGO ---------------- */

const SabbPeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 xs:w-12 xs:h-12" fill="none">
    <path d="M25 30 Q15 25 25 18 Q38 12 48 18 Q52 20 50 28" stroke="#06B6D4" strokeWidth="6" strokeLinecap="round" />
    <path d="M50 28 Q52 38 42 48 Q28 60 15 52" stroke="#0EA5E9" strokeWidth="6" strokeLinecap="round" />
    <path d="M60 18 L60 52" stroke="#1D4ED8" strokeWidth="6" strokeLinecap="round" />
    <path d="M60 18 Q75 18 82 28 Q86 36 80 46 Q72 52 60 48" stroke="#1D4ED8" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

/* ---------------- ICON BUBBLE ---------------- */

interface IconBubbleProps {
  item: (typeof FEATURE_ICONS)[0];
  index: number;
  totalIcons: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  isMobile: boolean;
}

const IconBubble = ({ item: { Icon, label }, index, totalIcons, hoveredIndex, onHover, isMobile }: IconBubbleProps) => {
  const angle = (index / totalIcons) * Math.PI * 2 - Math.PI / 2;
  const radius = isMobile ? 120 : 220;

  return (
    <motion.div
      className="absolute w-16 h-16 md:w-20 md:h-20"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: '-32px',
        marginTop: '-32px',
      }}
      initial={{ opacity: 0 }}
      animate={{
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        opacity: 1,
      }}
    >
      <motion.button
        onMouseEnter={() => !isMobile && onHover(index)}
        onMouseLeave={() => !isMobile && onHover(null)}
        className="w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-xl bg-white/10 border border-white/20"
      >
        <Icon className="w-6 h-6 text-cyan-300" />
        {hoveredIndex === index && (
          <div className="absolute -top-10 text-xs bg-black/80 text-white px-3 py-1 rounded-full">
            {label}
          </div>
        )}
      </motion.button>
    </motion.div>
  );
};

/* ---------------- NETWORK HUB ---------------- */

interface NetworkHubProps {
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  isMobile: boolean;
}

const NetworkHub = ({ hoveredIndex, onHover, isMobile }: NetworkHubProps) => {
  const radius = isMobile ? 100 : 150;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
        <SabbPeLogo />
      </motion.div>

      {FEATURE_ICONS.map((item, index) => (
        <IconBubble
          key={index}
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

/* ---------------- HERO ---------------- */

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-[#02040a] overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-black text-white">
              Payments
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Simplified.
              </span>
            </h1>

            <p className="text-white/60 text-lg max-w-md">
              Unified UPI, Gateway, Payouts, BBPS & Analytics for India-scale payments.
            </p>

            <div className="flex gap-4">
              <ContactModal
                trigger={
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg">
                    Get Started
                  </button>
                }
              />

              <button
                onClick={() => setShowTour(true)}
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-[500px] flex items-center justify-center">
            <NetworkHub hoveredIndex={hoveredIndex} onHover={setHoveredIndex} isMobile={isMobile} />
          </div>
        </div>
      </section>

      {/* PRODUCT TOUR */}
      <ProductTour isOpen={showTour} onClose={() => setShowTour(false)} />
    </>
  );
}
