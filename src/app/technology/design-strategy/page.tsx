'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const DesignStrategyPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const searchParams = useSearchParams();

    // Handle scroll to section on mount
    useEffect(() => {
        // Check for hash in URL or search param
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

    // Parallax effects
    const heroY = useTransform(scrollY, [0, 400], [0, -80]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
    const floatingY1 = useTransform(scrollY, [0, 400], [0, -120]);
    const floatingY2 = useTransform(scrollY, [0, 400], [0, -200]);
    const floatingY3 = useTransform(scrollY, [0, 400], [0, -160]);
    const floatingX1 = useTransform(scrollY, [0, 400], [0, 40]);
    const floatingX2 = useTransform(scrollY, [0, 400], [0, -60]);

    // Service sections data matching Mega Menu keys
    const services = [
        {
            id: 'ui-ux-design', // Matched to likely anchor
            title: 'UI/UX Design Thinking',
            subtitle: 'User-centered design that creates engaging digital experiences',
            icon: '🎨',
            items: [
                { title: 'User Research', desc: 'Deep insights into user needs', icon: '👥' },
                { title: 'Wireframing', desc: 'Structured layout planning', icon: '📐' },
                { title: 'Visual Design', desc: 'Beautiful and cohesive aesthetics', icon: '🎨' },
                { title: 'Prototyping', desc: 'Interactive mockups for testing', icon: '🔨' },
                { title: 'User Testing', desc: 'Real feedback from real users', icon: '💬' },
                { title: 'Development Handoff', desc: 'Seamless implementation', icon: '🚀' },
            ],
        },
        {
            id: 'consulting', // Matched to likely anchor
            title: 'Technology Consulting',
            subtitle: 'Expert Solutions to Drive Your Business Forward',
            icon: '📊',
            items: [
                { title: 'IT Strategy & Planning', desc: 'Comprehensive roadmaps aligned with business', icon: '📊' },
                { title: 'Digital Transformation', desc: 'End-to-end modernization for efficiency', icon: '🔄' },
                { title: 'Cloud Migration', desc: 'Secure infrastructure tailored to needs', icon: '☁️' },
                { title: 'Cybersecurity', desc: 'Enterprise-grade security frameworks', icon: '🔒' },
                { title: 'Expert Consultants', desc: 'Certified professionals with 15+ years', icon: '👨💼' },
                { title: 'Proven Results', desc: '500+ successful implementations', icon: '✅' },
            ],
        },
        {
            id: 'staff-augmentation', // Matched to likely anchor
            title: 'IT Staff Augmentation',
            subtitle: 'Extend your team with skilled IT professionals',
            icon: '👥',
            items: [
                { title: 'Quick Onboarding', desc: 'Ready-to-work professionals', icon: '⚡' },
                { title: 'Cost Effective', desc: 'Flexible engagement models', icon: '💰' },
                { title: 'Specialized Skills', desc: 'Expert-level professionals', icon: '🎯' },
                { title: 'Scale Easily', desc: 'Grow or shrink team on demand', icon: '📈' },
                { title: 'Cultural Fit', desc: 'Integrated team members', icon: '🤝' },
                { title: 'Continuous Support', desc: 'Ongoing management & coaching', icon: '🔄' },
            ],
        }
    ];

    return (
        <div ref={containerRef} className="bg-[#02040a] text-white overflow-hidden min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
                style={{ y: heroY, opacity: heroOpacity }}
            >
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

                {/* Floating Elements (Parallax) */}
                <motion.div
                    className="absolute top-[20%] left-[15%] z-0 text-6xl opacity-40 blur-[1px]"
                    style={{ y: floatingY1, x: floatingX1 }}
                    animate={{ y: [0, 20, -20, 0], rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-6xl mb-2">🎨</span>
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Design</span>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute top-[25%] right-[15%] z-0 text-6xl opacity-40 blur-[1px]"
                    style={{ y: floatingY2, x: floatingX2 }}
                    animate={{ y: [0, -25, 15, 0], rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-6xl mb-2">💡</span>
                        <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Strategy</span>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-[20%] left-[50%] z-0 text-6xl opacity-40 blur-[1px]"
                    style={{ y: floatingY3 }}
                    animate={{ y: [0, -15, 25, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-6xl mb-2">🚀</span>
                        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Innovation</span>
                    </div>
                </motion.div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight"
                    >
                        Design, Technology <br /> & Strategy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Transform your vision into reality with expert consulting, staffing, and design solutions tailored for the digital age.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                        <span className="text-sm font-semibold text-slate-300">Comprehensive Solutions Available</span>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                >
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest text-cyan-400">Scroll to explore</span>
                </motion.div>
            </motion.section>

            {/* Services Sections */}
            <div className="pb-32">
                {services.map((service, sectionIdx) => (
                    <motion.section
                        key={service.id}
                        id={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="container mx-auto px-4 py-24 md:py-32 border-t border-white/5"
                    >
                        {/* Section Header */}
                        <div className="text-center mb-16 md:mb-24">
                            <motion.div
                                className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-5xl bg-white/5 rounded-full border border-white/10 shadow-2xl"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {service.icon}
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">{service.subtitle}</p>
                        </div>

                        {/* Service Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {service.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -5, borderColor: 'rgba(34,211,238,0.3)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all group"
                                >
                                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-cyan-100 mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative py-32 bg-gradient-to-t from-sabbpe-navy via-black to-black text-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10 container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Transform?</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Partner with us to unlock innovation, efficiency, and growth for your business.
                    </p>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-shadow"
                        >
                            Get Started Today
                        </motion.button>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
};

export default DesignStrategyPage;
