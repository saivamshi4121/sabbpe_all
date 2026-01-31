'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProductTour from '@/components/ProductTour';
import { ArrowRight, Play } from 'lucide-react';
import ContactModal from '@/components/modals/ContactModal';
import Link from 'next/link';

const PAYMENT_ISSUES = [
  { text: 'Settlement Delays', sub: 'Liquidity & float issues' },
  { text: 'Integration Pain', sub: 'Months of dev work' },
  { text: 'Checkout Drops', sub: 'High cart abandonment' },
  { text: 'Manual KYC', sub: 'Onboarding delays' },
  { text: 'Reconciliation', sub: 'Accounting errors' },
  { text: 'Hidden Fees', sub: 'Markup & charges' },
];

const SOLUTIONS = [
  { text: 'Custom Checkout', detail: 'Removes payment friction and increases LTV', image: 'CustomCheckout.png', link: '/products/technology/design-strategy' },
  { text: 'No Code Setup', detail: 'Go live instantly without engineering overhead', image: 'No Code.png', link: '/products//saas/api' },
  { text: 'UPI QR', detail: 'Get your registered UPI QR for accepting payments', image: 'Offline Qr.png', link: '/products/upi-assisted#upi-payments' },
  { text: 'Buy Gift Vouchers', detail: 'Shop gift vouchers in bulk with 1 click', image: 'GV.png', link: 'https://giftvouchers.sabbpe.com/' },
  { text: 'Instant KYC', detail: 'Onboard merchants in under 2 hours', image: 'InstantKYC.png', link: '/products/collections-recurring#upi-collections' },
  { text: 'Smart Subscriptions', detail: 'Automated recurring billing cycles', image: 'Subscription.png', link: '/products/collections-recurring#upi-collections' },
  { text: 'Zero Hidden Fees', detail: 'Transparent flat rates that scale with your business', image: 'Zero Hidden Fee.png', link: '/products/assisted-solutions#links' },
  { text: 'Smart Apps', detail: 'Transform your business with customer delight solutions', image: 'WebDev.png', link: '//technology/cloud-computing' },
];

interface BranchingAnimationProps {
  isMobile: boolean;
}

const BranchingAnimation = ({ isMobile }: BranchingAnimationProps) => {
  // Mobile: 40% radius reduction (60% of desktop)
  const radius = isMobile ? 140 : 360; // 360 * 0.6 = 216
  const problemStartDistance = isMobile ? 360 : 600; // 600 * 0.6 = 360
  const TOTAL = 25;

  // Mobile: 50% reduction in ALL dimensions
  const logoSize = isMobile ? 'h-8' : 'h-16'; // 16 * 0.5 = 8
  const logoPadding = isMobile ? 'px-4 py-2.5' : 'px-8 py-5'; // 50% padding
  
  // Mobile: 50% image container size
  const cardImageHeight = isMobile ? 'h-12' : 'h-28 sm:h-36'; // 28 * 0.5 = 14
  const cardWidth = isMobile ? '85px' : '240px'; // 240 * 0.5 = 120
  const cardPadding = isMobile ? 'p-1.5' : 'p-3 sm:p-4'; // 50% padding
  
  // Mobile: 50% text size
  const titleSize = isMobile ? 'text-[5px]' : 'text-xs'; // 12 * 0.5 = 6
  const detailSize = isMobile ? 'text-[7px]' : 'text-[10px]'; // 10 * 0.5 = 5
  const dotSize = isMobile ? 'h-1.5 w-1.5' : 'h-2.5 w-2.5 sm:h-3 sm:w-3'; // 50% dot
  const gapSize = isMobile ? 'gap-1' : 'gap-2'; // 50% gap
  const marginSize = isMobile ? 'mb-1' : 'mb-1.5'; // 50% margin

  return (
    <div className="relative w-full h-[500px] md:h-[1200px] flex items-center justify-center">
      <div className="relative w-full h-full">
        
        {/* CENTER LOGO - Always visible */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <motion.div
            className={`bg-black rounded-xl shadow-[0_0_60px_rgba(6,182,212,0.9)] ${logoPadding}`}
            animate={{
              x: [0, -8, 8, -6, 6, -4, 4, 0],
              y: [0, 6, -6, 4, -4, 3, -3, 0],
              rotate: [0, -3, 3, -2, 2, -1, 1, 0],
            }}
            transition={{
              duration: 1,
              delay: 4,
              repeat: Infinity,
              repeatDelay: 24, // 25 - 1 = 24
              ease: 'easeInOut',
            }}
          >
            <img
              src="/videos/sabbpe_logo.png"
              alt="SabbPe"
              className={`${logoSize} w-auto`}
              onError={(e) => {
                console.error('Logo failed to load from /videos/sabbpe_logo.png');
                e.currentTarget.src = '/assests/LOGO_bigger_(1)_1769061262983.ico';
              }}
            />
          </motion.div>
        </div>

        {/* Problems converging */}
        {PAYMENT_ISSUES.map((issue, i) => {
          const angle = (i / PAYMENT_ISSUES.length) * Math.PI * 2;
          const startX = Math.cos(angle) * problemStartDistance;
          const startY = Math.sin(angle) * problemStartDistance;

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 z-30"
              initial={{ opacity: 0 }}
              animate={{
                x: [startX, 0],
                y: [startY, 0],
                opacity: [0, 1, 1, 0],
                scale: [1.2, 1],
              }}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 21, // 25 - 4 = 21
                times: [0, 0.1, 0.9, 1],
                ease: 'easeInOut',
              }}
            >
              <div className={`bg-red-500/20 backdrop-blur-3xl ${isMobile ? 'px-2 py-1' : 'px-4 py-2'} rounded-xl border-2 border-red-500/60 shadow-[0_0_40px_rgba(239,68,68,0.3)] whitespace-nowrap -translate-x-1/2 -translate-y-1/2`}>
                <span className={`${isMobile ? 'text-[7px]' : 'text-sm'} font-black uppercase tracking-widest text-red-400 block text-center`}>{issue.text}</span>
                <p className={`${isMobile ? 'text-[5px]' : 'text-[10px]'} text-red-200/60 mt-0.5 font-semibold text-center`}>{issue.sub}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Solutions branching */}
        {SOLUTIONS.map((solution, i) => {
          const angle = (i / SOLUTIONS.length) * Math.PI * 2 - Math.PI / 2;
          const endX = Math.cos(angle) * radius;
          const endY = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 z-10"
              initial={{ opacity: 0 }}
              animate={{
                x: [0, 0, 0, endX, endX, endX, 0],
                y: [0, 0, 0, endY, endY, endY, 0],
                opacity: [0, 0, 0, 1, 1, 1, 0],
                scale: [0, 0, 0, 1, 1, 1, 0],
              }}
              transition={{
                duration: TOTAL,
                times: [0, 0.16, 0.20, 0.28, 0.28, 0.88, 1], // Scaled to 25s: 4s, 5s, 7s, 7s, 22s, 25s
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Link href={solution.link} className="block">
                <div
                  className={`flex flex-col items-center bg-cyan-400/10 backdrop-blur-3xl ${cardPadding} rounded-2xl border-2 border-cyan-400/40 shadow-[0_0_60px_rgba(34,211,238,0.3)] text-center cursor-pointer hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300`}
                  style={{
                    width: cardWidth,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                <div className={`relative w-full ${cardImageHeight} ${isMobile ? 'mb-1' : 'mb-2 sm:mb-3'} rounded-lg overflow-hidden border border-white/10 bg-purple-900/20`}>
                  <img
                    src={`/assests/${solution.image}`}
                    alt={solution.text}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent" />
                  
                  {[...Array(12)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute h-1.5 w-1.5 bg-white rounded-full shadow-[0_0_10px_white]"
                      style={{
                        left: `${(j * 7 + i * 13) % 100}%`,
                        top: `${(j * 11 + i * 17) % 100}%`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0, 0, 1, 0, 1, 0],
                        scale: [0, 0, 0, 2, 0, 2, 0],
                      }}
                      transition={{
                        duration: TOTAL,
                        times: [0, 0.28, 0.30, 0.36, 0.42, 0.48, 0.88], // 7s-22s range scaled
                        repeat: Infinity,
                        delay: j * 0.1,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>

                {/* Mobile: 50% smaller text */}
                <div className={`flex items-center ${gapSize} ${marginSize}`}>
                  <div className={`${dotSize} rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]`} />
                  <span className={`${titleSize} sm:text-sm font-black uppercase tracking-wider text-cyan-400`}>
                    {solution.text}
                  </span>
                </div>
                <p className={`${detailSize} sm:text-xs text-cyan-100 font-semibold leading-relaxed`}>
                  {solution.detail}
                </p>
              </div>
              </Link>
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
      <section id="hero-section" className="relative w-full min-h-screen bg-[#02040a] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
    
    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
      <div>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
          Payments<br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Simplified.
          </span><br />
          Business Amplified.
        </h1>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-md leading-relaxed font-light">
  <strong className="text-white">All payments. One platform.</strong><br />
  <span className="text-white font-semibold">
    Smarter payment infrastructure that saves time, effort, and money.
  </span>
</p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <ContactModal trigger={
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold flex items-center justify-center gap-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                } />

                <motion.button
                  onClick={() => setShowTour(true)}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/8 backdrop-blur-xl border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:border-white/40 transition-all duration-300"
                >
                  <Play className="w-5 h-5 fill-white" />
                  <span className="relative z-10">Take A Tour</span>
                </motion.button>
              </div>
            </div>

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
