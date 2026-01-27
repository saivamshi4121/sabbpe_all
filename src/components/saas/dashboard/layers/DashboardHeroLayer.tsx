'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LayoutDashboard, PieChart, Activity, Users } from 'lucide-react';

export default function DashboardHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sabbpe-blue/20 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-sabbpe-border backdrop-blur-md"
                        >
                            <LayoutDashboard className="w-4 h-4 text-sabbpe-cyan" />
                            <span className="text-sm font-medium text-slate-300">
                                Unified Dashboard
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white tracking-tight"
                        >
                            Command Center <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabbpe-cyan via-blue-500 to-purple-600">
                                for Your Money
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-sabbpe-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Get a single, unified view of all your transactions, settlements, and customer insights. Real-time control at your fingertips.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-sabbpe-blue hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-blue-900/20">
                                Explore Dashboard
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-8 py-4 rounded-xl font-medium text-slate-300 border border-white/10 hover:bg-white/5 hover:text-white transition-all">
                                View Demo
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.9 }}
                            animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-video bg-sabbpe-navy-light border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
                            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                        >
                            {/* Mock Dashboard UI */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent p-6 flex flex-col gap-4">
                                {/* Top Bar */}
                                <div className="h-8 flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-20 h-4 bg-white/10 rounded" />
                                        <div className="w-12 h-4 bg-white/5 rounded" />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/10" />
                                    </div>
                                </div>
                                {/* Content Grid */}
                                <div className="grid grid-cols-3 gap-4 flex-1">
                                    {/* Main Chart */}
                                    <div className="col-span-2 bg-black/20 rounded-lg p-4 border border-white/5 relative overflow-hidden">
                                        <div className="w-32 h-4 bg-white/10 rounded mb-4" />
                                        <div className="flex items-end gap-2 h-32 mt-4 px-2">
                                            {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                                    className="flex-1 bg-gradient-to-t from-sabbpe-blue to-sabbpe-cyan rounded-t-sm opacity-80"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    {/* Stats Cards */}
                                    <div className="col-span-1 flex flex-col gap-4">
                                        <div className="flex-1 bg-black/20 rounded-lg p-4 border border-white/5">
                                            <PieChart className="w-6 h-6 text-purple-400 mb-2" />
                                            <div className="w-16 h-4 bg-white/10 rounded mb-2" />
                                            <div className="w-20 h-6 bg-white/20 rounded" />
                                        </div>
                                        <div className="flex-1 bg-black/20 rounded-lg p-4 border border-white/5">
                                            <Activity className="w-6 h-6 text-green-400 mb-2" />
                                            <div className="w-16 h-4 bg-white/10 rounded mb-2" />
                                            <div className="w-20 h-6 bg-white/20 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 -bottom-8 bg-sabbpe-navy border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Live Traffic</div>
                                    <div className="text-lg font-bold text-white">+24.5%</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
