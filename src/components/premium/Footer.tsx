'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { Icon: Twitter, href: 'https://twitter.com' },
    { Icon: Github, href: 'https://github.com' },
    { Icon: Linkedin, href: 'https://linkedin.com' },
    { Icon: Mail, href: 'mailto:hello@sabbpe.com' },
  ];

  return (
    <footer className="relative w-full bg-[#02040a] border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg">
                S
              </div>
              <span className="text-lg font-bold text-white">SabbPe</span>
            </div>
            <p className="text-white/50 text-sm">
              Financial intelligence for the modern fintech era.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Security', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-cyan-300 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-cyan-300 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/20"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Left */}
          <p className="text-white/50 text-sm">
            &copy; {currentYear} SabbPe. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-cyan-300 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
