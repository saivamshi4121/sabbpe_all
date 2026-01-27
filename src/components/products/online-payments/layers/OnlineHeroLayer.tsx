'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Lock, Activity } from 'lucide-react';

export default function OnlineHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] -z-10 opacity-30" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 backdrop-blur-md mx-auto">
                        <Activity className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm font-medium text-indigo-200">High-Performance Processing</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
                        Accept Payments <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            Limitlessly
                        </span>
                    </h1>

                    <p className="text-xl text-sabbpe-text-secondary max-w-2xl mx-auto leading-relaxed">
                        The complete online payment stack. Accept cards, wallets, and netbanking from customers worldwide with industry-leading success rates.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-900/20">
                            Start Processing
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 left-10 hidden lg:block opacity-20">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Globe className="w-32 h-32 text-indigo-500" />
                </motion.div>
            </div>
            <div className="absolute bottom-1/3 right-10 hidden lg:block opacity-20">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <Lock className="w-32 h-32 text-pink-500" />
                </motion.div>
            </div>
        </section>
    );
}
