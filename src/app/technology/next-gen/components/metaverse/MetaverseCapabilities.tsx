"use client";

import { motion } from "framer-motion";
import styles from "./MetaverseCapabilities.module.css";

const capabilities = [
  {
    icon: "🛍️",
    title: "Virtual Shopping",
    description: "Browse virtual stores and examine 3D products. Complete purchases with gestures in immersive environments."
  },
  {
    icon: "👔",
    title: "AR Try-Before-Buy",
    description: "See how clothes or makeup look using your phone. Buy instantly without leaving AR experience."
  },
  {
    icon: "🏠",
    title: "Virtual Real Estate",
    description: "Purchase land and properties in metaverse platforms. Own digital assets paid through SabbPe instantly."
  },
  {
    icon: "🎮",
    title: "In-Game Purchases",
    description: "Buy items and upgrades without removing headset. Payments happen seamlessly while staying immersed."
  },
  {
    icon: "🎨",
    title: "Digital Collectibles",
    description: "Purchase unique virtual art and collectibles. Display, trade, or use across compatible virtual platforms."
  },
  {
    icon: "🤝",
    title: "Virtual Events",
    description: "Attend concerts and conferences virtually. Buy tickets and merchandise through intuitive metaverse payments."
  }
];

export function MetaverseCapabilities() {
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
          <h2 className={styles.title}>Immersive Payment Experiences</h2>
          <p className={styles.subtitle}>
            How payments work in virtual and augmented reality
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
