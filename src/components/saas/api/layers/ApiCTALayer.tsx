'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ApiCTALayer() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center bg-slate-50 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8">
                    Start building today
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                        <button className="px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                            Get API Keys
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                    <button className="px-8 py-4 rounded-xl font-bold text-slate-700 border border-slate-300 hover:bg-slate-100 transition-all">
                        Read Docs
                    </button>
                </div>
            </div>
        </section>
    );
}
