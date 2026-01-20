"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./DataFlowVisualization.module.css";

const flowSteps = [
  {
    icon: "💳",
    title: "Raw Data Comes In",
    description: "Every payment, click, and transaction creates data points flowing into the system"
  },
  {
    icon: "🗂️",
    title: "System Organizes",
    description: "Millions of records get sorted, cleaned, and stored automatically"
  },
  {
    icon: "🔬",
    title: "Analytics Finds Patterns",
    description: "Algorithms scan through data discovering trends, anomalies, and connections"
  },
  {
    icon: "💡",
    title: "You Get Clear Answers",
    description: "Complex data becomes simple dashboards, alerts, and actionable insights"
  }
];

export function DataFlowVisualization() {
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
          <h2 className={styles.title}>From Raw Data to Clear Insights</h2>
          <p className={styles.subtitle}>
            See how millions of transactions become actionable business intelligence
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
                {/* Icon with data particles flowing */}
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
                  {/* Flowing data particles around icon */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.dataPoint}
                      animate={
                        isInView
                          ? {
                              y: [0, -40],
                              opacity: [0, 1, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4 + 0.5 + i * 0.3,
                        ease: "easeOut"
                      }}
                      style={{
                        left: `${20 + i * 30}%`,
                      }}
                    />
                  ))}
                  
                  <motion.span
                    className={styles.icon}
                    animate={
                      isInView
                        ? {
                            scale: [1, 1.15, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4 + 0.6,
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
                  
                  {/* Flowing data packets along the arrow path */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.dataPacket}
                      animate={
                        isInView
                          ? {
                              x: [0, 60],
                              opacity: [0, 1, 1, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: index * 0.4 + 1.2 + i * 0.6,
                        ease: "linear"
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Data volume indicator */}
        <motion.div
          className={styles.volumeIndicator}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className={styles.volumeIcon}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            📊
          </motion.div>
          <div className={styles.volumeText}>
            <span className={styles.volumeNumber}>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10M+
              </motion.span>
            </span>
            <span className={styles.volumeLabel}>transactions processed every day</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
