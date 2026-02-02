'use client';

import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, CheckCircle2, FileText, Database } from 'lucide-react';

export default function ReconHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
            <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                            <RefreshCw className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-medium text-emerald-700">Automated Reformation</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900">
                            Zero Errors <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                Zero Headaches
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl">
                            Automatically match payments, refunds, and settlements across multiple banks and gateways in seconds.
                        </p>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg shadow-emerald-200">
                                Start Reconciling
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Sources */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="absolute left-0 top-10 flex flex-col gap-4"
                            >
                                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center gap-2 shadow-sm">
                                    <Database className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs text-slate-700">Bank Statement</span>
                                </div>
                                <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center gap-2 shadow-sm">
                                    <FileText className="w-4 h-4 text-orange-600" />
                                    <span className="text-xs text-slate-700">Gateway Report</span>
                                </div>
                            </motion.div>

                            {/* Processing Logic */}
                            <div className="mx-auto w-32 h-32 rounded-full border-2 border-emerald-200 flex items-center justify-center relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 rounded-full border-t-2 border-emerald-600"
                                />
                                <RefreshCw className="w-10 h-10 text-emerald-600" />
                            </div>

                            {/* Result */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute right-0 top-10 flex flex-col gap-4"
                            >
                                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 shadow-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span className="text-xs text-slate-900 font-bold">Matched</span>
                                </div>
                                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 shadow-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span className="text-xs text-slate-900 font-bold">Settled</span>
                                </div>
                            </motion.div>

                            {/* Connecting Lines (Simplified) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-30">
                                <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="#94a3b8" strokeWidth="1" />
                                <line x1="20%" y1="70%" x2="40%" y2="50%" stroke="#94a3b8" strokeWidth="1" />
                                <line x1="60%" y1="50%" x2="80%" y2="30%" stroke="#059669" strokeWidth="1" />
                                <line x1="60%" y1="50%" x2="80%" y2="70%" stroke="#059669" strokeWidth="1" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
