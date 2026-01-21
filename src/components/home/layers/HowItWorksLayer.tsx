'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const steps = [
    { title: 'Get API Keys', desc: 'Sign up and get your test keys instantly from the dashboard.' },
    { title: 'Integrate SDK', desc: 'Add our React/React Native SDK with just 5 lines of code.' },
    { title: 'Go Live', desc: 'Switch to live keys and start accepting real payments.' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function HowItWorksLayer() {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Left: Code Block */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
            >
                <div className="absolute -inset-4 bg-sabbpe-cyan/10 rounded-3xl blur-2xl group-hover:bg-sabbpe-cyan/20 transition-all duration-500" />
                <div className="relative rounded-2xl bg-[#0B1221] border border-white/10 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="ml-2 px-2 py-0.5 rounded bg-black/30 text-[10px] text-slate-400 font-mono">
                            install-sdk.sh
                        </div>
                    </div>
                    <div className="p-6 font-mono text-xs md:text-sm leading-relaxed">
                        <div className="text-slate-500 mb-2"># Install the SDK</div>
                        <div className="text-white mb-6 flex gap-2">
                            <span className="text-pink-400">npm</span> install @sabbpe/react-sdk
                        </div>
                        <div className="text-slate-500 mb-2"># Initialize Payment</div>
                        <div className="text-blue-300">
                            <span className="text-purple-400">const</span> <span className="text-yellow-200">payment</span> = <span className="text-purple-400">await</span> sabbpe.<span className="text-blue-400">createOrder</span>({'{'} <br />
                            &nbsp;&nbsp;amount: <span className="text-orange-400">5000</span>, <br />
                            &nbsp;&nbsp;currency: <span className="text-green-400">'INR'</span> <br />
                            {'}'});
                        </div>
                        {/* Cursor Pulse */}
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-2 h-4 bg-sabbpe-cyan ml-1 align-middle"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-8"
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Integrate in minutes.
                    </h2>
                    <p className="text-slate-400 text-lg">
                        We obsess over developer experience so you don't have to.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <motion.div key={i} variants={itemVariants} className="flex gap-4 group cursor-pointer">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sabbpe-cyan/10 flex items-center justify-center border border-sabbpe-cyan/20 group-hover:bg-sabbpe-cyan group-hover:text-black transition-all">
                                <span className="font-bold text-sm">{i + 1}</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1 group-hover:text-sabbpe-cyan transition-colors">{step.title}</h3>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
