'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Brain, Cpu, Network, Zap, Eye, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function AIPage() {
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
                <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-200 rounded-full text-violet-700 mb-6 backdrop-blur-sm">
                            <Brain className="w-4 h-4" />
                            <span className="text-sm font-semibold">Next-Gen Intelligence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                            Artificial <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Intelligence</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Leverage the power of AI to automate complex tasks, gain predictive insights, and revolutionize your business operations.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow">
                                    Explore AI Solutions
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
                        {/* Neural Network Animation */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Central Brain */}
                            <div className="absolute z-20">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], filter: ['drop-shadow(0 0 20px rgba(139,92,246,0.3))', 'drop-shadow(0 0 50px rgba(139,92,246,0.6))', 'drop-shadow(0 0 20px rgba(139,92,246,0.3))'] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-32 h-32 bg-white border-2 border-violet-500 rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    <Brain className="w-16 h-16 text-violet-600" />
                                </motion.div>
                            </div>

                            {/* Connected Nodes */}
                            {[
                                { x: -150, y: -100, icon: Eye, color: 'text-blue-500' },
                                { x: 150, y: -100, icon: MessageSquare, color: 'text-cyan-500' },
                                { x: -150, y: 100, icon: Cpu, color: 'text-pink-500' },
                                { x: 150, y: 100, icon: Network, color: 'text-emerald-500' },
                                { x: 0, y: -180, icon: Sparkles, color: 'text-yellow-500' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="absolute w-16 h-16 bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center z-20"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{ x: item.x, y: item.y, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                    {/* Lines to center */}
                                    <svg className="absolute w-[500px] h-[500px] pointer-events-none -z-10 opacity-30 overflow-visible"
                                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <motion.line
                                            x1="250" y1="250"
                                            x2={250 - item.x} y2={250 - item.y}
                                            stroke="url(#lineGradient)"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                        />
                                        <defs>
                                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#8b5cf6" />
                                                <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>
                            ))}

                            {/* Pulsing Rings */}
                            <motion.div
                                className="absolute w-[400px] h-[400px] border border-violet-500/10 rounded-full z-0"
                                animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Solutions Grid */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-violet-500/50 hover:shadow-lg transition-all"
                        whileHover={{ y: -5 }}
                    >
                        <Eye className="w-12 h-12 text-blue-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Computer Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Automated visual inspection, facial recognition, and object detection systems for security and retail.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-violet-500/50 hover:shadow-lg transition-all"
                        whileHover={{ y: -5 }}
                    >
                        <MessageSquare className="w-12 h-12 text-pink-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">NLP & LLMs</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Advanced natural language processing for sentiment analysis, document processing, and language translation.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-violet-500/50 hover:shadow-lg transition-all"
                        whileHover={{ y: -5 }}
                    >
                        <Zap className="w-12 h-12 text-yellow-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Predictive Analytics</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Forecast trends, demand, and user behavior with high-accuracy machine learning models.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Integration Process */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">How We Integrate AI</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Audit", desc: "Analyzing data readiness and use cases." },
                            { step: "02", title: "Model", desc: "Selecting or training the right AI models." },
                            { step: "03", title: "Train", desc: "Fine-tuning with your specific dataset." },
                            { step: "04", title: "Deploy", desc: "Seamless integration into your workflow." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-6 border-t border-slate-200 font-mono"
                            >
                                <div className="text-4xl font-bold text-violet-200 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">AI-First Future</h2>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    Transform your business with intelligent automation and insights.
                </p>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold text-lg transition-colors">
                        Start AI Project
                    </button>
                </Link>
            </section>
        </div>
    );
}
