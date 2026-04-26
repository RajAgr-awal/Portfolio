import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import BlogLab from "@/components/BlogLab";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Skills />
        <ExperienceTimeline />
        <BlogLab />
      </main>
      <Footer />
    </>
  );
}
