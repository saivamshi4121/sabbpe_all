'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Glasses, Box, Globe, Zap, Layers, Maximize2, ArrowRight } from 'lucide-react';

export default function MetaversePage() {
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
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-400 mb-6 backdrop-blur-sm">
                            <Glasses className="w-4 h-4" />
                            <span className="text-sm font-semibold">Beyond Reality</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Metaverse & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">AR/VR</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                            Create immersive digital experiences that blend the physical and virtual worlds. From XR training to virtual commerce.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] transition-shadow">
                                    Enter the Metaverse
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] flex items-center justify-center perspective-[1000px]"
                    >
                        {/* 3D Visual Animation */}
                        <div className="relative w-64 h-64 preserve-3d">
                            {/* Rotating Cube Simulation */}
                            <motion.div
                                className="absolute inset-0 w-full h-full border border-fuchsia-500/30 bg-fuchsia-500/5 backdrop-blur-sm rounded-3xl"
                                animate={{
                                    rotateX: [0, 360],
                                    rotateY: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute inset-4 border border-violet-500/30 rounded-2xl" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Box className="w-24 h-24 text-fuchsia-400 opacity-50" />
                                </div>
                            </motion.div>

                            {/* Floating AR Elements */}
                            {[
                                { icon: Globe, x: -120, y: -80, delay: 0 },
                                { icon: Maximize2, x: 120, y: 60, delay: 1 },
                                { icon: Layers, x: -100, y: 100, delay: 2 },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#0e1a2b] border border-violet-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                                    style={{ x: item.x, y: item.y, marginLeft: -32, marginTop: -32 }}
                                    animate={{ y: [item.y - 10, item.y + 10, item.y - 10] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                                >
                                    <item.icon className="w-8 h-8 text-fuchsia-300" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Experience Types */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-br from-fuchsia-900/10 to-violet-900/10 border border-fuchsia-500/20"
                        whileHover={{ y: -5 }}
                    >
                        <Glasses className="w-12 h-12 text-fuchsia-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Virtual Reality (VR)</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Fully immersive digital environments for training, gaming, and virtual tours.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-br from-fuchsia-900/10 to-violet-900/10 border border-fuchsia-500/20"
                        whileHover={{ y: -5 }}
                    >
                        <Maximize2 className="w-12 h-12 text-violet-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Augmented Reality (AR)</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Overlay digital information onto the real world via mobile devices or smart glasses.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-br from-fuchsia-900/10 to-violet-900/10 border border-fuchsia-500/20"
                        whileHover={{ y: -5 }}
                    >
                        <Globe className="w-12 h-12 text-pink-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Metaverse Spaces</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Persistent, shared 3D virtual spaces for social interaction and commerce.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Immersive Solutions</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {[
                                { title: "Virtual Showrooms", desc: "Let customers try products in 3D before buying." },
                                { title: "Immersive Training", desc: "Safe, realistic simulations for employee upskilling." },
                                { title: "Digital Twins", desc: "Virtual replicas of physical assets for monitoring and planning." },
                                { title: "Interactive Events", desc: "Host global conferences in a bespoke virtual venue." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-1 h-full bg-gradient-to-b from-fuchsia-500 to-violet-500 rounded-full" />
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-full min-h-[400px] bg-black/40 rounded-3xl overflow-hidden relative border border-white/10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <div className="text-center z-10">
                                <div className="text-6xl mb-4">🕶️</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Try The Demo</h3>
                                <p className="text-slate-400 text-sm">Launch AR Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Immerse?</h2>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl font-bold text-lg transition-colors">
                        Build VR Experience
                    </button>
                </Link>
            </section>
        </div>
    );
}
