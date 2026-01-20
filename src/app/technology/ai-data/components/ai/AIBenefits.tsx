"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./AIBenefits.module.css";

const benefits = [
  {
    title: "Better Protection",
    metric: "98%",
    description: "Fraud detected and stopped automatically"
  },
  {
    title: "Lightning Fast",
    metric: "<50ms",
    description: "Instant payment approvals"
  },
  {
    title: "Save Money",
    metric: "60%",
    description: "Lower costs with smart automation"
  },
  {
    title: "Less Hassle",
    metric: "85%",
    description: "Fewer false payment blocks"
  }
];

export function AIBenefits() {
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
            Real numbers showing how AI makes payments better
          </p>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.12,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Metric pulses subtly - shows it's "live" data */}
              <motion.div 
                className={styles.metric}
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <AnimatedCounter value={benefit.metric} />
              </motion.div>
              
              {/* Title appears after metric - natural reading order */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.3 }}
              >
                {benefit.title}
              </motion.h3>
              
              {/* Description fades in last */}
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.5 }}
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
