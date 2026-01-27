'use client';

import { motion } from 'framer-motion';
import { Target, Users, Calendar, Filter, Download, Zap } from 'lucide-react';

const features = [
    {
        title: "Cohort Analysis",
        desc: "Understand customer retention over time.",
        icon: Users
    },
    {
        title: "Revenue Forecasting",
        desc: "AI-driven predictions for future growth.",
        icon: Target
    },
    {
        title: "Custom Reports",
        desc: "Build reports that matter to your business.",
        icon: Filter
    },
    {
        title: "Automated Scheduling",
        desc: "Get reports delivered to your inbox.",
        icon: Calendar
    },
    {
        title: "Export Data",
        desc: "Download as CSV, PDF, or Excel instantly.",
        icon: Download
    },
    {
        title: "Real-time Metrics",
        desc: "Zero latency on critical business KPIs.",
        icon: Zap
    }
];

export default function AnalyticsFeaturesLayer() {
    return (
        <section className="relative py-20 bg-sabbpe-navy-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Insights that matter
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
                                <f.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                            <p className="text-slate-400">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
