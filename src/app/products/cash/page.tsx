'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, TrendingUp, BarChart3, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CashManagementPage() {
  const features = [
    { icon: Wallet, label: 'Real-time Balance Tracking', description: 'Monitor all your accounts across multiple banks instantly' },
    { icon: TrendingUp, label: 'Automated Sweeps', description: 'Optimize liquidity with intelligent account management' },
    { icon: BarChart3, label: 'Cash Flow Analytics', description: 'Predict cash needs and manage liquidity efficiently' },
    { icon: Lock, label: 'Secure Transfers', description: 'Bank-grade security for all cash movements' },
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
            Cash <span className="gradient-text">Management</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Centralized control over your business cash. Optimize liquidity, automate sweeps, and maximize returns on idle funds with intelligent cash management.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#2EE6D6] text-white hover:shadow-xl hover:shadow-[#2563EB]/50 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/5 transition-all">
              Schedule Demo
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
          <div className="relative rounded-3xl overflow-hidden glass-card h-96 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6]/10 via-[#2EE6D6]/5 to-transparent">
            <div className="text-center">
              <Wallet className="w-24 h-24 mx-auto text-[#8B5CF6] mb-4 opacity-50" />
              <p className="text-gray-400">Cash Management Dashboard</p>
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
                className="glass-card p-6 hover:border-[#8B5CF6]/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#8B5CF6] mb-3" />
                <h3 className="font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Our Cash Management?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold text-[#8B5CF6] mb-2">100%</div>
              <p className="text-sm text-gray-400">Account Visibility</p>
            </motion.div>
            <motion.div className="glass-card p-6 border border-[#8B5CF6]/30" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold text-[#8B5CF6] mb-2">Real-time</div>
              <p className="text-sm text-gray-400">Liquidity Optimization</p>
            </motion.div>
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold text-[#8B5CF6] mb-2">Auto</div>
              <p className="text-sm text-gray-400">Sweep Automation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Services</h2>
          <div className="space-y-4">
            {[
              { title: 'Multi-Bank Account Aggregation', desc: 'Connect all your bank accounts in one dashboard' },
              { title: 'Automated Liquidity Sweeps', desc: 'Transfer surplus funds automatically to high-yield accounts' },
              { title: 'Cash Flow Forecasting', desc: 'Predict cash needs with AI-powered analytics' },
              { title: 'Payment Optimization', desc: 'Schedule payments for maximum efficiency' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold gradient-text">5000+</div>
              <p className="text-sm text-gray-400 mt-2">Businesses Managed</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold gradient-text">₹10000Cr+</div>
              <p className="text-sm text-gray-400 mt-2">Liquidity Optimized</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold gradient-text">15%</div>
              <p className="text-sm text-gray-400 mt-2">Avg. Yield Improvement</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Maximize Your Liquidity Today</h2>
          <p className="text-gray-300 mb-6">Take control of your cash flow with intelligent, automated cash management.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white hover:shadow-lg transition-all inline-flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
