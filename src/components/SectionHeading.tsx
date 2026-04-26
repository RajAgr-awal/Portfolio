"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 md:mb-16"
    >
      <h2 className="font-mono text-sm md:text-base tracking-widest text-primary uppercase">
        {"// "}{title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
    </motion.div>
  );
}
