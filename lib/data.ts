import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import audiaLogo from "@/public/audia_logo.jpg";
import Image from "next/image";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Products",
    hash: "#products",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Hurdlr",
    location: "Forward Deployed / Solutions Engineer",
    description: "Accounting Software (Embedded UI & API)",
    tasks: [
      "Joined as the first Solutions Engineer, brought on to enhance and stabilize the company's V5 RESTful API while collaborating with the core engineering team on the next-generation V6 web architecture.",
      "Shipped 40+ PRs directly and contributed to 60+ end-to-end feature deliveries across React, Java, Jest, Cypress, and MySQL, resolving production bugs and improving platform stability.",
      "Resolved 150+ tracked engineering issues (85% completion rate), performing root-cause analysis and problem-solving across frontend, backend, and API layers.",
      "Established the Solutions Engineering function, creating internal documentation and onboarding processes, serving as primary technical liaison for 10 enterprise partners, leading 120+ technical syncs.",
      "Integrated and maintained third-party financial APIs including Stripe SDK and Plaid Link, collaborating with partner engineering teams on secure authentication, webhook reliability, and data synchronization.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Dec 2025",
  },
  {
    title: "Audia (iOS & Android)",
    location: "Full Stack Software Engineer",
    description: "Music Based Social Network",
    tasks: [
      "Built 0-to-1: Led full-stack development of a cross-platform web and mobile application from concept to App Store, using React Native, TypeScript, JavaScript, Expo Router, and a Node.js/Express backend.",
      "Engineered real-time audio playback system with viewport-aware focus detection, managing single-instance Sound objects and automatic cleanup on navigation to prevent memory leaks.",
      "Designed and implemented a Node.js/Express backend handling Spotify API integration, with JWT authentication middleware, token management, and secure client-credential flows.",
      "Architected Firestore data model supporting posts, nested comments with @mentions, threaded replies, reposts with snapshot persistence, and user-curated collections.",
      "Performed optimistic UI updates with automatic rollback on failure for likes, follows, and reposts, improving perceived performance while maintaining data consistency.",
      "Implemented Redux for global state management, then migrated to Zustand after hitting scaling pain points, reducing boilerplate ~40% across 20+ screens.",
    ],
    icon: React.createElement(Image, {
      src: audiaLogo,
      alt: "Audia",
      width: 40,
      height: 40,
      className: "rounded-full",
    }),
    date: "Jul 2023 - Oct 2024",
  },
  {
    title: "dashQL with OS Labs",
    location: "Full Stack Software Engineer",
    description: "Open Source GraphQL Caching Solution",
    tasks: [
      "Led frontend development of an interactive web application dashboard using React, TypeScript, JavaScript, Chart.js and Vite, enabling developers to visualize caching performance in real-time.",
      "Built dynamic query builder UI with checkbox-driven field selection that generates GraphQL queries on the fly, supporting nested queries and 150+ query combinations.",
      "Implemented 4 Chart.js visualizations (line, bar, pie, result card) displaying response times, cache hit/miss rates, and field-level metrics, demonstrating up to 90% performance improvement.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Jun 2023",
  },
  {
    title: "Press Sports",
    location: "Co-Founder & Head of Data Analytics",
    description:
      "Sports Social Network. Awards: Forbes 30 under 30, Atlanta Inno: 25 under 25.",
    tasks: [
      "Hired and managed team of 15+ employees, driving user growth to 350,000+ users with a 4.9-star app store rating on 11,800 reviews.",
      "Directed product strategy and project management, leveraging expertise in UI/UX, web design, and A/B testing that led to over 60% Day 1, 55% Week 1, and 25% Day 30 retention.",
      "Developed an interactive web application with React and JavaScript, integrating SEO best practices and reusable front-end components with state management.",
      "Collaborated with a team of 7+ engineers to develop React Native app, contributing to product specs and full stack development.",
      "Initiated BigQuery for early-stage analytics and user data management across thousands of users.",
      "Expanded backend database infrastructure to incorporate MongoDB/Firestore for flexible schema-less data storage.",
      "Built a Python web scraping pipeline using Selenium to extract data on 10,000+ committed athletes.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2017 - Jan 2023",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Python",
  "Java",
  "Node.js",
  "Next.js",
  "Express",
  "Expo",
  "GraphQL",
  "Redis",
  "RESTful APIs",
  "Redux",
  "Zustand",
  "Firebase",
  "AWS",
  "MySQL",
  "Jest",
  "Cypress",
  "Stripe",
  "Plaid",
  "Git",
  "HTML/CSS",
  "Figma",
  "Claude",
] as const;

export const productSkillsData = {
  Hurdlr: ["React", "Java", "Redux", "TypeScript", "MySQL", "Cypress"],
  Audia: [
    "React Native",
    "Node.js",
    "TypeScript",
    "Firebase",
    "Zustand",
    "Expo",
  ],
  dashQL: ["React", "Node.js", "GraphQL", "TypeScript", "Redis", "Chart.js"],
  PressSports: [
    "React Native",
    "React",
    "Node.js",
    "TypeScript",
    "Firebase",
    "Redux",
  ],
} as const;
