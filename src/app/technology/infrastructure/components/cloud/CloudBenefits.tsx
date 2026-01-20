"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./CloudBenefits.module.css";

const benefits = [
  {
    title: "Uptime Guarantee",
    metric: "99.99%",
    description: "System availability year-round"
  },
  {
    title: "Response Speed",
    metric: "<100ms",
    description: "Global server response time"
  },
  {
    title: "Cost Reduction",
    metric: "70%",
    description: "Lower infrastructure costs"
  },
  {
    title: "Scalability",
    metric: "10x",
    description: "Instant capacity expansion"
  }
];

export function CloudBenefits() {
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
          <h2 className={styles.title}>The Numbers Tell the Story</h2>
          <p className={styles.subtitle}>
            Measurable reliability and performance
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
