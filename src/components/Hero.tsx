"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
import TypewriterText from "./TypewriterText";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,157,95,0.06)_0%,_transparent_70%)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Raj Agrawal Logo"
            width={96}
            height={96}
            className="w-24 h-24 rounded-2xl border border-card-border"
            priority
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-mono font-bold tracking-tight"
        >
          <span className="text-primary">{">"}</span> RAJ AGRAWAL
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl font-mono text-muted"
        >
          <TypewriterText
            texts={[
              "Full-Stack Developer",
              "Hardware Simulation Enthusiast",
              "AI Integrator",
              "Universal Designer",
            ]}
            speed={70}
            deleteSpeed={35}
            pauseDuration={2200}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 text-muted/70 max-w-lg text-sm md:text-base leading-relaxed"
        >
          Building innovative solutions at the intersection of software, AI, and
          hardware simulation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#projects"
            id="cta-view-projects"
            className="border border-primary text-primary px-8 py-3 font-mono text-sm tracking-wide
                       hover:bg-primary hover:text-background transition-all duration-300
                       hover:shadow-[0_0_25px_rgba(197,157,95,0.3)]"
          >
            View Projects
          </a>
          <a
            href="https://github.com/RajAgr-awal"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-github"
            className="flex items-center justify-center gap-2 bg-secondary text-muted px-8 py-3 font-mono text-sm tracking-wide
                       hover:bg-secondary-light hover:text-foreground transition-all duration-300
                       border border-white/5 hover:border-white/10"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-muted/40 text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
