'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
    { label: 'Instant Settlement', id: 'settlement' },
    { label: 'Real-time Reports', id: 'reports' },
    { label: 'Reconciliation', id: 'reconciliation' },
    { label: 'Why SabbPe', id: 'why-sabbpe' },
];

export default function SettlementNavigation() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="sticky top-24 z-50 w-full flex justify-center pb-8 pointer-events-none">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-1.5 flex items-center gap-1 shadow-2xl overflow-x-auto max-w-[95vw] no-scrollbar"
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                            relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                            ${activeSection === item.id
                                ? 'text-white'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="activeNavPillSettlement"
                                className="absolute inset-0 bg-emerald-600/80 rounded-full -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {item.label}
                    </button>
                ))}
            </motion.div>
        </div>
    );
}
