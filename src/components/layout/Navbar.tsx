'use client';

import { useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Accordion from '@radix-ui/react-accordion';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import ProductsMegaMenu from './navbar/ProductsMegaMenu';
import TechnologyMegaMenu from './navbar/TechnologyMegaMenu';
import SaaSMegaMenu from './navbar/SaaSMegaMenu';

type MegaMenuType = 'products' | 'technology' | 'saas' | '';

// Product links for mobile accordion
const PRODUCT_LINKS = [
  { title: 'Online Payments', href: '/products/online-payments', description: 'Payment Gateway Solutions' },
  { title: 'UPI', href: '/products/upi', description: 'UPI Payment Solutions' },
  { title: 'QR Payments', href: '/products/qr', description: 'QR Code Payments' },
  { title: 'Banking Suite', href: '/products/banking-suite', description: 'Complete Banking Solutions' },
  { title: 'Business Accounts', href: '/products/business-accounts', description: 'Business Account Management' },
  { title: 'Assisted Solutions', href: '/products/assisted-solutions', description: 'Assisted Payment Solutions' },
  { title: 'Collections & Recurring', href: '/products/collections-recurring', description: 'Recurring Payment Management' },
  { title: 'Settlement & Reporting', href: '/products/settlement-reporting', description: 'Settlement Solutions' },
];

// Technology links for mobile accordion
const TECHNOLOGY_LINKS = [
  { title: 'Development', href: '/technology/development', description: 'Custom Development Services' },
  { title: 'Design & Strategy', href: '/technology/design-strategy', description: 'Design & Strategic Consulting' },
  { title: 'Recruitment', href: '/technology/recruitment', description: 'Tech Recruitment Services' },
];

// SaaS links for mobile accordion
const SAAS_LINKS = [
  { title: 'Dashboard', href: '/saas/dashboard', description: 'Analytics Dashboard' },
  { title: 'API Platform', href: '/saas/api', description: 'API Integration Platform' },
  { title: 'Analytics', href: '/saas/analytics', description: 'Business Analytics' },
  { title: 'Reconciliation', href: '/saas/reconciliation', description: 'Payment Reconciliation' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [value, setValue] = useState<MegaMenuType>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setValue('');
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-4 xs:top-5 left-0 right-0 z-[1000] px-2 xs:px-3 md:px-5 transition-all duration-500 ease-in-out',
          isScrolled ? 'top-2 xs:top-3' : 'top-3 xs:top-4'
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={clsx(
              'relative rounded-full transition-all duration-500',
              isScrolled
                ? 'bg-white/90 backdrop-blur-xl border border-slate-200 shadow-lg shadow-slate-200/50 p-1.5 xs:p-2'
                : 'bg-transparent border border-transparent p-2 xs:p-3'
            )}
          >
            <div className="flex items-center justify-between px-2 xs:px-4">
              {/* Logo */}
              <Link href="/">
                <motion.div
                  className="flex items-center flex-shrink-0 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/videos/sabbpe_logo.png"
                    alt="SabbPe Logo"
                    width={110}
                    height={32}
                    className="h-16 xs:h-14 md:h-14 w-auto"
                    priority
                  />
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center justify-center flex-1 ml-12">
                <NavigationMenu.Root
                  value={value}
                  onValueChange={(val) => setValue(val as MegaMenuType)}
                  delayDuration={200}
                  skipDelayDuration={300}
                  className="relative"
                >
                  <NavigationMenu.List className="flex items-center gap-1 list-none m-0 p-0">
                    {[
                      {
                        id: 'products',
                        label: 'Products',
                        content: <ProductsMegaMenu onClose={() => setValue('')} />,
                        width: 'w-[900px]'
                      },
                      {
                        id: 'technology',
                        label: 'Technology',
                        content: <TechnologyMegaMenu onClose={() => setValue('')} />,
                        width: 'w-[1000px]'
                      },
                      {
                        id: 'saas',
                        label: 'SaaS',
                        content: <SaaSMegaMenu onClose={() => setValue('')} />,
                        width: 'w-[850px]'
                      },
                    ].map((item) => (
                      <NavigationMenu.Item key={item.id} value={item.id}>
                        <NavigationMenu.Trigger
                          className={clsx(
                            'group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                            value === item.id
                              ? 'text-primary bg-primary/5'
                              : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={clsx(
                              'w-3 h-3 transition-transform duration-300',
                              value === item.id && 'rotate-180'
                            )}
                          />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content
                          className={clsx(
                            'absolute top-full left-1/2 -translate-x-1/2 mt-2',
                            item.width || 'w-auto',
                            'max-w-[90vw]',
                            'z-[1001] outline-none animate-in fade-in zoom-in-95 duration-200'
                          )}
                        >
                          <div className="relative -translate-y-3 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-3xl p-6 shadow-2xl shadow-slate-200/50 overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sabbpe-blue via-sabbpe-cyan to-sabbpe-teal opacity-50" />
                            {item.content}
                          </div>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                    ))}

                    <div className="w-px h-5 bg-slate-200 mx-2" />

                    {[
                      { label: 'Gift Vouchers', href: 'https://giftvouchers.sabbpe.com' },
                      { label: 'On Boarding', href: 'https://onboarding.sabbpe.com' },
                      { label: 'Services', href: '/services' },
                      { label: 'About', href: '/about' },
                      { label: 'Contact', href: '/contact' },
                    ].map((link) => (
                      <NavigationMenu.Item key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                          {...(link.href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenu.Item>
                    ))}
                  </NavigationMenu.List>
                </NavigationMenu.Root>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav >

      {/* Mobile Menu with Accordions */}
      <AnimatePresence>
        {
          mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-[999] bg-white overflow-y-auto lg:hidden"
            >
              <div className="pt-24 pb-8 px-4 xs:px-6">
                <Accordion.Root type="single" collapsible className="space-y-2">
                  {/* Products Accordion */}
                  <Accordion.Item
                    value="products"
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
                  >
                    <Accordion.Trigger className="flex items-center justify-between w-full px-4 xs:px-6 py-4 text-left text-base xs:text-lg font-semibold text-slate-900 hover:bg-slate-50 transition-colors group">
                      <span>Products</span>
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="px-4 xs:px-6 pb-4 space-y-1">
                        {PRODUCT_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <ChevronRight className="w-4 h-4 mt-1 text-sabbpe-cyan opacity-70 group-hover:opacity-100 transition-opacity" />
                              <div>
                                <div className="text-sm xs:text-base font-medium text-white group-hover:text-sabbpe-cyan transition-colors">
                                  {link.title}
                                </div>
                                <div className="text-xs xs:text-sm text-white/50 mt-0.5">
                                  {link.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>

                  {/* Technology Accordion */}
                  <Accordion.Item
                    value="technology"
                    className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
                  >
                    <Accordion.Trigger className="flex items-center justify-between w-full px-4 xs:px-6 py-4 text-left text-base xs:text-lg font-semibold text-white hover:bg-white/5 transition-colors group">
                      <span>Technology</span>
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="px-4 xs:px-6 pb-4 space-y-1">
                        {TECHNOLOGY_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <ChevronRight className="w-4 h-4 mt-1 text-sabbpe-cyan opacity-70 group-hover:opacity-100 transition-opacity" />
                              <div>
                                <div className="text-sm xs:text-base font-medium text-white group-hover:text-sabbpe-cyan transition-colors">
                                  {link.title}
                                </div>
                                <div className="text-xs xs:text-sm text-white/50 mt-0.5">
                                  {link.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>

                  {/* SaaS Accordion */}
                  <Accordion.Item
                    value="saas"
                    className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
                  >
                    <Accordion.Trigger className="flex items-center justify-between w-full px-4 xs:px-6 py-4 text-left text-base xs:text-lg font-semibold text-white hover:bg-white/5 transition-colors group">
                      <span>SaaS</span>
                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="px-4 xs:px-6 pb-4 space-y-1">
                        {SAAS_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <ChevronRight className="w-4 h-4 mt-1 text-sabbpe-cyan opacity-70 group-hover:opacity-100 transition-opacity" />
                              <div>
                                <div className="text-sm xs:text-base font-medium text-white group-hover:text-sabbpe-cyan transition-colors">
                                  {link.title}
                                </div>
                                <div className="text-xs xs:text-sm text-white/50 mt-0.5">
                                  {link.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>

                {/* Direct Links */}
                <div className="mt-6 space-y-2">
                  <Link
                    href="https://giftvouchers.sabbpe.com"
                    className="block px-4 xs:px-6 py-4 text-base xs:text-lg font-medium text-white bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gift Vouchers
                  </Link>
                  <Link
                    href="https://onboarding.sabbpe.com"
                    className="block px-4 xs:px-6 py-4 text-base xs:text-lg font-medium text-white bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    On Boarding
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 xs:px-6 py-4 text-base xs:text-lg font-medium text-white bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 xs:px-6 py-4 text-base xs:text-lg font-medium text-white bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 xs:px-6 py-4 text-base xs:text-lg font-medium text-white bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan rounded-2xl hover:opacity-90 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>

            </motion.div>
          )
        }
      </AnimatePresence >

      {/* Backdrop overlay for Desktop Mega Menu */}
      <AnimatePresence>
        {
          value && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-24 bottom-0 bg-black/60 backdrop-blur-sm z-[999]"
              onClick={() => setValue('')}
            />
          )
        }
      </AnimatePresence >
    </>
  );
}
