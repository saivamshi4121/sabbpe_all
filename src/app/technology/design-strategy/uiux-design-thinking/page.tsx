"use client";

import { motion } from "framer-motion";
import styles from "./UIUXDesignThinking.module.scss";

export default function UIUXDesignPage() {
  const designSteps = [
    {
      number: "01",
      title: "Setting design goals",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Conducting user research",
      icon: "👥",
    },
    {
      number: "03",
      title: "Creating a wireframe",
      icon: "📐",
    },
    {
      number: "04",
      title: "Developing the visual design",
      icon: "🎨",
    },
    {
      number: "05",
      title: "Prototype",
      icon: "🔨",
    },
    {
      number: "06",
      title: "Handing over to developers",
      icon: "🚀",
    },
    {
      number: "07",
      title: "Gathering user feedback",
      icon: "💬",
    },
  ];

  const activeStep = 3; // For demonstration

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>UI/UX Design Thinking</h1>
        <p className={styles.subtitle}>
          User-centered design that creates engaging digital experiences
        </p>
      </motion.div>

      {/* UI DESIGN PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2>UI Design Process</h2>
          <p>Our 7-step methodology ensures exceptional user experiences</p>
        </div>

        {/* TIMELINE */}
        <div className={styles.timelineContainer}>
          {/* Progress Line Background */}
          <div className={styles.progressLineBackground} />

          {/* Active Progress Line */}
          <motion.div
            className={styles.progressLineFill}
            initial={{ width: "0%" }}
            animate={{ width: `${((activeStep - 1) / (designSteps.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Timeline Steps */}
          <div className={styles.timelineSteps}>
            {designSteps.map((step, idx) => {
              const stepNumber = idx + 1;
              const isActive = stepNumber === activeStep;
              const isCompleted = stepNumber < activeStep;

              return (
                <motion.div
                  key={idx}
                  className={`${styles.timelineStep} ${isActive ? styles.active : ""} ${
                    isCompleted ? styles.completed : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className={styles.stepCircle}>
                    {isCompleted ? (
                      <span className={styles.checkIcon}>✓</span>
                    ) : (
                      <span className={styles.stepLabel}>{step.number}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PROCESS CARDS */}
        <div className={styles.cardsContainer}>
          {designSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className={styles.processCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              {/* Icon */}
              <div className={styles.cardIcon}>{step.icon}</div>

              {/* Step Number */}
              <div className={styles.cardStepNumber}>{step.number}</div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL CONTENT SECTION */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Design Services</h2>
          <p>Comprehensive solutions for your digital product success</p>
        </div>

        <div className={styles.servicesGrid}>
          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0 }}
          >
            <div className={styles.serviceIcon}>🎨</div>
            <h3>Visual Design</h3>
            <p>Beautiful interfaces aligned with brand identity</p>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.serviceIcon}>👥</div>
            <h3>User Research</h3>
            <p>Deep insights through interviews and testing</p>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.serviceIcon}>📱</div>
            <h3>Responsive Design</h3>
            <p>Seamless experience across all devices</p>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.serviceIcon}>✨</div>
            <h3>Interaction Design</h3>
            <p>Smooth animations and micro-interactions</p>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.serviceIcon}>♿</div>
            <h3>Accessibility</h3>
            <p>WCAG compliant & inclusive design</p>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.serviceIcon}>🎯</div>
            <h3>Usability Testing</h3>
            <p>Validate designs with real users</p>
          </motion.div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className={styles.resultsSection}>
        <div className={styles.sectionHeader}>
          <h2>Results We Deliver</h2>
          <p>Measurable impact on your business</p>
        </div>

        <div className={styles.resultsList}>
          <motion.div
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0 }}
          >
            <span className={styles.resultIcon}>📊</span>
            <span>Increased user engagement & conversion</span>
          </motion.div>

          <motion.div
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className={styles.resultIcon}>⭐</span>
            <span>Higher user satisfaction scores</span>
          </motion.div>

          <motion.div
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.resultIcon}>🚀</span>
            <span>Faster time to market</span>
          </motion.div>

          <motion.div
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={styles.resultIcon}>💼</span>
            <span>Professional brand representation</span>
          </motion.div>

          <motion.div
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className={styles.resultIcon}>🎯</span>
            <span>Better alignment with business goals</span>
          </motion.div>

          <motion.div
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className={styles.resultIcon}>♿</span>
            <span>Accessibility compliance achieved</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
