import * as spamDetection from "spam-detection";

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const validateEmail = (email: unknown): email is string => {
  if (!validateString(email, 500)) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isBlockedEmail = (email: string): boolean => {
  const blockedEmails = ["avwilliams1995@gmail.com"];
  return blockedEmails.includes(email.toLowerCase().trim());
};

export const containsSpam = (message: string): boolean => {
  const result = spamDetection.detect(message);

  if (result === "spam") {
    return true;
  }

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = message.match(urlRegex);
  if (urls && urls.length > 3) {
    return true;
  }

  const capsCount = (message.match(/[A-Z]/g) || []).length;
  const lettersCount = (message.match(/[a-zA-Z]/g) || []).length;
  if (lettersCount > 20 && capsCount / lettersCount > 0.7) {
    return true;
  }

  return false;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
