'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, PieChart } from 'lucide-react';

export default function AnalyticsHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-background to-background" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200">
                            <BarChart3 className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm font-medium text-indigo-700">Analytics Engine</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900">
                            Turn Data into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                                Decisions
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl">
                            Go beyond basic metrics. Unlock deep insights into customer behavior, revenue trends, and growth opportunities.
                        </p>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1">
                                Explore Insights
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <div className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl backdrop-blur-xl">
                            {/* Chart Area */}
                            <div className="h-64 flex items-end justify-between gap-2 md:gap-4 px-4 pb-4 border-b border-slate-100">
                                {[35, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
                                    <div key={i} className="w-full h-full flex items-end relative group">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
                                            className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        {/* Tooltip */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            {h}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Legend */}
                            <div className="flex gap-6 mt-4 justify-center text-sm text-slate-500">
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-indigo-500" /> Revenue
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-slate-200" /> Forecast
                                </span>
                            </div>
                        </div>

                        {/* Floating Metric Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -right-4 -bottom-8 bg-white p-4 rounded-xl border border-slate-200 shadow-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-green-50">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-600">Growth</div>
                                    <div className="text-xl font-bold text-slate-900">+124%</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
