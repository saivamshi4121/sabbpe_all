'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactMethods = [
    {
        id: 'email',
        title: 'Email Us',
        desc: 'Get in touch via email',
        icon: Mail,
        color: 'from-blue-400 to-cyan-500',
        emails: ['contact@sabbpe.com', 'support@sabbpe.com', 'careers@sabbpe.com']
    },
    {
        id: 'phone',
        title: 'Call Us',
        desc: 'Speak with our team',
        icon: Phone,
        color: 'from-pink-400 to-red-500',
        phone: '+91 8247017667',
        hours: 'Mon-Sat 9AM-8PM IST'
    },
    {
        id: 'hours',
        title: 'Business Hours',
        desc: 'When we\'re available',
        icon: MapPin,
        color: 'from-purple-400 to-pink-500',
        schedule: ['Monday - Friday: 9AM - 8PM', 'Saturday: 9AM - 6PM', 'Sunday: Closed']
    }
];

export default function ContactHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sabbpe-blue/20 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-sabbpe-cyan/10 rounded-full blur-[120px] -z-10 opacity-30" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-sabbpe-border backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer group w-fit mx-auto lg:mx-0"
                        >
                            <span className="w-2 h-2 rounded-full bg-sabbpe-cyan animate-pulse" />
                            <span className="text-sm text-sabbpe-text-secondary">Get in Touch</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                                Let's Talk About Your <span className="gradient-text">Payment Needs</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-sabbpe-text-secondary leading-relaxed max-w-xl"
                        >
                            Have questions about our products or services? Our dedicated team is here to help you find the perfect solution for your business.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pt-4"
                        >
                            <a
                                href="#contact-form"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan text-white font-semibold hover:shadow-lg hover:shadow-sabbpe-blue/50 transition-all duration-300 group"
                            >
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Contact Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        {contactMethods.map((method, i) => {
                            const Icon = method.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                    className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} opacity-20 flex-shrink-0`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                                            <p className="text-sm text-sabbpe-text-secondary mb-2">{method.desc}</p>
                                            {method.emails && (
                                                <div className="space-y-1">
                                                    {method.emails.map((email, idx) => (
                                                        <p key={idx} className="text-sm font-medium text-sabbpe-cyan">{email}</p>
                                                    ))}
                                                </div>
                                            )}
                                            {method.phone && (
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium text-sabbpe-cyan">{method.phone}</p>
                                                    <p className="text-xs text-sabbpe-text-secondary">{method.hours}</p>
                                                </div>
                                            )}
                                            {method.schedule && (
                                                <div className="space-y-1">
                                                    {method.schedule.map((time, idx) => (
                                                        <p key={idx} className="text-sm text-sabbpe-cyan">{time}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
