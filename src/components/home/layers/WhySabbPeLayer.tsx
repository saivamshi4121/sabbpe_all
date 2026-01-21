'use client';

import { Check, X } from 'lucide-react';

export default function WhySabbPeLayer() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center max-w-2xl mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    The SabbPe Difference
                </h2>
                <p className="text-lg text-slate-400">
                    We rebuilt the financial stack for the speed of the internet.
                </p>
            </div>

            <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Traditional */}
                <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] opacity-60 hover:opacity-100 transition-opacity">
                    <h3 className="text-2xl font-bold text-slate-400 mb-6 pb-4 border-b border-white/5">Traditional Banks</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-center">
                            <X className="w-6 h-6 text-red-500 shrink-0" />
                            <div className="text-slate-300 font-medium">T+2 Day Settlement</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <X className="w-6 h-6 text-red-500 shrink-0" />
                            <div className="text-slate-300 font-medium">Legacy XML/SOAP APIs</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <X className="w-6 h-6 text-red-500 shrink-0" />
                            <div className="text-slate-300 font-medium">Hidden Fees</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <X className="w-6 h-6 text-red-500 shrink-0" />
                            <div className="text-slate-300 font-medium">Banking Hours Only</div>
                        </div>
                    </div>
                </div>

                {/* SabbPe */}
                <div className="p-8 rounded-3xl border border-sabbpe-cyan/30 bg-gradient-to-b from-sabbpe-cyan/10 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sabbpe-cyan/20 blur-[60px] rounded-full" />
                    <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-sabbpe-cyan/20">SabbPe</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-center">
                            <div className="w-6 h-6 rounded-full bg-sabbpe-cyan/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-sabbpe-cyan" />
                            </div>
                            <div className="text-white font-bold text-lg">Instant Settlement (24/7)</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="w-6 h-6 rounded-full bg-sabbpe-cyan/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-sabbpe-cyan" />
                            </div>
                            <div className="text-white font-bold text-lg">Modern REST & GraphQL APIs</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="w-6 h-6 rounded-full bg-sabbpe-cyan/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-sabbpe-cyan" />
                            </div>
                            <div className="text-white font-bold text-lg">Flat 1% Transparent Fee</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="w-6 h-6 rounded-full bg-sabbpe-cyan/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-sabbpe-cyan" />
                            </div>
                            <div className="text-white font-bold text-lg">99.999% Uptime SLA</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
