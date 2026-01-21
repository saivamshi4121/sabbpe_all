'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'Do you support API integration?',
        answer: 'Yes, we provide comprehensive REST APIs with detailed documentation, SDKs for popular languages, and dedicated developer support to help you integrate seamlessly.',
    },
    {
        question: 'How fast can we go live?',
        answer: 'Most businesses can go live within 24-48 hours after completing KYC verification. Our onboarding team will guide you through the entire process.',
    },
    {
        question: 'Do you support recurring payments?',
        answer: 'Absolutely. We support automated recurring payments, subscription management, and mandate-based collections for both UPI and cards.',
    },
    {
        question: 'How does settlement work?',
        answer: 'We offer flexible settlement cycles including T+0 (same day) and T+1 (next day) options. All settlements are automatically reconciled and deposited to your registered bank account.',
    },
    {
        question: 'Is this enterprise ready?',
        answer: 'Yes, our infrastructure is built for enterprise scale with 99.99% uptime, PCI-DSS compliance, dedicated account management, and custom SLAs for large businesses.',
    },
];

export default function ServicesFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-96 h-96 bg-sabbpe-cyan/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 lg:mb-20 space-y-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about our services
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20">
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 lg:px-8 py-6 flex items-center justify-between gap-4 text-left transition-all duration-300"
                                >
                                    <span className="text-lg lg:text-xl font-semibold text-white">
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-sabbpe-cyan/10 border border-sabbpe-cyan/20 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-sabbpe-cyan/20 border-sabbpe-cyan/30' : ''
                                        }`}>
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5 text-sabbpe-cyan" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-sabbpe-cyan" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 lg:px-8 pb-6 pt-2">
                                                <div className="pt-4 border-t border-white/10">
                                                    <p className="text-base text-muted-foreground leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Help */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground">
                        Still have questions?{' '}
                        <button className="text-sabbpe-cyan font-semibold hover:underline transition-all">
                            Contact our support team
                        </button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
