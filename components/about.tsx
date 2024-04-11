"use client";

import React from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", .3);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.section
        ref={ref}
        className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.68,
          duration: 0.2,
        }}
        id="about"
      >
        <SectionHeader>About me</SectionHeader>
        <p className="mb-3">
          After 5+ years of running a mobile consumer tech business where our{" "}
          React Native mobile app amassed 300k+ users, I decided to double down
          on my SWE skills to progress as a full stack dev and continue to
          pursue my passion in developing products. I have honed my skills with{" "}
          <br></br>
          <span className="font-medium">
            6y+ JavaScript, TypeScript, 5y+ React, 3y+ React Native, 3y+
            Node.js, and 3y+ Python.
          </span>
          <br></br>
          My favorite part of programming is the problem-solving aspect, as well
          as being able to collaborate with a team in developing out a product
          that users will love. My core tech stack is{" "}
          <span className="font-medium">
            React, React Native, Python, Next.js, Node.js, MongoDB and SQL,{" "}
          </span>
          and am always looking to learn new technologies. I am currently
          looking for a <span className="font-medium">full-time position</span>{" "}
          as a software developer.
        </p>
        <div className="h-4"></div>
        <p>
          When I&apos;m not coding, I enjoy attending sports events to watch my
          team probably break my heart, listening/jamming out to music, playing
          piano, playing golf to hopefully break 90 (doubtful), boxing, fitness,
          tennis with friends, intramural softball, reading books, and coaching
          baseball while being yelled at by 12 year old kids!
        </p>
      </motion.section>
    </div>
  );
}
