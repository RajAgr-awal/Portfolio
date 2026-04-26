"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, Code2, Trophy, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCES } from "@/lib/data";
import { defaultViewport } from "@/lib/animations";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap, Zap, Code2, Trophy, Landmark,
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div className="section-divider max-w-5xl mx-auto mb-24" />
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="EXPERIENCE"
          subtitle="A chronological journey through learning, building, and innovating."
        />
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const Icon = ICON_MAP[exp.iconName];
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={defaultViewport}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 md:pl-20 group"
                >
                  <div className="absolute left-[14px] md:left-[22px] top-1 w-[13px] h-[13px] rounded-full border-2 border-primary/60 bg-background group-hover:border-primary group-hover:shadow-[0_0_12px_rgba(197,157,95,0.4)] transition-all duration-300">
                    <div className="absolute inset-[3px] rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors duration-300" />
                  </div>
                  <div className="font-mono text-xs text-primary/70 tracking-wider mb-2">
                    {exp.date}
                  </div>
                  <div className="bg-secondary/50 border border-white/5 rounded-lg p-5 md:p-6 hover:border-card-border hover:bg-secondary transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm font-mono text-primary/70 mt-0.5">{exp.subtitle}</p>
                        <p className="text-muted text-sm leading-relaxed mt-3">{exp.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-[11px] font-mono text-muted border border-white/10 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
