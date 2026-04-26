"use client";

import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";

const projects = [
  {
    title: "Forge Sim",
    subtitle: "Mechanical & Electronic Co-Design",
    description:
      "A unified simulation environment giving designers full control over both the structural integrity and the logic/circuitry of their hardware. Real-time physics-based simulation with stress analysis, thermal modeling, and electronic signal flow — all in a single interface.",
    tags: ["Physics Engine", "3D Simulation", "Circuit Design", "Real-Time", "Co-Simulation"],
    image: "/forge-sim-preview.png",
    href: "#",
  },
  {
    title: "Heritage Travel Architect",
    subtitle: "Culture & Itinerary",
    description:
      "Using AI to curate travel experiences that respect local traditions and highlight historical landmarks. From Udaipur's palaces to hidden cultural gems, bridging the gap between tourism and deep cultural immersion through intelligent itinerary planning.",
    tags: ["AI/ML", "Travel Tech", "Cultural Mapping", "NLP", "Personalization"],
    image: "/heritage-travel-preview.png",
    href: "#",
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="CASE_STUDIES"
          subtitle="Flagship projects pushing the boundaries of simulation and intelligent design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <CaseStudyCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
