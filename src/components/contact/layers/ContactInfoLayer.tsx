'use client';

import { motion } from 'framer-motion';
import { Globe, Clock, Users, Zap } from 'lucide-react';
import { useRef, useState } from 'react';

const infoCards = [
    {
        title: "Fast Response Time",
        desc: "We respond to inquiries within 24 hours during business days.",
        icon: Clock,
        color: 'from-blue-900/20 to-indigo-900/20',
        accent: 'text-blue-400'
    },
    {
        title: "Global Support",
        desc: "Available in multiple languages and timezones to serve you better.",
        icon: Globe,
        color: 'from-yellow-900/20 to-orange-900/20',
        accent: 'text-yellow-400'
    },
    {
        title: "Expert Team",
        desc: "Connect with payment specialists who understand your business needs.",
        icon: Users,
        color: 'from-purple-900/20 to-pink-900/20',
        accent: 'text-purple-400'
    },
    {
        title: "Dedicated Support",
        desc: "Get personalized assistance with implementation and integration.",
        icon: Zap,
        color: 'from-cyan-900/20 to-teal-900/20',
        accent: 'text-cyan-400'
    }
];

function InfoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between h-[300px] group transition-transform hover:-translate-y-1 ${className}`}
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

export default function ContactInfoLayer() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-3xl"
            >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    How We Support You
                </h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    Our customer success team is committed to your success. With fast response times and expert guidance,
                    we ensure smooth integration and ongoing support.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {infoCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <InfoCard>
                                <div className="z-20 relative">
                                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${card.color} mb-4`}>
                                        <Icon className={`w-6 h-6 ${card.accent}`} />
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-white mb-2">{card.title}</h3>
                                    <p className="text-sabbpe-text-secondary leading-relaxed">{card.desc}</p>
                                </div>
                            </InfoCard>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
