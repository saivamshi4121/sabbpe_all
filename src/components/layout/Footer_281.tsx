'use client';

import Link from 'next/link';
import {
    Mail,
    Phone,
    MapPin,
    Twitter,
    Linkedin,
    Facebook,
    Instagram,
    ArrowRight
} from 'lucide-react';

const footerLinks = {
    products: [
        { label: 'UPI Payments', href: '/products/upi' },
        { label: 'Payment Gateway', href: '/products/gateway' },
        { label: 'QR Solutions', href: '/products/qr' },
        { label: 'Payouts', href: '/products/payouts' },
    ],
    solutions: [
        { label: 'For Startups', href: '/solutions/startups' },
        { label: 'For Enterprises', href: '/solutions/enterprise' },
        { label: 'For E-commerce', href: '/solutions/ecommerce' },
        { label: 'For Retail', href: '/solutions/retail' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ],
    resources: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Support', href: '/support' },
        { label: 'FAQs', href: '/faq' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Refund Policy', href: '/refund' },
        { label: 'Security', href: '/security' },
    ],
};

const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/sabbpe', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/sabbpe', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/sabbpe', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/sabbpe', label: 'Instagram' },
];

export default function Footer() {
    return (
        <footer className="relative mt-32 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-3xl font-display font-bold bg-gradient-to-r from-sabbpe-blue via-sabbpe-cyan to-sabbpe-teal bg-clip-text text-transparent">
                                SabbPe
                            </span>
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
                            India's premier digital payments platform. Empowering businesses with seamless UPI, QR, Gateway, and Payout solutions.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:support@sabbpe.com"
                                className="flex items-center gap-2 text-sm text-white/60 hover:text-sabbpe-cyan transition-colors group"
                            >
                                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                support@sabbpe.com
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="flex items-center gap-2 text-sm text-white/60 hover:text-sabbpe-cyan transition-colors group"
                            >
                                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                +91 123 456 7890
                            </a>
                            <div className="flex items-start gap-2 text-sm text-white/60">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>Mumbai, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Products
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-sabbpe-cyan transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Solutions
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-sabbpe-cyan transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-sabbpe-cyan transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 hover:text-sabbpe-cyan transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mb-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="max-w-2xl">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Stay Updated
                        </h3>
                        <p className="text-sm text-white/60 mb-4">
                            Get the latest updates on products, features, and payment industry insights.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-sabbpe-cyan/50 focus:bg-white/[0.07] transition-all"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-sabbpe-cyan rounded-xl font-semibold text-black hover:bg-sabbpe-cyan/90 transition-all hover:scale-105 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <p className="text-sm text-white/60 text-center md:text-left">
                            © {new Date().getFullYear()} SabbPe. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-white/60 hover:text-sabbpe-cyan transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-sabbpe-cyan hover:bg-white/10 hover:border-sabbpe-cyan/30 transition-all hover:scale-110"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-white/60">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>PCI-DSS Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>ISO 27001 Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>RBI Approved</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>99.9% Uptime SLA</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
