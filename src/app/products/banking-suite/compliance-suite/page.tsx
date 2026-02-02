'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Lock, FileCheck, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function ComplianceSuitePage() {
  const features = [
    { icon: FileCheck, label: 'KYC/AML Automation', description: 'Automated compliance checks and documentation' },
    { icon: Lock, label: 'Regulatory Compliance', description: 'RBI, FEMA, and AML standards fully integrated' },
    { icon: BarChart3, label: 'Audit Trails', description: 'Complete transaction history and compliance reports' },
    { icon: Zap, label: 'Real-time Monitoring', description: 'Instant alerts for suspicious activities' },
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
            <div className="glass-pill px-4 py-2 text-sm text-yellow-600 bg-yellow-50 border-yellow-100">
              Regulatory Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Compliance <span className="text-yellow-500">Suite</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Streamlined compliance management. Meet regulatory requirements with automated checks, audit trails, and real-time monitoring.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-yellow-500 text-white hover:shadow-xl hover:shadow-yellow-500/30 transition-all hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all">
              View Demo
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
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl h-96 flex items-center justify-center bg-gradient-to-br from-yellow-50 via-cyan-50 to-white">
            <div className="text-center">
              <FileCheck className="w-24 h-24 mx-auto text-yellow-500 mb-4 opacity-50" />
              <p className="text-slate-400">Compliance Dashboard Preview</p>
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
                className="bg-white border border-slate-200 shadow-sm p-6 hover:border-yellow-300 hover:shadow-md transition-all rounded-xl"
              >
                <feature.icon className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{feature.label}</h3>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards - Compact */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Standards & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['RBI Compliant', 'FEMA Ready', 'AML Level 5', 'ISO 27001'].map((cert, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center flex flex-col items-center justify-center shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-yellow-500 mb-2" />
                <p className="text-sm font-semibold text-slate-800">{cert}</p>
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
              <div className="text-3xl font-bold text-yellow-500">100%</div>
              <p className="text-sm text-slate-500 mt-2">Audit Coverage</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold text-primary">Real-time</div>
              <p className="text-sm text-slate-500 mt-2">Monitoring</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold text-cyan-500">Zero</div>
              <p className="text-sm text-slate-500 mt-2">Violations</p>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ensure Full Regulatory Compliance</h2>
          <p className="text-slate-600 mb-6">Automate your compliance processes and focus on growth.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-primary text-white hover:shadow-lg transition-all inline-flex items-center gap-2 hover:bg-blue-700">
            Request Demo <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
