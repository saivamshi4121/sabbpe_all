'use client';

import { motion } from 'framer-motion';
import { Share2, Link, MessageCircle, BarChart3 } from 'lucide-react';

const features = [
    {
        title: "Dynamic Payment Links",
        desc: "Generate and share payment links via WhatsApp, SMS, or Email instantly.",
        icon: Link,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Bulk Collections",
        desc: "Upload a CSV and send payment requests to thousands of customers in one go.",
        icon: Share2,
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "Smart Reminders",
        desc: "Automated follow-ups on WhatsApp ensuring higher collection rates.",
        icon: MessageCircle,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Real-time Tracking",
        desc: "Track every payment status in real-time from your dashboard.",
        icon: BarChart3,
        color: "from-orange-500 to-red-500"
    }
];

export default function UPICollectionsLayer() {
    return (
        <div id="upi-collections" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sabbpe-cyan font-bold tracking-wider uppercase mb-2 block"
                >
                    Seamless Collections
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    UPI Collections
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-sabbpe-text-secondary"
                >
                    Collect payments faster with intelligent links and automated reminders.
                </motion.p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 rounded-full blur-2xl transition-opacity`} />

                        <div className="relative z-10 flex items-start gap-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sabbpe-text-secondary leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
