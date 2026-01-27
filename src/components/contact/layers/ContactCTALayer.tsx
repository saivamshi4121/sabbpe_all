'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "Quick Onboarding",
        desc: "Get started in minutes with our streamlined setup process"
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        desc: "Bank-grade security and compliance for your peace of mind"
    },
    {
        icon: Rocket,
        title: "24/7 Support",
        desc: "Our dedicated team is always ready to help"
    }
];

export default function ContactCTALayer() {
    return (
        <section className="w-full h-full relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sabbpe-navy-dark to-sabbpe-navy-light -z-10" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sabbpe-blue/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sabbpe-cyan/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                                Ready to Transform Your Payments?
                            </h2>
                            <p className="text-lg text-sabbpe-text-secondary">
                                Join hundreds of businesses already using SabbPe for seamless payment processing.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            {features.map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-sabbpe-blue/20 flex-shrink-0">
                                            <Icon className="w-5 h-5 text-sabbpe-cyan" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                                            <p className="text-sm text-sabbpe-text-secondary">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right: CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
                        <div className="relative bg-sabbpe-navy-light rounded-2xl p-8 md:p-12 border border-sabbpe-blue/20">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                                        Schedule a Demo
                                    </h3>
                                    <p className="text-sabbpe-text-secondary">
                                        See how SabbPe can revolutionize your payment infrastructure.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div>
                                        <p className="text-sm text-sabbpe-text-tertiary mb-2">Expected Response Time</p>
                                        <p className="text-lg font-semibold text-white">Within 24 hours</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-sabbpe-text-tertiary mb-2">Call Us Directly</p>
                                        <p className="text-lg font-semibold text-sabbpe-cyan">+91 8247017667</p>
                                    </div>
                                </div>

                                <div className="pt-6 space-y-3">
                                    <a
                                        href="#contact-form"
                                        className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan text-white font-semibold hover:shadow-lg hover:shadow-sabbpe-blue/50 transition-all duration-300 group text-center"
                                    >
                                        Schedule Now
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <p className="text-xs text-sabbpe-text-tertiary text-center">
                                        No credit card required. Takes 2 minutes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
