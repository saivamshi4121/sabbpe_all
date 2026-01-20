"use client";

import { motion } from "framer-motion";
import styles from "./DataProcessing.module.css";

const technologies = [
  {
    icon: "📝",
    title: "Capturing Every Detail",
    description: "Every payment creates a story—when it happened, where, how fast it processed. We capture all of this without missing anything, building a complete picture."
  },
  {
    icon: "🗂️",
    title: "Organizing the Information",
    description: "Thousands of payments flowing through every hour get organized automatically, making it easy to find patterns and answer questions later."
  },
  {
    icon: "🔄",
    title: "Continuous Collection",
    description: "Information flows in constantly as users make payments. The system handles this 24/7 without slowing down or losing track of anything."
  },
  {
    icon: "📈",
    title: "Spotting Trends",
    description: "See how payment patterns change over time—daily peaks, seasonal trends, growing categories—all tracked automatically from real usage."
  },
  {
    icon: "🎯",
    title: "Centralized View",
    description: "All your payment information in one place, ready to answer questions about your business without digging through separate systems."
  },
  {
    icon: "🔍",
    title: "Finding Answers Fast",
    description: "Need to know something specific? Get answers in seconds, even when searching through millions of transactions."
  }
];

export function DataProcessing() {
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
          <h2 className={styles.title}>Collecting the Story Behind Every Payment</h2>
          <p className={styles.subtitle}>
            How we handle massive volumes of payment information
          </p>
        </motion.div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
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
                {/* Icon with flowing particles showing data collection */}
                <motion.div
                  className={styles.dataParticle}
                  animate={{
                    y: [0, -30],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeOut"
                  }}
                />
                <motion.div 
                  className={styles.icon}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  {tech.icon}
                </motion.div>
              </div>

              {/* Text reveals sequentially */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                {tech.title}
              </motion.h3>
              
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                {tech.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
