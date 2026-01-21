"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";
import styles from "./RecruitmentLayeredUI.module.scss";

interface RecruitmentService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  offerings: string[];
  benefits: string[];
  ctaText: string;
  ctaAction?: () => void;
  contentComponent?: ReactNode;
}

interface RecruitmentLayeredUIProps {
  services: RecruitmentService[];
  onServiceChange?: (serviceId: string) => void;
}

export default function RecruitmentLayeredUI({
  services,
  onServiceChange,
}: RecruitmentLayeredUIProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleServiceChange = (index: number) => {
    setActiveServiceIndex(index);
    onServiceChange?.(services[index].id);
  };

  const activeService = services[activeServiceIndex];

  // Animation variants for layered cards
  const layerVariants = {
    enter: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      scale: direction > 0 ? 0.85 : 1.15,
      y: direction > 0 ? 30 : -30,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5 },
        scale: { duration: 0.6 },
        y: { duration: 0.6 },
        zIndex: { duration: 0 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      scale: direction > 0 ? 1.15 : 0.85,
      y: direction > 0 ? -30 : 30,
      transition: {
        opacity: { duration: 0.4 },
        scale: { duration: 0.5 },
        y: { duration: 0.5 },
        zIndex: { duration: 0 },
      },
    }),
  } as const;

  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
    },
    active: {
      scale: 1.02,
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
      borderColor: "#1f2937",
    },
  };

  const direction =
    services.findIndex((s) => s.id === activeService.id) >
    (services.findIndex((s) => s.id === services[activeServiceIndex].id) || 0)
      ? 1
      : -1;

  return (
    <div className={styles.container}>
      {/* LAYERED CARD CONTAINER */}
      <div className={styles.layerContainer}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeService.id}
            custom={direction}
            variants={layerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.serviceCard}
          >
            {/* Card Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={styles.cardHeader}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{activeService.icon}</span>
              </div>

              <div className={styles.titleContainer}>
                <h2 className={styles.title}>{activeService.title}</h2>
                <p className={styles.subtitle}>{activeService.subtitle}</p>
              </div>
            </motion.div>

            {/* Card Body */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={styles.cardBody}
            >
              {/* Render Rich Content Component if provided */}
              {activeService.contentComponent}

              {/* Fallback to simple content if no component provided */}
              {!activeService.contentComponent && (
                <>
                  <p className={styles.description}>{activeService.description}</p>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Key Offerings</h3>
                    <motion.div
                      className={styles.offeringsList}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, staggerChildren: 0.08 }}
                    >
                      {activeService.offerings.map((offering, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.08 }}
                          className={styles.offeringItem}
                        >
                          <span className={styles.checkmark}>✓</span>
                          <span>{offering}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Business Benefits</h3>
                    <motion.div
                      className={styles.benefitsList}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, staggerChildren: 0.08 }}
                    >
                      {activeService.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.08 }}
                          className={styles.benefitItem}
                        >
                          <span className={styles.benefitIcon}>→</span>
                          <span>{benefit}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Card Footer - CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className={styles.cardFooter}
            >
              <motion.button
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeService.ctaText}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Inactive Layer Indicators (Subtle Preview) */}
        {services.map((service, idx) => {
          if (idx === activeServiceIndex) return null;

          const isNextLayer = idx > activeServiceIndex;
          const offset = isNextLayer ? 12 : -12;
          const scaleValue = 0.92;
          const opacityValue = 0.6;

          return (
            <motion.div
              key={`indicator-${service.id}`}
              className={styles.layerIndicator}
              initial={{ opacity: 0 }}
              animate={{
                opacity: opacityValue,
                scale: scaleValue,
                y: offset,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => {
                const newIndex = services.findIndex((s) => s.id === service.id);
                handleServiceChange(newIndex);
              }}
            />
          );
        })}
      </div>

      {/* NAVIGATION BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={styles.navigationContainer}
      >
        <div className={styles.navigationLabel}>Select Service Category</div>

        <div className={styles.buttonGroup}>
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              animate={index === activeServiceIndex ? "active" : "idle"}
              onClick={() => handleServiceChange(index)}
              className={styles.navButton}
            >
              <span className={styles.buttonIcon}>{service.icon}</span>
              <span className={styles.buttonLabel}>{service.title}</span>
              {index === activeServiceIndex && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* STEP INDICATORS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className={styles.stepIndicators}
      >
        {services.map((service, index) => (
          <motion.button
            key={`step-${service.id}`}
            className={styles.stepDot}
            animate={{
              scale: index === activeServiceIndex ? 1.3 : 1,
              backgroundColor:
                index === activeServiceIndex ? "#1f2937" : "#d1d5db",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => handleServiceChange(index)}
            title={service.title}
          />
        ))}
      </motion.div>
    </div>
  );
}
