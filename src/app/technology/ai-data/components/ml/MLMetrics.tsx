"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./MLMetrics.module.css";

const metrics = [
  {
    title: "Learning Accuracy",
    metric: "96%",
    description: "Correctly identifies your patterns"
  },
  {
    title: "Continuous Updates",
    metric: "2 hrs",
    description: "App learns from new transactions"
  },
  {
    title: "Instant Decisions",
    metric: "<10ms",
    description: "Real-time protection checks"
  },
  {
    title: "Data Points Tracked",
    metric: "500+",
    description: "Patterns analyzed per transaction"
  }
];

export function MLMetrics() {
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
            How Machine Learning delivers better results
          </p>
        </motion.div>

        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.12,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              {/* Metric with subtle pulse showing "live learning" */}
              <motion.div 
                className={styles.metric}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                <AnimatedCounter value={metric.metric} />
              </motion.div>

              {/* Title reveals after card */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.3 }}
              >
                {metric.title}
              </motion.h3>
              
              {/* Description follows */}
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.5 }}
              >
                {metric.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
