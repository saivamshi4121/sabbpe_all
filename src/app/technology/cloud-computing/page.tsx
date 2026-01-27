'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Cloud, Server, Globe, Shield, Zap, LayoutGrid, ArrowRight } from 'lucide-react';

export default function CloudComputingPage() {
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
                <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 mb-6 backdrop-blur-sm">
                            <Cloud className="w-4 h-4" />
                            <span className="text-sm font-semibold">Scalable Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Cloud <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Computing</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                            Accelerate innovation with secure, scalable, and resilient cloud solutions tailored for the modern enterprise.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-shadow">
                                    Migrate to Cloud
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
                        {/* Cloud Network Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Central Cloud Node */}
                            <motion.div
                                className="w-40 h-40 bg-sky-900/30 rounded-full border border-sky-500/50 backdrop-blur-md flex items-center justify-center z-20"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Cloud className="w-20 h-20 text-sky-300" />
                            </motion.div>

                            {/* Orbiting Satellites */}
                            {[
                                { icon: Server, delay: 0, r: 140, speed: 20 },
                                { icon: Globe, delay: 1, r: 140, speed: 25, reverse: true },
                                { icon: Shield, delay: 2, r: 140, speed: 18 },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="absolute top-1/2 left-1/2"
                                    style={{ width: item.r * 2, height: item.r * 2, marginLeft: -item.r, marginTop: -item.r }}
                                    animate={{ rotate: item.reverse ? -360 : 360 }}
                                    transition={{ duration: item.speed, repeat: Infinity, ease: "linear" }}
                                >
                                    <motion.div
                                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0e1a2b] border border-sky-500/30 rounded-xl flex items-center justify-center shadow-lg hover:border-cyan-500/50 transition-colors z-20"
                                        animate={{ rotate: item.reverse ? 360 : -360 }} // Counter rotate
                                        transition={{ duration: item.speed, repeat: Infinity, ease: "linear" }}
                                    >
                                        <item.icon className="w-6 h-6 text-cyan-400" />
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Pulse Waves */}
                            <motion.div
                                className="absolute w-[400px] h-[400px] border border-sky-500/10 rounded-full z-0"
                                animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Benefits Grid */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-8 rounded-3xl bg-white/5 border border-white/10"
                        whileHover={{ y: -5, borderColor: 'rgba(14,165,233,0.5)' }}
                    >
                        <LayoutGrid className="w-12 h-12 text-sky-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Scalability</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Auto-scaling groups ensuring your application handles traffic spikes effortlessly.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white/5 border border-white/10"
                        whileHover={{ y: -5, borderColor: 'rgba(14,165,233,0.5)' }}
                    >
                        <Globe className="w-12 h-12 text-cyan-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Deploy to AWS/Azure regions worldwide to reduce latency for international users.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white/5 border border-white/10"
                        whileHover={{ y: -5, borderColor: 'rgba(14,165,233,0.5)' }}
                    >
                        <Zap className="w-12 h-12 text-yellow-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Cost Efficiency</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Pay-as-you-go models and serverless architectures to optimize operational costs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 bg-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Cloud Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Cloud Migration Strategy",
                            "DevOps & CI/CD",
                            "Serverless Architecture",
                            "Cloud Security Audits",
                            "Hybrid Cloud Setup",
                            "Containerization (Docker/K8s)",
                            "Disaster Recovery",
                            "Performance Tuning"
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 bg-black/40 rounded-xl border-l-4 border-sky-500 hover:bg-black/60 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <h4 className="font-bold text-lg">{item}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners/Platforms */}
            <section className="py-20 border-t border-white/5 text-center">
                <p className="text-slate-500 mb-8 uppercase tracking-widest text-sm">We work with industry leaders</p>
                <div className="flex justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    <div className="text-2xl font-bold">AWS</div>
                    <div className="text-2xl font-bold">Azure</div>
                    <div className="text-2xl font-bold">Google Cloud</div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Go Cloud Native</h2>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-lg transition-colors">
                        Start Migration
                    </button>
                </Link>
            </section>
        </div>
    );
}
