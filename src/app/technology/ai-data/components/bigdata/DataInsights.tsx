"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import styles from "./DataInsights.module.css";

const insights = [
  {
    title: "Handling Volume",
    metric: "10M+",
    description: "Payments analyzed every day"
  },
  {
    title: "Complete History",
    metric: "5 PB",
    description: "Transaction records stored"
  },
  {
    title: "Instant Answers",
    metric: "<2s",
    description: "Get insights from millions of records"
  },
  {
    title: "Always Current",
    metric: "Real-Time",
    description: "Information updates as it happens"
  }
];

export function DataInsights() {
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
            How we handle massive payment volumes reliably
          </p>
        </motion.div>

        <div className={styles.grid}>
          {insights.map((insight, index) => (
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
              {/* Metric with real-time pulse showing "live data" */}
              <motion.div 
                className={styles.metric}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.6,
                  ease: "easeInOut"
                }}
              >
                <AnimatedCounter value={insight.metric} />
              </motion.div>

              {/* Title reveals after metric */}
              <motion.h3 
                className={styles.cardTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.3 }}
              >
                {insight.title}
              </motion.h3>
              
              {/* Description follows */}
              <motion.p 
                className={styles.cardDescription}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.5 }}
              >
                {insight.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
