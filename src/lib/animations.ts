// ── Shared Framer Motion animation presets ──────────────────────────
// Reusable variants to keep components DRY.

import type { Variants } from "framer-motion";

/** Standard fade-up used by most sections */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/** Slide-in from left (timeline items) */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

/** Scale-in (logo, pills) */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/** Default viewport trigger for whileInView */
export const defaultViewport = { once: true, margin: "-80px" as const };

/** Staggered children container */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
