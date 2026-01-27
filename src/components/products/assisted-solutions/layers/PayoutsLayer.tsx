'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Banknote, Building2, User } from 'lucide-react';

export default function PayoutsLayer() {
    return (
        <div id="payouts" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Content */}
            <div className="flex-1 space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        SabbPe Payouts
                    </h2>
                    <p className="text-xl text-sabbpe-text-secondary">
                        Disburse funds instantly. Pay vendors, employees, and refunds 24/7, even on bank holidays.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">Instant</div>
                        <div className="text-xs text-slate-400">Settlement Time</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">IMPS/NEFT</div>
                        <div className="text-xs text-slate-400">Supported Modes</div>
                    </div>
                </div>

                <ul className="space-y-3">
                    {["Bulk Payouts via API/Dashboard", "Beneficiary Validation", "Automated Retry Logic"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                            <ArrowUpRight className="w-4 h-4 text-green-400" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full max-w-sm">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Banknote className="w-24 h-24 text-green-500" /></div>

                    <h3 className="text-white font-bold mb-6">Recent Disbursals</h3>

                    <div className="space-y-4">
                        {[
                            { name: "Vendor Payment", amount: "₹ 25,000", bg: "bg-blue-500", icon: Building2 },
                            { name: "Salary - John", amount: "₹ 85,000", bg: "bg-purple-500", icon: User },
                            { name: "Refund #9921", amount: "₹ 1,200", bg: "bg-orange-500", icon: ArrowUpRight },
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full ${tx.bg} flex items-center justify-center text-white`}>
                                        <tx.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">{tx.name}</div>
                                        <div className="text-xs text-green-400">Success</div>
                                    </div>
                                </div>
                                <div className="font-mono text-white">{tx.amount}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
