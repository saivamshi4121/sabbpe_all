'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function DashboardCTALayer() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-50">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8"
                >
                    Ready to take control?
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/contact">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105">
                            Get Dashboard Access
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
