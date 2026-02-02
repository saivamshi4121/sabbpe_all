'use client';

import { motion } from 'framer-motion';
import { Building2, ArrowUpRight, Lock } from 'lucide-react';

const banks = [
    "HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak Mahindra", "Yes Bank", "PNB", "Bank of Baroda"
];

export default function NetBankingLayer() {
    return (
        <div id="netbanking" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Visual */}
            <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-2 gap-4 relative z-10">
                    {banks.map((bank, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold text-xs border border-emerald-100">
                                {bank[0]}
                            </div>
                            <span className="text-slate-800 font-medium text-sm">{bank}</span>
                        </motion.div>
                    ))}
                    <div className="col-span-2 p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 text-sm shadow-sm">
                        + 50 more banks
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-bold mb-4">
                        <Building2 className="w-4 h-4" />
                        NET BANKING
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Direct Bank Payments
                    </h2>
                    <p className="text-xl text-slate-600">
                        Comprehensive coverage of 50+ Indian banks. Enable trusted, high-value transactions directly from bank accounts.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-500 shadow-sm border border-slate-100">
                        <h4 className="text-slate-900 font-bold mb-1 flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-600" /> Secure Processing
                        </h4>
                        <p className="text-sm text-slate-600">Direct integration with core banking systems ensures bank-grade security for every transaction.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-500 shadow-sm border border-slate-100">
                        <h4 className="text-slate-900 font-bold mb-1 flex items-center gap-2">
                            <ArrowUpRight className="w-4 h-4 text-emerald-600" /> High Success Rates
                        </h4>
                        <p className="text-sm text-slate-600">Optimized flows reduce drop-offs, making it perfect for high-ticket purchases.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
