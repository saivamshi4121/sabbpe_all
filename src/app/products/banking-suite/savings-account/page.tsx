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
    <main className="min-h-screen bg-background">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-900">SabbPe</Link>
          <Link href="/products/banking-suite" className="text-sm text-slate-500 hover:text-slate-900 transition">
            ← Back to Banking Suite
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="glass-pill px-4 py-2 text-sm text-teal-600 bg-teal-50 border-teal-100">
              Personal Banking Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Savings <span className="text-teal-500">Accounts</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Grow your wealth with secure, high-yield savings accounts. Competitive rates, flexible goals, and complete peace of mind.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-teal-500 text-white hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:-translate-y-1">
              Open Account
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all">
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
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl h-96 flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-white">
            <div className="text-center">
              <PiggyBank className="w-24 h-24 mx-auto text-teal-500 mb-4 opacity-50" />
              <p className="text-slate-400">Savings Dashboard Preview</p>
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
                className="bg-white border border-slate-200 shadow-sm p-6 hover:border-teal-300 hover:shadow-md transition-all rounded-xl"
              >
                <feature.icon className="w-8 h-8 text-teal-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{feature.label}</h3>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interest Rates - Compact */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Competitive Interest Rates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="text-xs text-slate-500 mb-2">Savings Account</p>
              <p className="text-2xl font-bold text-teal-500">7.5%</p>
            </motion.div>
            <motion.div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-xs text-slate-500 mb-2">Fixed Deposit</p>
              <p className="text-2xl font-bold text-blue-600">8.2%</p>
            </motion.div>
            <motion.div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-xs text-slate-500 mb-2">Recurring</p>
              <p className="text-2xl font-bold text-cyan-500">8.5%</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-2xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Saving Smarter Today</h2>
          <p className="text-slate-600 mb-6">Open a savings account in minutes and start earning competitive returns.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-teal-500 text-white hover:shadow-lg transition-all inline-flex items-center gap-2 hover:bg-teal-600">
            Open Account <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
