"use client";

import { motion } from "framer-motion";
import styles from "./CloudHero.module.css";

export function CloudHero() {
  return (
    <section className={styles.hero}>
      {/* Expanding cloud glow represents scalability and always-on infrastructure */}
      <motion.div
        className={styles.cloudGlow}
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.15, 1],
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
            {/* Cloud icon floats showing "always up" */}
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ☁️
            </motion.span>
            <span className={styles.badgeText}>Cloud Computing</span>
          </motion.div>

          {/* Title appears second */}
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Always On, Always Reliable
          </motion.h1>
          
          {/* Subtitle appears last */}
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Cloud computing is what keeps SabbPe running smoothly 24/7, no matter how many people are using it. Instead of relying on physical servers that can break down or run out of space, we use cloud technology that automatically adapts to handle thousands of payments at once. Think of it like electricity—you don't need to worry about where it comes from or how it works, you just know it'll be there when you flip the switch. That's how cloud computing powers your payments.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
