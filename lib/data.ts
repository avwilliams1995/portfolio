import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Press Sports",
    location: "Co-Founder, CMO & Head of Data Analytics",
    description: "Awards: Forbes 30 under 30, Atlanta Inno: 25 under 25.",
    tasks: [
      "Created our interactive website with React while implementing SEO best practices, allowing for state management and overall structure to display user data (videos, profiles, etc.), using reusable components to selectively manipulate the DOM.",
      "Oversaw a team of 10+ employees, acquiring 300,000+ users with a 4.9 star overall rating (11.8k ratings).",
      "Employed and worked with engineering team in developing our React Native mobile app.",
      "Collaborated with the team on making product decisions/strategy through UI/UX design and A/B testing.",
      "Utilized SQL and Big Query to analyze and secure our thousands of users’ data.",
      "Expanded our DB to utilize MongoDB to ensure flexibility and scalability and handle schema less data of the users.",
      "Utilized Python and Selenium for web-scraping to extract useful data and information that may be otherwise unavailable.",
      "Leveraged Python and Firebase to compile weekly and monthly analytics reports to our team and investors.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
  },
  {
    title: "dashQL with OS Labs",
    location: "Full Stack Software Engineer",
    description: "dashQL is a GraphQL Caching Solution.",
    tasks: [
      "Built the website on React with Typescript for state management and overall structure to display our demo dashboard, using reusable components to selectively manipulate the DOM by using the virtual DOM to increase render performance.",
      "Made use of React Hooks to outsource complex functionality and simplify the codebase, creating reusable functions that provide pure and more maintainable code to ensure future compatibility.",
      "Leveraged Node.js/Express server to efficiently handle HTTP requests to a single GraphQL endpoint, enhancing code readability with easy debugging, utilizing its middleware pattern to track performance statistics to respond back to client.",
      "Utilized GraphQL’s abstract syntax trees to deconstruct and cache GraphQL queries, enabling a deep and complete cache system, increasing the chance that a given query will trigger a cache hit, improving the efficiency of the server.",
      "Employed a GraphQL server to eliminate N+1 queries and aggregate multiple API requests from the client into a single query to fetch specific data according to the relationships defined in the GraphQL schemas.",
      "Tested with Jest to enhance code quality and proactively detect issues with caching and the demo dashboard.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Auda (iOS & Android)",
    location: "Full Stack Software Engineer",
    description: "Auda is a Music Based Social Network.",
    tasks: [
      "Leveraging React Native with TypeScript and Expo Router to develop a native mobile application from scratch for both iOS and Android which allows users to share and discover new music with friends, find communities, and grow businesses.",
      "Implemented a Node.js/Express server to efficiently handle HTTP requests to the Spotify API, enhancing code readability while utilizing its middleware pattern to parse and send back the correct response to the client. ",
      "Spearheading the seamless integration of multiple APIs to elevate user experience and functionality within Auda's platform.",
      "Utilizing Google Cloud storage to engineer a scalable data system, achieving a 50% reduction in data retrieval time, and ensuring control and security over user info while maximizing horizontal and vertical scalability to facilitate optimal growth.",
      "Applied Redux for global state management, allowing for easy use and maintainability of data throughout the app.",
      "Created a Figma vision board to maintain a high standard for UI/UX decisions and system design flow across the app.",
      "Following test-driven-development practices to ensure full security throughout the app and minimize technical debt.",
    ],
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "React Native",
  "Python",
  "Next.js",
  "Express",
  "Node.js",
  "GraphQL",
  "Git/GitHub",
  "CI/CD",
  "Redux",
  "JWT",
  "OAuth",
  "AWS",
  "Docker",
  "Google Cloud",
  "Firebase",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Redis",
  "Jest",
  "React-Testing-Library",
  "Cypress",
  "Vite",
  "Expo Router",
  "Bootstrap",
  "MUI",
  "Tailwind",
  "Framer Motion",
  "HTML5/CSS",
] as const;

export const productSkillsData = {
  "dashQL": ["React", "Typescript", "Node.js", "GraphQL"],
  "PressSports": ["React Native", "React", "Node.js", "MongoDB",],
  "Auda": ["React Native", "Typescript","Node.js", "Firebase"],

} as const;
