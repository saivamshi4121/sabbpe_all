'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LayoutDashboard, Code, BarChart3, RefreshCw, ArrowRight } from 'lucide-react';

interface SaaSItem {
    title: string;
    description: string;
    href: string;
    icon: any;
    gradient: string;
}

const saasItems: SaaSItem[] = [
    {
        title: 'Unified Dashboard',
        description: 'Single view for all transactions and analytics',
        href: '/saas/dashboard',
        icon: LayoutDashboard,
        gradient: 'from-sabbpe-blue to-sabbpe-cyan',
    },
    {
        title: 'API Suite',
        description: 'RESTful APIs for seamless integration',
        href: '/saas/api',
        icon: Code,
        gradient: 'from-sabbpe-cyan to-sabbpe-teal',
    },
    {
        title: 'Analytics Engine',
        description: 'Real-time insights and reporting',
        href: '/saas/analytics',
        icon: BarChart3,
        gradient: 'from-sabbpe-teal to-sabbpe-blue',
    },
    {
        title: 'Reconciliation',
        description: 'Automated settlement matching',
        href: '/saas/reconciliation',
        icon: RefreshCw,
        gradient: 'from-sabbpe-blue to-sabbpe-cyan',
    },
];

interface SaaSMegaMenuProps {
    onClose: () => void;
}

export default function SaaSMegaMenu({ onClose }: SaaSMegaMenuProps) {
    return (
        <div className="grid grid-cols-[240px_1fr] gap-6">
            {/* Left - Intro Panel */}
            <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                    SaaS Platform
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                    Everything you need to manage payments
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                    A complete suite of SaaS tools to power your business operations and scale effortlessly.
                </p>
                <Link
                    href="/saas"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors font-medium mt-2"
                >
                    Explore platform
                    <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>

            {/* Right - SaaS Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
                {saasItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={onClose}
                            className="group glass-card p-3 hover:shadow-lg transition-all duration-300 relative overflow-hidden bg-white border border-slate-200"
                        >
                            {/* Gradient accent */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

                            <div className="space-y-2">
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                                    <Icon className="w-5 h-5 text-background" />
                                </div>
                                <div>
                                    <div className="font-display font-semibold mb-0.5 text-sm text-slate-900 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground line-clamp-2">
                                        {item.description}
                                    </div>
                                </div>
                            </div>

                            <ArrowRight className="absolute bottom-3 right-3 w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
