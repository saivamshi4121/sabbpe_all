'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CreditCard, Globe, Zap, Smartphone, ArrowRight, Shield, Layers, Code, Briefcase, Building, ChevronRight } from 'lucide-react';

const categories = [
    {
        id: "payments",
        title: "Accept Payments",
        desc: "The complete stack for online & offline collections.",
        icon: Globe,
        color: "from-blue-500 to-cyan-400",
        features: [
            { title: "Payment Gateway", desc: "Checkout with 100+ modes: UPI, Cards, Netbanking." },
            { title: "Payment Links", desc: "Share payment links via WhatsApp/SMS instantly." },
            { title: "Recurring Billing", desc: "Automate subscriptions and SIPs." },
            { title: "International", desc: "Accept USD, EUR, GBP in real-time." },
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-64 h-80 bg-white border border-slate-200 rounded-2xl backdrop-blur-md relative transform rotate-y-12 rotate-x-6 shadow-2xl skew-y-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-2xl" />
                    <div className="p-6">
                        <div className="h-4 w-12 bg-slate-200 rounded mb-6" />
                        <div className="h-8 w-32 bg-slate-100 rounded mb-2" />
                        <div className="h-4 w-20 bg-slate-100 rounded mb-8" />

                        <div className="space-y-3">
                            <div className="h-10 w-full bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-blue-200">
                                Pay ₹5,000
                            </div>
                        </div>
                    </div>
                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -right-8 top-12 bg-green-500 text-white font-bold px-3 py-1 rounded-full text-xs shadow-lg"
                    >
                        Success
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: "payouts",
        title: "Automate Payouts",
        desc: "Move money to vendors, employees, and customers.",
        icon: Zap,
        color: "from-orange-400 to-red-500",
        features: [
            { title: "Instant Transfers", desc: "IMPS/NEFT/RTGS API available 24/7." },
            { title: "Vendor Payouts", desc: "Add beneficiaries and pay in bulk." },
            { title: "Bulk Payouts", desc: "Process multiple payments in one go." },
            { title: "Refunds", desc: "Instant refunds to original source." },
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative">
                    {/* Central Node */}
                    <div className="w-20 h-20 rounded-full bg-orange-50 border border-orange-500 flex items-center justify-center z-10 relative">
                        <Building className="text-orange-500" />
                    </div>
                    {/* Satellites */}
                    {[0, 90, 180, 270].map((deg, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="absolute"
                            style={{
                                top: '50%', left: '50%',
                                transform: `translate(-50%, -50%) rotate(${deg}deg) translate(100px) rotate(-${deg}deg)`
                            }}
                        >
                            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                <span className="text-xs text-slate-600">User</span>
                            </div>
                            {/* Particle */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[200px] h-[200px] pointer-events-none overflow-visible" style={{ transform: `rotate(${deg}deg)` }}>
                                <circle r="2" fill="#f97316">
                                    <animateMotion dur="2s" repeatCount="indefinite" path="M100,100 L200,100" />
                                </circle>
                            </svg>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: "banking",
        title: "Neo Banking",
        desc: "API-first banking for the modern enterprise.",
        icon: Briefcase,
        color: "from-purple-500 to-indigo-500",
        features: [
            { title: "Current Accounts", desc: "Open powered accounts seamlessly." },
            { title: "Corporate Cards", desc: "Issue physical & virtual cards with ease." },
            { title: "Expense Management", desc: "Track every spend in real-time." },
            { title: "Lending Service", desc: "Access working capital credit." },
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                <motion.div
                    initial={{ rotateX: 0, rotateY: 0 }}
                    animate={{ rotateY: 180 }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    className="w-80 h-48 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl border border-white/20 relative shadow-2xl flex flex-col justify-end p-6 preserve-3d"
                >
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20" />
                        <span className="text-white font-bold tracking-widest">SABBPE</span>
                    </div>
                    <div className="text-slate-300 font-mono text-lg tracking-[4px] mb-2">4242 4242 4242 4242</div>
                    <div className="flex justify-between items-center text-xs text-slate-400">
                        <span>VALID THRU 12/28</span>
                        <span>MEMBER</span>
                    </div>
                </motion.div>
            </div>
        )
    }
];

export default function ServicesInteractive() {
    const [activeSection, setActiveSection] = useState(categories[0].id);

    // Naive ScrollSpy - functional but simple
    const handleScrollSpy = (id: string) => {
        setActiveSection(id);
    };

    return (
        <section className="relative w-full bg-background text-foreground min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <header className="mb-32 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-6"
                    >
                        One Platform.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                            Infinite Possibilities.
                        </span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                        A complete financial operating system built for the internet economy.
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-20 relative">
                    {/* Left Sticky Sidebar */}
                    <div className="hidden lg:block w-1/4 h-[calc(100vh-100px)] sticky top-32">
                        <nav className="space-y-2 relative">
                            {/* Active Indicator Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-200" />

                            {categories.map((cat, i) => (
                                <a
                                    key={cat.id}
                                    href={`#${cat.id}`}
                                    onClick={(e) => { e.preventDefault(); document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' }); handleScrollSpy(cat.id); }}
                                    className={`relative block pl-8 py-4 transition-all duration-300 text-lg group ${activeSection === cat.id ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    {activeSection === cat.id && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b ${cat.color}`}
                                        />
                                    )}
                                    <span className="flex items-center gap-3">
                                        <cat.icon className={`w-5 h-5 ${activeSection === cat.id ? 'opacity-100' : 'opacity-50'}`} />
                                        {cat.title}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-3/4 space-y-40 pb-40">
                        {categories.map((cat, i) => (
                            <div
                                id={cat.id}
                                key={cat.id}
                                className="scroll-mt-32 group"
                                onMouseEnter={() => setActiveSection(cat.id)}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ margin: "-20%" }}
                                    className="relative rounded-3xl bg-white border border-slate-200 shadow-xl p-8 md:p-12 overflow-hidden"
                                >
                                    {/* Background Glow */}
                                    <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${cat.color} opacity-[0.05] blur-[100px] rounded-full pointer-events-none`} />

                                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

                                        {/* Text Info */}
                                        <div className="order-2 lg:order-1">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 mb-6 uppercase tracking-wider`}>
                                                0{i + 1} / {cat.title}
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                                {cat.desc}
                                            </h2>

                                            <div className="grid sm:grid-cols-2 gap-6 mt-10">
                                                {cat.features.map((feat, j) => (
                                                    <div key={j} className="space-y-2">
                                                        <h3 className="text-slate-900 font-bold flex items-center gap-2">
                                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color}`} />
                                                            {feat.title}
                                                        </h3>
                                                        <p className="text-sm text-slate-600 leading-relaxed">
                                                            {feat.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-10">
                                                <button className="flex items-center gap-2 font-bold text-slate-900 hover:gap-4 transition-all group-hover:text-blue-600">
                                                    Explore Documentation
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Visual */}
                                        <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden">
                                            {cat.visual}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export { ServicesInteractive };
