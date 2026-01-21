'use client';

import { motion } from 'framer-motion';
import { CreditCard, Globe, Lock, Smartphone, Zap, BarChart3, ArrowUpRight } from 'lucide-react';
import { useRef, useState } from 'react';

const features = [
    {
        title: "Global Payments",
        desc: "Accept payments from 195+ countries in 135+ currencies.",
        icon: Globe,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20"
    },
    {
        title: "Virtual Cards",
        desc: "Issue cards instantly for your team.",
        icon: CreditCard,
        colSpan: "md:col-span-1",
        bg: "bg-gradient-to-br from-purple-900/20 to-pink-900/20"
    },
    {
        title: "Instant Payouts",
        desc: "Settlements 24/7/365 within seconds.",
        icon: Zap,
        colSpan: "md:col-span-1",
        bg: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20"
    },
    {
        title: "Fraud Shield",
        desc: "AI-powered fraud detection at the edge.",
        icon: Lock,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-orange-900/20 to-red-900/20"
    },
    {
        title: "Mobile SDK",
        desc: "Native iOS & Android integration.",
        icon: Smartphone,
        colSpan: "md:col-span-1",
        bg: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
    },
    {
        title: "Real-time Analytics",
        desc: "Deep insights into your revenue streams.",
        icon: BarChart3,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-slate-800/20 to-slate-900/20"
    }
];

function SpotlightCard({ children, className = "", colSpan = "" }: { children: React.ReactNode; className?: string, colSpan?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${colSpan} relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between h-[240px] md:h-[280px] group transition-transform hover:-translate-y-1 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.15), transparent 40%)`,
                }}
            />
            {children}
        </motion.div>
    );
}

export default function ProductsLayer() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-10 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Powerful building blocks
                </h2>
                <p className="text-lg text-slate-400">
                    Infrastructure for the next generation of finance.
                </p>
            </div>

            {/* Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto pr-2" style={{ maxHeight: '100%' }}>
                {features.map((f, i) => (
                    <SpotlightCard key={i} colSpan={f.colSpan}>
                        <div className={`absolute inset-0 ${f.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

                        <div className="relative z-20 flex justify-between items-start">
                            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white group-hover:bg-sabbpe-cyan/10 group-hover:border-sabbpe-cyan/30">
                                <f.icon className="w-5 h-5 group-hover:text-sabbpe-cyan transition-colors" />
                            </div>
                        </div>

                        <div className="relative z-20 mt-auto">
                            <h3 className="text-lg font-bold text-white mb-1">{f.title}</h3>
                            <p className="text-slate-400 text-sm">{f.desc}</p>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
}
