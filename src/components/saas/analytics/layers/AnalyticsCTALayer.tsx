'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AnalyticsCTALayer() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />

            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                    Stop guessing. Start knowing.
                </h2>
                <Link href="/contact">
                    <button className="px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 mx-auto shadow-lg shadow-indigo-900/30 hover:scale-105">
                        Upgrade to Premium Analytics
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </section>
    );
}
