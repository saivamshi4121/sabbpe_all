'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Zap, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function InvoiceFinancingPage() {
  const features = [
    { icon: FileText, label: 'Invoice-Based Lending', description: 'Convert outstanding invoices into immediate cash flow' },
    { icon: Zap, label: 'Instant Liquidity', description: 'Get funded within 24 hours of invoice submission' },
    { icon: DollarSign, label: 'Competitive Rates', description: 'Discounting rates as low as 1.5% per month' },
    { icon: TrendingUp, label: 'Scalable Solution', description: 'Increase financing as your business grows' },
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
              Financing Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Invoice <span className="gradient-text">Financing</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Turn your invoices into cash instantly. Maintain healthy cash flow while waiting for customer payments with our innovative invoice discounting service.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#2EE6D6] text-white hover:shadow-xl hover:shadow-[#2563EB]/50 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/5 transition-all">
              Learn More
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
          <div className="relative rounded-3xl overflow-hidden glass-card h-96 flex items-center justify-center bg-gradient-to-br from-[#06B6D4]/10 via-[#2EE6D6]/5 to-transparent">
            <div className="text-center">
              <FileText className="w-24 h-24 mx-auto text-[#06B6D4] mb-4 opacity-50" />
              <p className="text-gray-400">Invoice Management Dashboard</p>
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
                className="glass-card p-6 hover:border-[#06B6D4]/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#06B6D4] mb-3" />
                <h3 className="font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Upload Invoice', desc: 'Submit your invoices digitally' },
              { step: '2', title: 'Instant Review', desc: 'AI verification in minutes' },
              { step: '3', title: 'Get Approved', desc: 'Receive instant approval' },
              { step: '4', title: 'Get Funded', desc: 'Cash in your account in 24hrs' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl font-bold text-[#06B6D4] mb-2">{item.step}</div>
                <p className="font-semibold text-white mb-1">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
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
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <p className="text-sm text-gray-400 mt-2">Invoices Financed</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold gradient-text">₹200Cr+</div>
              <p className="text-sm text-gray-400 mt-2">Total Financing</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold gradient-text">1.5%</div>
              <p className="text-sm text-gray-400 mt-2">Lowest Rates</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Flexible Financing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="text-sm text-[#06B6D4] font-semibold mb-2">STARTER</p>
              <p className="text-xl font-bold text-white mb-2">Up to ₹50L</p>
              <p className="text-sm text-gray-400">1.9% - 2.5% per month</p>
            </motion.div>
            <motion.div className="glass-card p-6 border border-[#06B6D4]/30" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-sm text-[#06B6D4] font-semibold mb-2">GROWTH</p>
              <p className="text-xl font-bold text-white mb-2">₹50L - ₹5Cr</p>
              <p className="text-sm text-gray-400">1.5% - 1.9% per month</p>
            </motion.div>
            <motion.div className="glass-card p-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="text-sm text-[#06B6D4] font-semibold mb-2">ENTERPRISE</p>
              <p className="text-xl font-bold text-white mb-2">₹5Cr+</p>
              <p className="text-sm text-gray-400">Custom rates available</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Optimize Your Cash Flow Today</h2>
          <p className="text-gray-300 mb-6">Stop waiting for payments. Finance your invoices and grow your business faster.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white hover:shadow-lg transition-all inline-flex items-center gap-2">
            Start Financing <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
