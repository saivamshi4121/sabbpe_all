'use client';

import { motion } from 'framer-motion';
import styles from './PWAInstallFlow.module.css';

export default function PWAInstallFlow() {
  const steps = [
    { icon: '🌐', label: 'Visit Website', description: 'Open in Browser', color: '#3b82f6' },
    { icon: '📲', label: 'Add to Home', description: 'One Tap Install', color: '#8b5cf6' },
    { icon: '📱', label: 'Works Offline', description: 'No Internet? No Problem', color: '#ec4899' },
    { icon: '🔔', label: 'Get Notified', description: 'Stay Updated', color: '#10b981' },
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
          <h2>How PWAs Transform Websites</h2>
          <p>From browser to app-like experience instantly</p>
        </motion.div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                style={{ borderColor: step.color }}
                animate={{ 
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                }}
                transition={{ 
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className={styles.icon}>{step.icon}</span>
                
                <motion.div
                  className={styles.glow}
                  animate={{ 
                    scale: [1, 1.5],
                    opacity: [0.4, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                  style={{ background: `radial-gradient(circle, ${step.color}60 0%, transparent 70%)` }}
                />
              </motion.div>
              
              <div className={styles.stepContent}>
                <motion.div 
                  className={styles.stepNumber}
                  style={{ backgroundColor: step.color }}
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 2,
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
                <motion.div className={styles.progress}>
                  <motion.div
                    className={styles.progressBar}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1,
                      delay: index * 0.15 + 0.3
                    }}
                    style={{ backgroundColor: step.color }}
                  />
                  <motion.div
                    className={styles.progressDot}
                    animate={{ 
                      x: [0, 70, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5 + 1
                    }}
                    style={{ backgroundColor: step.color }}
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
