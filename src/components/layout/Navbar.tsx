'use client';

import { useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import ProductsMegaMenu from './navbar/ProductsMegaMenu';
import TechnologyMegaMenu from './navbar/TechnologyMegaMenu';
import SaaSMegaMenu from './navbar/SaaSMegaMenu';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

type MegaMenuType = 'products' | 'technology' | 'saas' | '';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [value, setValue] = useState<MegaMenuType>('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle escape key to close dropdown
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setValue('');
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);



    return (
        <>
            <nav
                className={clsx(
                    'fixed top-6 left-0 right-0 z-[1000] px-4 md:px-6 transition-all duration-500 ease-in-out',
                    isScrolled ? 'top-4' : 'top-6'
                )}
            >
                <div className="max-w-7xl mx-auto">
                    <div
                        className={clsx(
                            'relative rounded-full transition-all duration-500',
                            isScrolled
                                ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 p-3'
                                : 'bg-transparent border border-transparent p-5'
                        )}
                    >
                        <div className="flex items-center justify-between px-4">
                            {/* Logo */}
                            <Link href="/">
                                <motion.div
                                    className="flex items-center flex-shrink-0 cursor-pointer pl-2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Image
                                        src="/videos/sabbpe_logo.png"
                                        alt="SabbPe Logo"
                                        width={180}
                                        height={50}
                                        className="h-12 w-auto"
                                        priority
                                    />
                                </motion.div>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center justify-center flex-1 ml-12">
                                <NavigationMenu.Root
                                    value={value}
                                    onValueChange={(val) => setValue(val as MegaMenuType)}
                                    delayDuration={200}
                                    skipDelayDuration={300}
                                    className="relative"
                                >
                                    <NavigationMenu.List className="flex items-center gap-1 list-none m-0 p-0">
                                        {[
                                            {
                                                id: 'products',
                                                label: 'Products',
                                                content: <ProductsMegaMenu onClose={() => setValue('')} />,
                                                width: 'w-[900px]'
                                            },
                                            {
                                                id: 'technology',
                                                label: 'Technology',
                                                content: <TechnologyMegaMenu onClose={() => setValue('')} />,
                                                width: 'w-[800px]'
                                            },
                                            {
                                                id: 'saas',
                                                label: 'SaaS',
                                                content: <SaaSMegaMenu onClose={() => setValue('')} />,
                                                width: 'w-[850px]'
                                            },
                                        ].map((item) => (
                                            <NavigationMenu.Item key={item.id} value={item.id}>
                                                <NavigationMenu.Trigger
                                                    className={clsx(
                                                        'group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                                                        value === item.id
                                                            ? 'text-white bg-white/10'
                                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                    )}
                                                >
                                                    {item.label}
                                                    <ChevronDown
                                                        className={clsx(
                                                            "w-3 h-3 transition-transform duration-300",
                                                            value === item.id && "rotate-180"
                                                        )}
                                                    />
                                                </NavigationMenu.Trigger>
                                                <NavigationMenu.Content
                                                    className={clsx(
                                                        'absolute top-full left-1/2 -translate-x-1/2 mt-6',
                                                        item.width || 'w-auto',
                                                        'max-w-[90vw]',
                                                        'z-[1001] outline-none animate-in fade-in zoom-in-95 duration-200'
                                                    )}
                                                >
                                                    <div className="relative bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50 overflow-hidden">
                                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sabbpe-blue via-sabbpe-cyan to-sabbpe-teal opacity-50" />
                                                        {item.content}
                                                    </div>
                                                </NavigationMenu.Content>
                                            </NavigationMenu.Item>
                                        ))}

                                        <div className="w-px h-5 bg-white/10 mx-2" />

                                        {[
                                            { label: 'Gift Vouchers', href: 'https://giftvouchers.sabbpe.com' },
                                            { label: 'On Boarding', href: 'https://onboarding.sabbpe.com' },
                                            { label: 'Services', href: '/services' },
                                            { label: 'About', href: '/about' },
                                            { label: 'Contact', href: '/contact' },
                                        ].map((link) => (
                                            <NavigationMenu.Item key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                                >
                                                    {link.label}
                                                </Link>
                                            </NavigationMenu.Item>
                                        ))}
                                    </NavigationMenu.List>
                                </NavigationMenu.Root>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4">
                                {/* Mobile Menu Toggle */}
                                <button
                                    className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[999] bg-[#0a0a0a] pt-24 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4 py-6">
                            <Link href="https://giftvouchers.sabbpe.com" className="text-xl font-medium text-white hover:text-sabbpe-cyan transition-colors" onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer">Gift Vouchers</Link>
                            <Link href="https://onboarding.sabbpe.com" className="text-xl font-medium text-white hover:text-sabbpe-cyan transition-colors" onClick={() => setMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer">On Boarding</Link>
                            <Link href="/services" className="text-xl font-medium text-white hover:text-sabbpe-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                            <Link href="/about" className="text-xl font-medium text-white hover:text-sabbpe-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                            <Link href="/contact" className="text-xl font-medium text-white hover:text-sabbpe-cyan transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop overlay for Mega Menu */}
            <AnimatePresence>
                {value && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
                        onClick={() => setValue('')}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
