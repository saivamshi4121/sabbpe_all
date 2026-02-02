'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, PiggyBank, FileCheck } from 'lucide-react';

export default function BankingSuitePage() {
  const products = [
    {
      icon: Users,
      title: 'Business Accounts',
      description: 'Enterprise-grade payment solutions for growing businesses',
      features: ['Team Management', 'Real-time Analytics', 'Multi-currency Support'],
      href: '/products/banking-suite/business-accounts',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: PiggyBank,
      title: 'Savings Accounts',
      description: 'High-yield savings with competitive returns and protection',
      features: ['7.5% Interest', 'Goal-Based Savings', 'DICGC Protected'],
      href: '/products/banking-suite/savings-account',
      gradient: 'from-teal-500 to-cyan-400',
    },
    {
      icon: FileCheck,
      title: 'Compliance Suite',
      description: 'Automated regulatory compliance and monitoring',
      features: ['KYC/AML Automation', 'Audit Trails', 'Real-time Alerts'],
      href: '/products/banking-suite/compliance-suite',
      gradient: 'from-yellow-500 to-orange-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header Navigation */}


      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <div className="glass-pill px-4 py-2 text-sm text-primary bg-blue-50 border-blue-100">
              Complete Banking Solution
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Banking <span className="text-primary">Suite</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Everything you need for modern banking—from business payments to personal savings to regulatory compliance.
          </motion.p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link href={product.href}>
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 h-full hover:border-blue-300 hover:shadow-lg transition-all group cursor-pointer hover:bg-slate-50">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} p-2.5 mb-4 flex items-center justify-center shadow-md`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{product.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Banking Suite Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose SabbPe Banking Suite?</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Unified Platform', desc: 'All banking needs in one place' },
              { title: 'Enterprise Security', desc: 'Bank-grade encryption and protection' },
              { title: 'Instant Settlements', desc: 'Real-time transaction processing' },
              { title: '24/7 Support', desc: 'Round-the-clock customer support' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-primary text-2xl font-bold">0{idx + 1}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Experience Modern Banking?</h2>
          <p className="text-slate-600 mb-6">Join thousands of businesses and individuals on SabbPe.</p>
          <button className="px-8 py-3 rounded-xl font-semibold bg-primary text-white hover:shadow-lg transition-all inline-flex items-center gap-2 hover:bg-blue-700">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
