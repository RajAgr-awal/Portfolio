"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Presentation, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Vibecoding", level: 90 },
    ],
  },
  {
    title: "Design & Creative",
    icon: Palette,
    skills: [
      { name: "Canva", level: 92 },
      { name: "Presentations", level: 88 },
      { name: "Templates", level: 85 },
    ],
  },
];

const allSkills = [
  { name: "Vibecoding", icon: Sparkles },
  { name: "C", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "Canva", icon: Palette },
  { name: "Presentations", icon: Presentation },
  { name: "Templates", icon: Palette },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      {/* Section divider */}
      <div className="section-divider max-w-5xl mx-auto mb-24" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="SKILLS"
          subtitle="Technologies and tools I work with to bring ideas to life."
        />

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                className="bg-secondary/50 border border-white/5 rounded-lg p-6 md:p-8
                           hover:border-card-border hover:bg-secondary transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <CatIcon size={20} />
                  </div>
                  <h3 className="font-mono text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.15 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm text-foreground/90">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-primary/70">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.15 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-dark via-primary to-primary-light"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Pills — Quick Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {allSkills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.06 }}
                className="group flex items-center gap-2 px-4 py-2 bg-secondary border border-white/5 rounded-full
                           hover:border-primary/40 hover:bg-secondary-light hover:shadow-[0_0_15px_rgba(197,157,95,0.1)]
                           transition-all duration-300 cursor-default"
              >
                <SkillIcon
                  size={14}
                  className="text-primary/60 group-hover:text-primary transition-colors"
                />
                <span className="font-mono text-xs text-muted group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
