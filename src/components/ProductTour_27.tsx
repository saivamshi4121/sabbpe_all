'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Play } from 'lucide-react';

interface TourStep {
  id: string;
  title: string;
  description: string;
  target: string; // CSS selector or element ID
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  action?: () => void; // Optional action to run before showing this step
}

const TOUR_STEPS: TourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to SabbPe! 🎉',
    description: 'Let us show you around our comprehensive payment solutions platform. This tour will take about 2 minutes.',
    target: 'body',
    position: 'center',
  },
  {
    id: 'hero',
    title: 'Payment Solutions Hub',
    description: 'Access all major payment methods through one unified platform - UPI, Gateway, Payouts, BBPS, and more.',
    target: '#hero-section',
    position: 'center',
  },
  {
    id: 'products-nav',
    title: 'Our Products',
    description: 'Explore our range of payment products designed for businesses of all sizes. Click here to see all solutions.',
    target: '[data-nav="products"]',
    position: 'bottom',
    action: () => {
      // Optionally open products menu
      const productsBtn = document.querySelector('[data-nav="products"]');
      if (productsBtn) {
        (productsBtn as HTMLElement).click();
      }
    },
  },
  {
    id: 'technology-nav',
    title: 'Technology Services',
    description: 'Our development, design, and recruitment services help you build and scale your tech team.',
    target: '[data-nav="technology"]',
    position: 'bottom',
  },
  {
    id: 'saas-nav',
    title: 'SaaS Solutions',
    description: 'Powerful dashboards, APIs, analytics, and reconciliation tools to manage your payments efficiently.',
    target: '[data-nav="saas"]',
    position: 'bottom',
  },
  {
    id: 'stacking-cards',
    title: 'Platform Features',
    description: 'Scroll down to see our key platform features - unified payments, smart routing, enterprise security, and real-time insights.',
    target: '#stacking-cards-section',
    position: 'top',
    action: () => {
      // Scroll to stacking cards
      const section = document.querySelector('#stacking-cards-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
  },
  {
    id: 'cta',
    title: 'Ready to Get Started?',
    description: 'Contact our team or schedule a personalized demo to see how SabbPe can transform your payment infrastructure.',
    target: '#hero-cta',
    position: 'top',
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
        setTimeout(() => step.action!(), 100);
      }

      // Find target element
      const element = document.querySelector(step.target) as HTMLElement;
      setTargetElement(element);

      if (!element) {
        setTooltipPosition({ top: window.innerHeight / 2, left: window.innerWidth / 2 });
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
        case 'center':
          top = window.innerHeight / 2;
          left = window.innerWidth / 2;
          break;
      }

      setTooltipPosition({ top, left });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [currentStep, isOpen, step]);

  // Lock body scroll when tour is active
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
            className="fixed inset-0 bg-black/80 z-[9998]"
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
                borderRadius: '12px',
                boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.8), 0 0 40px rgba(46, 230, 214, 0.5)',
              }}
            />
          )}

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed z-[10000] max-w-md"
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
            <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-2xl">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sabbpe-blue via-sabbpe-cyan to-sabbpe-teal rounded-t-2xl" />

              {/* Close button */}
              <button
                onClick={handleSkip}
                className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-white/60 hover:text-white" />
              </button>

              {/* Content */}
              <div className="space-y-4">
                {/* Step indicator */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {TOUR_STEPS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentStep
                            ? 'w-8 bg-sabbpe-cyan'
                            : idx < currentStep
                            ? 'w-1.5 bg-sabbpe-cyan/50'
                            : 'w-1.5 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-white/40 ml-auto">
                    {currentStep + 1} of {TOUR_STEPS.length}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  {!isFirstStep && (
                    <button
                      onClick={handlePrevious}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}

                  <button
                    onClick={handleNext}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan text-white text-sm font-bold transition-all hover:shadow-lg hover:shadow-sabbpe-cyan/50 flex items-center gap-2 ml-auto"
                  >
                    {isLastStep ? 'Finish Tour' : 'Next'}
                    {!isLastStep && <ArrowRight className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleSkip}
                    className="px-4 py-2 text-white/50 hover:text-white text-sm font-medium transition-colors"
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
