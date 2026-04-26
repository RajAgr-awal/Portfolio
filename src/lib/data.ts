// ── Static data for all portfolio sections ──────────────────────────
// Single source of truth — components import from here.

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "The Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
] as const;

export const TYPEWRITER_TEXTS = [
  "Full-Stack Developer",
  "Hardware Simulation Enthusiast",
  "AI Integrator",
  "Universal Designer",
] as const;

export const PROJECTS = [
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
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "Programming",
    iconName: "Code2" as const,
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Vibecoding", level: 90 },
    ],
  },
  {
    title: "Design & Creative",
    iconName: "Palette" as const,
    skills: [
      { name: "Canva", level: 92 },
      { name: "Presentations", level: 88 },
      { name: "Templates", level: 85 },
    ],
  },
] as const;

export const SKILL_PILLS = [
  { name: "Vibecoding", iconName: "Sparkles" as const },
  { name: "C", iconName: "Code2" as const },
  { name: "C++", iconName: "Code2" as const },
  { name: "Canva", iconName: "Palette" as const },
  { name: "Presentations", iconName: "Presentation" as const },
  { name: "Templates", iconName: "Palette" as const },
] as const;

export const EXPERIENCES = [
  {
    date: "2025 — Present",
    title: "Amity University",
    subtitle: "B.Tech — Computer Science & Engineering | 2nd Semester",
    description:
      "Currently pursuing a B.Tech in Computer Science & Engineering, currently in the 2nd semester. Focused on building a strong foundation in programming, data structures, algorithms, and emerging technologies like AI and hardware simulation.",
    iconName: "GraduationCap" as const,
    tags: ["Computer Science", "2nd Semester", "B.Tech CSE"],
  },
  {
    date: "2025",
    title: "Smart India Hackathon (SIH) 2025",
    subtitle: "National Level Hackathon",
    description:
      "Participated in Smart India Hackathon 2025, India's premier national-level hackathon. Collaborated in a team to develop innovative solutions addressing real-world problem statements posed by government and industry partners.",
    iconName: "Trophy" as const,
    tags: ["SIH 2025", "Team Collaboration", "Problem Solving"],
  },
  {
    date: "2025",
    title: "Zinnovation 3.0",
    subtitle: "Innovation Competition",
    description:
      "Competed in Zinnovation 3.0, showcasing creative engineering solutions and innovative thinking. Applied cross-disciplinary knowledge spanning software development, AI integration, and hardware design.",
    iconName: "Zap" as const,
    tags: ["Innovation", "Competition", "Engineering"],
  },
  {
    date: "2025",
    title: "IIT Tech Fest Workshops",
    subtitle: "IIT Bombay · IIT Delhi · IIT Roorkee",
    description:
      "Attended technical workshops across India's top engineering institutions — IIT Bombay, IIT Delhi, and IIT Roorkee tech fests. Gained hands-on exposure to cutting-edge technologies, industry practices, and research-driven engineering approaches.",
    iconName: "Landmark" as const,
    tags: ["IIT Bombay", "IIT Delhi", "IIT Roorkee", "Workshops"],
  },
  {
    date: "2025 — Present",
    title: "Full-Stack & Simulation Projects",
    subtitle: "Independent Development",
    description:
      "Designed and developed Forge Sim (Mechanical & Electronic co-design tool) and Heritage Travel Architect (AI-curated cultural travel). Built with modern tech stacks including Next.js, Python, and physics engines.",
    iconName: "Code2" as const,
    tags: ["Next.js", "Python", "Physics Simulation"],
  },
] as const;

export const BLOG_TOPICS = [
  {
    iconName: "Lightbulb" as const,
    title: "AI & Machine Learning Explorations",
    description: "Deep dives into LLM integration, prompt engineering, and intelligent systems.",
  },
  {
    iconName: "PenTool" as const,
    title: "Hardware Design Notes",
    description: "Lessons from building simulation tools and working with electronics.",
  },
  {
    iconName: "FileText" as const,
    title: "Dev Logs & Tutorials",
    description: "Technical walkthroughs, project updates, and coding insights.",
  },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/raj-agrawal-52b412260/",
  github: "https://github.com/RajAgr-awal",
  email: "mailto:contact@rajagrawal.dev",
  blog: "https://www.blogger.com/u/1/blog/posts/3759398930506238388",
} as const;
