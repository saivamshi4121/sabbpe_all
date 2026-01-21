"use client";

import {
  ManagedRecruitmentContent,
  TalentSolutionsContent,
  StrategicStaffingContent,
} from "./RecruitmentContent";

// Data export for services
export const recruitmentServices = [
  {
    id: "managed-recruitment",
    title: "Managed Recruitment",
    subtitle: "Full-Cycle Recruitment Services",
    icon: "👥",
    description:
      "Comprehensive end-to-end recruitment solutions that handle everything from talent acquisition to onboarding, allowing your HR team to focus on strategic initiatives.",
    offerings: [
      "Executive Search & Selection",
      "Full-Cycle Candidate Management",
      "Assessment & Screening Services",
      "Offer Negotiation & Placement",
    ],
    benefits: [
      "Reduce time-to-hire by 50%",
      "Access to pre-vetted talent pool",
      "Guaranteed candidate quality",
      "Dedicated recruitment specialist",
    ],
    ctaText: "Start Managed Recruitment",
    contentComponent: <ManagedRecruitmentContent />,
  },
  {
    id: "talent-solutions",
    title: "Talent Solutions",
    subtitle: "Flexible Staffing & Contingency",
    icon: "⚡",
    description:
      "On-demand staffing solutions for temporary, contract, and contingent workforce needs. Scale your team up or down based on project requirements.",
    offerings: [
      "Contract & Temporary Staffing",
      "Seasonal Workforce Planning",
      "Project-Based Teams",
      "Back-Office Support Services",
    ],
    benefits: [
      "Flexible scalability without overhead",
      "Immediate resource availability",
      "Reduced administrative burden",
      "Cost-effective labor solutions",
    ],
    ctaText: "Explore Talent Solutions",
    contentComponent: <TalentSolutionsContent />,
  },
  {
    id: "strategic-staffing",
    title: "Strategic Staffing",
    subtitle: "Long-Term Workforce Planning",
    icon: "🎯",
    description:
      "Strategic workforce planning and permanent placement services designed for sustained organizational growth and long-term talent retention.",
    offerings: [
      "Permanent Placement Services",
      "Workforce Planning Consulting",
      "Succession Planning",
      "Leadership Development Programs",
    ],
    benefits: [
      "Build high-performing permanent teams",
      "Reduce turnover and retention costs",
      "Strategic talent pipeline development",
      "Future-proof workforce alignment",
    ],
    ctaText: "Plan Your Workforce",
    contentComponent: <StrategicStaffingContent />,
  },
];
