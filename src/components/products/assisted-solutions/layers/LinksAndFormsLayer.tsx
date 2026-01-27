'use client';

import { motion } from 'framer-motion';
import { Link, FileText, Send, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function LinksAndFormsLayer() {
    const [activeTab, setActiveTab] = useState<'links' | 'forms'>('links');

    return (
        <div id="links" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="flex-1 space-y-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex rounded-lg bg-white/5 p-1 mb-6 border border-white/10">
                        <button
                            onClick={() => setActiveTab('links')}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'links' ? 'bg-sabbpe-cyan text-black' : 'text-slate-400 hover:text-white'}`}
                        >
                            Payment Links
                        </button>
                        <button
                            onClick={() => setActiveTab('forms')}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'forms' ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            Payment Forms
                        </button>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        {activeTab === 'links' ? 'Collect Without Code' : 'Custom Payment Experience'}
                    </h2>
                    <p className="text-xl text-sabbpe-text-secondary">
                        {activeTab === 'links'
                            ? "Create and share payment links instantly via SMS, email, or WhatsApp. No website required."
                            : "Build branded payment forms with custom fields. Perfect for events, fees, and donations."
                        }
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {(activeTab === 'links' ? [
                        "Create links in seconds",
                        "Share via any channel",
                        "Accept partial payments",
                        "Smart reminders and expiry"
                    ] : [
                        "Drag & drop form builder",
                        "Collect customer data",
                        "Custom branding",
                        "Embedded checkout"
                    ]).map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className={`p-1 rounded-full ${activeTab === 'links' ? 'bg-sabbpe-cyan/20 text-sabbpe-cyan' : 'bg-purple-500/20 text-purple-400'}`}>
                                <Check className="w-4 h-4" />
                            </div>
                            <span className="text-white font-medium">{text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Visual */}
            <div className="flex-1 flex justify-center">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="relative w-80"
                >
                    <div className={`absolute inset-0 ${activeTab === 'links' ? 'bg-sabbpe-cyan/20' : 'bg-purple-500/20'} rounded-full blur-[80px]`} />

                    <div className="relative z-10 bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
                        {activeTab === 'links' ? (
                            <>
                                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-sabbpe-cyan/20 flex items-center justify-center">
                                        <Link className="w-5 h-5 text-sabbpe-cyan" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">Payment Request</div>
                                        <div className="text-xs text-slate-400">sabbpe.link/INV-2026</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-lg p-3">
                                        <div className="text-xs text-slate-400 mb-1">Amount</div>
                                        <div className="text-2xl font-bold text-white">₹ 1,499.00</div>
                                    </div>
                                    <button className="w-full py-3 rounded-lg bg-sabbpe-cyan text-black font-bold flex items-center justify-center gap-2">
                                        Pay Now <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">Registration Form</div>
                                        <div className="text-xs text-slate-400">Tech Conference 2026</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none" disabled />
                                    <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none" disabled />
                                    <button className="w-full py-3 rounded-lg bg-purple-600 text-white font-bold mt-2">
                                        Register - ₹ 499
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Hidden ID anchor for 'forms' */}
                <div id="forms" className="absolute top-0 opacity-0 pointer-events-none" />
            </div>
        </div>
    );
}
