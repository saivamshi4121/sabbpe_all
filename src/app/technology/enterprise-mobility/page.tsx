'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Building2, Shield, Smartphone, Globe, Wifi, Lock, Users, Laptop } from 'lucide-react';

export default function EnterpriseMobilityPage() {
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
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 mb-6 backdrop-blur-sm">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm font-semibold">Work Anywhere, Securely</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Enterprise <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Mobility</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                            Empower your workforce with secure, scalable mobile solutions that drive productivity and collaboration from anywhere in the world.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-shadow">
                                    Mobilize Your Team
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
                        {/* Connectivity Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Central Globe/Hub */}
                            <motion.div
                                className="w-40 h-40 bg-purple-900/30 rounded-full border border-purple-500/50 backdrop-blur-md flex items-center justify-center z-20"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Globe className="w-20 h-20 text-purple-300" />
                            </motion.div>

                            {/* Satellite Devices */}
                            {[
                                { icon: Smartphone, delay: 0, x: 120, y: -80 },
                                { icon: Laptop, delay: 1, x: -120, y: 60 },
                                { icon: Users, delay: 2, x: 100, y: 100 },
                                { icon: Lock, delay: 3, x: -100, y: -100 },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="absolute w-16 h-16 bg-[#0e1a2b] border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-lg hover:border-pink-500/50 transition-colors z-20"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{ x: item.x, y: item.y, opacity: 1 }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                >
                                    <item.icon className="w-8 h-8 text-pink-400" />
                                    {/* Connection Line */}
                                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none -z-10 opacity-20 overflow-visible">
                                        <line x1="50%" y1="50%" x2={50 - item.x} y2={50 - item.y} stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                                    </svg>
                                </motion.div>
                            ))}

                            {/* Radar Waves */}
                            <motion.div
                                className="absolute w-[500px] h-[500px] border border-purple-500/10 rounded-full z-0"
                                animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute w-[400px] h-[400px] border border-purple-500/20 rounded-full z-0"
                                animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Solutions Grid */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20"
                        whileHover={{ y: -5 }}
                    >
                        <Shield className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Bank-grade security protocols, MDM (Mobile Device Management) integration, and end-to-end encryption for all corporate data.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20"
                        whileHover={{ y: -5 }}
                    >
                        <Wifi className="w-12 h-12 text-pink-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Offline First</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Seamless operation even without internet connectivity. Instant data synchronization once connection is restored.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20"
                        whileHover={{ y: -5 }}
                    >
                        <Users className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">BYOD Strategy</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Secure containerization frameworks allowing employees to use personal devices safely without compromising corporate data.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Industry Solutions</h2>
                    <div className="space-y-12">
                        {[
                            { title: "Field Sales & Service", desc: "Empower field agents with real-time inventory, CRM access, and order processing on the go.", color: "border-l-4 border-purple-500" },
                            { title: "Logistics & Supply Chain", desc: "Track fleet in real-time, manage deliveries, and optimize routes with integrated mobile apps.", color: "border-l-4 border-pink-500" },
                            { title: "Healthcare Mobility", desc: "Secure access to patient records, appointment management, and telemedicine capabilities.", color: "border-l-4 border-blue-500" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 bg-black/40 rounded-r-xl ${item.color}`}
                            >
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-lg">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Go  Mobile First</h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Transform your workflow with secure, enterprise-grade mobility solutions.
                </p>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-shadow">
                        Get Started
                    </button>
                </Link>
            </section>
        </div>
    );
}
