'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ReconCTALayer() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                    Your books, balanced.
                </h2>
                <Link href="/contact">
                    <button className="px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 mx-auto">
                        Try Auto-Reconciliation
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </section>
    );
}
