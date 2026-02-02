'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Smartphone, Code, Layers, Zap, CheckCircle, ArrowRight, Layout, Monitor } from 'lucide-react';

export default function CustomAppDevelopmentPage() {
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
                <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 mb-6 backdrop-blur-sm">
                            <Smartphone className="w-4 h-4" />
                            <span className="text-sm font-semibold">Mobile & Web Excellence</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                            Custom App <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Development</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            We craft high-performance, scalable, and user-centric mobile and web applications tailored to your unique business requirements.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-shadow">
                                    Start Your Project
                                </button>
                            </Link>
                            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                                View Portfolio
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Floating Interface Mockups */}
                        <motion.div
                            animate={{ y: [-20, 20, -20] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-20 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl max-w-md mx-auto"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Code className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <div className="h-3 w-32 bg-slate-200 rounded mb-2" />
                                    <div className="h-2 w-20 bg-slate-100 rounded" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-20 bg-slate-50 rounded-xl border border-slate-100" />
                                <div className="h-20 bg-slate-50 rounded-xl border border-slate-100" />
                                <div className="h-20 bg-slate-50 rounded-xl border border-slate-100" />
                            </div>
                        </motion.div>

                        {/* Background Orbit Elements */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-200 rounded-full z-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6]" />
                        </motion.div>
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-cyan-200 rounded-full z-0"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_20px_#06b6d4]" />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Capabilities Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Our Capabilities</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        We deliver end-to-end development services across all major platforms and technologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <Monitor className="w-8 h-8 text-blue-600" />, title: "Web Application Development", desc: "Responsive, PWA, and single-page applications built with React, Next.js, and modern frameworks." },
                        { icon: <Smartphone className="w-8 h-8 text-purple-600" />, title: "Mobile App Development", desc: "Native iOS (Swift) and Android (Kotlin) apps, or cross-platform solutions using React Native/Flutter." },
                        { icon: <Layers className="w-8 h-8 text-cyan-600" />, title: "SaaS Product Development", desc: "Scalable multi-tenant architectures tailored for software-as-a-service business models." },
                        { icon: <Layout className="w-8 h-8 text-pink-600" />, title: "UI/UX Engineering", desc: "Pixel-perfect implementation of designs with focus on performance and accessibility." },
                        { icon: <Zap className="w-8 h-8 text-yellow-600" />, title: "API Development", desc: "Robust RESTful and GraphQL API design ensuring secure data communication." },
                        { icon: <CheckCircle className="w-8 h-8 text-green-600" />, title: "Testing & QA", desc: "Automated testing pipelines ensuring bug-free and reliable software delivery." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-slate-50 w-fit group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">Our Development Process</h2>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Discovery", desc: "Understanding your vision, requirements, and target audience." },
                                    { step: "02", title: "Design & Prototype", desc: "Creating wireframes and high-fidelity mockups for approval." },
                                    { step: "03", title: "Development", desc: "Agile sprints with regular updates and code reviews." },
                                    { step: "04", title: "Launch & Scale", desc: "Deployment to production and ongoing support." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="text-3xl font-bold text-blue-200">{item.step}</div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="absolute inset-0 bg-grid-black/[0.05]" />
                            {/* Abstract Code Animation */}
                            <div className="p-8 font-mono text-sm text-blue-700 leading-relaxed">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 2 }}
                                >
                                    &lt;Application&gt;<br />
                                    &nbsp;&nbsp;&lt;Provider store={'{store}'}&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Router&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Switch&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/" component={'{Home}'} /&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path="/app" component={'{Dashboard}'} /&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Switch&gt;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Router&gt;<br />
                                    &nbsp;&nbsp;&lt;/Provider&gt;<br />
                                    &lt;/Application&gt;
                                </motion.div>
                                {/* Floating Elements on top */}
                                <motion.div
                                    className="absolute bottom-10 right-10 bg-blue-600 p-4 rounded-xl shadow-lg text-white"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        <span className="font-bold">Build Success</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">Ready to Build Your App?</h2>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    From MVP to Enterprise, we have the expertise to bring your idea to life.
                </p>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors">
                        Get Started
                    </button>
                </Link>
            </section>
        </div>
    );
}
