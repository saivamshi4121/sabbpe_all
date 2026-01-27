'use client';

import { motion } from 'framer-motion';
import { QrCode, Zap, ShieldCheck, Smartphone } from 'lucide-react';

const features = [
    {
        title: "Universal QR",
        desc: "Accept payments from any UPI app (GPay, PhonePe, Paytm, etc.) with a single dynamic QR code.",
        icon: QrCode,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Instant Settlement",
        desc: "Get funds credited to your bank account instantly, 24/7, even on bank holidays.",
        icon: Zap,
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "Bank-Grade Security",
        desc: "PCI-DSS compliant infrastructure ensuring every transaction is encrypted and secure.",
        icon: ShieldCheck,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Contactless Payments",
        desc: "Touch-free payments for a safer and faster checkout experience for your customers.",
        icon: Smartphone,
        color: "from-purple-500 to-pink-500"
    }
];

export default function UPIPaymentsLayer() {
    return (
        <div id="upi-payments" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sabbpe-cyan font-bold tracking-wider uppercase mb-2 block"
                >
                    Core Technology
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    UPI Payments
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-sabbpe-text-secondary"
                >
                    The backbone of modern Indian commerce. Fast, reliable, and built for scale.
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
