"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  href: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
  images: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  imageClassName?: string;
  skills: readonly string[];
  fadeInAnimationVariants: {
    initial: { opacity: number; y: number };
    animate: (index: number) => {
      opacity: number;
      y: number;
      transition: { delay: number };
    };
  };
  ariaLabel?: string;
}

export default function ProductCard({
  href,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  logoClassName,
  images,
  imageClassName,
  skills,
  fadeInAnimationVariants,
  ariaLabel,
}: ProductCardProps) {
  return (
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
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-start items-center"
        aria-label={ariaLabel}
      >
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          className={logoClassName}
        />
        <div className="flex">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality="98"
              className={imageClassName}
            />
          ))}
        </div>
        <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800 mt-5 w-[95%]">
          {skills.map((skill, index) => (
            <motion.li
              className="bg-gray-200 borderBlack rounded-xl px-3 py-2"
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
  );
}
