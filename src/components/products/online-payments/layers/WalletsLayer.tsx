'use client';

import { motion } from 'framer-motion';
import { Wallet, Smartphone, Zap } from 'lucide-react';

const wallets = [
    { name: "Paytm", color: "bg-[#002e6e] text-white" },
    { name: "PhonePe", color: "bg-[#5f259f] text-white" },
    { name: "Google Pay", color: "bg-white text-black" },
    { name: "Amazon Pay", color: "bg-[#232f3e] text-white" },
    { name: "Mobikwik", color: "bg-blue-500 text-white" },
    { name: "Freecharge", color: "bg-[#f47920] text-white" },
];

export default function WalletsLayer() {
    return (
        <div id="wallets" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 justify-center mb-4"
                >
                    <Wallet className="w-6 h-6 text-purple-600" />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
                >
                    Digital Wallets
                </motion.h2>
                <p className="text-lg text-slate-600">
                    Tap into the growing ecosystem of digital wallets. Enable fast, one-tap checkout for millions of users.
                </p>
            </div>

            {/* Wallets Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {wallets.map((wallet, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`
                            group relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm 
                            hover:shadow-md hover:border-purple-200 transition-all cursor-pointer flex flex-col items-center justify-center gap-4
                        `}
                    >
                        <div className={`w-16 h-16 rounded-2xl ${wallet.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border border-black/5`}>
                            <Wallet className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-purple-600 transition-colors">{wallet.name}</span>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/20 transition-all pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex items-center gap-2 text-sm text-slate-500"
            >
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Plus 50+ other wallets and BNPL providers supported.</span>
            </motion.div>
        </div>
    );
}
