'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Repeat, CalendarClock } from 'lucide-react';

export default function CollectionsHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] -z-10 opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-sabbpe-blue/10 rounded-full blur-[100px] -z-10 opacity-40" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-sm font-medium text-sabbpe-text-secondary">Smart Recurring Payments</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
                        Payments that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                            Work on Autopilot
                        </span>
                    </h1>

                    <p className="text-xl text-sabbpe-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Automate your collections with UPI AutoPay and BBPS. Ensure timely payments, higher retention, and zero friction.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-900/20">
                            Start Automating
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Floating Icons Animation */}
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block opacity-20">
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Repeat className="w-24 h-24 text-purple-400" />
                        </motion.div>
                    </div>
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-20">
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <CalendarClock className="w-24 h-24 text-pink-400" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
