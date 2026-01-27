'use client';

import { motion } from 'framer-motion';
import { Network, Lock, Zap, Box, Layers, PlayCircle } from 'lucide-react';

const features = [
    {
        title: "RESTful Architecture",
        desc: "Standardized HTTP methods and predictable URLs.",
        icon: Network
    },
    {
        title: "Webhooks",
        desc: "Real-time event notifications.",
        icon: Zap
    },
    {
        title: "Secure by Design",
        desc: "TLS 1.2+, AES-256 encryption standards.",
        icon: Lock
    },
    {
        title: "Sandbox Environment",
        desc: "Test without touching real money.",
        icon: Box
    },
    {
        title: "Microservices Ready",
        desc: "Decoupled architecture for scale.",
        icon: Layers
    },
    {
        title: "Interactive Docs",
        desc: "Try APIs directly from the browser.",
        icon: PlayCircle
    }
];

export default function ApiFeaturesLayer() {
    return (
        <section className="relative py-20 bg-sabbpe-navy-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Everything a developer needs
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <f.icon className="w-10 h-10 text-sabbpe-cyan mb-6" />
                            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                            <p className="text-slate-400">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
