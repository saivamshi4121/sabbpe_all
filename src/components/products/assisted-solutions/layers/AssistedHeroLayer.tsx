'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Terminal } from 'lucide-react';

export default function AssistedHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 backdrop-blur-md mx-auto">
                        <Terminal className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-blue-200">Full-Stack Payment Infrastructure</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
                        Payments for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                            Digital Economy
                        </span>
                    </h1>

                    <p className="text-xl text-sabbpe-text-secondary max-w-2xl mx-auto leading-relaxed">
                        From powerful payment gateways to instant payouts and seamless integrations. Everything you need to scale your money movement.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-900/20">
                            Start Integrating
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-4 rounded-xl font-medium text-slate-300 border border-white/10 hover:bg-white/5 hover:text-white transition-all">
                            Read Docs
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute top-1/3 left-10 hidden lg:block opacity-30">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <Globe className="w-32 h-32 text-blue-500" />
                </motion.div>
            </div>
            <div className="absolute bottom-1/3 right-10 hidden lg:block opacity-30">
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                    <Shield className="w-32 h-32 text-cyan-500" />
                </motion.div>
            </div>
        </section>
    );
}
