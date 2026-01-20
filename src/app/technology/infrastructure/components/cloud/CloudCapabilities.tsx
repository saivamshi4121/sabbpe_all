"use client";

import { motion } from "framer-motion";
import styles from "./CloudCapabilities.module.css";

const capabilities = [
  {
    icon: "🌍",
    title: "Global Reach",
    description: "Your payments work anywhere in the world instantly, thanks to cloud servers spread across multiple locations that keep everything fast."
  },
  {
    icon: "⚡",
    title: "Handles Peak Times",
    description: "During busy hours or festivals when everyone's making payments, the system automatically expands to handle the rush without slowing down."
  },
  {
    icon: "🔄",
    title: "Automatic Backups",
    description: "Your transaction history and account information are constantly saved across multiple secure locations, so nothing ever gets lost."
  },
  {
    icon: "🛡️",
    title: "Built-In Protection",
    description: "Cloud security works like multiple layers of guards, protecting your payment data from unauthorized access 24/7."
  },
  {
    icon: "📊",
    title: "Instant Updates",
    description: "New features and security improvements roll out automatically—you always get the latest version without downloading anything."
  },
  {
    icon: "💪",
    title: "Never Goes Down",
    description: "If one server has issues, others instantly take over. You never notice because the system is designed to never stop working."
  }
];

export function CloudCapabilities() {
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
          <h2 className={styles.title}>What Cloud Computing Does for You</h2>
          <p className={styles.subtitle}>
            The invisible infrastructure keeping your payments fast and reliable
          </p>
        </motion.div>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
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
                <div className={styles.icon}>{capability.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
