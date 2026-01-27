'use client';

import { motion } from 'framer-motion';
import { ArrowRight, QrCode, Smartphone } from 'lucide-react';

export default function UPIAssistedHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-sabbpe-blue/20 rounded-full blur-[120px] -z-10 opacity-60" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-sabbpe-cyan/10 rounded-full blur-[100px] -z-10 opacity-40" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm font-medium text-sabbpe-text-secondary">Next Gen Payment Infrastructure</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
                        Payments Made <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabbpe-cyan via-blue-400 to-purple-500">
                            Simple & Smart
                        </span>
                    </h1>

                    <p className="text-xl text-sabbpe-text-secondary max-w-2xl mx-auto leading-relaxed">
                        From instant UPI transfers to assisted banking services, we empower your business with the most reliable payment stack in India.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-sabbpe-blue hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-blue-900/20">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-4 rounded-xl font-medium text-slate-300 border border-white/10 hover:bg-white/5 hover:text-white transition-all">
                            View Pricing
                        </button>
                    </div>

                    {/* Floating Icons Animation */}
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block opacity-20">
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <QrCode className="w-24 h-24 text-sabbpe-cyan" />
                        </motion.div>
                    </div>
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-20">
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <Smartphone className="w-24 h-24 text-purple-400" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
