"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useCurrentSectionContext } from "@/context/current-section";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setCurrentSection, setTimeOfLastClick } = useCurrentSectionContext();
  return (
    <section
      ref={ref}
      className="flex-col items-center justify-center scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              delay: .7,
              duration: 0.4,
            }}
          >
            <Image
              src="/andrew-williams.jpg"
              alt="Drew portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.15rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 0.7,
              duration: 0.4,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <motion.h1
          className="mb-10 mt-4 px-2 w-7/12 text-center text-xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I&apos;m Drew!</span> I&apos;m a{" "}
          Full Stack Developer with 6+ years of experience. I enjoy building
          mobile and web apps across the stack, with a focus on React, React
          Native, Node.js, & Python.
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.4,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setCurrentSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 active:scale-105 transition cursor-pointer border border-black/10 "
          href="/Andrew_Williams_Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full  hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 "
          href="https://www.linkedin.com/in/andrew-vaughan-williams/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 "
          href="https://github.com/avwilliams1995"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
