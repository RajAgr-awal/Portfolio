"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./icons";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { useHydrated } from "@/hooks/useHydration";

/** Subset of nav links shown in the footer */
const FOOTER_LINKS = NAV_LINKS.filter((l) =>
  ["Projects", "Experience", "The Lab"].includes(l.label)
);

export default function Footer() {
  const hydrated = useHydrated();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-24 md:pt-32 pb-8 px-6">
      <div className="section-divider max-w-5xl mx-auto mb-24" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="CONTACT"
          subtitle="Have a project idea or want to collaborate? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column — Info + Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-2xl font-bold text-primary">{">"}</span>
              <span className="font-mono text-xl font-semibold">RA</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Full-Stack Developer &amp; Hardware Enthusiast based in India.
              Passionate about building tools that merge software intelligence
              with physical simulation.
            </p>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted text-sm hover:text-primary transition-colors font-mono"
                  >
                    <span className="text-primary/50 mr-2">—</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
                Connect
              </h4>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-linkedin"
                  className="p-3 bg-secondary border border-white/5 rounded-lg text-muted
                             hover:text-primary hover:border-card-border hover:bg-secondary-light
                             transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="social-github"
                  className="p-3 bg-secondary border border-white/5 rounded-lg text-muted
                             hover:text-primary hover:border-card-border hover:bg-secondary-light
                             transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.email}
                  id="social-email"
                  className="p-3 bg-secondary border border-white/5 rounded-lg text-muted
                             hover:text-primary hover:border-card-border hover:bg-secondary-light
                             transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/50 text-xs font-mono">
            &copy; {hydrated ? new Date().getFullYear() : "2026"} Raj Agrawal. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            id="scroll-to-top"
            className="flex items-center gap-2 text-muted/50 text-xs font-mono hover:text-primary transition-colors"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
