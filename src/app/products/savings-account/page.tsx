'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PiggyBank, Target, BarChart3, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SavingsAccountPage() {
  const features = [
    { icon: PiggyBank, label: 'High Yield Savings', description: 'Competitive interest rates on your daily savings' },
    { icon: Target, label: 'Goal-Based Savings', description: 'Create and track savings goals with automated deposits' },
    { icon: BarChart3, label: 'Investment Ready', description: 'Easy access to investment opportunities for wealth growth' },
    { icon: Shield, label: 'Protected Balance', description: 'Up to ₹5L DICGC protection on deposits' },
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
              Personal Banking Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Savings <span className="gradient-text">Accounts</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Grow your wealth with secure, high-yield savings accounts. Competitive rates, flexible goals, and complete peace of mind.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#2EE6D6] text-white hover:shadow-xl hover:shadow-[#2563EB]/50 transition-all">
              Open Account
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
          <div className="relative rounded-3xl overflow-hidden glass-card h-96 flex items-center justify-center bg-gradient-to-br from-[#14B8A6]/10 via-[#2EE6D6]/5 to-transparent">
            <div className="text-center">
              <PiggyBank className="w-24 h-24 mx-auto text-[#14B8A6] mb-4 opacity-50" />
              <p className="text-gray-400">Savings Dashboard Preview</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid - Minimized */}
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
                className="glass-card p-6 hover:border-[#14B8A6]/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#14B8A6] mb-3" />
                <h3 className="font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interest Rates - Compact */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Competitive Interest Rates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div className="glass-card p-4 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="text-xs text-gray-400 mb-2">Savings Account</p>
              <p className="text-2xl font-bold text-[#14B8A6]">7.5%</p>
            </motion.div>
            <motion.div className="glass-card p-4 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-xs text-gray-400 mb-2">Fixed Deposit</p>
              <p className="text-2xl font-bold text-[#2563EB]">8.2%</p>
            </motion.div>
            <motion.div className="glass-card p-4 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-xs text-gray-400 mb-2">Recurring</p>
              <p className="text-2xl font-bold text-[#2EE6D6]">8.5%</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Saving Smarter Today</h2>
          <p className="text-gray-300 mb-6">Open a savings account in minutes and start earning competitive returns.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white hover:shadow-lg transition-all inline-flex items-center gap-2">
            Open Account <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
