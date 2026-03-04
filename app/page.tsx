import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection, Footer } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <AboutSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <SkillsSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <ProjectsSection />
        <div className="mx-auto max-w-6xl px-6">
          <hr className="border-border" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
