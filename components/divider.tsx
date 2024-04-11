"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="flex align-center justify-center">
      <motion.div
        className="bg-neutral-300 my-24 h-20 w-0.5 rounded-full self-center  "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      ></motion.div>
    </div>
  );
}
