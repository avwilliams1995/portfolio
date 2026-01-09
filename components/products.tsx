"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeader from "./section-header";
import ProductCard from "./product-card";
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
      className="scroll-mt-44"
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true }}
      variants={fadeInAnimation}
      whileInView="animate"
    >
      <div className="!mb-16 flex-col">
        <SectionHeader>Products</SectionHeader>
        <div className="grid xl:grid-cols-3 mt-8 gap-24 self-center">
          <ProductCard
            href="https://apps.apple.com/us/app/audia-mobile/id6748881891"
            logoSrc="/audia_logo.jpg"
            logoAlt="Audia Logo"
            logoWidth={100}
            logoHeight={100}
            logoClassName="mb-5"
            images={[
              {
                src: "/Auda_recording_.gif",
                alt: "Auda Screen Recording",
                width: 210,
                height: 205,
              },
            ]}
            imageClassName="object-cover border-[0.15rem] border-white shadow-xl"
            skills={productSkillsData["Audia"]}
            fadeInAnimationVariants={fadeInAnimationVariants}
          />
          <ProductCard
            href="https://presssportsapp.com/"
            logoSrc="/Press_Sports.png"
            logoAlt="Press Sports Logo"
            logoWidth={170}
            logoHeight={170}
            logoClassName="mb-12"
            images={[
              {
                src: "/ps1.png",
                alt: "Press Sports Screen Female Athlete",
                width: 200,
                height: 200,
              },
              {
                src: "/ps2.png",
                alt: "Press Sports Screen Male Athlete",
                width: 200,
                height: 200,
              },
            ]}
            imageClassName="object-cover border-[0.15rem] border-white shadow-xl"
            skills={productSkillsData["PressSports"]}
            fadeInAnimationVariants={fadeInAnimationVariants}
          />
          <ProductCard
            href="https://dash-ql.vercel.app/demo"
            logoSrc="/dashQL.png"
            logoAlt="dashQL Logo"
            logoWidth={140}
            logoHeight={140}
            logoClassName="!mb-20"
            images={[
              {
                src: "/dashQL_demo.gif",
                alt: "dashQL Demo",
                width: 440,
                height: 440,
              },
            ]}
            imageClassName="mb-20 mt-10"
            skills={productSkillsData["dashQL"]}
            fadeInAnimationVariants={fadeInAnimationVariants}
          />
        </div>
      </div>
    </motion.section>
  );
}
