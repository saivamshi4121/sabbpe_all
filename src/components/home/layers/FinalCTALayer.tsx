'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTALayer() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sabbpe-blue/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span>The story doesn't end here</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
                    We built the engine. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sabbpe-cyan to-blue-500">
                        You drive the revolution.
                    </span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    Join the builders, the disruptors, and the dreamers who are reshaping the global economy with SabbPe.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
                    <button className="px-10 py-4 rounded-2xl font-bold text-lg text-white bg-sabbpe-blue hover:bg-blue-600 transition-all hover:scale-105 shadow-2xl shadow-blue-900/40 flex items-center justify-center gap-3">
                        Start Building for Free
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-10 py-4 rounded-2xl font-medium text-lg text-slate-300 border border-white/10 hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-3">
                        Talk to an Architect
                    </button>
                </div>
            </div>
        </div>
    );
}
