'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Cpu, Binary, GitBranch, BarChart2, Database, Layers, ArrowRight } from 'lucide-react';

export default function MachineLearningPage() {
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
                <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 mb-6 backdrop-blur-sm">
                            <Cpu className="w-4 h-4" />
                            <span className="text-sm font-semibold">Data-Driven Intelligence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                            Machine <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Learning</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Turn raw data into actionable insights. Build adaptive systems that learn, optimize, and scale automatically.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-shadow">
                                    Optimize Your Data
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px]"
                    >
                        {/* ML Pipeline Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Data Stream Animation */}
                            <div className="relative w-full h-64 flex items-center justify-center gap-4">
                                {[0, 1, 2, 3].map((col) => (
                                    <div key={col} className="w-16 h-full flex flex-col gap-2 overflow-hidden relative">
                                        {/* Moving Blocks */}
                                        {[0, 1, 2, 3, 4, 5].map((item) => (
                                            <motion.div
                                                key={item}
                                                className={`w-full h-12 rounded-lg border border-emerald-200 bg-emerald-50 flex items-center justify-center`}
                                                initial={{ y: 200 }}
                                                animate={{ y: -400 }}
                                                transition={{
                                                    duration: 3 + Math.random() * 2,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: Math.random() * 2
                                                }}
                                            >
                                                <Binary className="w-4 h-4 text-emerald-600 opacity-50" />
                                            </motion.div>
                                        ))}
                                    </div>
                                ))}

                                {/* Processing Core Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 bg-white/90 border border-slate-200 rounded-2xl backdrop-blur-sm flex flex-col items-center justify-center shadow-2xl z-10">
                                        <Cpu className="w-16 h-16 text-emerald-600 mb-4 animate-pulse" />
                                        <div className="text-sm font-mono text-emerald-700">PROCESSING</div>
                                        <div className="w-32 h-1 bg-slate-200 rounded mt-2 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-emerald-500"
                                                animate={{ width: ["0%", "100%"] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Capabilities */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5 }}
                    >
                        <GitBranch className="w-12 h-12 text-emerald-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Deep Learning</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Advanced neural networks for complex pattern recognition in image, speech, and text data.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5 }}
                    >
                        <BarChart2 className="w-12 h-12 text-teal-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Predictive Models</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Statistical algorithms that forecast future outcomes based on historical data.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5 }}
                    >
                        <Database className="w-12 h-12 text-green-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Big Data ML</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Scalable pipelines handling petabytes of data to train robust enterprise models.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ML Lifecycle */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">ML Lifecycle Management</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10" />

                        {[
                            { title: "Data Prep", desc: "Cleaning & Labeling", icon: Layers },
                            { title: "Training", desc: "Model Development", icon: Cpu },
                            { title: "Evaluation", desc: "Testing & Tuning", icon: BarChart2 },
                            { title: "Deployment", desc: "Production Serving", icon: Binary },
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-6 rounded-xl border border-slate-200 w-64 text-center z-10 shadow-sm"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <step.icon className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h4 className="text-lg font-bold mb-1 text-slate-900">{step.title}</h4>
                                <p className="text-sm text-slate-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">Unlock Your Data's Value</h2>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-colors">
                        Build ML Models
                    </button>
                </Link>
            </section>
        </div>
    );
}
