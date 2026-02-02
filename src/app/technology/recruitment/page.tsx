'use client';

import React, { useEffect, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Users, UserPlus, Target, TrendingUp, CheckCircle, Globe, Search, ClipboardCheck, Handshake } from 'lucide-react';

const RecruitmentContent = () => {
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
            id: 'managed-recruitment',
            title: 'Managed Recruitment',
            subtitle: 'End-to-end talent acquisition tailored to your culture',
            icon: <Users className="w-12 h-12 text-blue-600" />,
            features: [
                { title: 'Full-Cycle Hiring', desc: 'From job posting to onboarding' },
                { title: 'Cultural Fit Assessment', desc: 'Ensuring alignment with company values' },
                { title: 'Employer Branding', desc: 'Positioning you as a top workplace' },
                { title: 'Pipeline Management', desc: 'Building talent pools for future needs' },
            ]
        },
        {
            id: 'talent-solutions',
            title: 'Talent Solutions',
            subtitle: 'Scalable workforce strategies for growing companies',
            icon: <Target className="w-12 h-12 text-purple-600" />,
            features: [
                { title: 'Skills Assessment', desc: 'Technical and soft skill verification' },
                { title: 'Market Mapping', desc: 'Salary benchmarking and talent availability' },
                { title: 'Recruitment Audit', desc: 'Optimizing your internal hiring processes' },
                { title: 'Diversity & Inclusion', desc: 'Building inclusive hiring frameworks' },
            ]
        },
        {
            id: 'strategic-staffing',
            title: 'Strategic Staffing',
            subtitle: 'Executive search and specialized role fulfillment',
            icon: <TrendingUp className="w-12 h-12 text-cyan-600" />,
            features: [
                { title: 'Executive Search', desc: 'C-suite and leadership headhunting' },
                { title: 'Niche Tech Roles', desc: 'Finding hard-to-hire specialists' },
                { title: 'Interim Leadership', desc: 'Placement of temporary senior experts' },
                { title: 'Confidential Hiring', desc: 'Discreet search for sensitive roles' },
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-hidden">
            {/* Hero Section */}
            <motion.section
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative min-h-screen flex items-center justify-center px-4"
            >
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] -z-10" />

                <div className="max-w-4xl text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-sm font-semibold">Strategic Talent Partner</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
                    >
                        Recruitment & Staffing
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Build your dream team with our comprehensive recruitment solutions. We connect you with top talent that drives innovation.
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                >
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-600 to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest text-blue-600">Services</span>
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
                        className="py-24 px-4 container mx-auto border-t border-slate-200"
                    >
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="bg-white border border-slate-200 p-4 rounded-2xl w-fit mb-6 shadow-lg shadow-blue-100/50">
                                    {service.icon}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">{service.title}</h2>
                                <p className="text-xl text-slate-600 mb-8">{service.subtitle}</p>

                                <div className="grid gap-4">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 shadow-sm transition-all">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900">{feature.title}</h4>
                                                <p className="text-sm text-slate-600">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                {/* Visual Representation */}
                                <div className="aspect-square rounded-2xl bg-white border border-slate-200 shadow-lg relative overflow-hidden flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                                    <div className="relative z-10 grid gap-6">
                                        {/* Abstract cards */}
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="bg-white p-4 rounded-xl border border-slate-200 shadow-md flex items-center gap-3"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                                <Search className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ x: 20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="bg-white p-4 rounded-xl border border-slate-200 shadow-md flex items-center gap-3 ml-12"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                                <ClipboardCheck className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="bg-white p-4 rounded-xl border border-slate-200 shadow-md flex items-center gap-3"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                                                <Handshake className="w-5 h-5 text-purple-600" />
                                            </div>
                                            <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* Stats Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-center font-bold mb-12 text-slate-900 uppercase tracking-widest">By The Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { stat: "500+", label: "Companies Served" },
                            { stat: "50K+", label: "Successful Placements" },
                            { stat: "98%", label: "Client Satisfaction" },
                            { stat: "45%", label: "Faster Hiring" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                                    {item.stat}
                                </div>
                                <div className="text-slate-600 font-medium">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-32 px-4 text-center max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Ready to Build Your Team?</h2>
                <p className="text-xl text-slate-600 mb-10">
                    Start your journey with us and discover the perfect talent for your organization.
                </p>
                <Link href="/contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-200"
                    >
                        Get Started Today
                    </motion.button>
                </Link>
            </motion.section>
        </div>
    );
};

export default function RecruitmentPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-foreground">Loading...</div>}>
            <RecruitmentContent />
        </Suspense>
    );
}
