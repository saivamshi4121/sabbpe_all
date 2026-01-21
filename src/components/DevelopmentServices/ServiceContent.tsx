"use client";

import { motion } from "framer-motion";
import styles from "./ServiceContent.module.scss";

interface ServiceContentProps {
  isActive: boolean;
}

export function CustomAppDevelopmentContent({ isActive }: ServiceContentProps) {
  const technologies = [
    { name: "Flutter", icon: "📱", category: "Mobile" },
    { name: "React Native", icon: "⚛️", category: "Mobile" },
    { name: "Swift", icon: "🍎", category: "iOS" },
    { name: "Kotlin", icon: "🔷", category: "Android" },
  ];

  const features = [
    { icon: "🎨", label: "Beautiful UI/UX", desc: "Premium interfaces" },
    { icon: "⚡", label: "High Performance", desc: "Optimized speed" },
    { icon: "🔒", label: "Secure", desc: "Enterprise security" },
    { icon: "📱", label: "Cross-Platform", desc: "iOS & Android" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.contentSection}
    >
      {/* Technologies Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.gridSection}
      >
        <h3 className={styles.sectionTitle}>Core Technologies</h3>
        <div className={styles.techGrid}>
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={styles.techCard}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={styles.techIcon}>{tech.icon}</div>
              <div className={styles.techName}>{tech.name}</div>
              <div className={styles.techCategory}>{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.gridSection}
      >
        <h3 className={styles.sectionTitle}>Key Features</h3>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={styles.featureCard}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <div className={styles.featureLabel}>{feature.label}</div>
              <div className={styles.featureDesc}>{feature.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className={styles.ctaSection}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(15, 107, 255, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className={styles.ctaButton}
        >
          Start Your App Project
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export function DigitalTransformationContent({ isActive }: ServiceContentProps) {
  const processes = [
    { num: "1", title: "Assessment", desc: "Analyze current systems" },
    { num: "2", title: "Strategy", desc: "Plan digital roadmap" },
    { num: "3", title: "Implementation", desc: "Deploy solutions" },
    { num: "4", title: "Optimization", desc: "Continuous improvement" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.contentSection}
    >
      {/* Process Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.timelineSection}
      >
        <h3 className={styles.sectionTitle}>Transformation Process</h3>
        <div className={styles.timeline}>
          {processes.map((process, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={styles.timelineItem}
              whileHover={{ x: 10 }}
            >
              <div className={styles.timelineNumber}>{process.num}</div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineTitle}>{process.title}</div>
                <div className={styles.timelineDesc}>{process.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className={styles.benefitsSection}
      >
        <h3 className={styles.sectionTitle}>Business Benefits</h3>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>✓ Increased Efficiency</div>
          <div className={styles.benefitItem}>✓ Cost Reduction</div>
          <div className={styles.benefitItem}>✓ Better Data Insights</div>
          <div className={styles.benefitItem}>✓ Enhanced Customer Experience</div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className={styles.ctaSection}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className={styles.ctaButton}
        >
          Begin Your Transformation
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export function EnterpriseMobilityContent({ isActive }: ServiceContentProps) {
  const solutions = [
    { icon: "👤", title: "Role-Based Access", desc: "Granular permissions" },
    { icon: "📴", title: "Offline Support", desc: "Works without connectivity" },
    { icon: "🔐", title: "Data Encryption", desc: "End-to-end security" },
    { icon: "📊", title: "Analytics", desc: "Real-time insights" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.contentSection}
    >
      {/* Solutions Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.solutionsGrid}
      >
        <h3 className={styles.sectionTitle}>Enterprise Solutions</h3>
        <div className={styles.solutionsCards}>
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={styles.solutionCard}
              whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)" }}
            >
              <div className={styles.solutionIcon}>{solution.icon}</div>
              <div className={styles.solutionTitle}>{solution.title}</div>
              <div className={styles.solutionDesc}>{solution.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className={styles.metricsSection}
      >
        <h3 className={styles.sectionTitle}>Expected Impact</h3>
        <div className={styles.metricsList}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={styles.metricItem}
            style={{ originX: 0 }}
          >
            <div className={styles.metricValue}>45%</div>
            <div className={styles.metricLabel}>Productivity Gain</div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={styles.metricItem}
            style={{ originX: 0 }}
          >
            <div className={styles.metricValue}>99.9%</div>
            <div className={styles.metricLabel}>Uptime</div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className={styles.ctaSection}
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(124, 58, 237, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className={styles.ctaButton}
        >
          Explore Enterprise Solutions
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
