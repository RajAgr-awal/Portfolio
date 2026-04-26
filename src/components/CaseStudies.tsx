"use client";

import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import { PROJECTS } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="CASE_STUDIES"
          subtitle="Flagship projects pushing the boundaries of simulation and intelligent design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <CaseStudyCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
