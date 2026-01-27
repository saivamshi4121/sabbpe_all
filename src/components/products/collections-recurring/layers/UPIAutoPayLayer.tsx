'use client';

import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function UPIAutoPayLayer() {
    return (
        <div id="autopay" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="flex-1 space-y-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold mb-4">
                        <RefreshCw className="w-3 h-3 animate-spin-slow" />
                        RECURRING PAYMENTS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        UPI AutoPay
                    </h2>
                    <p className="text-xl text-sabbpe-text-secondary">
                        Set it and forget it. Enable one-time mandates for subscriptions, EMIs, and utility bills.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {[
                        "Zero Friction - One click mandate setup",
                        "High Success Rate - Best in class processing",
                        "Flexible Plans - Daily, Weekly, Monthly, or Yearly",
                        "Instant Modification - Pause or Resume anytime"
                    ].map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="flex items-center gap-3"
                        >
                            <CheckCircle2 className="w-5 h-5 text-purple-400" />
                            <span className="text-white font-medium">{text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Visual (Interactive Card) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[80px]" />

                {/* Visual Representation of an AutoPay Setup */}
                <div className="w-80 bg-sabbpe-navy-light border border-white/10 rounded-2xl p-6 relative z-10 shadow-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-sabbpe-cyan/20 flex items-center justify-center">
                                <span className="text-lg font-bold text-sabbpe-cyan">S</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Netflix Subscription</h4>
                                <p className="text-xs text-slate-400">Monthly Plan</p>
                            </div>
                        </div>
                        <span className="font-bold text-white">₹ 649</span>
                    </div>

                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Frequency</span>
                            <span className="text-white">Monthly</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Start Date</span>
                            <span className="text-white">27 Jan 2026</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Payment App</span>
                            <span className="text-white">PhonePe UPI</span>
                        </div>
                    </div>

                    <div className="w-full h-12 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center gap-2 text-green-400 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        AutoPay Active
                    </div>
                </div>

                {/* Floating Notification */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-6 -right-6 bg-white text-black p-3 rounded-lg shadow-xl flex items-center gap-2 text-xs font-bold"
                >
                    <Clock className="w-4 h-4 text-purple-600" />
                    Next Debit: 27 Feb
                </motion.div>
            </motion.div>
        </div>
    );
}
