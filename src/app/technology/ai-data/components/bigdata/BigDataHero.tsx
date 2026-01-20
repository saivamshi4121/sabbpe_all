"use client";

import { motion } from "framer-motion";
import styles from "./BigDataHero.module.css";

export function BigDataHero() {
  return (
    <section className={styles.hero}>
      {/* Flowing data stream glow representing continuous data collection */}
      <motion.div
        className={styles.dataStreamGlow}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge fades in with upward motion */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Chart icon pulses showing "data flowing in" */}
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              📊
            </motion.span>
            <span className={styles.badgeText}>Big Data & Analytics</span>
          </motion.div>

          {/* Title appears second */}
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Turning Millions of Transactions into Clear Answers
          </motion.h1>
          
          {/* Subtitle appears last */}
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Big Data & Analytics is like having a crystal-clear view of everything happening in your payments world. Every day, SabbPe processes thousands of payments from users and merchants—each one creating information about spending habits, payment success rates, popular times, and user behavior. Big Data means we can handle all this information without getting overwhelmed, and Analytics means we can turn those millions of data points into simple, useful answers that help you make better business decisions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
