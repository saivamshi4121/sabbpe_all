'use client';

import { motion } from 'framer-motion';
import { Eye, Clock, Zap, Shield, BarChart2, Globe } from 'lucide-react';

const features = [
    {
        title: "Single View",
        desc: "See all your data in one place.",
        icon: Eye,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Real-time Updates",
        desc: "Monitor transactions as they happen.",
        icon: Clock,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Instant Actions",
        desc: "Issue refunds or hold funds instantly.",
        icon: Zap,
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "Deep Analytics",
        desc: "Drill down into specific transaction data.",
        icon: BarChart2,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Global Overview",
        desc: "Track payments across all regions.",
        icon: Globe,
        color: "from-indigo-500 to-blue-500"
    },
    {
        title: "Role-Based Access",
        desc: "Secure granular permissions for teams.",
        icon: Shield,
        color: "from-red-500 to-orange-500"
    }
];

export default function DashboardFeaturesLayer() {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 bg-background text-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Everything at a Glance
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Powerful tools designed to give you complete visibility and control.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
