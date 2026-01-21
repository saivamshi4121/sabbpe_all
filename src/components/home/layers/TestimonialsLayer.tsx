'use client';

import { motion } from 'framer-motion';

const logos = [
    { name: "TechCrunch", src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/TechCrunch_logo.svg" },
    { name: "Forbes", src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Forbes_logo.svg" },
    { name: "Bloomberg", src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Bloomberg_News_logo.svg" },
    { name: "YCombinator", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" },
    { name: "Stripe", src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" }
];

const testimonials = [
    {
        quote: "SabbPe changed how we manage cashflow. Instant settlements are a game changer.",
        author: "Sarah J., CEO at FinTechCo"
    },
    {
        quote: "The developer experience is unmatched. We integrated in 2 hours.",
        author: "Dev P., CTO at ScaleUp"
    },
    {
        quote: "Finally, a payment stack that understands modern internet businesses.",
        author: "Alex M., Founder at NextGen"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TestimonialsLayer() {
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Trusted by the bold.
                </h2>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Powers 1000+ businesses globally
                </p>
            </motion.div>

            {/* Logo Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative flex w-full overflow-hidden mb-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            >
                <div className="flex animate-marquee gap-16 min-w-full items-center justify-around">
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div key={i} className="flex items-center justify-center shrink-0 h-8">
                            <img src={logo.src} alt={logo.name} className="h-full object-contain invert brightness-0 hover:invert-0 hover:brightness-200 transition-all" />
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        <p className="text-lg text-slate-300 mb-4 italic">"{t.quote}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sabbpe-cyan to-blue-500" />
                            <span className="text-sm font-bold text-white">{t.author}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
