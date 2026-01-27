'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CreditCard, QrCode, Smartphone, Building2, Wallet, Users } from 'lucide-react';

interface Category {
    id: string;
    label: string;
    icon: string;
}

interface MenuItem {
    name: string;
    tag?: string;
    href: string;
}

interface ContentColumn {
    title: string;
    items: MenuItem[];
}

const categories: Category[] = [
    { id: 'offline', label: 'Offline Payments', icon: '💳' },
    { id: 'online', label: 'Online Payments', icon: '🌐' },
    { id: 'banking', label: 'Banking Suite', icon: '🏦' },
];

const megaMenuContent: Record<string, ContentColumn[]> = {
    offline: [
        {
            title: 'UPI & Assisted',
            items: [
                { name: 'UPI Payments', href: '/products/upi-assisted#upi-payments' },
                { name: 'SabbPe Minis', tag: 'Popular', href: '/products/upi-assisted#minis' },
                { name: 'VAS', href: '/products/upi-assisted#vas' },
            ],
        },
        {
            title: 'Collections & Recurring',
            items: [
                { name: 'UPI Collections', href: '/products/collections-recurring#upi-collections' },
                { name: 'UPI AutoPay', href: '/products/collections-recurring#autopay' },
                { name: 'BBPS Services', href: '/products/collections-recurring#bbps' },
            ],
        },
        {
            title: 'Assisted Solutions',
            items: [
                { name: 'Payment Gateway', href: '/products/assisted-solutions#gateway' },
                { name: 'Payment Links', href: '/products/assisted-solutions#links' },
                { name: 'Payment Forms', href: '/products/assisted-solutions#links' },
                { name: 'Subscriptions', href: '/products/assisted-solutions#subscriptions' },
                { name: 'Payouts', href: '/products/assisted-solutions#payouts' },
                { name: 'SabbPe Integration', href: '/products/assisted-solutions#integration' },
            ],
        },
    ],
    online: [
        {
            title: 'Payment Processing',
            items: [
                { name: 'Credit/Debit Cards', href: '/products/online-payments#cards' },
                { name: 'Digital Wallets', href: '/products/online-payments#wallets' },
                { name: 'Net Banking', href: '/products/online-payments#netbanking' },
            ],
        },
        {
            title: 'Settlement & Reporting',
            items: [
                { name: 'Instant Settlement', href: '/products/settlement-reporting#settlement' },
                { name: 'Real-time Reports', href: '/products/settlement-reporting#reports' },
                { name: 'Reconciliation', href: '/products/settlement-reporting#reconciliation' },
            ],
        },
        {
            title: 'Integration',
            items: [
                { name: 'API Integration', href: '/products/api' },
                { name: 'Plugins', href: '/products/plugins' },
                { name: 'Custom Solutions', href: '/products/custom' },
            ],
        },
    ],
    banking: [
        {
            title: 'Account Services',
            items: [
                { name: 'Business Accounts', href: '/products/business-accounts' },
                { name: 'Savings Accounts', href: '/products/savings-account' },
                { name: 'Compliance Suite', href: '/products/compliance-suite' },
            ],
        },
        {
            title: 'Lending Solutions',
            items: [
                { name: 'Quick Loans', href: '/products/loans' },
                { name: 'Credit Lines', href: '/products/credit' },
                { name: 'Invoice Financing', href: '/products/financing' },
            ],
        },
        {
            title: 'Treasury Management',
            items: [
                { name: 'Cash Management', href: '/products/cash' },
                { name: 'FX Services', href: '/products/fx' },
                { name: 'Hedging Tools', href: '/products/hedging' },
            ],
        },
    ],
};

interface ProductsMegaMenuProps {
    onClose: () => void;
}

export default function ProductsMegaMenu({ onClose }: ProductsMegaMenuProps) {
    const [activeCategory, setActiveCategory] = useState<string>('offline');

    const content = megaMenuContent[activeCategory] || megaMenuContent.offline;

    return (

        <div className="grid grid-cols-[220px_1fr] gap-8 items-start max-lg:grid-cols-[200px_1fr] max-md:grid-cols-1 max-md:gap-6">
            {/* Sidebar - Categories */}
            <div className="flex flex-col gap-1 pb-4 max-md:flex-row max-md:overflow-x-auto max-md:pb-2">
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        className={clsx(
                            'relative px-4 py-2 text-sm font-medium text-left cursor-pointer rounded-lg transition-all duration-200 overflow-hidden flex items-center gap-3',
                            activeCategory === category.id
                                ? 'text-sabbpe-cyan bg-sabbpe-blue/15 border border-sabbpe-blue/30'
                                : 'text-muted-foreground bg-transparent hover:text-white hover:bg-sabbpe-blue/8'
                        )}
                        onClick={() => setActiveCategory(category.id)}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-lg opacity-70 transition-opacity duration-200">
                            {category.icon}
                        </span>
                        <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                            {category.label}
                        </span>
                        {activeCategory === category.id && (
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sabbpe-blue to-sabbpe-cyan rounded-r"
                                layoutId="productActiveBar"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Content Grid - 3 Columns */}
            <div className="min-h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-3 gap-6 max-lg:gap-4 max-md:grid-cols-1"
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
                                                className="flex items-center justify-between gap-2 px-2 py-1.5 text-muted-foreground no-underline text-sm font-medium transition-colors duration-200 rounded-md hover:text-white hover:bg-white/5"
                                            >
                                                <span>{item.name}</span>
                                                {item.tag && (
                                                    <span className="inline-flex items-center px-1.5 py-0.5 bg-sabbpe-blue/15 border border-sabbpe-blue/20 rounded-[4px] text-[10px] font-bold text-sabbpe-cyan uppercase whitespace-nowrap flex-shrink-0 tracking-wider">
                                                        {item.tag}
                                                    </span>
                                                )}
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

function clsx(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}
