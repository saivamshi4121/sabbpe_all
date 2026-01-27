'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function UPIAssistedCTALayer() {
    return (
        <section className="w-full h-full relative overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sabbpe-navy-dark to-sabbpe-navy-light -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sabbpe-blue/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 py-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        Ready to Empower Your Business?
                    </h2>
                    <p className="text-xl text-sabbpe-text-secondary mb-12 leading-relaxed">
                        Join thousands of merchants who trust SabbPe for their payments and financial growth.
                        Get setup in less than 24 hours.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-sabbpe-cyan to-blue-500 text-white font-bold text-lg shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
                        >
                            Contact Sales
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="tel:+918247017667"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
                        >
                            <Phone className="w-5 h-5" />
                            +91 82470 17667
                        </motion.a>
                    </div>

                    <p className="mt-8 text-sm text-sabbpe-text-tertiary">
                        No setup fees • Cancel anytime • 24/7 Support
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
