"use client";

import { motion } from "framer-motion";
import styles from "./EnterpriseMobility.module.scss";

export default function EnterpriseMobilityPage() {
  const challenges = [
    { icon: "🏛️", title: "Legacy Systems", desc: "Incompatible with modern mobile architectures" },
    { icon: "📱", title: "Device Fragmentation", desc: "Multiple OS and device versions to support" },
    { icon: "🔒", title: "Security & Compliance", desc: "GDPR, HIPAA, and data protection requirements" },
    { icon: "👥", title: "Remote Workforce", desc: "Managing distributed teams across locations" },
  ];

  const features = [
    { icon: "👤", title: "Role-Based Access", desc: "Granular permissions and access controls" },
    { icon: "📴", title: "Offline Functionality", desc: "Seamless operation without connectivity" },
    { icon: "🔐", title: "Data Encryption", desc: "End-to-end encryption for sensitive data" },
    { icon: "📊", title: "Analytics & Monitoring", desc: "Real-time insights and performance tracking" },
  ];

  const techStack = [
    { category: "Frontend", items: ["iOS", "Android", "Flutter", "React Native"] },
    { category: "Backend", items: ["Node.js", "Java", ".NET"] },
    { category: "Cloud", items: ["AWS", "Azure"] },
    { category: "Security", items: ["OAuth2", "SSO", "MDM"] },
  ];

  const roadmap = [
    { phase: "Discovery & Planning", duration: "Weeks 1-2" },
    { phase: "UI/UX Design", duration: "Weeks 3-4" },
    { phase: "Development", duration: "Weeks 5-12" },
    { phase: "Testing & Security Review", duration: "Weeks 13-14" },
    { phase: "Deployment & Support", duration: "Weeks 15+" },
  ];

  const businessValue = [
    { metric: "45%", label: "Productivity Increase" },
    { metric: "60%", label: "Faster Decision Making" },
    { metric: "90%", label: "Cost Reduction (Ops)" },
    { metric: "99.9%", label: "System Uptime" },
  ];

  return (
    <div className={styles.proposalContainer}>
      {/* COVER PAGE */}
      <section className={styles.coverPage}>
        <div className={styles.coverContent}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.logo}
          >
            SABBPE LOGO
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.coverTitle}
          >
            <h1>Enterprise Mobility Solution Proposal</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.coverSubtitle}
          >
            <p>Secure, Scalable Mobile Solutions for Modern Enterprises</p>
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.imagePlaceholder}>
              <span>Business Professionals</span>
              <span>Using Mobile Apps</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Executive Summary</h2>
            <p>Strategic Overview of Your Mobility Transformation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.summaryCard}
          >
            <div className={styles.summaryItem}>
              <h3>Business Objective</h3>
              <p>Enable your workforce to access critical business applications from any location, at any time, on any device—while maintaining enterprise-grade security and compliance.</p>
            </div>

            <div className={styles.summaryItem}>
              <h3>Current Challenges</h3>
              <p>Your organization faces challenges with legacy system modernization, device fragmentation across your user base, stringent security requirements, and the complexity of managing a distributed, remote workforce.</p>
            </div>

            <div className={styles.summaryItem}>
              <h3>Our Solution</h3>
              <p>A comprehensive enterprise mobility platform that integrates with your existing systems, provides native mobile experiences for iOS and Android, implements robust security controls, and delivers measurable business value within months.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLIENT CHALLENGES */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Client Challenges</h2>
            <p>Understanding Your Enterprise Mobility Needs</p>
          </motion.div>

          <div className={styles.challengesGrid}>
            {challenges.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.challengeCard}
              >
                <div className={styles.challengeIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Our Enterprise Mobility Solution</h2>
            <p>Comprehensive Platform Architecture</p>
          </motion.div>

          <div className={styles.solutionGrid}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0 }}
              className={styles.solutionCard}
            >
              <div className={styles.solutionNumber}>01</div>
              <h3>Mobile App Development</h3>
              <p>Native iOS & Android applications with optimal performance, or cross-platform solutions using Flutter/React Native for faster time-to-market.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={styles.solutionCard}
            >
              <div className={styles.solutionNumber}>02</div>
              <h3>MDM / EMM Integration</h3>
              <p>Complete device and app lifecycle management with policy enforcement, remote wipe capabilities, and compliance tracking across your fleet.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={styles.solutionCard}
            >
              <div className={styles.solutionNumber}>03</div>
              <h3>Secure APIs & Backend</h3>
              <p>Robust REST/GraphQL APIs with authentication, rate limiting, and encryption—designed to securely connect mobile apps to enterprise systems.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={styles.solutionCard}
            >
              <div className={styles.solutionNumber}>04</div>
              <h3>Cloud-Based Architecture</h3>
              <p>Scalable infrastructure on AWS/Azure with auto-scaling, disaster recovery, CDN integration, and 99.9% uptime SLA.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Key Features</h2>
            <p>What Your Platform Will Include</p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.featureCard}
              >
                <div className={styles.featureIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Technology Stack</h2>
            <p>Enterprise-Grade Technologies We Use</p>
          </motion.div>

          <div className={styles.techStackGrid}>
            {techStack.map((stack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.techCard}
              >
                <h3>{stack.category}</h3>
                <div className={styles.techItems}>
                  {stack.items.map((item, i) => (
                    <span key={i} className={styles.techBadge}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION ROADMAP */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Implementation Roadmap</h2>
            <p>Timeline & Phase Overview</p>
          </motion.div>

          <div className={styles.roadmapContainer}>
            {roadmap.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.roadmapItem}
              >
                <div className={styles.roadmapNumber}>{idx + 1}</div>
                <div className={styles.roadmapContent}>
                  <h3>{item.phase}</h3>
                  <p>{item.duration}</p>
                </div>
                {idx < roadmap.length - 1 && <div className={styles.roadmapLine} />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Business Value</h2>
            <p>Measurable Impact on Your Organization</p>
          </motion.div>

          <div className={styles.valueGrid}>
            {businessValue.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.valueCard}
              >
                <div className={styles.valueMetric}>{item.metric}</div>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & ENGAGEMENT */}
      <section className={styles.proposalSection}>
        <div className={styles.sectionContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeader}
          >
            <h2>Pricing & Engagement Model</h2>
            <p>Flexible Options to Fit Your Budget</p>
          </motion.div>

          <div className={styles.pricingGrid}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0 }}
              className={styles.pricingCard}
            >
              <h3>Fixed Cost Model</h3>
              <p>Complete project delivery with defined scope, timeline, and deliverables.</p>
              <ul>
                <li>✓ Predictable budget</li>
                <li>✓ Clear project milestones</li>
                <li>✓ Fixed team composition</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={styles.pricingCard}
            >
              <h3>Dedicated Team Model</h3>
              <p>Committed team assigned exclusively to your project with flexible engagement.</p>
              <ul>
                <li>✓ Flexible hours & timeline</li>
                <li>✓ Extended support options</li>
                <li>✓ Scalable resources</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.ctaContent}
        >
          <h2>Let's Build Your Enterprise Mobility Platform</h2>
          <p>Transform your workforce with secure, scalable mobile solutions designed for modern enterprises.</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={styles.ctaButton}
          >
            Schedule a Consultation
          </motion.button>

          <p className={styles.ctaFooter}>
            Questions? Reach out to our sales team at<br />
            <strong>hello@sabbpe.com</strong> | <strong>+1-800-SABBPE-1</strong>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
