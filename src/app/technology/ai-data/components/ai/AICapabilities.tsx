"use client";

import { motion } from "framer-motion";
import styles from "./AICapabilities.module.css";

const capabilities = [
  {
    icon: "🛡️",
    title: "Payment Protection",
    description: "AI watches every transaction like a security guard, instantly flagging anything unusual while you go about your day worry-free."
  },
  {
    icon: "📊",
    title: "Smart Spending Insights",
    description: "Your AI assistant learns your spending habits and provides helpful insights - like noticing you spend more on coffee than you realized."
  },
  {
    icon: "🎯",
    title: "Faster Payments",
    description: "Behind the scenes, AI picks the quickest route for your payments, ensuring your money reaches its destination fast every time."
  },
  {
    icon: "💬",
    title: "24/7 Chat Support",
    description: "Get instant answers to your payment questions anytime. Our AI chatbot understands what you're asking and helps immediately."
  },
  {
    icon: "🔍",
    title: "Pattern Learning",
    description: "The more you use SabbPe, the smarter it gets - learning your patterns to make your experience more personalized and secure."
  },
  {
    icon: "⚡",
    title: "Background Optimization",
    description: "AI works behind the scenes to make your app faster and smoother - you just notice everything works better."
  }
];

export function AICapabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>What AI Does for You</h2>
          <p className={styles.subtitle}>
            Simple ways AI makes your payment experience better
          </p>
        </motion.div>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.iconWrapper}>
                {/* Icon gently scales on card hover - shows this feature is "activating" */}
                <motion.div 
                  className={styles.icon}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  {capability.icon}
                </motion.div>
              </div>
              
              {/* Title appears slightly after card - creates reading flow */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                {capability.title}
              </motion.h3>
              
              {/* Description fades in last - natural reading order */}
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                {capability.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
