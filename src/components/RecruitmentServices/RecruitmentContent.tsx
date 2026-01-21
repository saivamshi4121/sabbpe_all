"use client";

import { motion } from "framer-motion";
import styles from "./RecruitmentContent.module.scss";

// ============================================
// MANAGED RECRUITMENT CONTENT
// ============================================
export function ManagedRecruitmentContent() {
  return (
    <div className={styles.contentWrapper}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.contentHeader}
      >
        <h2 className={styles.contentTitle}>End-to-End Managed Recruitment</h2>
        <p className={styles.contentDescription}>
          Connect with top talent through our comprehensive recruitment platform. 
          We manage every step of the hiring process for quality results.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.contentSection}
      >
        <h3 className={styles.sectionTitle}>Our Recruitment Expertise</h3>
        <p className={styles.sectionText}>
          With over a decade of experience, we've perfected the recruitment process. 
          From candidate sourcing to final placement, every step is optimized for success.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles.benefitsSection}
      >
        <h3 className={styles.sectionTitle}>Why Partner With Us</h3>
        <div className={styles.benefitsGrid}>
          {[
            "Average time-to-hire: 25 days",
            "90% placement retention rate",
            "Access to 50K+ qualified candidates",
            "Industry expertise & networks",
            "Competitive salary benchmarking",
            "Dedicated recruitment team"
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
              className={styles.benefitItem}
            >
              <span className={styles.bulletPoint}>•</span>
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={styles.testimonialsSection}
      >
        <h3 className={styles.sectionTitle}>Client Testimonials</h3>
        <div className={styles.testimonialsGrid}>
          {[
            { quote: "Quote from satisfied client about recruitment success and impact.", name: "Client Name", title: "Job Title, Company" },
            { quote: "Another testimonial highlighting the efficiency and quality of service.", name: "Client Name", title: "Job Title, Company" }
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.65 + idx * 0.05 }}
              className={styles.testimonialCard}
            >
              <p className={styles.testimonialText}>"{testimonial.quote}"</p>
              <div className={styles.clientInfo}>
                <div className={styles.clientAvatar} />
                <div className={styles.clientDetails}>
                  <div className={styles.clientName}>{testimonial.name}</div>
                  <div className={styles.clientTitle}>{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

// ============================================
// TALENT SOLUTIONS CONTENT
// ============================================
export function TalentSolutionsContent() {
  const solutions = [
    { category: "Acquisition", items: ["Sourcing", "Recruitment", "Placement"] },
    { category: "Development", items: ["Training", "Mentoring", "Career paths"] },
    { category: "Retention", items: ["Engagement", "Culture", "Benefits"] },
    { category: "Performance", items: ["Management", "Reviews", "Growth plans"] },
  ];

  const solutionCards = [
    { icon: "👥", title: "Workforce Planning", description: "Strategic planning for talent needs" },
    { icon: "📚", title: "Learning & Development", description: "Customized training programs" },
    { icon: "🎯", title: "Succession Planning", description: "Building leadership pipeline" },
    { icon: "💼", title: "Career Development", description: "Individual growth paths" },
    { icon: "🤝", title: "Engagement Programs", description: "Culture & retention initiatives" },
    { icon: "📊", title: "Talent Analytics", description: "Data-driven insights" },
  ];

  const outcomes = [
    "📈 35% improvement in employee engagement",
    "🎯 50% reduction in turnover",
    "⚡ 40% faster promotion of high-performers",
    "💪 Stronger leadership pipeline",
    "🌟 Improved employer brand",
    "💰 Lower recruitment & training costs"
  ];

  return (
    <div className={styles.contentWrapper}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.contentHeader}
      >
        <h2 className={styles.contentTitle}>Talent Solutions</h2>
        <p className={styles.contentDescription}>
          Build and nurture high-performing teams with comprehensive talent management
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.contentSection}
      >
        <h3 className={styles.sectionTitle}>Complete Talent Management</h3>
        <div className={styles.solutionMatrix}>
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
              className={styles.solutionBox}
            >
              <h4 className={styles.solutionCategory}>{solution.category}</h4>
              <ul className={styles.solutionList}>
                {solution.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.contentSection}
      >
        <h3 className={styles.sectionTitle}>Our Solutions</h3>
        <div className={styles.solutionCardsGrid}>
          {solutionCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 + idx * 0.05 }}
              className={styles.solutionCard}
            >
              <div className={styles.solutionIcon}>{card.icon}</div>
              <h4 className={styles.solutionCardTitle}>{card.title}</h4>
              <p className={styles.solutionCardDesc}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={styles.outcomesSection}
      >
        <h3 className={styles.sectionTitle}>Key Outcomes</h3>
        <ul className={styles.outcomesList}>
          {outcomes.map((outcome, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.75 + idx * 0.04 }}
              className={styles.outcomeItem}
            >
              {outcome}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}

// ============================================
// STRATEGIC STAFFING CONTENT
// ============================================
export function StrategicStaffingContent() {
  const caseStudies = [
    { title: "Tech Startup", icon: "📱", challenge: "Rapid team growth", result: "Built 50-person team in 3 months" },
    { title: "Fortune 500", icon: "🏢", challenge: "Specialized talent", result: "Filled 15 hard-to-find positions" },
    { title: "Healthcare Org", icon: "🏥", challenge: "Compliance staffing", result: "Maintained HIPAA-compliant team" },
  ];

  const staffingModels = [
    { icon: "🔗", title: "Permanent Staffing", description: "Full-time, long-term team members" },
    { icon: "⏰", title: "Contract Staffing", description: "Project-based or temporary roles" },
    { icon: "🌍", title: "Remote Teams", description: "Distributed workforce management" },
    { icon: "🔀", title: "Hybrid Models", description: "Mix of permanent & contract resources" },
    { icon: "📊", title: "Managed Services", description: "End-to-end staffing solutions" },
    { icon: "🎓", title: "Executive Search", description: "Leadership & specialized roles" },
  ];

  const methodology = [
    "✓ Workforce gap analysis & benchmarking",
    "✓ Skills assessment & matching",
    "✓ Cost optimization without compromise",
    "✓ Compliance & regulatory adherence",
    "✓ Performance tracking & KPIs",
    "✓ Continuous improvement planning"
  ];

  return (
    <div className={styles.contentWrapper}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.contentHeader}
      >
        <h2 className={styles.contentTitle}>Strategic Staffing</h2>
        <p className={styles.contentDescription}>
          Workforce optimization through intelligent planning and execution
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.contentSection}
      >
        <h3 className={styles.sectionTitle}>Success Cases</h3>
        <div className={styles.caseStudyGrid}>
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
              className={styles.caseStudyCard}
            >
              <div className={styles.caseIcon}>{study.icon}</div>
              <h4 className={styles.caseTitle}>{study.title}</h4>
              <p className={styles.caseChallenge}>
                <strong>Challenge:</strong> {study.challenge}
              </p>
              <p className={styles.caseResult}>
                <strong>Result:</strong> {study.result}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.contentSection}
      >
        <h3 className={styles.sectionTitle}>Staffing Models</h3>
        <div className={styles.staffingModelsGrid}>
          {staffingModels.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 + idx * 0.05 }}
              className={styles.staffingModelCard}
            >
              <div className={styles.modelIcon}>{model.icon}</div>
              <h4 className={styles.modelTitle}>{model.title}</h4>
              <p className={styles.modelDesc}>{model.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={styles.methodologySection}
      >
        <h3 className={styles.sectionTitle}>Our Methodology</h3>
        <ul className={styles.methodologyList}>
          {methodology.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.75 + idx * 0.04 }}
              className={styles.methodologyItem}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
