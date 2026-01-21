"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function CustomAppDevelopment() {
  const phoneVariants = {
    hidden: { x: 300, rotateY: 90, opacity: 0 },
    visible: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      transition: { duration: 1.2, type: "spring" as const, stiffness: 50 },
    },
  };

  const cardSlideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.15, duration: 0.8 },
    }),
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>Custom App Development</h1>
        <p className={styles.description}>Build powerful applications tailored to your vision</p>
      </motion.div>

      <motion.div
        className={styles.phoneShowcase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className={styles.phone}
          variants={phoneVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={styles.phoneScreen}
          >
            📱
          </motion.div>
        </motion.div>
      </motion.div>

      <div className={styles.content}>
        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Platforms We Build For</h2>
          <div className={styles.platformsShowcase}>
            {[
              { name: "iOS", emoji: "🍎" },
              { name: "Android", emoji: "🤖" },
              { name: "React Native", emoji: "⚛️" },
              { name: "Web", emoji: "🌐" },
            ].map((platform, i) => (
              <motion.div
                key={i}
                className={styles.platformCard}
                custom={i}
                variants={cardSlideVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
              >
                <div>{platform.emoji}</div>
                <h3>{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
