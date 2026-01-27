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
              Regulatory Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Compliance <span className="gradient-text">Suite</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Streamlined compliance management. Meet regulatory requirements with automated checks, audit trails, and real-time monitoring.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#2EE6D6] text-white hover:shadow-xl hover:shadow-[#2563EB]/50 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/5 transition-all">
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
          <div className="relative rounded-3xl overflow-hidden glass-card h-96 flex items-center justify-center bg-gradient-to-br from-[#EAB308]/10 via-[#2EE6D6]/5 to-transparent">
            <div className="text-center">
              <FileCheck className="w-24 h-24 mx-auto text-[#EAB308] mb-4 opacity-50" />
              <p className="text-gray-400">Compliance Dashboard Preview</p>
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
                className="glass-card p-6 hover:border-[#EAB308]/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#EAB308] mb-3" />
                <h3 className="font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards - Compact */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Standards & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['RBI Compliant', 'FEMA Ready', 'AML Level 5', 'ISO 27001'].map((cert, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-4 text-center flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-[#EAB308] mb-2" />
                <p className="text-sm font-semibold text-white">{cert}</p>
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
              <div className="text-3xl font-bold text-[#EAB308]">100%</div>
              <p className="text-sm text-gray-400 mt-2">Audit Coverage</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl font-bold text-[#2563EB]">Real-time</div>
              <p className="text-sm text-gray-400 mt-2">Monitoring</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl font-bold text-[#2EE6D6]">Zero</div>
              <p className="text-sm text-gray-400 mt-2">Violations</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ensure Complete Compliance</h2>
          <p className="text-gray-300 mb-6">Automate your compliance processes and stay ahead of regulatory requirements.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563EB] to-[#EAB308] text-white hover:shadow-lg transition-all inline-flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
