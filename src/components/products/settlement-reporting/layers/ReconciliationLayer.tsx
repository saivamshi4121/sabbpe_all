'use client';

import { motion } from 'framer-motion';
import { FileCheck, RefreshCw, FileSpreadsheet, Layers } from 'lucide-react';

const steps = [
    { title: "Auto-Fetch", desc: "Automated statement fetching from banks and gateways.", icon: RefreshCw },
    { title: "3-Way Match", desc: "Matching Bank + Gateway + Order data automatically.", icon: Layers },
    { title: "Exception Handling", desc: "Flagging mismatches and pending transactions instantly.", icon: FileSpreadsheet },
    { title: "Reconciled", desc: "Clean, audit-ready reports generated daily.", icon: FileCheck },
];

export default function ReconciliationLayer() {
    return (
        <div id="reconciliation" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Visual Process Flow */}
            <div className="flex-1 w-full max-w-md relative">
                {/* Connecting Line */}
                <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500/50 to-emerald-900/10" />

                <div className="space-y-8 relative z-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="flex gap-4 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div className="pt-2">
                                <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{step.title}</h4>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-sm font-bold mb-4">
                        <FileCheck className="w-4 h-4" />
                        AUTOMATED RECONCILIATION
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Zero Manual Effort
                    </h2>
                    <p className="text-xl text-sabbpe-text-secondary">
                        Stop spending hours on spreadsheets. Let SabbPe handle your reconciliation with 99.99% accuracy.
                    </p>
                </motion.div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-400">Time Saved / Month</span>
                        <span className="text-2xl font-bold text-white">40+ Hours</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="bg-emerald-500 h-2 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
