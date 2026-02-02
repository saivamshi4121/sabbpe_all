'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight, ShieldCheck, Zap, QrCode, TrendingUp, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const features = [
    {
        id: 'settlements',
        title: 'Flash Settlements',
        desc: 'Access your funds in seconds, 24/7.',
        icon: Zap,
        color: 'from-yellow-400 to-orange-500',
        textColor: 'text-orange-600',
        visual: (
            <div className="relative flex items-center justify-center h-full w-full">
                <div className="absolute inset-0 bg-yellow-50/50 -z-10" />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center border border-yellow-200 shadow-lg shadow-orange-100/50"
                >
                    <DollarSign className="w-16 h-16 text-orange-500" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-t-2 border-orange-400"
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-slate-200 shadow-xl flex items-center gap-2"
                >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-slate-700 font-mono text-sm font-semibold">Settled: ₹50,000</span>
                </motion.div>
            </div>
        )
    },
    {
        id: 'upi',
        title: 'Turbo UPI Stack',
        desc: 'Zero-downtime QR payments for scale.',
        icon: QrCode,
        color: 'from-blue-400 to-cyan-500',
        textColor: 'text-blue-600',
        visual: (
            <div className="relative flex items-center justify-center h-full w-full">
                <div className="absolute inset-0 bg-blue-50/50 -z-10" />
                <div className="w-48 h-64 bg-white rounded-2xl p-4 shadow-2xl shadow-blue-100 skew-y-3 relative overflow-hidden border border-slate-100">
                    <div className="h-4 w-1/3 bg-slate-100 rounded mb-4" />
                    <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <QrCode className="w-32 h-32 text-white" />
                        {/* Scan line */}
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="absolute left-0 right-0 h-1 bg-sabbpe-cyan shadow-[0_0_10px_#22d3ee]"
                        />
                    </div>
                    <div className="mt-4 h-8 bg-blue-500 rounded-lg w-full" />
                </div>
            </div>
        )
    },
    {
        id: 'analytics',
        title: 'Deep Analytics',
        desc: 'Real-time insights for better decisions.',
        icon: TrendingUp,
        color: 'from-purple-400 to-pink-500',
        textColor: 'text-purple-600',
        visual: (
            <div className="relative flex items-center justify-center h-full w-full px-12">
                <div className="absolute inset-0 bg-purple-50/50 -z-10" />
                <div className="w-full h-40 flex items-end justify-between gap-2">
                    {[40, 70, 50, 90, 60, 100].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="w-full bg-gradient-to-t from-purple-500/50 to-pink-500 rounded-t-md shadow-lg shadow-purple-200"
                        />
                    ))}
                </div>
            </div>
        )
    }
];

export default function HeroLayer() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
            {/* Background Effects - Clean Light Mode */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-50/40 rounded-full blur-[100px] -z-10" />

            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-[5] opacity-40"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">

                        {/* Announcement Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center justify-center lg:justify-start"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
                                <span className="flex h-2 w-2 rounded-full bg-sabbpe-cyan shadow-[0_0_8px_rgb(46,230,214)]"></span>
                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">
                                    New: Instant Settlement API v2.0
                                </span>
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] text-slate-900 tracking-tight"
                        >
                            The Financial OS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sabbpe-cyan">
                                for the internet
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            SabbPe provides the banking infrastructure for modern platforms.
                            Accept payments, manage payouts, and issue cards—all via one API.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/25 text-base">
                                Start Integration
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-8 py-4 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-primary hover:border-blue-100 transition-all shadow-sm hover:shadow-md text-base">
                                Contact Sales
                            </button>
                        </motion.div>

                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-green-100 text-green-600"><CheckCircle className="w-3.5 h-3.5" /></div>
                                99.99% Uptime
                            </span>
                            <span className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-blue-100 text-blue-600"><ShieldCheck className="w-3.5 h-3.5" /></div>
                                RBI Compliant
                            </span>
                        </div>
                    </div>

                    {/* Right: Feature Carousel */}
                    <div className="relative hidden lg:block h-[600px] bg-[url('/grid-light.svg')]">
                        <div className="absolute inset-0 flex items-center justify-center pl-10">
                            {/* Card Container - Glass White */}
                            <div className="w-[450px] h-[520px] rounded-[32px] bg-white border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col">
                                {/* Visual Area */}
                                <div className="flex-1 relative overflow-hidden p-8 bg-slate-50/30">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={active}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full"
                                        >
                                            {features[active].visual}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Controls Area */}
                                <div className="p-6 bg-white border-t border-slate-100">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Live Capabilities</h3>
                                    <div className="flex gap-3">
                                        {features.map((f, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActive(i)}
                                                className={`flex-1 p-3 rounded-xl transition-all text-left relative overflow-hidden ${active === i ? 'bg-slate-50 ring-1 ring-slate-200' : 'hover:bg-slate-50/50'}`}
                                            >
                                                <div className="flex flex-col gap-1.5 z-10 relative">
                                                    <f.icon className={`w-5 h-5 ${active === i ? f.textColor : 'text-slate-400'} transition-colors`} />
                                                    <span className={`text-xs font-bold ${active === i ? 'text-slate-900' : 'text-slate-400'}`}>{f.title}</span>
                                                </div>

                                                {/* Active Progress BG */}
                                                {active === i && (
                                                    <motion.div
                                                        layoutId="progressBG"
                                                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-sabbpe-cyan"
                                                        initial={{ width: '0%' }}
                                                        animate={{ width: '100%' }}
                                                        transition={{ duration: 4, ease: 'linear' }}
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements behind card */}
                            <div className="absolute top-20 right-10 w-24 h-24 bg-sabbpe-cyan/20 rounded-full blur-2xl -z-10 animate-pulse" />
                            <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
