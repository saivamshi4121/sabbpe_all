'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProductTour from '@/components/ProductTour';
import { ArrowRight, Play } from 'lucide-react';
import ContactModal from '@/components/modals/ContactModal';
import Image from 'next/image';

const PAYMENT_ISSUES = [
  { text: 'Settlement Delays', sub: 'Liquidity & float issues' },
  { text: 'Integration Pain', sub: 'Months of dev work' },
  { text: 'Checkout Drops', sub: 'High cart abandonment' },
  { text: 'Manual KYC', sub: 'Onboarding delays' },
  { text: 'Reconciliation', sub: 'Accounting errors' },
  { text: 'Hidden Fees', sub: 'Markup & charges' },
];

const SOLUTIONS = [
  {
    text: 'Custom Checkout',
    detail: 'Removes payment friction and increases LTV',
    image: 'CustomCheckout.png',
  },
  {
    text: 'No Code Setup',
    detail: 'Go live instantly without engineering overhead',
    image: 'No Code.png',
  },
  {
    text: 'UPI QR',
    detail: 'Get your registered UPI QR for accepting payments',
    image: 'Offline Qr.png',
  },
  {
    text: 'Buy Gift Vouchers Instantly',
    detail: 'Shop gift vouchers in bulk with 1 click',
    image: 'GV.png',
  },
  {
    text: 'Instant KYC',
    detail: 'Onboard merchants in under 2 hours',
    image: 'InstantKYC.png',
  },
  {
    text: 'Smart Subscriptions',
    detail: 'Automated recurring billing cycles',
    image: 'Subscription.png',
  },
  {
    text: 'Zero Hidden Fees',
    detail: 'Transparent flat rates that scale with your business',
    image: 'Zero Hidden Fee.png',
  },
   {
    text: 'Smart Apps with payment',
    detail: 'Transform your business with customer delight solutions ',
    image: 'WebDev.png',
  },
];

interface BranchingAnimationProps {
  isMobile: boolean;
}

const BranchingAnimation = ({ isMobile }: BranchingAnimationProps) => {
  const radius = isMobile ? 280 : 450;

  return (
    <div className="relative w-full h-[1000px] md:h-[1400px] flex items-center justify-center">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        
        {/* Step 1: Payment Issues Converging */}
        {PAYMENT_ISSUES.map((issue, i) => {
          const angle = (i / PAYMENT_ISSUES.length) * Math.PI * 2;
          const startX = Math.cos(angle) * (radius * 2);
          const startY = Math.sin(angle) * (radius * 2);

          return (
            <motion.div
              key={`issue-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              initial={{
                x: startX,
                y: startY,
                opacity: 0,
                scale: 1.5,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: [0, 1, 1, 0],
                scale: [1.5, 1.5, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 11,
                times: [0, 0.2, 0.8, 1],
                ease: 'circOut',
              }}
            >
              <div className="bg-red-500/20 backdrop-blur-3xl px-4 py-2 rounded-xl border-2 border-red-500/60 shadow-[0_0_40px_rgba(239,68,68,0.3)] whitespace-nowrap">
                <span className="text-sm font-black uppercase tracking-widest text-red-400 block text-center">
                  {issue.text}
                </span>
                <p className="text-[10px] text-red-200/60 mt-0.5 font-semibold text-center">
                  {issue.sub}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Step 2: SabbPe Logo in Center - EXACT NAVBAR STYLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: [0, 1, 1, 0.4],
            scale: [0, 1.5, 1, 1],
            rotate: [-180, 0, 0, 0],
          }}
          transition={{
            duration: 15,
            delay: 2,
            repeat: Infinity,
            times: [0, 0.2, 0.6, 1],
            ease: 'backOut',
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
        >
          <div className="relative">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-3xl opacity-60" />
            
            {/* Logo container - BLACK BACKGROUND NO BORDER */}
            <motion.div
              className="relative flex items-center justify-center bg-black rounded-2xl shadow-[0_0_100px_rgba(6,182,212,0.8)] px-8 py-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/videos/sabbpe_logo.png"
                alt="SabbPe Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </motion.div>
          </div>

        </motion.div>

        {/* Step 3: Solutions Branching Out */}
        {SOLUTIONS.map((solution, i) => {
          const angle = (i / SOLUTIONS.length) * Math.PI * 2 - Math.PI / 2;
          const endX = Math.cos(angle) * radius;
          const endY = Math.sin(angle) * radius;

          return (
            <motion.div
              key={`solution-${i}`}
              className="absolute left-1/2 top-1/2 z-10"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: endX,
                y: endY,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
              }}
              transition={{
                duration: 9.5,
                delay: 5.5,
                repeat: Infinity,
                repeatDelay: 5.5,
                times: [0, 0.2, 0.8, 1],
                ease: 'circOut',
              }}
            >
              <div
                className="flex flex-col items-center bg-cyan-400/10 backdrop-blur-3xl p-4 rounded-2xl border-2 border-cyan-400/40 shadow-[0_0_80px_rgba(34,211,238,0.3)] text-center"
                style={{
                  width: isMobile ? '200px' : '260px',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-32 sm:h-40 mb-3 rounded-lg overflow-hidden border border-white/10 bg-purple-900/20">
                  <img
                    src={`/assests/${solution.image}`}
                    alt={solution.text}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Failed to load:', `/assests/${solution.image}`);
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-red-500/20 text-white text-xs">Image not found</div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent" />

                  {/* Glitter Effect */}
                  {[...Array(15)].map((_, j) => (
                    <motion.div
                      key={`glit-${i}-${j}`}
                      className="absolute h-1.5 w-1.5 bg-white rounded-full shadow-[0_0_10px_white]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]" />
                  <span className="text-sm font-black uppercase tracking-widest text-cyan-400 whitespace-nowrap">
                    {solution.text}
                  </span>
                </div>
                <p className="text-xs text-cyan-100 font-bold leading-relaxed tracking-wide text-center">
                  {solution.detail}
                </p>
              </div>

              {/* Connection Beam */}
              <motion.div
                className="absolute left-1/2 top-1/2 origin-left h-[3px]"
                style={{
                  width: `${radius}px`,
                  background: 'linear-gradient(to right, rgba(34, 211, 238, 0.6), transparent)',
                  transform: `rotate(${angle}rad)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  duration: 9.5,
                  delay: 5.5,
                  repeat: Infinity,
                  repeatDelay: 5.5,
                  times: [0, 0.2, 0.8, 1],
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section
        id="hero-section"
        className="relative w-full min-h-screen bg-[#02040a] overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                  Payments
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Simplified.
                  </span>
                  <br />
                  Business Amplified.
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-md leading-relaxed font-light">
                Unified UPI, Gateway, Payouts, BBPS & Analytics in one stack for India-scale payments.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <ContactModal
                  trigger={
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold flex items-center justify-center gap-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  }
                />

                <motion.button
                  onClick={() => setShowTour(true)}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/8 backdrop-blur-xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:border-white/40 transition-all duration-300"
                >
                  <Play className="w-5 h-5 fill-white" />
                  <span className="relative z-10">Take A Tour</span>
                </motion.button>
              </div>
            </div>

            {/* Right Side - Animation */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              <BranchingAnimation isMobile={isMobile} />
            </div>
          </div>
        </div>
      </section>

      <ProductTour isOpen={showTour} onClose={() => setShowTour(false)} />
    </>
  );
}
