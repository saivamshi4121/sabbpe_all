'use client';

import { motion } from 'framer-motion';
import { GitMerge, AlertCircle, Settings, FileSpreadsheet, CheckCheck, Clock } from 'lucide-react';

const features = [
    {
        title: "3-Way Matching",
        desc: "Match Gateway, Bank, and Order data automatically.",
        icon: GitMerge
    },
    {
        title: "Exception Management",
        desc: "Auto-flag irregularities for manual review.",
        icon: AlertCircle
    },
    {
        title: "Custom Rules Engine",
        desc: "Define your own matching logic.",
        icon: Settings
    },
    {
        title: "Universal Format",
        desc: "Support for MT940, CSV, XML, and API.",
        icon: FileSpreadsheet
    },
    {
        title: "Instant Accuracy",
        desc: "99.9% automated success rate.",
        icon: CheckCheck
    },
    {
        title: "T+0 Reconciliation",
        desc: "Reconcile in real-time as money moves.",
        icon: Clock
    }
];

export default function ReconFeaturesLayer() {
    return (
        <section className="relative py-20 bg-background text-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Accuracy Automated
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-50 transition-colors"
                        >
                            <f.icon className="w-10 h-10 text-emerald-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                            <p className="text-slate-600">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
