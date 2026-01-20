"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./MLLearningFlow.module.css";

const learningStages = [
  {
    icon: "📝",
    title: "Day 1: Starting Fresh",
    description: "You make your first payment. The app records basic details but doesn't know your patterns yet."
  },
  {
    icon: "📚",
    title: "Week 1: Building Knowledge",
    description: "After dozens of transactions, patterns emerge. The app learns your usual merchants and spending amounts."
  },
  {
    icon: "🎯",
    title: "Month 1: Getting Smarter",
    description: "Hundreds of payments later, the app predicts your needs, spots anomalies, and optimizes payment routes."
  },
  {
    icon: "🏆",
    title: "Ongoing: Continuously Learning",
    description: "The app never stops learning. Every new transaction makes it better at serving and protecting you."
  }
];

export function MLLearningFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>The Learning Journey</h2>
          <p className={styles.subtitle}>
            See how the app gets smarter with each transaction
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {/* Connecting line that grows */}
          <motion.div
            className={styles.timelineLine}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />

          {learningStages.map((stage, index) => (
            <div key={index} className={styles.stageWrapper}>
              {/* Stage card */}
              <motion.div
                className={styles.stageCard}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3 + 0.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {/* Icon with growing circle */}
                <motion.div
                  className={styles.iconContainer}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.3 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {/* Expanding rings showing knowledge growth */}
                  <motion.div
                    className={styles.knowledgeRing}
                    animate={
                      isInView
                        ? {
                            scale: [1, 1.4],
                            opacity: [0.5, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3 + 0.8,
                      ease: "easeOut"
                    }}
                  />
                  
                  <motion.span
                    className={styles.icon}
                    animate={
                      isInView
                        ? {
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3 + 1,
                      ease: "easeInOut"
                    }}
                  >
                    {stage.icon}
                  </motion.span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className={styles.stageTitle}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.5 }}
                >
                  {stage.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className={styles.stageDescription}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.6 }}
                >
                  {stage.description}
                </motion.p>

                {/* Progress indicator */}
                <motion.div
                  className={styles.progressBar}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{
                    duration: 1,
                    delay: index * 0.3 + 0.7,
                    ease: "easeOut"
                  }}
                />
              </motion.div>

              {/* Animated arrow between stages */}
              {index < learningStages.length - 1 && (
                <motion.div
                  className={styles.arrowWrapper}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.8 }}
                >
                  <motion.div
                    className={styles.arrow}
                    animate={
                      isInView
                        ? {
                            y: [0, 5, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.3 + 1,
                      ease: "easeInOut"
                    }}
                  >
                    ↓
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Summary indicator */}
        <motion.div
          className={styles.summary}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className={styles.summaryIcon}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🚀
          </motion.div>
          <span className={styles.summaryText}>Every transaction makes the system smarter and more personalized</span>
        </motion.div>
      </div>
    </section>
  );
}
