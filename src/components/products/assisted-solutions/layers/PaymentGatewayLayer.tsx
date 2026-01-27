'use client';

import { motion } from 'framer-motion';
import { CreditCard, Globe, Zap, ShieldCheck } from 'lucide-react';

const features = [
    {
        title: "100+ Payment Modes",
        desc: "Accept cards, netbanking, UPI, and wallets with a single integration.",
        icon: CreditCard,
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Global Payments",
        desc: "Accept international payments in 92 currencies with real-time conversion.",
        icon: Globe,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Success Optimizers",
        desc: "Smart routing ensures transaction success rates consistently above 95%.",
        icon: Zap,
        color: "from-yellow-500 to-orange-500"
    },
    {
        title: "Fraud Detection",
        desc: "AI-powered risk engine blocks fraudulent transactions in milliseconds.",
        icon: ShieldCheck,
        color: "from-red-500 to-pink-600"
    }
];

export default function PaymentGatewayLayer() {
    return (
        <div id="gateway" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sabbpe-cyan font-bold tracking-wider uppercase mb-2 block"
                >
                    Core Infrastructure
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    Payment Gateway
                </motion.h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    Reliable, secure, and developer-friendly. The engine that powers your business growth.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity`} />
                        <div className="flex gap-6 items-start relative z-10">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg shrink-0`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sabbpe-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
