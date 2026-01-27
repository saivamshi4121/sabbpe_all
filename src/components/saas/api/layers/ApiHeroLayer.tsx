'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Braces } from 'lucide-react';
import { useState, useEffect } from 'react';

const CodeBlock = () => {
    const [code, setCode] = useState('');
    const fullCode = `const sabbpe = require('sabbpe');

// Initialize
const client = new sabbpe.Client({
  apiKey: 'sk_live_...'
});

// Create Payment
const payment = await client.payment.create({
  amount: 5000,
  currency: 'INR',
  customer: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-xs md:text-sm text-blue-300 leading-relaxed whitespace-pre-wrap">
            {code}
            <span className="animate-pulse">_</span>
        </div>
    );
};

export default function ApiHeroLayer() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-sabbpe-navy-dark">
            {/* Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sabbpe-cyan/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sabbpe-blue/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-sabbpe-border backdrop-blur-md"
                        >
                            <Code2 className="w-4 h-4 text-sabbpe-cyan" />
                            <span className="text-sm font-medium text-slate-300">API Suite v2.0</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
                        >
                            Built for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Developers
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 max-w-xl"
                        >
                            Restful APIs, comprehensive documentation, and native SDKs to integrate payments in minutes, not weeks.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <button className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-sabbpe-blue hover:bg-blue-600 transition-all hover:scale-105">
                                View Documentation
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl bg-[#0d1117] border border-slate-800 p-6 shadow-2xl overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="ml-4 text-xs text-slate-500 font-mono">payment-init.js</div>
                            </div>
                            <CodeBlock />
                        </div>
                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -right-6 -top-6 p-4 bg-sabbpe-navy-light rounded-xl border border-white/10 shadow-xl"
                        >
                            <Terminal className="w-8 h-8 text-cyan-400" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -left-6 -bottom-6 p-4 bg-sabbpe-navy-light rounded-xl border border-white/10 shadow-xl"
                        >
                            <Braces className="w-8 h-8 text-blue-400" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
