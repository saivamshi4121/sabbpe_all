"use client";

import { motion } from "framer-motion";
import styles from "./PWAHero.module.css";

export function PWAHero() {
  return (
    <section className={styles.hero}>
      {/* Morphing glow represents hybrid web+app transformation */}
      <motion.div
        className={styles.appGlow}
        animate={{
          opacity: [0.2, 0.42, 0.2],
          scale: [1, 1.1, 1],
          borderRadius: ["50%", "40%", "50%"],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Phone icon pulses showing "app-like" experience */}
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
              📱
            </motion.span>
            <span className={styles.badgeText}>Progressive Web Apps</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            App Experience Without the App Store
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Progressive Web Apps (PWAs) give you the best of both worlds—the convenience of a website you can access from any browser, combined with the smooth, fast experience of a native mobile app. No downloads from app stores, no updates to manage, and no storage space eaten up on your phone. Just visit SabbPe through your browser and it feels like a dedicated app, working even when your internet connection drops. It's the future of mobile experiences without the traditional hassle of apps.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
