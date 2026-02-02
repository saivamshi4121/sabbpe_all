'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Database, BarChart2, PieChart, Layers, Server, Activity, ArrowRight, Zap } from 'lucide-react';

export default function BigDataPage() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 100]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);

    return (
        <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center px-4 pt-20"
                style={{ y: heroY, opacity: heroOpacity }}
            >
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 mb-6 backdrop-blur-sm">
                            <Database className="w-4 h-4" />
                            <span className="text-sm font-semibold">Unlock Your Data Potential</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                            Big Data <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Analytics</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Transform massive volumes of structured and unstructured data into actionable business intelligence with our advanced analytics solutions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-shadow">
                                    Analyze Your Data
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] flex items-center justify-center"
                    >
                        {/* Data Visualization Animation */}
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Central Core */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-32 h-32 bg-white border border-blue-200 rounded-full flex items-center justify-center shadow-lg">
                                    <Activity className="w-12 h-12 text-blue-600" />
                                </div>
                            </div>

                            {/* Orbiting Data Points */}
                            {[
                                { r: 120, speed: 20, color: 'bg-blue-500' },
                                { r: 180, speed: 30, color: 'bg-indigo-500' },
                                { r: 240, speed: 40, color: 'bg-cyan-500' },
                            ].map((orbit, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute top-1/2 left-1/2 rounded-full border border-blue-200"
                                    style={{ width: orbit.r * 2, height: orbit.r * 2, marginLeft: -orbit.r, marginTop: -orbit.r }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: orbit.speed, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${orbit.color} shadow-lg`} />
                                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${orbit.color} opacity-70`} />
                                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${orbit.color} opacity-50`} />
                                </motion.div>
                            ))}

                            {/* Floating Graphs */}
                            <motion.div
                                className="absolute top-10 right-10 p-4 bg-white/80 backdrop-blur border border-slate-200 rounded-xl shadow-md"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <BarChart2 className="w-8 h-8 text-green-500 mb-2" />
                                <div className="w-16 h-1 bg-slate-200 rounded" />
                                <div className="w-10 h-1 bg-slate-200 rounded mt-1" />
                            </motion.div>

                            <motion.div
                                className="absolute bottom-20 left-0 p-4 bg-white/80 backdrop-blur border border-slate-200 rounded-xl shadow-md"
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <PieChart className="w-8 h-8 text-pink-500 mb-2" />
                                <div className="w-16 h-1 bg-slate-200 rounded" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Solutions Grid */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Comprehensive Analytics Suite</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Data Warehousing", icon: Database, desc: "Centralized repositories to consolidate data from disparate sources.", color: "text-blue-500" },
                        { title: "Real-Time Processing", icon: Zap, desc: "Stream processing for instant insights and decision making.", color: "text-yellow-500" },
                        { title: "Visual Analytics", icon: PieChart, desc: "Interactive dashboards that make data understandable for everyone.", color: "text-pink-500" },
                        { title: "ETL Pipelines", icon: Layers, desc: "Robust Extraction, Transformation, and Loading workflows.", color: "text-green-500" },
                        { title: "Predictive Intelligence", icon: Activity, desc: "Forecasting future trends using historical data patterns.", color: "text-indigo-500" },
                        { title: "Data Governance", icon: Server, desc: "Ensuring data quality, security, and regulatory compliance.", color: "text-slate-500" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <item.icon className={`w-12 h-12 ${item.color} mb-6`} />
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">From Chaos to Clarity</h2>
                            <p className="text-xl text-slate-600 mb-12">
                                Our 4-step process turns your raw data into your most valuable asset.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { step: "1", title: "Ingest", desc: "Collecting raw data from all sources (IoT, Web, DBs)." },
                                    { step: "2", title: "Store", desc: "Secure data lakes and warehouses (Snowflake, BigQuery)." },
                                    { step: "3", title: "Process", desc: "Cleaning, normalizing, and aggregating data." },
                                    { step: "4", title: "Visualize", desc: "Tableau, PowerBI, or custom React dashboards." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1 text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex items-center justify-center">
                            <div className="text-center p-8">
                                <BarChart2 className="w-24 h-24 text-blue-500 mx-auto mb-6 opacity-80" />
                                <div className="text-2xl font-bold text-slate-800">Live Dashboard Preview</div>
                                <p className="text-slate-500 mt-2">Connecting to data source...</p>
                                <div className="mt-8 flex justify-center gap-2">
                                    {[1, 2, 3].map(i => (
                                        <motion.div
                                            key={i}
                                            className="w-3 h-3 bg-blue-500 rounded-full"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">Ready to Scale?</h2>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold text-lg transition-colors">
                        Get Data Insights
                    </button>
                </Link>
            </section>
        </div>
    );
}
