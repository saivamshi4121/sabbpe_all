'use client';

import { motion } from 'framer-motion';
import styles from './MetaversePaymentFlow.module.css';

export default function MetaversePaymentFlow() {
  const steps = [
    { icon: '🎮', label: 'Virtual Store', description: 'Browse Products', color: '#8b5cf6' },
    { icon: '👓', label: 'AR Try-On', description: 'See It On You', color: '#ec4899' },
    { icon: '👋', label: 'Gesture Pay', description: 'Wave to Buy', color: '#3b82f6' },
    { icon: '✅', label: 'Delivered', description: 'Virtual & Real', color: '#10b981' },
  ];

  return (
    <section className={styles.flow}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>How Metaverse Commerce Works</h2>
          <p>Shop, try, and buy without leaving virtual reality</p>
        </motion.div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2,
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                style={{ borderColor: step.color }}
                animate={{ 
                  rotateY: [0, 10, 0],
                  rotateX: [0, -5, 0],
                }}
                transition={{ 
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className={styles.icon}>{step.icon}</span>
                
                <motion.div
                  className={styles.particles}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.particle}
                      animate={{ 
                        y: [0, -40, 0],
                        x: [0, (i % 2 ? 1 : -1) * 20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2 + index * 0.4
                      }}
                      style={{ 
                        backgroundColor: step.color,
                        left: `${(i / 8) * 100}%`
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
              
              <div className={styles.stepContent}>
                <motion.div 
                  className={styles.stepNumber}
                  style={{ 
                    backgroundColor: step.color,
                    boxShadow: `0 4px 20px ${step.color}60`
                  }}
                  animate={{ 
                    rotateZ: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {index + 1}
                </motion.div>
                <h3>{step.label}</h3>
                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <motion.div 
                  className={styles.portal}
                  style={{ borderColor: step.color }}
                >
                  <motion.div
                    className={styles.portalRing}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    style={{ borderColor: step.color }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
