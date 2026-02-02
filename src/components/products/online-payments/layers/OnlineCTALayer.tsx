'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

export default function OnlineCTALayer() {
    return (
        <section className="w-full h-full relative overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-50 -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 py-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8">
                        Ready to Go Global?
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        Join the platform that processes billions in payments for businesses of all sizes.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/contact" className="w-full md:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:border-slate-300 transition-colors flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                        >
                            <Globe className="w-5 h-5 text-slate-500" />
                            View Supported Countries
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
