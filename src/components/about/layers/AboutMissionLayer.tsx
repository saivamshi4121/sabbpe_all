'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Globe } from 'lucide-react';
import { useRef, useState } from 'react';

const missions = [
    {
        title: "Our Mission",
        desc: "Simplify and unify the financial ecosystem for everyone. Making digital payments accessible across India.",
        icon: Target,
        color: 'from-blue-900/20 to-indigo-900/20',
        accent: 'text-blue-400'
    },
    {
        title: "Our Vision",
        desc: "Become India's most trusted digital payments partner, empowering merchants with innovative financial solutions.",
        icon: Lightbulb,
        color: 'from-yellow-900/20 to-orange-900/20',
        accent: 'text-yellow-400'
    },
    {
        title: "Our Values",
        desc: "Innovation, Trust, and Human-Centric Design. Understanding real-world pain points and solving them effectively.",
        icon: Users,
        color: 'from-purple-900/20 to-pink-900/20',
        accent: 'text-purple-400'
    },
    {
        title: "Banking Partnerships",
        desc: "Strategic alliances with 50+ aggregators and banking institutions expanding our reach across India.",
        icon: Globe,
        color: 'from-cyan-900/20 to-teal-900/20',
        accent: 'text-cyan-400'
    }
];

function MissionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export default function AboutMissionLayer() {
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
                    Our Purpose & Values
                </h2>
                <p className="text-lg text-slate-400">
                    At SabbPe, we're focused on understanding real-world pain points and developing human-centric solutions.
                    We're transforming India's digital payments ecosystem with integrity and innovation.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {missions.map((mission, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <MissionCard>
                            <div className={`absolute inset-0 ${mission.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

                            <div className="relative z-20 flex justify-between items-start">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 group-hover:border-white/20">
                                    <mission.icon className={`w-6 h-6 ${mission.accent} transition-colors`} />
                                </div>
                            </div>

                            <div className="relative z-20 mt-auto">
                                <h3 className="text-xl font-bold text-white mb-2">{mission.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{mission.desc}</p>
                            </div>
                        </MissionCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
