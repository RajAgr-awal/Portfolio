"use client";

import { motion } from "framer-motion";
import { Terminal, ExternalLink, FileText, PenTool, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";

const blogTopics = [
  {
    icon: Lightbulb,
    title: "AI & Machine Learning Explorations",
    description: "Deep dives into LLM integration, prompt engineering, and intelligent systems.",
  },
  {
    icon: PenTool,
    title: "Hardware Design Notes",
    description: "Lessons from building simulation tools and working with electronics.",
  },
  {
    icon: FileText,
    title: "Dev Logs & Tutorials",
    description: "Technical walkthroughs, project updates, and coding insights.",
  },
];

export default function BlogLab() {
  return (
    <section id="lab" className="relative py-24 md:py-32 px-6">
      {/* Section divider */}
      <div className="section-divider max-w-5xl mx-auto mb-24" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="THE_LAB"
          subtitle="Experiments, thoughts, and technical deep-dives. Where ideas get tested."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-secondary/50 border border-white/5 rounded-lg p-6
                           hover:border-card-border hover:bg-secondary transition-all duration-300"
              >
                <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal-style CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 bg-secondary border border-white/5 rounded-lg p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-muted">~/the-lab</span>
          </div>

          <div className="font-mono text-sm text-muted space-y-2">
            <p>
              <span className="text-primary">$</span> cat README.md
            </p>
            <p className="text-foreground/80 pl-2">
              Welcome to The Lab — a collection of experiments, tutorials, and
              technical deep-dives from my journey in full-stack development,
              AI integration, and hardware simulation.
            </p>
            <p className="mt-4">
              <span className="text-primary">$</span> open blog
            </p>
          </div>

          <a
            href="https://www.blogger.com/u/1/blog/posts/3759398930506238388"
            target="_blank"
            rel="noopener noreferrer"
            id="blog-link"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-primary text-primary font-mono text-sm
                       hover:bg-primary hover:text-background transition-all duration-300
                       hover:shadow-[0_0_25px_rgba(197,157,95,0.3)]"
          >
            <Terminal size={16} />
            Visit The Lab
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
