'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Clock, CheckCircle } from 'lucide-react';

export default function SettlementHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-30" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 backdrop-blur-md mx-auto">
                        <Clock className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-200">Faster Access to Capital</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
                        Your Money, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                            Available Instantly
                        </span>
                    </h1>

                    <p className="text-xl text-sabbpe-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Control your cash flow with On-Demand Settlements, Real-Time Reporting, and Automated Reconciliation.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg shadow-emerald-900/20">
                            Enable Instant Settle
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-20 hidden lg:block opacity-20">
                <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                    <BarChart3 className="w-32 h-32 text-emerald-500" />
                </motion.div>
            </div>
            <div className="absolute top-1/2 right-20 hidden lg:block opacity-20">
                <motion.div animate={{ rotate: [0, 45, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
                    <CheckCircle className="w-32 h-32 text-cyan-500" />
                </motion.div>
            </div>
        </section>
    );
}
