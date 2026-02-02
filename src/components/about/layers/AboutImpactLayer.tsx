'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const impacts = [
    {
        metric: "500+",
        label: "Merchants Served",
        icon: Users,
        color: "from-blue-500 to-cyan-500"
    },
    {
        metric: "50+",
        label: "Banking Alliances",
        icon: Award,
        color: "from-purple-500 to-pink-500"
    },
    {
        metric: "99.9%",
        label: "System Uptime",
        icon: Zap,
        color: "from-orange-500 to-red-500"
    },
    {
        metric: "2023",
        label: "Company Founded",
        icon: TrendingUp,
        color: "from-green-500 to-emerald-500"
    }
];

const stories = [
    {
        title: "UPI SoundBox Launch",
        desc: "Starting with our innovative UPI SoundBox devices, we focused on understanding real-world pain points and developing technology that addresses them effectively.",
        testimonial: "2023 - Innovation & Real-World Solutions",
        author: "- SabbPe Foundation"
    },
    {
        title: "DPIIT Recognition",
        desc: "Recognized by DPIIT as an innovative startup driving meaningful change in India's financial ecosystem.",
        testimonial: "2024 - Government Recognition",
        author: "- DPIIT Award"
    },
    {
        title: "Merchant Growth & Expansion",
        desc: "Grew to serve 500+ merchants across India with comprehensive payment platform and human-centric design principles.",
        testimonial: "2025 - Market Leadership",
        author: "- SabbPe Milestone"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutImpactLayer() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl"
            >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                    Our Impact by Numbers
                </h2>
                <p className="text-lg text-slate-600">
                    Since our founding in 2023, we've been transforming India's digital payments landscape with innovative solutions.
                </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {impacts.map((impact, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:bg-slate-50 hover:shadow-md transition-all shadow-sm"
                    >
                        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${impact.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />

                        <div className="relative z-10 space-y-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${impact.color} flex items-center justify-center shadow-md`}>
                                <impact.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                    className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2"
                                >
                                    {impact.metric}
                                </motion.div>
                                <p className="text-slate-600 text-sm">{impact.label}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Success Stories */}
            <div className="w-full">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-display font-bold text-slate-900 text-center mb-12"
                >
                    Stories of Success
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stories.map((story, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-md hover:bg-slate-50 transition-all group shadow-sm bg-opacity-80"
                        >
                            <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {story.title}
                            </h4>
                            <p className="text-slate-600 text-sm mb-6">{story.desc}</p>
                            <div className="pt-6 border-t border-slate-200">
                                <p className="text-slate-900 font-semibold mb-2 italic">"{story.testimonial}"</p>
                                <p className="text-slate-500 text-sm">{story.author}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
