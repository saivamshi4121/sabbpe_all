"use client";

import { motion } from "framer-motion";
import styles from "./PWAFeatures.module.css";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Pages load instantly with smooth transitions. Responds immediately like a native phone app."
  },
  {
    icon: "📴",
    title: "Works Offline",
    description: "View recent transactions without internet. Saves important information for offline access anytime."
  },
  {
    icon: "🏠",
    title: "Add to Home Screen",
    description: "Save to phone like regular apps. Looks identical but uses almost no storage space."
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description: "Get instant alerts about payments and transactions. Just like notifications from traditional apps."
  },
  {
    icon: "🔄",
    title: "Auto-Updates",
    description: "Always get latest version automatically. No manual downloads or update messages blocking access."
  },
  {
    icon: "💾",
    title: "Minimal Storage",
    description: "Uses fraction of traditional app space. No deleting photos for updates—everything stays cloud-based."
  }
];

export function PWAFeatures() {
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
          <h2 className={styles.title}>Why PWAs Feel Like Magic</h2>
          <p className={styles.subtitle}>
            App-like experience without traditional app limitations
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{feature.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
