"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./AIProcessFlow.module.css";

const flowSteps = [
  {
    icon: "💳",
    title: "You Make a Payment",
    description: "Tap to pay at a store or send money to a friend"
  },
  {
    icon: "🔍",
    title: "AI Instantly Scans",
    description: "Checks amount, location, and your spending pattern"
  },
  {
    icon: "🧠",
    title: "AI Analyzes",
    description: "Compares with millions of similar transactions"
  },
  {
    icon: "✅",
    title: "Decision Made",
    description: "Approved in milliseconds or flagged if suspicious"
  }
];

export function AIProcessFlow() {
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
          <h2 className={styles.title}>How AI Protects Every Payment</h2>
          <p className={styles.subtitle}>
            See the invisible work happening in milliseconds
          </p>
        </motion.div>

        <div className={styles.flowContainer}>
          {flowSteps.map((step, index) => (
            <div key={index} className={styles.stepWrapper}>
              {/* Step Card */}
              <motion.div
                className={styles.stepCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {/* Icon with pulse effect */}
                <motion.div
                  className={styles.iconCircle}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.4 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
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
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4 + 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {step.icon}
                  </motion.span>
                </motion.div>

                {/* Step number */}
                <motion.div
                  className={styles.stepNumber}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.4 + 0.3 }}
                >
                  Step {index + 1}
                </motion.div>

                {/* Title */}
                <motion.h3
                  className={styles.stepTitle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.4 + 0.4 }}
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className={styles.stepDescription}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.4 + 0.5 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>

              {/* Animated Arrow (not shown after last step) */}
              {index < flowSteps.length - 1 && (
                <motion.div
                  className={styles.arrowContainer}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.4 + 0.6
                  }}
                >
                  {/* Animated arrow that moves right */}
                  <motion.div
                    className={styles.arrow}
                    animate={
                      isInView
                        ? {
                            x: [0, 10, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.4 + 1,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.div>
                  
                  {/* Flowing dots along the arrow path */}
                  <motion.div
                    className={styles.flowDot}
                    animate={
                      isInView
                        ? {
                            x: [0, 60],
                            opacity: [0, 1, 1, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.4 + 1.2,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Time indicator */}
        <motion.div
          className={styles.timeIndicator}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className={styles.timeIcon}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ⚡
          </motion.div>
          <span className={styles.timeText}>All this happens in under 50 milliseconds</span>
        </motion.div>
      </div>
    </section>
  );
}
