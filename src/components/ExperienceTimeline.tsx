"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, Code2, Trophy, Landmark } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    date: "2025 — Present",
    title: "Amity University",
    subtitle: "B.Tech — Computer Science & Engineering | 2nd Semester",
    description:
      "Currently pursuing a B.Tech in Computer Science & Engineering, currently in the 2nd semester. Focused on building a strong foundation in programming, data structures, algorithms, and emerging technologies like AI and hardware simulation.",
    icon: GraduationCap,
    tags: ["Computer Science", "2nd Semester", "B.Tech CSE"],
  },
  {
    date: "2025",
    title: "Smart India Hackathon (SIH) 2025",
    subtitle: "National Level Hackathon",
    description:
      "Participated in Smart India Hackathon 2025, India's premier national-level hackathon. Collaborated in a team to develop innovative solutions addressing real-world problem statements posed by government and industry partners.",
    icon: Trophy,
    tags: ["SIH 2025", "Team Collaboration", "Problem Solving"],
  },
  {
    date: "2025",
    title: "Zinnovation 3.0",
    subtitle: "Innovation Competition",
    description:
      "Competed in Zinnovation 3.0, showcasing creative engineering solutions and innovative thinking. Applied cross-disciplinary knowledge spanning software development, AI integration, and hardware design.",
    icon: Zap,
    tags: ["Innovation", "Competition", "Engineering"],
  },
  {
    date: "2025",
    title: "IIT Tech Fest Workshops",
    subtitle: "IIT Bombay · IIT Delhi · IIT Roorkee",
    description:
      "Attended technical workshops across India's top engineering institutions — IIT Bombay, IIT Delhi, and IIT Roorkee tech fests. Gained hands-on exposure to cutting-edge technologies, industry practices, and research-driven engineering approaches.",
    icon: Landmark,
    tags: ["IIT Bombay", "IIT Delhi", "IIT Roorkee", "Workshops"],
  },
  {
    date: "2025 — Present",
    title: "Full-Stack & Simulation Projects",
    subtitle: "Independent Development",
    description:
      "Designed and developed Forge Sim (Mechanical & Electronic co-design tool) and Heritage Travel Architect (AI-curated cultural travel). Built with modern tech stacks including Next.js, Python, and physics engines.",
    icon: Code2,
    tags: ["Next.js", "Python", "Physics Simulation"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      {/* Section divider */}
      <div className="section-divider max-w-5xl mx-auto mb-24" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="EXPERIENCE"
          subtitle="A chronological journey through learning, building, and innovating."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 md:pl-20 group"
                >
                  {/* Node dot */}
                  <div className="absolute left-[14px] md:left-[22px] top-1 w-[13px] h-[13px] rounded-full border-2 border-primary/60 bg-background group-hover:border-primary group-hover:shadow-[0_0_12px_rgba(197,157,95,0.4)] transition-all duration-300">
                    <div className="absolute inset-[3px] rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors duration-300" />
                  </div>

                  {/* Date */}
                  <div className="font-mono text-xs text-primary/70 tracking-wider mb-2">
                    {exp.date}
                  </div>

                  {/* Card */}
                  <div className="bg-secondary/50 border border-white/5 rounded-lg p-5 md:p-6 hover:border-card-border hover:bg-secondary transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-mono text-primary/70 mt-0.5">
                          {exp.subtitle}
                        </p>
                        <p className="text-muted text-sm leading-relaxed mt-3">
                          {exp.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[11px] font-mono text-muted border border-white/10 rounded-full"
                            >
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
