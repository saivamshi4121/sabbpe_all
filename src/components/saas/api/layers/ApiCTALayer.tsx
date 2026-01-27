'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ApiCTALayer() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                    Start building today
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 rounded-xl font-bold text-white bg-sabbpe-blue hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                        Get API Keys
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold text-slate-300 border border-white/20 hover:bg-white/10 transition-all">
                        Read Docs
                    </button>
                </div>
            </div>
        </section>
    );
}
