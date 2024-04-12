"use client";

import React from "react";
import SectionHeader from "./section-header";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  const fadeInAnimation = {
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-40 mb-16 leading-8 sm:mb-32 w-[min(100%,85rem)]"
      initial={{ opacity: 0, y: 28 }}
      variants={fadeInAnimation}
      whileInView="animate"
      id="experience"
    >
      <SectionHeader>My experience</SectionHeader>
      <VerticalTimeline lineColor="" >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.5rem 1.5rem",
                visibility: "visible",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
                visibility: "visible",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                visibility: "visible",
                fontSize: "1.5rem",
              }}
            >
              <motion.div
                variants={fadeInAnimation}
                initial={{ opacity: 0, y: 28 }}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!text-sm italic !mt-0">{item.location}</p>
                <p className="!text-sm !mt-3 mb-3 !font-normal text-gray-700 text-black">
                  {item.description}
                </p>
                <ul>
                  {item.tasks.map((task, index) => (
                    <li
                      key={index}
                      className="list-disc ml-4 !text-sm !mt-3 !font-normal text-gray-700"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
