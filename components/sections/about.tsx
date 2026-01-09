"use client";

import React from "react";
import SectionHeader from "../ui/section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.4);
  const fadeInAnimation = {
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.section
        ref={ref}
        className="  max-w-[45rem] text-center leading-8  scroll-mt-52 mb-1"
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        variants={fadeInAnimation}
        whileInView="animate"
        id="about"
      >
        <SectionHeader>About me</SectionHeader>
        <p className="mb-3">
          After co-founding and scaling a consumer mobile tech business where
          our React Native app reached 350k+ users, I chose to deepen my
          software engineering skill set and focus on building high-quality
          products across the stack. Since then, I&apos;ve worked as a full
          stack engineer across web and mobile, contributing to production
          systems and real-world features used by thousands of users.
        </p>
        <p className="mb-3">
          My core experience includes{" "}
          <span className="font-medium">
            JavaScript and TypeScript, React and React Native, Node.js, Python,
            and modern web frameworks like Next.js, with experience building
            backend services and data models using Firebase and MySQL
          </span>
          . I enjoy tackling problems, and collaborating on products to improve
          performance, reliability, and user experience. I&apos;m always looking
          to sharpen my skills and learn new technologies when they meaningfully
          improve the product.
        </p>
        <div className="h-4"></div>
        <p>
          When I'm not coding, I enjoy attending sports events to watch my team
          probably break my heart, listening/jamming out to music, playing
          piano, playing golf to hopefully break 90 (doubtful), boxing, fitness,
          tennis with friends, intramural softball, reading books, and coaching
          baseball while being yelled at by 12 year old kids' parents.
        </p>
      </motion.section>
    </div>
  );
}
