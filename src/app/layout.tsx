import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raj Agrawal — Full Stack Developer & Hardware Enthusiast",
  description:
    "Portfolio of Raj Agrawal — Full-Stack Developer, AI Integrator, and Hardware Simulation Enthusiast. Explore projects like Forge Sim and Heritage Travel Architect.",
  keywords: [
    "Raj Agrawal",
    "Full Stack Developer",
    "Hardware Simulation",
    "AI Integration",
    "Portfolio",
    "Forge Sim",
    "Heritage Travel",
  ],
  authors: [{ name: "Raj Agrawal" }],
  openGraph: {
    title: "Raj Agrawal — Full Stack Developer & Hardware Enthusiast",
    description:
      "Explore innovative projects by Raj Agrawal — from unified hardware simulations to AI-curated cultural travel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
