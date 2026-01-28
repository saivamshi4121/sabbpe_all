'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface TourStep {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  target: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  action?: () => void;
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to SabbPe! 🎉',
    description: 'Your complete payment solutions partner. Let us show you everything we offer in 2 minutes.',
    bullets: [
      'Payment solutions for businesses of all sizes',
      'Technology services for growth',
      'Enterprise-grade SaaS tools',
      'End-to-end support',
    ],
    target: 'body',
    position: 'center',
  },
  {
    id: 'products',
    title: '💳 Payment Products',
    description: 'Complete payment infrastructure for modern businesses',
    bullets: [
      'Online Payment Gateway - Accept cards, UPI, wallets',
      'UPI Solutions - Direct UPI integration',
      'QR Payments - Static & dynamic QR codes',
      'Banking Suite - Current accounts & virtual accounts',
      'Payouts - Bulk payments & vendor settlements',
      'Collections & Recurring - Subscription management',
      'BBPS - Bill payment solutions',
      'Settlement & Reporting - Real-time reconciliation',
    ],
    target: '[data-nav="products"]',
    position: 'bottom',
    action: () => {
      const productsBtn = document.querySelector('[data-nav="products"]') as HTMLElement;
      if (productsBtn) {
        productsBtn.click();
        setTimeout(() => productsBtn.click(), 100);
      }
    },
  },
  {
    id: 'technology',
    title: '⚡ Technology Services',
    description: 'Build and scale your tech team with expert support',
    bullets: [
      'Custom Development - Full-stack web & mobile apps',
      'Design & Strategy - UI/UX design, product strategy',
      'Tech Recruitment - Hire top tech talent',
      'DevOps & Cloud - Infrastructure management',
      'API Integration - Connect your systems seamlessly',
      'Maintenance & Support - 24/7 technical support',
    ],
    target: '[data-nav="technology"]',
    position: 'bottom',
    action: () => {
      const techBtn = document.querySelector('[data-nav="technology"]') as HTMLElement;
      if (techBtn) {
        techBtn.click();
        setTimeout(() => techBtn.click(), 100);
      }
    },
  },
  {
    id: 'saas',
    title: '📊 SaaS Solutions',
    description: 'Powerful tools to manage and optimize your payments',
    bullets: [
      'Analytics Dashboard - Real-time insights & reporting',
      'API Platform - Developer-friendly integration',
      'Payment Analytics - Transaction intelligence',
      'Reconciliation System - Automated settlement matching',
      'Fraud Detection - AI-powered security',
      'Custom Reporting - Tailored business reports',
    ],
    target: '[data-nav="saas"]',
    position: 'bottom',
    action: () => {
      const saasBtn = document.querySelector('[data-nav="saas"]') as HTMLElement;
      if (saasBtn) {
        saasBtn.click();
        setTimeout(() => saasBtn.click(), 100);
      }
    },
  },
  {
    id: 'gift-vouchers',
    title: '🎁 Gift Vouchers',
    description: 'Corporate gifting made simple',
    bullets: [
      'Digital gift cards for employees & customers',
      'Multi-brand voucher options',
      'Bulk ordering & customization',
      'Instant delivery via email/SMS',
      'Track usage & redemption',
      'Perfect for rewards & incentives',
    ],
    target: 'a[href*="giftvouchers"]',
    position: 'bottom',
  },
  {
    id: 'onboarding',
    title: '🚀 Merchant Onboarding',
    description: 'Get started in minutes, not days',
    bullets: [
      'Quick digital onboarding process',
      'Instant KYC verification',
      'Digital agreement signing',
      'Real-time application tracking',
      'Dedicated onboarding support',
      'Go live within 24-48 hours',
    ],
    target: 'a[href*="onboarding"]',
    position: 'bottom',
  },
  {
    id: 'services',
    title: '🛠️ Services',
    description: 'Comprehensive support for your business',
    bullets: [
      'Integration support & documentation',
      'Technical consultation',
      'Custom solution development',
      'Migration assistance',
      'Training & workshops',
      '24/7 customer support',
    ],
    target: 'a[href*="services"], a[href="#services"]',
    position: 'bottom',
  },
  {
    id: 'about',
    title: '🏢 About SabbPe',
    description: 'Your trusted payment partner',
    bullets: [
      'RBI-authorized payment aggregator',
      'Serving 1000+ merchants across India',
      'Industry-leading security & compliance',
      'Expert team with 10+ years experience',
      'Committed to innovation & growth',
      'Part of One78 Technology Solutions',
    ],
    target: 'a[href*="about"], a[href="#about"]',
    position: 'bottom',
  },
  {
    id: 'contact',
    title: '📞 Get in Touch',
    description: 'Ready to transform your payments?',
    bullets: [
      'Schedule a personalized demo',
      'Speak with our payment experts',
      'Get custom pricing for your business',
      'Request integration support',
      'Ask any questions',
      'Start your journey with SabbPe today!',
    ],
    target: 'a[href*="contact"], a[href="#contact"]',
    position: 'bottom',
  },
];

interface ProductTourProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductTour({ isOpen, onClose }: ProductTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const step = TOUR_STEPS[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === TOUR_STEPS.length - 1;

  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      if (!step) return;

      // Execute step action if exists
      if (step.action) {
        setTimeout(() => step.action!(), 300);
      }

      // Find target element
      const element = document.querySelector(step.target) as HTMLElement;
      setTargetElement(element);

      if (!element || step.position === 'center') {
        setTooltipPosition({ 
          top: window.innerHeight / 2, 
          left: window.innerWidth / 2 
        });
        return;
      }

      const rect = element.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (step.position) {
        case 'top':
          top = rect.top - 20;
          left = rect.left + rect.width / 2;
          break;
        case 'bottom':
          top = rect.bottom + 20;
          left = rect.left + rect.width / 2;
          break;
        case 'left':
          top = rect.top + rect.height / 2;
          left = rect.left - 20;
          break;
        case 'right':
          top = rect.top + rect.height / 2;
          left = rect.right + 20;
          break;
      }

      setTooltipPosition({ top, left });
    };

    updatePosition();
    const timer = setTimeout(updatePosition, 100);
    
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [currentStep, isOpen, step]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = () => {
    if (isLastStep) {
      onClose();
      setCurrentStep(0);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    onClose();
    setCurrentStep(0);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 z-[9998]"
            onClick={handleSkip}
          />

          {/* Spotlight on target element */}
          {targetElement && step.position !== 'center' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed z-[9999] pointer-events-none"
              style={{
                top: targetElement.getBoundingClientRect().top - 8,
                left: targetElement.getBoundingClientRect().left - 8,
                width: targetElement.offsetWidth + 16,
                height: targetElement.offsetHeight + 16,
                border: '3px solid #2EE6D6',
                borderRadius: '16px',
                boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.85), 0 0 50px rgba(46, 230, 214, 0.6)',
              }}
            >
              {/* Animated pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-sabbpe-cyan"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          )}

          {/* Tooltip Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed z-[10000] w-[90vw] max-w-lg"
            style={{
              top: step.position === 'center' ? '50%' : `${tooltipPosition.top}px`,
              left: step.position === 'center' ? '50%' : `${tooltipPosition.left}px`,
              transform: step.position === 'center' ? 'translate(-50%, -50%)' : 
                        step.position === 'top' ? 'translate(-50%, -100%)' :
                        step.position === 'bottom' ? 'translate(-50%, 0)' :
                        step.position === 'left' ? 'translate(-100%, -50%)' :
                        step.position === 'right' ? 'translate(0, -50%)' : 'none',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0a0a0a]/98 backdrop-blur-2xl border-2 border-sabbpe-cyan/30 rounded-2xl p-6 shadow-2xl shadow-sabbpe-cyan/20 max-h-[80vh] overflow-y-auto">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sabbpe-blue via-sabbpe-cyan to-sabbpe-teal rounded-t-2xl" />

              {/* Close button */}
              <button
                onClick={handleSkip}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white/60 hover:text-white" />
              </button>

              {/* Content */}
              <div className="space-y-5 pr-8">
                {/* Step indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {TOUR_STEPS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentStep
                            ? 'w-10 bg-sabbpe-cyan'
                            : idx < currentStep
                            ? 'w-2 bg-sabbpe-cyan/60'
                            : 'w-2 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/40 font-medium">
                    {currentStep + 1} / {TOUR_STEPS.length}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 py-2">
                  {step.bullets.map((bullet, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-sabbpe-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80 leading-relaxed">
                        {bullet}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {!isFirstStep && (
                    <button
                      onClick={handlePrevious}
                      className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}

                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan text-white text-sm font-bold transition-all hover:shadow-lg hover:shadow-sabbpe-cyan/50 flex items-center gap-2 ml-auto"
                  >
                    {isLastStep ? '🎉 Finish Tour' : 'Next'}
                    {!isLastStep && <ArrowRight className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleSkip}
                    className="px-4 py-2.5 text-white/50 hover:text-white text-sm font-medium transition-colors"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
