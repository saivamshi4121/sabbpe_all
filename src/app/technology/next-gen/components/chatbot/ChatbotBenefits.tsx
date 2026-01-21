"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./ChatbotBenefits.module.css";

const benefits = [
  {
    title: "Always Available",
    metric: "24/7",
    description: "Support that never takes breaks"
  },
  {
    title: "Response Time",
    metric: "<2s",
    description: "Instant answers to your questions"
  },
  {
    title: "Resolution Rate",
    metric: "75%",
    description: "Issues solved without human help"
  },
  {
    title: "Customer Satisfaction",
    metric: "88%",
    description: "Users happy with chatbot assistance"
  }
];

export function ChatbotBenefits() {
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
          <h2 className={styles.title}>Support That Never Sleeps</h2>
          <p className={styles.subtitle}>
            Measurable impact of always-available assistance
          </p>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.metric}>
                <AnimatedCounter value={benefit.metric} />
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
