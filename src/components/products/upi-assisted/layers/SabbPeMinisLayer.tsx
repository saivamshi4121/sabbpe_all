'use client';

import { motion } from 'framer-motion';
import { Volume2, Battery, Wifi, CheckCircle } from 'lucide-react';

export default function SabbPeMinisLayer() {
    return (
        <div id="minis" className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="flex-1 space-y-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sabbpe-cyan/20 border border-sabbpe-cyan/30 text-sabbpe-cyan text-sm font-bold mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sabbpe-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sabbpe-cyan"></span>
                        </span>
                        MOST POPULAR
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        SabbPe Minis
                    </h2>
                    <p className="text-xl text-sabbpe-text-secondary">
                        The pocket-sized soundbox that packs a punch. Never miss a payment notification again.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {[
                        { icon: Volume2, text: "Loud & Clear Audio Alerts (85dB)" },
                        { icon: Battery, text: "7-Day Battery Life" },
                        { icon: Wifi, text: "4G/WiFi Connectivity" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                        >
                            <item.icon className="w-6 h-6 text-sabbpe-cyan" />
                            <span className="text-white font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full md:w-auto px-8 py-3 rounded-lg bg-sabbpe-cyan text-black font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                    Order Now @ ₹299
                </motion.button>
            </div>

            {/* Right Visual (Product Mockup) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex-1 relative flex items-center justify-center min-h-[400px]"
            >
                {/* Product Aura */}
                <div className="absolute inset-0 bg-sabbpe-cyan/20 rounded-full blur-[100px]" />

                {/* Device Representation (CSS Art) */}
                <div className="relative w-64 h-64 bg-slate-900 rounded-[3rem] border-8 border-slate-700 shadow-2xl flex flex-col items-center justify-between p-6 transform hover:-translate-y-4 transition-transform duration-500">
                    {/* Speaker Grill */}
                    <div className="w-full grid grid-cols-6 gap-2 opacity-50">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
                        ))}
                    </div>

                    {/* Display */}
                    <div className="w-full h-24 bg-black rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-sabbpe-cyan/10 to-transparent animate-pulse" />
                        <span className="text-sabbpe-cyan font-mono text-2xl font-bold">₹ 500.00</span>
                    </div>

                    {/* Branding */}
                    <div className="text-white font-display font-bold text-xl tracking-widest opacity-80">
                        SabbPe
                    </div>

                    {/* Status Light */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" />
                </div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-10 -right-10 px-4 py-2 bg-white text-black font-bold rounded-lg shadow-xl text-sm"
                >
                    Instant Alert!
                </motion.div>
            </motion.div>
        </div>
    );
}
