'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Database, Cloud, Rocket, RefreshCw, BarChart, Server, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DigitalTransformationPage() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 100]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);

    return (
        <div className="w-full min-h-screen bg-[#02040a] text-white font-sans overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center px-4 pt-20"
                style={{ y: heroY, opacity: heroOpacity }}
            >
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 mb-6 backdrop-blur-sm">
                            <Rocket className="w-4 h-4" />
                            <span className="text-sm font-semibold">Future-Proof Your Business</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Transformation</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                            Reimagine your business processes and customer experiences with cutting-edge digital technologies and strategic modernization.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-shadow">
                                    Start Transformation
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
                        {/* Transformation Visual */}
                        <div className="relative w-full h-full">
                            {/* Central Hub */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full border border-indigo-400/50 flex items-center justify-center z-20 backdrop-blur-md"
                                animate={{ boxShadow: ['0 0 20px rgba(99,102,241,0.2)', '0 0 50px rgba(99,102,241,0.4)', '0 0 20px rgba(99,102,241,0.2)'] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <RefreshCw className="w-12 h-12 text-indigo-400 animate-spin-slow" />
                            </motion.div>

                            {/* Orbiting Elements */}
                            {[
                                { icon: Database, color: 'text-blue-400', bg: 'bg-blue-500/20', angle: 0 },
                                { icon: Cloud, color: 'text-cyan-400', bg: 'bg-cyan-500/20', angle: 90 },
                                { icon: Server, color: 'text-teal-400', bg: 'bg-teal-500/20', angle: 180 },
                                { icon: BarChart, color: 'text-purple-400', bg: 'bg-purple-500/20', angle: 270 },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="absolute top-1/2 left-1/2 w-[140px] h-[4px] origin-left"
                                    style={{ rotate: item.angle }}
                                    animate={{ rotate: item.angle + 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <motion.div
                                        className={`absolute right-0 -top-6 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center border border-white/10`}
                                        style={{ rotate: -item.angle }} // Counter-rotate to keep icon upright? No, simpler to just rotate.
                                        animate={{ rotate: -(item.angle + 360) }} // Keep icon upright relative to screen
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                <circle cx="50%" cy="50%" r="140" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="4 4" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#14b8a6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Strategy Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Legacy Modernization", desc: "Upgrade outdated systems to modern, scalable architectures.", icon: Server, color: "text-blue-400" },
                        { title: "Cloud Migration", desc: "Securely move infrastructure to AWS, Azure, or Google Cloud.", icon: Cloud, color: "text-cyan-400" },
                        { title: "Process Automation", desc: "Implement RPA and AI to streamline workflows and reduce manual effort.", icon: RefreshCw, color: "text-teal-400" },
                        { title: "Data Intelligence", desc: "Unlock actionable insights with advanced data analytics pipelines.", icon: BarChart, color: "text-indigo-400" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <item.icon className={`w-10 h-10 ${item.color} mb-6`} />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-[#0e1a2b] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
                <div className="container mx-auto px-4 z-10 relative">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Business Impact</h2>
                        <p className="text-slate-400 text-lg">Digital transformation is not just about technology; it's about measurable business outcomes.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { val: "40%", label: "Operational Cost Reduction", desc: "Through automation and cloud efficiencies" },
                            { val: "3x", label: "Faster Time-to-Market", desc: "With agile development and CI/CD pipelines" },
                            { val: "360°", label: "Customer View", desc: "Unified data providing complete customer insights" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="text-center p-8 border-l border-white/10"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent mb-4">{stat.val}</div>
                                <h4 className="text-xl font-bold text-white mb-2">{stat.label}</h4>
                                <p className="text-sm text-slate-400">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Start Your Journey</h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Don't let legacy systems hold you back. Embrace the future today.
                </p>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-colors">
                        Consult with Experts
                    </button>
                </Link>
            </section>
        </div>
    );
}
