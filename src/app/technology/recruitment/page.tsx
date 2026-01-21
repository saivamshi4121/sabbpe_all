"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import RecruitmentLayeredUI from "@/components/RecruitmentServices/RecruitmentLayeredUI";
import {
  recruitmentServices,
} from "@/components/RecruitmentServices/ServiceData";
import styles from "./RecruitmentPage.module.scss";

export default function RecruitmentPage() {
  const [activeServiceId, setActiveServiceId] = useState("managed-recruitment");

  const handleServiceChange = useCallback((serviceId: string) => {
    setActiveServiceId(serviceId);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.heroSection}
      >
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={styles.heroTitle}
          >
            Recruitment & Staffing Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={styles.heroSubtitle}
          >
            Three proven approaches to talent acquisition and workforce management.
            Choose the solution that fits your organizational needs.
          </motion.p>
        </div>
      </motion.section>

      {/* LAYERED SERVICE UI */}
      <section className={styles.serviceSection}>
        <RecruitmentLayeredUI
          services={recruitmentServices}
          onServiceChange={handleServiceChange}
        />
      </section>

      {/* COMPARISON HIGHLIGHTS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.highlightsSection}
      >
        <div className={styles.highlightsContent}>
          <h2 className={styles.highlightsTitle}>Why Choose Our Services?</h2>

          <div className={styles.highlightsGrid}>
            <motion.div
              whileHover={{ y: -4 }}
              className={styles.highlightCard}
            >
              <div className={styles.highlightIcon}>✓</div>
              <h3 className={styles.highlightTitle}>Industry Expertise</h3>
              <p className={styles.highlightText}>
                20+ years of recruitment experience across multiple industries and sectors
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={styles.highlightCard}
            >
              <div className={styles.highlightIcon}>⚡</div>
              <h3 className={styles.highlightTitle}>Fast Placement</h3>
              <p className={styles.highlightText}>
                Average placement within 10 business days with our extensive talent network
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={styles.highlightCard}
            >
              <div className={styles.highlightIcon}>🎯</div>
              <h3 className={styles.highlightTitle}>Quality Assurance</h3>
              <p className={styles.highlightText}>
                Comprehensive vetting process ensuring only top-tier candidates proceed
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className={styles.highlightCard}
            >
              <div className={styles.highlightIcon}>📊</div>
              <h3 className={styles.highlightTitle}>Data-Driven</h3>
              <p className={styles.highlightText}>
                Analytics and insights to optimize your recruitment strategy
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PROCESS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.processSection}
      >
        <h2 className={styles.processTitle}>Our Process</h2>

        <div className={styles.timelineContainer}>
          {[
            { step: "1", title: "Consultation", desc: "Understand your needs" },
            { step: "2", title: "Sourcing", desc: "Find qualified candidates" },
            { step: "3", title: "Screening", desc: "Pre-vet and assess" },
            { step: "4", title: "Placement", desc: "Match and onboard" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineNumber}>{item.step}</div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineTitle}>{item.title}</h4>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.ctaSection}
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Find Your Next Great Hire?</h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how our recruitment services can transform your hiring process
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={styles.ctaButton}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.statsSection}
      >
        <div className={styles.statsGrid}>
          {[
            { number: "5000+", label: "Successful Placements" },
            { number: "95%", label: "Client Satisfaction Rate" },
            { number: "10 days", label: "Average Time to Placement" },
            { number: "200+", label: "Partner Organizations" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.statCard}
            >
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
