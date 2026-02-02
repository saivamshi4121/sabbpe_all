'use client';

import { motion } from 'framer-motion';
import { CreditCard, Check, ShieldCheck, Globe } from 'lucide-react';
import { useState } from 'react';

export default function CardsLayer() {
    const [cardType, setCardType] = useState<'credit' | 'debit'>('credit');

    return (
        <div id="cards" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="flex-1 space-y-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold mb-4">
                        <CreditCard className="w-4 h-4" />
                        CARDS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Credit & Debit Cards
                    </h2>
                    <p className="text-xl text-slate-600">
                        Seamless card processing for Visa, Mastercard, RuPay, Amex, and more. Optimized for maximum conversion.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {[
                        "Instant OTP Auto-Read (Mobile)",
                        "Saved Cards for Faster Checkout",
                        "International Card Support (92 Currencies)",
                        "EMI Options on Major Bank Cards"
                    ].map((text, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3"
                        >
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-slate-800 font-medium">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Visual (Interactive Card) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative flex items-center justify-center p-8"
            >
                <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-[80px]" />

                {/* 3D Card Effect */}
                <motion.div
                    whileHover={{ rotateY: 10, rotateX: 5 }}
                    className="w-96 h-60 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 shadow-2xl shadow-blue-900/20 relative overflow-hidden group p-6 flex flex-col justify-between transform transition-transform"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                    <div className="flex justify-between items-start">
                        <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md opacity-80" />
                        <div className="text-white/50 text-xl font-display font-bold italic">VISA</div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="h-6 w-12 bg-white/10 rounded animate-pulse" />
                            <div className="h-6 w-12 bg-white/10 rounded animate-pulse" />
                            <div className="h-6 w-12 bg-white/10 rounded animate-pulse" />
                            <div className="h-6 w-12 bg-white/10 rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Card Holder</div>
                                <div className="text-sm text-white font-medium tracking-wider">JOHN DOE</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Expires</div>
                                <div className="text-sm text-white font-medium tracking-wider">09/29</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-10 bg-white border border-slate-200 shadow-lg p-3 rounded-xl flex items-center gap-2"
                >
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold text-slate-800">Global Access</span>
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-10 bg-white border border-slate-200 shadow-lg p-3 rounded-xl flex items-center gap-2"
                >
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-bold text-slate-800">PCI DSS Level 1</span>
                </motion.div>

            </motion.div>
        </div>
    );
}
