"use client";

import { motion } from "framer-motion";
import styles from "./BlockchainFeatures.module.css";

const features = [
  {
    icon: "🔒",
    title: "Permanent Records",
    description: "Once a payment is recorded on the blockchain, it can't be deleted or changed. Your transaction history is permanently preserved and always accessible."
  },
  {
    icon: "👁️",
    title: "Complete Transparency",
    description: "You can see exactly when and how money moved, creating a clear audit trail. No hidden changes or mysterious updates—everything is visible and verifiable."
  },
  {
    icon: "⛓️",
    title: "Linked Protection",
    description: "Each transaction links to the previous one in a chain. If someone tries to tamper with one, it breaks the entire chain and gets caught immediately."
  },
  {
    icon: "✅",
    title: "Multiple Verifications",
    description: "Transactions get confirmed by multiple independent sources, not just one company. This distributed verification makes fraud nearly impossible."
  },
  {
    icon: "🚀",
    title: "Faster Settlements",
    description: "Without middlemen verifying every step, money moves faster. Blockchain handles verification automatically, cutting settlement times from days to minutes."
  },
  {
    icon: "🌐",
    title: "Cross-Border Simplicity",
    description: "International payments become as simple as local ones. Blockchain works the same everywhere, removing traditional banking barriers and delays."
  }
];

export function BlockchainFeatures() {
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
          <h2 className={styles.title}>Why Blockchain Matters</h2>
          <p className={styles.subtitle}>
            The features that make blockchain trustworthy for payments
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
