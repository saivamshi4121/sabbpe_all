"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./PWABenefits.module.css";

const benefits = [
  {
    title: "Storage Savings",
    metric: "90%",
    description: "Less space than native apps"
  },
  {
    title: "Load Speed",
    metric: "<1s",
    description: "Instant loading like native apps"
  },
  {
    title: "User Engagement",
    metric: "3x",
    description: "Higher interaction rates"
  },
  {
    title: "Install Rate",
    metric: "52%",
    description: "Users adding to home screen"
  }
];

export function PWABenefits() {
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
          <h2 className={styles.title}>The PWA Advantage</h2>
          <p className={styles.subtitle}>
            Numbers that prove the power of progressive web apps
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
