'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Zap, Shield, TrendingUp, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function CreditLinesPage() {
  const features = [
    { icon: CreditCard, label: 'Flexible Access', description: 'Draw funds as needed, pay only for what you use' },
    { icon: Zap, label: 'Instant Funding', description: 'Access capital instantly with revolving credit facility' },
    { icon: Shield, label: 'Low Interest Rates', description: 'Competitive rates starting from 8% per annum' },
    { icon: TrendingUp, label: 'Scale Your Business', description: 'Grow without worrying about working capital' },
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
              Credit Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Credit <span className="gradient-text">Lines</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Revolving credit on demand. Unlimited flexibility to manage your business cash flow with competitive rates and zero hidden charges.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#2EE6D6] text-white hover:shadow-xl hover:shadow-[#2563EB]/50 transition-all">
              Get Credit Line
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
          <div className="relative rounded-3xl overflow-hidden glass-card h-96 flex items-center justify-center bg-gradient-to-br from-[#F59E0B]/10 via-[#2EE6D6]/5 to-transparent">
            <div className="text-center">
              <CreditCard className="w-24 h-24 mx-auto text-[#F59E0B] mb-4 opacity-50" />
              <p className="text-gray-400">Credit Management Dashboard</p>
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
                className="glass-card p-6 hover:border-[#F59E0B]/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#F59E0B] mb-3" />
                <h3 className="font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Credit Line Options */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Credit Line Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="text-sm text-[#F59E0B] font-semibold mb-2">BASIC</p>
              <p className="text-2xl font-bold text-white mb-2">₹5L - ₹25L</p>
              <p className="text-sm text-gray-400 mb-3">8% - 10% Interest</p>
              <p className="text-xs text-gray-500">Flexible repayment • No collateral</p>
            </motion.div>
            <motion.div className="glass-card p-6 border border-[#F59E0B]/30" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-sm text-[#F59E0B] font-semibold mb-2">PROFESSIONAL</p>
              <p className="text-2xl font-bold text-white mb-2">₹25L - ₹1Cr</p>
              <p className="text-sm text-gray-400 mb-3">7% - 9% Interest</p>
              <p className="text-xs text-gray-500">Dedicated manager • Priority support</p>
            </motion.div>
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-sm text-[#F59E0B] font-semibold mb-2">ENTERPRISE</p>
              <p className="text-2xl font-bold text-white mb-2">₹1Cr+</p>
              <p className="text-sm text-gray-400 mb-3">Custom Rates</p>
              <p className="text-xs text-gray-500">Customized terms • Direct support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-3xl font-bold gradient-text">25K+</div>
              <p className="text-sm text-gray-400 mt-2">Active Lines</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold gradient-text">₹1000Cr+</div>
              <p className="text-sm text-gray-400 mt-2">Total Limit</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <p className="text-sm text-gray-400 mt-2">Access</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Unlock Your Business Potential</h2>
          <p className="text-gray-300 mb-6">Secure a credit line in minutes and access funds whenever you need them.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#F59E0B] text-white hover:shadow-lg transition-all inline-flex items-center gap-2">
            Apply Now <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
