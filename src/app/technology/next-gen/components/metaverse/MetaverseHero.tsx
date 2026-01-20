"use client";

import { motion } from "framer-motion";
import styles from "./MetaverseHero.module.css";

export function MetaverseHero() {
  return (
    <section className={styles.hero}>
      {/* Immersive glow represents blending digital and physical worlds */}
      <motion.div
        className={styles.immersiveGlow}
        animate={{
          opacity: [0.15, 0.38, 0.15],
          scale: [1, 1.18, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
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
            {/* VR goggles icon shows "immersive experience" */}
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                scale: [1, 1.12, 1],
                rotateY: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🥽
            </motion.span>
            <span className={styles.badgeText}>Metaverse & AR/VR</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Payments in Virtual Worlds
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            The Metaverse, Augmented Reality (AR), and Virtual Reality (VR) are creating new digital spaces where people shop, socialize, and do business. SabbPe brings payments into these immersive experiences—imagine trying on virtual clothes in AR and buying them with a gesture, or purchasing virtual land in the metaverse with the same ease as online shopping. These technologies blend the digital and physical worlds, and payments need to work seamlessly across both. No typing card numbers in virtual reality—just natural interactions that feel like the future.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
