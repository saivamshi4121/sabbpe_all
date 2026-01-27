'use client';

import { motion } from 'framer-motion';
import { Repeat, Calendar, CreditCard, CheckCircle } from 'lucide-react';

export default function SubscriptionsLayer() {
    return (
        <div id="subscriptions" className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                >
                    Smart Subscriptions
                </motion.h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    Power your recurring revenue business. Handle specialized billing models with ease.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Feature 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-indigo-500/20 p-8 rounded-2xl flex flex-col gap-4"
                >
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                        <Repeat className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Complex Billing</h3>
                    <p className="text-slate-400 text-sm">Support for usage-based, tiered, and flat-rate billing models out of the box.</p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-pink-900/40 to-rose-900/40 border border-pink-500/20 p-8 rounded-2xl flex flex-col gap-4"
                >
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Global Recurring</h3>
                    <p className="text-slate-400 text-sm">Accept recurring payments via international cards and local mandates seamlessly.</p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-teal-900/40 to-emerald-900/40 border border-teal-500/20 p-8 rounded-2xl flex flex-col gap-4"
                >
                    <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Dunning Management</h3>
                    <p className="text-slate-400 text-sm">Smart retries and automated communication to recover failed payments.</p>
                </motion.div>
            </div>
        </div>
    );
}
