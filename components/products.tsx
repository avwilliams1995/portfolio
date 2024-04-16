"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useCurrentSectionContext } from "@/context/current-section";
import SectionHeader from "./section-header";
import { productSkillsData } from "@/lib/data";

export default function Products() {
  const { ref } = useSectionInView("Products", 0.2);

  const fadeInAnimation = {
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    }),
  };
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.section
      id="products"
      ref={ref}
      className="w-[min(100%,100rem)] scroll-mt-44"
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true }}
      variants={fadeInAnimation}
      whileInView="animate"
    >
      <div className=" !mb-16">
        <SectionHeader>Products</SectionHeader>
        <div className=" flex justify-between items-end mt-8  ">
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              delay: 0.5,
              duration: 0.3,
            }}
          >
            <a
              href="https://github.com/Auda-v1/Auda"
              target="_blank"
              className="flex flex-col justify-start items-center w-[33rem]"
            >
              <Image
                src="/Auda.png"
                alt="Auda Logo"
                width="100"
                height="100"
                className="mb-5"
              />
              <div className="flex">
                <Image
                  src="/Auda_Screen1.png"
                  alt="Auda Screen Athlete"
                  width="205"
                  height="205"
                  quality="98"
                  priority={true}
                  className=" object-cover border-[0.15rem] border-white shadow-xl "
                />
              </div>
              <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800 mt-5 w-[90%]">
                {productSkillsData["Auda"].map((skill, index) => (
                  <motion.li
                    className="bg-gray-200 borderBlack rounded-xl px-4 py-2  "
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              delay: 0.5,
              duration: 0.2,
            }}
          >
            <a
              href="https://presssportsapp.com/"
              target="_blank"
              className=" flex flex-col justify-center items-center w-[33rem]"
            >
              <Image
                src="/Press_Sports.png"
                alt="Press Sports Logo"
                width="170"
                height="170"
                className="mb-12"
              />
              <div className="flex">
                <Image
                  src="/ps1.png"
                  alt="Press Sports Screen Female Athlete"
                  width="200"
                  height="200"
                  quality="98"
                  priority={true}
                  className=" object-cover border-[0.15rem] border-white shadow-xl "
                />
                <Image
                  src="/ps2.png"
                  alt="Press Sports Screen Male Athlete"
                  width="200"
                  height="200"
                  quality="98"
                  priority={true}
                  className=" object-cover border-[0.15rem] border-white shadow-xl "
                />
              </div>
              <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800 mt-5 w-[90%]">
                {productSkillsData["PressSports"].map((skill, index) => (
                  <motion.li
                    className="bg-gray-200 borderBlack rounded-xl px-4 py-2  "
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </a>
          </motion.div>
        
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              delay: 0.5,
              duration: 0.2,
            }}
          >
            <a
              href="https://dash-ql.vercel.app/demo"
              target="_blank"
              className="flex flex-col justify-center items-center w-[33rem]"
            >
              <Image
                src="/dashQL.png"
                alt="dashQL Logo"
                width="140"
                height="140"
                className="!mb-20"
              />
              <div className="flex">
                <Image
                  src="/dashQL_demo.gif"
                  alt="dashQL Demo"
                  width="440"
                  height="440"
                  quality="98"
                  priority={true}
                  className="mb-20 mt-10"
                />
              </div>
              <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800 mt-5 w-[90%]">
                {productSkillsData["dashQL"].map((skill, index) => (
                  <motion.li
                    className="bg-gray-200 borderBlack rounded-xl px-4 py-2  "
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
