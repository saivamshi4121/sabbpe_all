'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Layers, Cpu } from 'lucide-react';

export default function IntegrationLayer() {
    return (
        <div id="integration" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sabbpe-cyan font-bold tracking-wider uppercase mb-2 block"
                >
                    Developers First
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    SabbPe Integration
                </motion.h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    Clean APIs, robust SDKs, and extensive documentation. Build your payment flow in minutes, not weeks.
                </p>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-8 max-w-5xl">
                {/* Code Block Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex-1 bg-slate-950 rounded-xl border border-white/10 p-6 font-mono text-sm relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-2 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="mt-4 text-blue-400">const<span className="text-white"> sabbpe</span> = <span className="text-yellow-400">require</span>(<span className="text-green-400">'sabbpe-sdk'</span>);</div>
                    <div className="mt-2 text-purple-400">await<span className="text-white"> sabbpe.orders.create</span>({'{'}</div>
                    <div className="pl-4 text-sky-300">amount: <span className="text-orange-400">50000</span>,</div>
                    <div className="pl-4 text-sky-300">currency: <span className="text-green-400">"INR"</span>,</div>
                    <div className="pl-4 text-sky-300">receipt: <span className="text-green-400">"rcpt_id_1"</span></div>
                    <div className="text-white">{'}'});</div>

                    <div className="absolute bottom-4 right-4 text-xs text-slate-500">Node.js / Python / PHP / Java</div>
                </motion.div>

                {/* Features */}
                <div className="flex-1 grid grid-cols-1 gap-4">
                    {[
                        { title: "RESTful APIs", desc: "Predictable resource-oriented URLs.", icon: Terminal },
                        { title: "Mobile SDKs", desc: "Native iOS and Android support.", icon: SmartphoneIcon },
                        { title: "Plugins", desc: "WooCommerce, Shopify, Magento & more.", icon: Layers },
                        { title: "Webhooks", desc: "Real-time event notifications.", icon: Cpu },
                    ].map((feat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="p-2 bg-sabbpe-cyan/10 rounded-lg text-sabbpe-cyan">
                                <feat.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{feat.title}</h4>
                                <p className="text-xs text-slate-400">{feat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SmartphoneIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>
    )
}
