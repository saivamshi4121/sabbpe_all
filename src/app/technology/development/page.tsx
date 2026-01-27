'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Smartphone, Rocket, Building2, Code, Database, Shield, Zap, RefreshCw, BarChart, Globe, Cloud } from 'lucide-react';

export default function DevelopmentPage() {
    const { scrollY } = useScroll();
    const searchParams = useSearchParams();

    // Handle scroll to section on mount
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        const sectionId = searchParams.get('scroll') || hash;

        if (sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 500);
        }
    }, [searchParams]);

    const heroY = useTransform(scrollY, [0, 300], [0, 100]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);

    const services = [
        {
            id: "custom-app-development",
            title: "Custom App Development",
            subtitle: "Innovative Mobile & Web Solutions",
            description: "We create high-performance, scalable mobile and web applications tailored to your business needs. From concept to deployment, we handle every aspect of app development with cutting-edge technologies and premium design patterns.",
            icon: <Smartphone className="w-12 h-12 text-blue-400" />,
            features: [
                { title: "Mobile & Web Apps", desc: "Native iOS/Android and responsive web apps" },
                { title: "Cloud-Native", desc: "Scalable architectures on AWS/Azure" },
                { title: "API Integration", desc: "Seamless connectivity with existing systems" },
                { title: "Agile Delivery", desc: "Rapid iterations and continuous deployment" }
            ],
            stats: [
                { label: "Projects Delivered", value: "50+" },
                { label: "Client Satisfaction", value: "98%" }
            ]
        },
        {
            id: "digital-transformation",
            title: "Digital Transformation",
            subtitle: "Modernize Your Business",
            description: "Transform your operations with strategic digital solutions. We help enterprises modernize their infrastructure, streamline workflows, and unlock new growth opportunities through digital innovation.",
            icon: <Rocket className="w-12 h-12 text-teal-400" />,
            features: [
                { title: "Legacy Modernization", desc: "Upgrading outdated systems to modern tech" },
                { title: "Process Automation", desc: "Streamlining workflows with AI/RPA" },
                { title: "Data Analytics", desc: "Actionable insights for decision making" },
                { title: "Cloud Migration", desc: "Secure transition to cloud infrastructure" }
            ],
            stats: [
                { label: "Companies Transformed", value: "35+" },
                { label: "Efficiency Gain", value: "45%" }
            ]
        },
        {
            id: "enterprise-mobility",
            title: "Enterprise Mobility",
            subtitle: "Secure Mobile-First Strategy",
            description: "Empower your workforce with enterprise mobility solutions. Secure, scalable mobile applications designed for large organizations with complex requirements and compliance needs.",
            icon: <Building2 className="w-12 h-12 text-purple-400" />,
            features: [
                { title: "Secure Apps", desc: "Bank-grade security and MDM integration" },
                { title: "BYOD Strategies", desc: "Secure frameworks for personal devices" },
                { title: "Field Operations", desc: "Tools for remote and field workforce" },
                { title: "Real-time Sync", desc: "Instant data synchronization across devices" }
            ],
            stats: [
                { label: "Enterprise Clients", value: "25+" },
                { label: "System Uptime", value: "99.9%" }
            ]
        },
    ];

    return (
        <div className="w-full min-h-screen bg-[#02040a] text-white font-sans overflow-hidden">
            {/* Hero Section */}
            <motion.section
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative min-h-[90vh] flex items-center justify-center px-4"
            >
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

                <div className="max-w-5xl text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-8 backdrop-blur-sm"
                    >
                        <Code className="w-4 h-4" />
                        <span className="text-sm font-semibold">Engineering Excellence</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight"
                    >
                        Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        We build scalable, high-performance software solutions tailored to your enterprise needs. From custom apps to full-scale digital transformation.
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                >
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-400 to-transparent" />
                </motion.div>
            </motion.section>

            {/* Services Sections */}
            <div className="relative pb-32">
                {services.map((service, idx) => (
                    <motion.section
                        key={service.id}
                        id={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="py-24 px-4 container mx-auto border-t border-white/5"
                    >
                        <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                            <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-fit mb-6 shadow-lg shadow-blue-500/10">
                                    {service.icon}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{service.title}</h2>
                                <p className="text-xl text-blue-400 mb-6">{service.subtitle}</p>
                                <p className="text-slate-400 mb-8 leading-relaxed text-lg">{service.description}</p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                            <h4 className="font-bold text-slate-200 mb-1">{feature.title}</h4>
                                            <p className="text-sm text-slate-400">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats Mini Grid */}
                                <div className="flex gap-8 border-t border-white/10 pt-6">
                                    {service.stats.map((stat, sIdx) => (
                                        <div key={sIdx}>
                                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`relative ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                {/* Visual Representation */}
                                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>

                                    {/* Animated Elements based on Service Type */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {idx === 0 && ( // Custom App
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="w-64 h-64 border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center"
                                            >
                                                <div className="w-48 h-48 border border-blue-500/50 rounded-full flex items-center justify-center bg-blue-500/5 backdroop-blur-sm">
                                                    <Code className="w-16 h-16 text-blue-400" />
                                                </div>
                                            </motion.div>
                                        )}
                                        {idx === 1 && ( // Digital Transformation
                                            <div className="relative">
                                                <motion.div
                                                    animate={{ y: [-20, 20, -20] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                    className="absolute -left-20 -top-20 p-4 bg-teal-500/10 rounded-2xl border border-teal-500/20 backdrop-blur-md"
                                                >
                                                    <Database className="w-8 h-8 text-teal-400" />
                                                </motion.div>
                                                <motion.div
                                                    animate={{ y: [20, -20, 20] }}
                                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                                    className="absolute -right-20 bottom-20 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-md"
                                                >
                                                    <Cloud className="w-8 h-8 text-purple-400" />
                                                </motion.div>
                                                <Rocket className="w-24 h-24 text-white opacity-20" />
                                            </div>
                                        )}
                                        {idx === 2 && ( // Enterprise Mobility
                                            <div className="grid grid-cols-2 gap-4 opacity-50">
                                                <motion.div
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="w-24 h-32 bg-purple-500/10 rounded-xl border border-purple-500/30"
                                                />
                                                <motion.div
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                                    className="w-24 h-32 bg-blue-500/10 rounded-xl border border-blue-500/30"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-32 px-4 text-center max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-slate-400 mb-10">
                    Let's discuss how our development services can accelerate your business goals.
                </p>
                <Link href="/contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-shadow"
                    >
                        Start Your Project
                    </motion.button>
                </Link>
            </motion.section>
        </div>
    );
}
