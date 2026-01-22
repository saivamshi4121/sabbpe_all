'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Products', href: '#products' },
    { label: 'SaaS', href: '#saas' },
    { label: 'Technology', href: '#technology' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="w-full max-w-6xl">
          {/* Glass morphism container */}
          <div className="flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/[0.08] transition-colors duration-300">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              {/* Logo Badge */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                S
              </div>
              {/* Logo Text */}
              <span className="text-white font-bold text-lg hidden sm:inline">SabbPe</span>
            </div>

            {/* Center: Menu Items (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right: CTA Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Get Started Button (Desktop) */}
              <button className="hidden sm:inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white hover:text-cyan-400 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-4 lg:hidden"
            >
              <div className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
