'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Lock, Activity } from 'lucide-react';

export default function OnlineHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px] -z-10 opacity-70" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[120px] -z-10 opacity-60" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 backdrop-blur-md mx-auto">
                        <Activity className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-700">High-Performance Processing</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                        Accept Payments <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-primary to-cyan-500">
                            Limitlessly
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        The complete online payment stack. Accept cards, wallets, and netbanking from customers worldwide with industry-leading success rates.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
                            Start Processing
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 left-10 hidden lg:block opacity-60">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Globe className="w-32 h-32 text-indigo-200" />
                </motion.div>
            </div>
            <div className="absolute bottom-1/3 right-10 hidden lg:block opacity-60">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <Lock className="w-32 h-32 text-pink-200" />
                </motion.div>
            </div>
        </section>
    );
}
