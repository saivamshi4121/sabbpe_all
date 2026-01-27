'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Brain, Heart } from 'lucide-react';

const teamAspects = [
    {
        title: "Talented Engineers",
        desc: "World-class engineers building infrastructure at scale. From IIT, Stanford, and top tech companies.",
        icon: Code2,
        stat: "200+"
    },
    {
        title: "Customer Focused",
        desc: "Every decision starts with our customers. We obsess over their success and growth.",
        icon: Heart,
        stat: "1000+"
    },
    {
        title: "Innovation First",
        desc: "We challenge the status quo daily. Our culture celebrates experimentation and learning.",
        icon: Rocket,
        stat: "50+"
    },
    {
        title: "Diverse Minds",
        desc: "We believe diverse perspectives drive better solutions. We're building for a global audience.",
        icon: Brain,
        stat: "15+"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function AboutTeamLayer() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-16">
            {/* Left Section */}
            <motion.div
                className="w-full grid lg:grid-cols-2 gap-12 items-center"
            >
                {/* Left: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group hidden lg:block"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-sabbpe-cyan/10 to-blue-500/10 rounded-3xl blur-2xl group-hover:from-sabbpe-cyan/20 group-hover:to-blue-500/20 transition-all duration-500" />
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden p-8">
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-sabbpe-cyan/20 flex items-center justify-center flex-shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-sabbpe-cyan/40" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-4 w-32 bg-slate-400/30 rounded mb-2" />
                                        <div className="h-3 w-48 bg-slate-500/20 rounded" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Exceptional Team
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We've assembled a world-class team of builders, innovators, and problem solvers.
                            People who care deeply about impact and excellence.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {teamAspects.slice(0, 2).map((aspect, i) => (
                            <motion.div key={i} variants={itemVariants} className="flex gap-4 group cursor-pointer">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sabbpe-cyan/10 flex items-center justify-center border border-sabbpe-cyan/20 group-hover:bg-sabbpe-cyan group-hover:text-black transition-all">
                                    <aspect.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1 group-hover:text-sabbpe-cyan transition-colors">{aspect.title}</h3>
                                    <p className="text-slate-400 text-sm">{aspect.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamAspects.map((aspect, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <aspect.icon className="w-8 h-8 text-sabbpe-cyan group-hover:scale-110 transition-transform" />
                            <span className="text-3xl font-bold text-sabbpe-cyan">{aspect.stat}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{aspect.title}</h3>
                        <p className="text-slate-400 text-sm">{aspect.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
