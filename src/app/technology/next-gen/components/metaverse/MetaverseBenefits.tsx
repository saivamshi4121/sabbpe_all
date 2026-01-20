"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./MetaverseBenefits.module.css";

const benefits = [
  {
    title: "Market Growth",
    metric: "30%"
  },
  {
    title: "Conversion Rate",
    metric: "94%"
  },
  {
    title: "Return Reduction",
    metric: "40%"
  }
];

export function MetaverseBenefits() {
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
          <h2 className={styles.title}>The Future of Commerce</h2>
          <p className={styles.subtitle}>
            Measurable impact of immersive shopping experiences
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
