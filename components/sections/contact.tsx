"use client";

import React, { useRef, useEffect } from "react";
import SectionHeader from "../ui/section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useCurrentSectionContext } from "@/context/current-section";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../ui/submit-button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.2);
  const { currentSection } = useCurrentSectionContext();
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentSection === "Contact") {
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 500);
    } else {
      emailInputRef.current?.blur();
    }
  }, [currentSection]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-30 sm:mb-28  w-[min(100%,45rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: 0.3,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>

      <p className="text-gray-700 -mt-6 ">
        Feel free to contact me directly at{" "}
        <a className="underline" href="mailto:avwilliams1995@gmail.com">
          avwilliams1995@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        id="contact-form"
        className="!bg-gray-100 mt-10 flex flex-col border border-black p-5 rounded-md dark:bg-white dark:bg-opacity-50 dark:focus:bg-opacity-50 transition-all dark:outline-none"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
          formRef.current?.reset();
        }}
      >
        <input
          ref={emailInputRef}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={50}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
