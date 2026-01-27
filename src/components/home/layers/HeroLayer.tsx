'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight, ShieldCheck, Zap, QrCode, TrendingUp, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

const features = [
    {
        id: 'settlements',
        title: 'Flash Settlements',
        desc: 'Access your funds in seconds, 24/7.',
        icon: Zap,
        color: 'from-yellow-400 to-orange-500',
        visual: (
            <div className="relative flex items-center justify-center h-full w-full">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center border border-yellow-400/50"
                >
                    <DollarSign className="w-16 h-16 text-yellow-400" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-t-2 border-yellow-400"
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-10 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-yellow-400/30 flex items-center gap-2"
                >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white font-mono text-sm">Settled: ₹50,000</span>
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
        visual: (
            <div className="relative flex items-center justify-center h-full w-full">
                <div className="w-48 h-64 bg-white rounded-2xl p-4 shadow-2xl skew-y-3 relative overflow-hidden">
                    <div className="h-4 w-1/3 bg-slate-200 rounded mb-4" />
                    <div className="aspect-square bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
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
        visual: (
            <div className="relative flex items-center justify-center h-full w-full px-12">
                <div className="w-full h-40 flex items-end justify-between gap-2">
                    {[40, 70, 50, 90, 60, 100].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="w-full bg-gradient-to-t from-purple-500/50 to-pink-500 rounded-t-md"
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
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sabbpe-blue/20 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-sabbpe-cyan/10 rounded-full blur-[120px] -z-10 opacity-30" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-sabbpe-border backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-sabbpe-cyan animate-pulse"></span>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                                New: Instant Settlement API v2.0
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white tracking-tight"
                        >
                            The Financial OS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabbpe-cyan via-blue-500 to-purple-600">
                                for the internet
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-sabbpe-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            SabbPe provides the banking infrastructure for modern platforms.
                            Accept payments, manage payouts, and issue cards—all via one API.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
                        >
                            <button className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white bg-sabbpe-blue hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-blue-900/20 text-sm sm:text-base">
                                Start Integration
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-slate-300 border border-white/10 hover:bg-white/5 hover:text-white transition-all text-sm sm:text-base">
                                Sales Contact
                            </button>
                        </motion.div>

                        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-sabbpe-text-tertiary font-medium">
                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sabbpe-cyan" /> 99.99% Uptime</span>
                            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sabbpe-cyan" /> RBI Compliant</span>
                            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-sabbpe-cyan" /> 24/7 Support</span>
                        </div>
                    </div>

                    {/* Right: Feature Carousel */}
                    <div className="relative hidden lg:block h-[500px]">
                        <div className="absolute inset-0 flex items-center justify-end">
                            {/* Card Container */}
                            <div className="w-[450px] h-[500px] rounded-[40px] border border-sabbpe-border bg-sabbpe-navy-light/80 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col">
                                {/* Visual Area */}
                                <div className="flex-1 relative overflow-hidden p-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={active}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-full h-full"
                                        >
                                            {features[active].visual}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Controls Area */}
                                <div className="p-6 bg-white/5 border-t border-white/5">
                                    <div className="flex gap-4">
                                        {features.map((f, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActive(i)}
                                                className={`flex-1 p-3 rounded-xl transition-all text-left group ${active === i ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'}`}
                                            >
                                                <div className="flex items-center gap-2 mb-1">
                                                    <f.icon className={`w-4 h-4 ${active === i ? `text-[${f.color.split(' ')[1]}]` : 'text-slate-500'} transition-colors`} />
                                                    <span className={`text-xs font-bold ${active === i ? 'text-white' : 'text-slate-400'}`}>{f.title}</span>
                                                </div>
                                                {/* Progress Bar */}
                                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                    {active === i && (
                                                        <motion.div
                                                            layoutId="progress"
                                                            initial={{ width: '0%' }}
                                                            animate={{ width: '100%' }}
                                                            transition={{ duration: 4, ease: 'linear' }}
                                                            className={`h-full bg-gradient-to-r ${f.color}`}
                                                        />
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
