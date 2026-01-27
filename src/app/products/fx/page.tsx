'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, BarChart3, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function FXServicesPage() {
  const features = [
    { icon: Globe, label: 'Multi-Currency Support', description: 'Trade 150+ currency pairs at competitive rates' },
    { icon: TrendingUp, label: 'Real-time Rates', description: 'Live forex rates updated every second' },
    { icon: BarChart3, label: 'Hedging Tools', description: 'Protect your business against currency fluctuations' },
    { icon: Lock, label: 'Secure Transactions', description: 'Bank-grade security for all FX transactions' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#02040a] via-[#0E1A2B] to-[#0a0f1a]">
      {/* Header Navigation */}


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="glass-pill px-4 py-2 text-sm text-[#2EE6D6]">
              Treasury Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            FX <span className="gradient-text">Services</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Go global with confidence. Access international currency markets with competitive rates, real-time data, and expert support.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#2EE6D6] text-white hover:shadow-xl hover:shadow-[#2563EB]/50 transition-all">
              Start Trading
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/5 transition-all">
              View Rates
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Section */}
      <motion.section
        className="relative py-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass-card h-96 flex items-center justify-center bg-gradient-to-br from-[#EC4899]/10 via-[#2EE6D6]/5 to-transparent">
            <div className="text-center">
              <Globe className="w-24 h-24 mx-auto text-[#EC4899] mb-4 opacity-50" />
              <p className="text-gray-400">FX Trading Dashboard</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 hover:border-[#EC4899]/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#EC4899] mb-3" />
                <h3 className="font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Currency Pairs */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Major Currency Pairs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['USD/INR', 'EUR/USD', 'GBP/USD', 'JPY/USD', 'AUD/USD', 'CAD/USD', 'CHF/USD', 'SGD/USD'].map((pair, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <p className="font-bold text-[#EC4899] mb-1">{pair}</p>
                <p className="text-xs text-gray-500">Competitive rates</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Trading Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="text-sm text-[#EC4899] font-semibold mb-2">STARTER</p>
              <p className="text-xl font-bold text-white mb-2">Min: $1,000</p>
              <p className="text-sm text-gray-400">1.5% Spread • Email support</p>
            </motion.div>
            <motion.div className="glass-card p-6 border border-[#EC4899]/30" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-sm text-[#EC4899] font-semibold mb-2">PROFESSIONAL</p>
              <p className="text-xl font-bold text-white mb-2">Min: $10,000</p>
              <p className="text-sm text-gray-400">0.8% Spread • Priority support</p>
            </motion.div>
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-sm text-[#EC4899] font-semibold mb-2">ENTERPRISE</p>
              <p className="text-xl font-bold text-white mb-2">Min: $100,000</p>
              <p className="text-sm text-gray-400">Custom • Dedicated manager</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold gradient-text">150+</div>
              <p className="text-sm text-gray-400 mt-2">Currency Pairs</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold gradient-text">$50B+</div>
              <p className="text-sm text-gray-400 mt-2">Monthly Volume</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold gradient-text">24/5</div>
              <p className="text-sm text-gray-400 mt-2">Trading Hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-2xl mx-auto glass-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Trade Global Currencies Today</h2>
          <p className="text-gray-300 mb-6">Access the world's largest FX market with competitive rates and expert support.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#EC4899] text-white hover:shadow-lg transition-all inline-flex items-center gap-2">
            Open Account <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
