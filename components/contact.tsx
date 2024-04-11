"use client";

import React from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.25);

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
        id="contact-form"
        className="!bg-gray-100 mt-10 flex flex-col border border-black p-5 rounded-md dark:bg-white dark:bg-opacity-50 dark:focus:bg-opacity-50 transition-all dark:outline-none"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
          console.log(formData)
        }}
      >
        <input
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
