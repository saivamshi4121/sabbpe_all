'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Droplets, Flame, Smartphone, Tv } from 'lucide-react';

const bills = [
    { title: "Electricity", icon: Lightbulb, color: "bg-yellow-500" },
    { title: "Water", icon: Droplets, color: "bg-blue-500" },
    { title: "Gas", icon: Flame, color: "bg-orange-500" },
    { title: "Recharge", icon: Smartphone, color: "bg-green-500" },
    { title: "DTH", icon: Tv, color: "bg-purple-500" },
];

export default function BBPSServicesLayer() {
    return (
        <div id="bbps" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    Bharat Bill Payment System (BBPS)
                </motion.h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    Turn your app into a super-app. Offer bill payments for 20,000+ billers across India instantly via our BBPS APIs.
                </p>
            </div>

            {/* Icons Visual */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
                {bills.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className={`w-16 h-16 rounded-2xl ${item.color} shadow-lg shadow-${item.color}/20 flex items-center justify-center text-white`}>
                            <item.icon className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-medium text-slate-300">{item.title}</span>
                    </motion.div>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-white/10 pt-12">
                {[
                    { val: "20k+", label: "Billers Supported" },
                    { val: "99.8%", label: "Success Rate" },
                    { val: "Instant", label: "Commission Payout" }
                ].map((stat, i) => (
                    <div key={i} className="text-center">
                        <h4 className="text-4xl font-bold text-white mb-2">{stat.val}</h4>
                        <p className="text-sabbpe-text-secondary">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
