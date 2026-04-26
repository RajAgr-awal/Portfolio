"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only for now — can integrate with API route or Formspree later
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-24 md:pt-32 pb-8 px-6">
      {/* Gold divider */}
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
              <span className="font-mono text-2xl font-bold text-primary">
                {">"}
              </span>
              <span className="font-mono text-xl font-semibold">RA</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Full-Stack Developer & Hardware Enthusiast based in India.
              Passionate about building tools that merge software intelligence
              with physical simulation.
            </p>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Projects", href: "#projects" },
                  { label: "Experience", href: "#experience" },
                  { label: "The Lab", href: "#lab" },
                ].map((link) => (
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
                  href="https://www.linkedin.com/in/raj-agrawal-52b412260/"
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
                  href="https://github.com/RajAgr-awal"
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
                  href="mailto:contact@rajagrawal.dev"
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-muted mb-2 tracking-wider uppercase"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-foreground text-sm font-mono
                             placeholder-muted/40 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono text-muted mb-2 tracking-wider uppercase"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-foreground text-sm font-mono
                             placeholder-muted/40 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-muted mb-2 tracking-wider uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-foreground text-sm font-mono
                             placeholder-muted/40 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3
                           bg-primary text-background font-mono text-sm font-semibold tracking-wide
                           hover:bg-primary-light transition-all duration-300
                           hover:shadow-[0_0_25px_rgba(197,157,95,0.3)]
                           disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitted}
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-background/30 border-t-background animate-spin" />
                    Message Sent!
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/50 text-xs font-mono">
            © {new Date().getFullYear()} Raj Agrawal. All rights reserved.
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
