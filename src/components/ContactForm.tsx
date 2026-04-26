"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset to idle after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const inputClasses =
    "w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-foreground text-sm font-mono placeholder-muted/40 transition-all duration-300";

  const isDisabled = status === "submitting" || status === "success";

  return (
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
          onChange={handleChange("name")}
          className={inputClasses}
          placeholder="John Doe"
          disabled={isDisabled}
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
          onChange={handleChange("email")}
          className={inputClasses}
          placeholder="john@example.com"
          disabled={isDisabled}
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
          onChange={handleChange("message")}
          className={`${inputClasses} resize-none`}
          placeholder="Tell me about your project..."
          disabled={isDisabled}
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 text-green-400 text-sm font-mono bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
          <CheckCircle size={16} />
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm font-mono bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        id="contact-submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3
                   bg-primary text-background font-mono text-sm font-semibold tracking-wide
                   hover:bg-primary-light transition-all duration-300
                   hover:shadow-[0_0_25px_rgba(197,157,95,0.3)]
                   disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-background/30 border-t-background animate-spin" />
            Sending...
          </span>
        ) : status === "success" ? (
          <span className="flex items-center gap-2">
            <CheckCircle size={16} />
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
  );
}
