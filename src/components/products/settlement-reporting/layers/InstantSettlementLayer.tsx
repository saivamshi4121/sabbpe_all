'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, CalendarDays, Wallet } from 'lucide-react';

export default function InstantSettlementLayer() {
    return (
        <div id="settlement" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="flex-1 space-y-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-bold mb-4">
                        <Zap className="w-4 h-4" />
                        ON-DEMAND
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Instant Settlement
                    </h2>
                    <p className="text-xl text-sabbpe-text-secondary">
                        Don't wait T+2 days for your money. Get funds credited to your bank account instantly, 24/7/365.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: "24x7 Availability", desc: "Even on weekends & holidays", icon: Clock },
                        { title: "On-Demand", desc: "Settle whenever you need", icon: Zap },
                        { title: "Scheduled", desc: "Auto-settle at fixed times", icon: CalendarDays },
                        { title: "Any Bank", desc: "Transfer to any account", icon: Wallet },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="w-6 h-6 text-yellow-400 mb-2" />
                            <h4 className="font-bold text-white">{item.title}</h4>
                            <p className="text-xs text-slate-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Visual - Interactive Balance Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center w-full"
            >
                <div className="relative w-80">
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-[80px]" />

                    <div className="relative z-10 bg-slate-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
                        <div className="text-slate-400 text-sm mb-1">Available Balance</div>
                        <div className="text-4xl font-bold text-white mb-6">₹ 4,25,800</div>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                <span className="text-slate-400">Settling to</span>
                                <span className="text-white flex items-center gap-1">HDFC **** 8821</span>
                            </div>
                            <div className="flex justify-between text-sm py-2 border-b border-white/5">
                                <span className="text-slate-400">Fees</span>
                                <span className="text-white">₹ 15.00</span>
                            </div>
                            <div className="flex justify-between text-sm py-2">
                                <span className="text-slate-400">Net Amount</span>
                                <span className="text-white font-bold">₹ 4,25,785</span>
                            </div>
                        </div>

                        <button className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20">
                            Settle Now
                        </button>

                        <div className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                            <Clock className="w-3 h-3" />
                            Funds deposit in ~15 seconds
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
