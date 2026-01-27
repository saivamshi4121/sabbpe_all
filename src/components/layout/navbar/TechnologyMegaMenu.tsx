'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Smartphone, Globe, PenTool, Briefcase, Brain, Database, Cloud, Box, MessageSquare, Cpu, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface MenuItem {
    name: string;
    href: string;
    icon?: any;
}

interface ContentColumn {
    title: string;
    items: MenuItem[];
}

const technologyContent: Record<string, MenuItem[]> = {
    capabilities: [
        { name: 'Custom App Development', href: '/technology/custom-app-development', icon: Code },
        { name: 'Digital Transformation', href: '/technology/digital-transformation', icon: Globe },
        { name: 'Enterprise Mobility', href: '/technology/enterprise-mobility', icon: Smartphone },
        { name: 'Hexa UI/UX Design', href: '/technology/hexa-uiux-design', icon: PenTool },
        { name: 'Technology Consulting', href: '/technology/consulting', icon: Briefcase },
    ],
    advanced: [
        { name: 'Artificial Intelligence', href: '/technology/artificial-intelligence', icon: Brain },
        { name: 'Machine Learning', href: '/technology/machine-learning', icon: Cpu },
        { name: 'Big Data Analysis', href: '/technology/big-data-analysis', icon: Database },
        { name: 'Blockchain', href: '/technology/blockchain', icon: Box },
        { name: 'Cloud Computing', href: '/technology/cloud-computing', icon: Cloud },
        { name: 'Chatbots & Agents', href: '/technology/chatbots-agents', icon: MessageSquare },
        { name: 'Metaverse AR/VR', href: '/technology/metaverse-ar-vr', icon: Globe },
    ],
};

const categories = [
    { id: 'capabilities', label: 'Technology Capabilities' },
    { id: 'advanced', label: 'Advanced Technology' },
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
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -4 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 gap-3 max-lg:gap-2"
                >
                    {content.map((item, itemIdx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={itemIdx}
                                className="relative rounded-md transition-all duration-200"
                                whileHover={{ x: 2 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="group flex items-center gap-3 px-3 py-2.5 text-muted-foreground no-underline text-sm font-medium transition-colors duration-200 rounded-md hover:text-white hover:bg-white/5"
                                >
                                    {Icon && (
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sabbpe-blue/20 to-sabbpe-cyan/20 flex items-center justify-center group-hover:from-sabbpe-blue/30 group-hover:to-sabbpe-cyan/30 transition-all">
                                            <Icon className="w-4 h-4 text-sabbpe-cyan" />
                                        </div>
                                    )}
                                    <span className="group-hover:translate-x-1 transition-transform duration-200 flex-1">
                                        {item.name}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
