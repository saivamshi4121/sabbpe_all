"use client";

import { motion } from "framer-motion";
import styles from "./BlockchainHero.module.css";

export function BlockchainHero() {
  return (
    <section className={styles.hero}>
      {/* Locked chain glow represents immutability and trust */}
      <motion.div
        className={styles.chainGlow}
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
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
            {/* Chain link pulses showing "locked connection" */}
            <motion.span 
              className={styles.badgeIcon}
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🔗
            </motion.span>
            <span className={styles.badgeText}>Blockchain Development</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Records That Can't Be Changed
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Blockchain is like a digital ledger that everyone can see but no one can alter. Every transaction in SabbPe gets recorded in a chain of information blocks that are permanently locked and verified by multiple sources. Think of it as writing in permanent ink across many notebooks at once—if someone tries to change one copy, everyone else's copy proves what really happened. This creates trust without needing a middleman to verify everything.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
