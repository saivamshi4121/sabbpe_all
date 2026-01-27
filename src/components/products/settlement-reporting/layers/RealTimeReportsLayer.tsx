'use client';

import { motion } from 'framer-motion';
import { BarChart3, PieChart, Download, Filter } from 'lucide-react';

export default function RealTimeReportsLayer() {
    return (
        <div id="reports" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    Real-time Reporting
                </motion.h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    Make data-driven decisions. Get deep insights into your transactions, success rates, and customer behavior.
                </p>
            </div>

            {/* Dashboard Visual */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-5xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />

                {/* Toolkit Bar */}
                <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex gap-3">
                        <div className="px-3 py-1 rounded bg-black/20 text-xs text-slate-400 flex items-center gap-1"><Filter className="w-3 h-3" /> Filters</div>
                        <div className="px-3 py-1 rounded bg-sabbpe-cyan/10 text-xs text-sabbpe-cyan flex items-center gap-1"><Download className="w-3 h-3" /> Export</div>
                    </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Chart 1 */}
                    <div className="col-span-2 space-y-4">
                        <div className="flex justify-between items-center">
                            <h4 className="text-white text-sm font-bold flex items-center gap-2"><BarChart3 className="w-4 h-4 text-blue-400" /> Transaction Volume</h4>
                            <span className="text-xs text-green-400">+12% vs last week</span>
                        </div>
                        <div className="h-48 flex items-end justify-between gap-2 px-2 pb-2 border-b border-l border-white/10">
                            {[40, 65, 30, 80, 55, 90, 70, 45, 60, 85].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.05 }}
                                    className="w-full bg-blue-500/20 hover:bg-blue-500/40 rounded-t transition-colors relative group"
                                >
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        ₹{h}k
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Chart 2 */}
                    <div className="space-y-4">
                        <h4 className="text-white text-sm font-bold flex items-center gap-2"><PieChart className="w-4 h-4 text-purple-400" /> Payment Modes</h4>
                        <div className="h-48 relative flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-32 h-32 -rotate-90">
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1d4ed8" strokeWidth="20" strokeDasharray="180 251" /> {/* Blue */}
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#a855f7" strokeWidth="20" strokeDasharray="60 251" strokeDashoffset="-180" /> {/* Purple */}
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22d3ee" strokeWidth="20" strokeDasharray="11 251" strokeDashoffset="-240" /> {/* Cyan */}
                            </svg>
                            <div className="absolute text-center">
                                <div className="text-2xl font-bold text-white">4.2k</div>
                                <div className="text-[10px] text-slate-400">Total</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1 text-slate-400"><div className="w-2 h-2 rounded-full bg-blue-600" /> UPI (65%)</div>
                            <div className="flex items-center gap-1 text-slate-400"><div className="w-2 h-2 rounded-full bg-purple-500" /> Cards (30%)</div>
                            <div className="flex items-center gap-1 text-slate-400"><div className="w-2 h-2 rounded-full bg-cyan-400" /> Other (5%)</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
