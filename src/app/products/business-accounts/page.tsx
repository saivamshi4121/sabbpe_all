'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function BusinessAccountsPage() {
  const features = [
    { icon: TrendingUp, label: 'Real-time Analytics', description: 'Track transactions, cash flow, and spending patterns instantly' },
    { icon: Users, label: 'Team Management', description: 'Multi-user access with customizable permissions and controls' },
    { icon: Lock, label: 'Enterprise Security', description: 'Bank-grade encryption with 2FA and fraud detection' },
    { icon: Zap, label: 'Instant Settlements', description: 'Next-day settlement with real-time reconciliation' },
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
              Business Banking Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Business <span className="gradient-text">Accounts</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Comprehensive payment solutions designed for growing businesses. Manage cash flow, teams, and transactions with enterprise-grade security.
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

      {/* Visual Section with Gradient */}
      <motion.section
        className="relative py-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass-card h-96 flex items-center justify-center bg-gradient-to-br from-[#2563EB]/10 via-[#2EE6D6]/5 to-transparent">
            <div className="text-center">
              <TrendingUp className="w-24 h-24 mx-auto text-[#2563EB] mb-4 opacity-50" />
              <p className="text-gray-400">Business Dashboard Preview</p>
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
                className="glass-card p-6 hover:border-[#2EE6D6]/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#2EE6D6] mb-3" />
                <h3 className="font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Metrics - Compact */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <p className="text-sm text-gray-400 mt-2">Active Businesses</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold gradient-text">$5B+</div>
              <p className="text-sm text-gray-400 mt-2">Transactions/Month</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <p className="text-sm text-gray-400 mt-2">Uptime SLA</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-6">Join thousands of businesses using SabbPe for seamless payments.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#2EE6D6] text-white hover:shadow-lg transition-all inline-flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
