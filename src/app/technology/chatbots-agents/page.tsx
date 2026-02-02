'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MessageSquare, Bot, Users, Smile, Headphones, Code, ArrowRight } from 'lucide-react';

export default function ChatbotsAgentsPage() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 100]);
    const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);

    const conversation = [
        { text: "How can I check my refund status?", sender: "user", delay: 0 },
        { text: "Checking your latest transaction...", sender: "bot", delay: 1, isTyping: true },
        { text: "Your refund of $45.00 was processed yesterday.", sender: "bot", delay: 2.5 },
        { text: "Great, thanks!", sender: "user", delay: 3.5 },
    ];

    return (
        <div className="w-full min-h-screen bg-background text-foreground font-sans overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center px-4 pt-20"
                style={{ y: heroY, opacity: heroOpacity }}
            >
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 mb-6 backdrop-blur-sm">
                            <Bot className="w-4 h-4" />
                            <span className="text-sm font-semibold">24/7 Intelligent Support</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                            Chatbots & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">AI Agents</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Deliver instant, personalized customer experiences with AI-driven chatbots and autonomous agents that understand context and intent.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] transition-shadow">
                                    Automate Support
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] flex items-center justify-center"
                    >
                        {/* Chat Interface Visual */}
                        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden relative">
                            {/* Header */}
                            <div className="bg-slate-50 p-4 flex items-center gap-3 border-b border-slate-200">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Support Agent</div>
                                    <div className="text-xs text-green-500 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="p-6 space-y-4 h-[350px] overflow-hidden flex flex-col justify-end">
                                {conversation.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ delay: msg.delay, duration: 0.4 }}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-slate-100 text-slate-800 rounded-bl-none'
                                            }`}>
                                            {msg.isTyping ? (
                                                <div className="flex gap-1 h-5 items-center">
                                                    <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity }} />
                                                    <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                                                    <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                                                </div>
                                            ) : (
                                                msg.text
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Benefits */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Why Deploy AI Agents?</h2>
                    <p className="text-slate-600 text-lg">Enhance customer satisfaction while reducing operational costs.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5, borderColor: 'rgba(249,115,22,0.5)' }}
                    >
                        <Headphones className="w-12 h-12 text-orange-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">24/7 Availability</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Never miss a customer query. Provide instant support anytime, anywhere, in multiple languages.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5, borderColor: 'rgba(249,115,22,0.5)' }}
                    >
                        <Smile className="w-12 h-12 text-amber-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Sentiment Analysis</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Understand customer emotions and route complex issues to human agents automatically.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
                        whileHover={{ y: -5, borderColor: 'rgba(249,115,22,0.5)' }}
                    >
                        <Bot className="w-12 h-12 text-red-500 mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Omnichannel</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Deploy across WhatsApp, Web, Email, and Social Media with a single intelligent brain.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Integration Banner */}
            <section className="py-20 bg-orange-50 border-y border-slate-200">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-slate-900">Seamless CRM Integration</h2>
                        <p className="text-slate-600">Connects with Salesforce, HubSpot, Zendesk, and more.</p>
                    </div>
                    <div className="flex gap-4">
                        {/* Logos could go here, simplified with circles */}
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-500 shadow-sm">API</div>
                        ))}
                        <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                            <Bot className="text-white w-6 h-6" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">Ready to Automate?</h2>
                <Link href="/contact">
                    <button className="px-10 py-5 bg-orange-600 text-white hover:bg-orange-700 rounded-xl font-bold text-lg transition-colors">
                        Build Your Bot
                    </button>
                </Link>
            </section>
        </div>
    );
}
