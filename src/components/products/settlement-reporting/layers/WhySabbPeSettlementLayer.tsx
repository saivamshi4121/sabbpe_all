'use client';

import { motion } from 'framer-motion';
import { Shield, Headphones, MonitorSmartphone } from 'lucide-react';

const reasons = [
    {
        title: "Enterprise Grade Security",
        desc: "PCI-DSS Level 1 compliant infrastructure protecting your financial data.",
        icon: Shield,
        color: "bg-blue-500"
    },
    {
        title: "24/7 Dedicated Support",
        desc: "Round the clock priority support for all settlement related queries.",
        icon: Headphones,
        color: "bg-purple-500"
    },
    {
        title: "Unified Dashboard",
        desc: "One view for payments, settlements, refunds, and chargebacks.",
        icon: MonitorSmartphone,
        color: "bg-emerald-500"
    }
];

export default function WhySabbPeSettlementLayer() {
    return (
        <div id="why-sabbpe" className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center mb-16 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    Why Choose SabbPe?
                </motion.h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    We don't just process payments; we help you manage your entire financial lifecycle efficiently.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {reasons.map((reason, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-sabbpe-navy-light/50 border border-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center gap-4"
                    >
                        <div className={`w-16 h-16 rounded-2xl ${reason.color}/10 flex items-center justify-center text-white mb-2`}>
                            <reason.icon className={`w-8 h-8 text-${reason.color.split('-')[1]}-400`} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                        <p className="text-sabbpe-text-secondary">{reason.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
