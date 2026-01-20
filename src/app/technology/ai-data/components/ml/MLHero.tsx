"use client";

import { motion } from "framer-motion";
import styles from "./MLHero.module.css";

export function MLHero() {
  return (
    <section className={styles.hero}>
      {/* Pulsing glow represents continuous learning process */}
      <motion.div
        className={styles.learningGlow}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
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
            {/* Brain pulses showing "thinking" and "learning" */}
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🧠
            </motion.span>
            <span className={styles.badgeText}>Machine Learning</span>
          </motion.div>

          {/* Title appears second */}
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Learning from Every Transaction
          </motion.h1>
          
          {/* Subtitle appears last */}
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Machine Learning is like the difference between following a recipe exactly every time versus getting better at cooking through practice. While AI is the brain that powers your app's smart features, Machine Learning is what makes that brain smarter with every payment you make. It's the technology that helps SabbPe remember patterns, spot trends, and continuously improve how it serves you—without you ever having to teach it anything manually.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
