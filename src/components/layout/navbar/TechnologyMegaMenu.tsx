'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Brain, Cloud, Shield, Zap, Database, Lock, ArrowRight, Code, PenTool, Users, Smartphone, Globe, Box, Server } from 'lucide-react';
import clsx from 'clsx';

interface MenuItem {
    name: string;
    href: string;
}

interface ContentColumn {
    title: string;
    items: MenuItem[];
}

const technologyContent: Record<string, ContentColumn[]> = {
    capabilities: [
        {
            title: 'Development',
            items: [
                { name: 'Custom App Development', href: '/technology/app-dev' },
                { name: 'Digital Transformation', href: '/technology/digital-transform' },
                { name: 'Enterprise Mobility', href: '/technology/mobility' },
            ],
        },
        {
            title: 'Design & Strategy',
            items: [
                { name: 'UI/UX Design Thinking', href: '/technology/ui-ux' },
                { name: 'Technology Consulting', href: '/technology/consulting' },
                { name: 'IT Staff Augmentation', href: '/technology/staffing' },
            ],
        },
        {
            title: 'Recruitment',
            items: [
                { name: 'Managed Recruitment', href: '/technology/recruitment' },
                { name: 'Talent Solutions', href: '/technology/talent' },
                { name: 'Strategic Staffing', href: '/technology/strategic' },
            ],
        },
    ],
    advanced: [
        {
            title: 'AI & Data',
            items: [
                { name: 'Artificial Intelligence', href: '/technology/ai' },
                { name: 'Machine Learning', href: '/technology/ml' },
                { name: 'Big Data & Analytics', href: '/technology/data' },
            ],
        },
        {
            title: 'Infrastructure',
            items: [
                { name: 'Cloud Computing', href: '/technology/cloud' },
                { name: 'Blockchain Development', href: '/technology/blockchain' },
                { name: 'Internet of Things', href: '/technology/iot' },
            ],
        },
        {
            title: 'Next-Gen Tech',
            items: [
                { name: 'Chatbot Development', href: '/technology/chatbot' },
                { name: 'Progressive Web Apps', href: '/technology/pwa' },
                { name: 'Metaverse & AR/VR', href: '/technology/metaverse' },
            ],
        },
    ],

};

const categories = [
    { id: 'capabilities', label: 'Technology Capabilities' },
    { id: 'advanced', label: 'Advanced Technologies' },

];

interface TechnologyMegaMenuProps {
    onClose: () => void;
}

export default function TechnologyMegaMenu({ onClose }: TechnologyMegaMenuProps) {
    const [activeCategory, setActiveCategory] = useState<string>('capabilities');
    const content = technologyContent[activeCategory] || technologyContent.capabilities;

    return (

        <div className="grid grid-cols-[220px_1fr] gap-8 items-start max-lg:grid-cols-[200px_1fr] max-md:grid-cols-1 max-md:gap-6">
            {/* Sidebar - Categories */}
            <div className="flex flex-col gap-1 pb-4 max-md:flex-row max-md:overflow-x-auto max-md:pb-2">
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        className={clsx(
                            'relative px-4 py-2.5 text-sm font-medium text-left cursor-pointer rounded-lg transition-all duration-200 overflow-hidden flex items-center justify-between',
                            activeCategory === category.id
                                ? 'text-sabbpe-cyan bg-sabbpe-blue/15 border border-sabbpe-blue/30'
                                : 'text-muted-foreground bg-transparent hover:text-white hover:bg-sabbpe-blue/8'
                        )}
                        onClick={() => setActiveCategory(category.id)}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="relative z-10">{category.label}</span>
                        {activeCategory === category.id && (
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sabbpe-blue to-sabbpe-cyan rounded-r"
                                layoutId="techActiveBar"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Content Grid */}
            <div className="min-h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-3 gap-6 max-lg:gap-4"
                    >
                        {content.map((column, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                                <h4 className="text-xs font-bold text-sabbpe-cyan/80 uppercase tracking-widest m-0 p-0 pl-2">
                                    {column.title}
                                </h4>
                                <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
                                    {column.items.map((item, itemIdx) => (
                                        <motion.li
                                            key={itemIdx}
                                            className="relative rounded-md transition-all duration-200"
                                            whileHover={{ x: 2 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground no-underline text-sm font-medium transition-colors duration-200 rounded-md hover:text-white hover:bg-white/5"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-sabbpe-cyan/30 group-hover:bg-sabbpe-cyan transition-colors" />
                                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
