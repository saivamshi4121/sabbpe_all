'use client';

import { motion } from 'framer-motion';
import { Landmark, Umbrella, Receipt, FileText, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: "Business Loans",
        desc: "Capital tailored for your business growth. Minimal documentation, fast disbursal.",
        icon: Landmark,
        color: "from-blue-600 to-indigo-600",
        delay: 0
    },
    {
        title: "Insurance",
        desc: "Protect your shop, health, and inventory with affordable premiums starting @ ₹49/mo.",
        icon: Umbrella,
        color: "from-pink-600 to-rose-600",
        delay: 0.1
    },
    {
        title: "Bill Payments",
        desc: "Earn commissions by helping customers pay electricity, water, and gas bills.",
        icon: Receipt,
        color: "from-orange-500 to-amber-500",
        delay: 0.2
    },
    {
        title: "Tax Filing",
        desc: "Assisted GST and ITR filing support for seamless compliance.",
        icon: FileText,
        color: "from-emerald-500 to-teal-500",
        delay: 0.3
    }
];

export default function VASLayer() {
    return (
        <div id="vas" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    Value Added Services (VAS)
                </motion.h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    More than just payments. Unlock new revenue streams and financial protection for your business.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: service.delay }}
                        className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all cursor-pointer overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity`}>
                            <ArrowUpRight className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex items-start gap-6">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sabbpe-text-secondary text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
