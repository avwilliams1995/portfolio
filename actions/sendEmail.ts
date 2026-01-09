"use server";

import React from "react";
import { Resend } from "resend";
import {
  validateString,
  validateEmail,
  isBlockedEmail,
  containsSpam,
  getErrorMessage,
} from "@/lib/funcs";
import ContactFormEmail from "./contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateEmail(senderEmail)) {
    return {
      error: "Please provide a valid email address",
    };
  }

  if (isBlockedEmail(senderEmail)) {
    return {
      error: "You cannot send a message from this email address",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Message must be between 1 and 5000 characters",
    };
  }

  if (containsSpam(message)) {
    return {
      error: "Your message appears to contain spam or inappropriate content",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["avwilliams1995@gmail.com"],
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};