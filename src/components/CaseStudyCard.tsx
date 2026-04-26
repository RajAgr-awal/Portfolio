"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { defaultViewport } from "@/lib/animations";

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: readonly string[];
  image: string;
  href?: string;
  index: number;
}

export default function CaseStudyCard({
  title,
  subtitle,
  description,
  tags,
  image,
  href = "#",
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div
        className="relative overflow-hidden border border-card-border bg-secondary rounded-lg
                    transition-all duration-500
                    hover:border-primary/60
                    hover:shadow-[0_0_40px_rgba(197,157,95,0.12),0_0_80px_rgba(197,157,95,0.06)]"
      >
        {/* Image Area */}
        <div className="relative h-52 md:h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />

          {/* Subtitle badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-primary text-xs font-mono border border-card-border rounded-full">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-mono font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="mt-3 text-muted text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono text-primary/80 border border-primary/20 rounded-full
                           bg-primary/5 transition-colors duration-300
                           group-hover:border-primary/40 group-hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="mt-6 flex items-center gap-2 text-sm font-mono text-primary/70 group-hover:text-primary transition-colors duration-300">
            <span>View Case Study</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
          <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-primary/50 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
