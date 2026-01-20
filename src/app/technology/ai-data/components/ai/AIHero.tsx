"use client";

import { motion } from "framer-motion";
import styles from "./AIHero.module.css";

export function AIHero() {
  return (
    <section className={styles.hero}>
      {/* Subtle background glow pulse - represents invisible AI activity */}
      <motion.div
        className={styles.backgroundGlow}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge fades in first with upward motion */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🤖
            </motion.span>
            <span className={styles.badgeText}>Artificial Intelligence</span>
          </motion.div>

          {/* Title fades in second with upward motion */}
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Your App's Intelligent Guardian
          </motion.h1>
          
          {/* Paragraph fades in last with upward motion */}
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Think of artificial intelligence as the invisible brain working behind every tap and swipe in the SabbPe app. While you see a clean, simple interface on your phone, AI is constantly analyzing, learning, and protecting your payments in real-time. It's like having a personal financial assistant that never sleeps, always watching over your money and making your payment experience smoother with every transaction.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
