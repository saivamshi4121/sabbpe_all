'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Box, Lock, ShieldCheck, RefreshCw, FileText, Wallet, ArrowRight } from 'lucide-react';

export default function BlockchainPage() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 100]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);

    return (
        <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center px-4 pt-20"
                style={{ y: heroY, opacity: heroOpacity }}
            >
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 mb-6 backdrop-blur-sm">
                            <Box className="w-4 h-4" />
                            <span className="text-sm font-semibold">Decentralized Trust</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                            Blockchain <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Technology</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Build secure, transparent, and immutable applications. From smart contracts to enterprise DLT solutions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-shadow">
                                    Explore Web3
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] flex items-center justify-center"
                    >
                        {/* Blockchain Animation */}
                        <div className="relative flex flex-col items-center gap-4">
                            {[0, 1, 2].map((idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.5, duration: 0.8, type: "spring" }}
                                    className="relative"
                                >
                                    <div className="w-64 h-24 bg-white border border-amber-200 rounded-xl flex items-center justify-between px-6 shadow-lg z-10 relative">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                                <Box className="w-5 h-5 text-amber-600" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs text-slate-500 font-mono">HASH</span>
                                                <span className="text-xs font-mono text-amber-600">0x8F3...2A</span>
                                            </div>
                                        </div>
                                        <ShieldCheck className="w-5 h-5 text-green-500" />
                                    </div>
                                    {/* Chain Link */}
                                    {idx < 2 && (
                                        <motion.div
                                            className="w-1 h-8 bg-amber-300 mx-auto"
                                            initial={{ height: 0 }}
                                            animate={{ height: 32 }}
                                            transition={{ delay: idx * 0.5 + 0.4, duration: 0.3 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Features Grid */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5, borderColor: 'rgba(245,158,11,0.5)' }}
                    >
                        <FileText className="w-12 h-12 text-blue-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Smart Contracts</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Self-executing contracts with the terms of the agreement directly written into code. Automated and trustless.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5, borderColor: 'rgba(245,158,11,0.5)' }}
                    >
                        <Lock className="w-12 h-12 text-amber-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Immutable Ledger</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Records cannot be altered retroactively without the alteration of all subsequent blocks.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5, borderColor: 'rgba(245,158,11,0.5)' }}
                    >
                        <Wallet className="w-12 h-12 text-green-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">DeFi Solutions</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Building the future of finance with decentralized applications (dApps) and crypto wallets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">Enterprise Blockchain</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <p className="text-lg text-slate-600">
                                We help businesses implement private and public blockchains to enhance security, transparency, and efficiency.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Supply Chain Transparency",
                                    "Identity Management",
                                    "Digital Asset Tokenization",
                                    "Cross-border Payments"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-xl font-semibold text-slate-800">
                                        <ShieldCheck className="w-6 h-6 text-amber-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md">
                            <div className="font-mono text-sm text-slate-500">
                                <div className="mb-4 text-green-600">// Smart Contract Example</div>
                                <div>contract SupplyChain {'{'}</div>
                                <div className="pl-4">struct Product {'{'}</div>
                                <div className="pl-8">uint id;</div>
                                <div className="pl-8">string name;</div>
                                <div className="pl-8">address owner;</div>
                                <div className="pl-4">{'}'}</div>
                                <div className="pl-4 mt-2">mapping(uint {'=>'} Product) public products;</div>
                                <div className="pl-4 mt-2">function transfer(uint _id, address _to) public {'{'}</div>
                                <div className="pl-8">require(msg.sender == products[_id].owner);</div>
                                <div className="pl-8">products[_id].owner = _to;</div>
                                <div className="pl-4">{'}'}</div>
                                <div>{'}'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">Secure Your Future</h2>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-shadow">
                        Discuss Blockchain
                    </button>
                </Link>
            </section>
        </div>
    );
}
