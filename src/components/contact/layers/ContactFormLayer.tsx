'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactFormLayer() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        category: 'general'
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setLoading(false);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                fullName: '',
                email: '',
                company: '',
                phone: '',
                subject: '',
                message: '',
                category: 'general'
            });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center" id="contact-form">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-3xl"
            >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    Get in Touch
                </h2>
                <p className="text-lg text-sabbpe-text-secondary">
                    Fill out the form below and our team will get back to you as soon as possible.
                </p>
            </motion.div>

            {/* Form Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-2xl"
            >
                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 px-6 text-center"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5 }}
                        >
                            <CheckCircle className="w-16 h-16 text-sabbpe-cyan mb-4 mx-auto" />
                        </motion.div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-sabbpe-text-secondary mb-4">
                            We've received your message and will get back to you within 24 hours.
                        </p>
                        <p className="text-sm text-sabbpe-text-tertiary">
                            Check your email for confirmation.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-sabbpe-text-tertiary focus:outline-none focus:ring-2 focus:ring-sabbpe-cyan focus:bg-white/[0.08] transition-all"
                                    placeholder="John Doe"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-sabbpe-text-tertiary focus:outline-none focus:ring-2 focus:ring-sabbpe-cyan focus:bg-white/[0.08] transition-all"
                                    placeholder="john@company.com"
                                />
                            </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-sabbpe-text-tertiary focus:outline-none focus:ring-2 focus:ring-sabbpe-cyan focus:bg-white/[0.08] transition-all"
                                    placeholder="Your Company"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-sabbpe-text-tertiary focus:outline-none focus:ring-2 focus:ring-sabbpe-cyan focus:bg-white/[0.08] transition-all"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </motion.div>
                        </div>

                        {/* Category */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <label className="block text-sm font-medium text-white mb-2">Inquiry Type *</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-sabbpe-cyan focus:bg-white/[0.08] transition-all"
                            >
                                <option value="general" className="bg-sabbpe-navy-dark">General Inquiry</option>
                                <option value="sales" className="bg-sabbpe-navy-dark">Sales</option>
                                <option value="support" className="bg-sabbpe-navy-dark">Support</option>
                                <option value="partnership" className="bg-sabbpe-navy-dark">Partnership</option>
                                <option value="career" className="bg-sabbpe-navy-dark">Career</option>
                            </select>
                        </motion.div>

                        {/* Subject */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <label className="block text-sm font-medium text-white mb-2">Subject *</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-sabbpe-text-tertiary focus:outline-none focus:ring-2 focus:ring-sabbpe-cyan focus:bg-white/[0.08] transition-all"
                                placeholder="How can we help?"
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            <label className="block text-sm font-medium text-white mb-2">Message *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-sabbpe-text-tertiary focus:outline-none focus:ring-2 focus:ring-sabbpe-cyan focus:bg-white/[0.08] transition-all resize-none"
                                placeholder="Tell us more about your inquiry..."
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-sabbpe-blue to-sabbpe-cyan text-white font-semibold hover:shadow-lg hover:shadow-sabbpe-blue/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </motion.div>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
