"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React / Next.js",
      "TypeScript",
      "HTML5 / CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js / Express",
      "C# / .NET / ASP.NET",
      "Python / FastAPI / Django",
      "REST APIs",
      "Authentication / JWT",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      // "Kubernetes",
      "AWS",
      "Azure",
      "CI/CD Pipelines",
      "Infrastructure as Code",
    ],
  },
]

const experience = [
  {
    period: "Aug 2025 — Feb 2026",
    role: "Full-Stack Software Developer",
    company: "Elan Tour De Force, 28 Burnett Street Hatfield, Pretoria · Remote",
    description: [
      "Responsible for building and maintaining a scalable backend for product management using Clean Architecture, domain-driven principles, and event-driven patterns.",
      "Implements secure authentication and authorization (JWT, role-based access, rate limiting) to protect sensitive business operations.",
      "Develops production-ready REST APIs that power internal tools, admin dashboards, and customer-facing systems.",
      "Designs and manages the PostgreSQL database, ensuring clean migrations, data integrity, and high-performance queries.",
      "Implements full audit logging to provide visibility, accountability, and traceability across all platform activities.",
      "Improves system speed and stability through caching strategies and back-end performance optimisations.",
      "Dockerizes services and automates deployments to reduce errors, increase reliability, and streamline release cycles.",
      "Plans environment orchestration and deployment for different environments, ensuring consistent, secure, and isolated dev and production systems.",
    ],
    technologies: ["C#", ".NET", "React", "PostgreSQL", "Docker", "AWS"],
  },
  {
    period: "Mar 2024 — jun 2025",
    role: "Software Developer",
    company: "Param Solutions, Parktown north, Randburg · Remote",
    description: [
      "Utilized C# ASP.NET Core to design and implement robust and scalable applications that can handle high traffic loads without compromising performance.",
      "Worked within a microservices architecture that enabled independent deployments, clearer service boundaries, and faster iteration cycles.",
      "Used CQRS with delegates within Clean Architecture to improve code maintainability, separation of concerns, and scalability while reducing coupling between application layers.",
      "Implemented CI/CD pipelines to catch errors early in the development process.",
      "Diagnosed and resolved post-deployment failures on Azure, including service crashes, publishing profile issues, and MongoDB connectivity errors, ensuring rapid recovery and minimal downtime.",
      "Developed and integrated APIs using FastAPI, enabling high-performance backend services and faster response times.",
      "Worked on cross-platform .NET MAUI applications, improving accessibility and user experience across multiple devices.",
      "Worked on Next.js frontend, integrating APIs and ensuring seamless communication with backend services.",
      "Performed unit testing and validation to maintain high code quality and prevent regressions.",
      "Optimized web applications for responsiveness and mobile performance across devices.",
    ],
    technologies: ["React", "Next.js","C# ASP.NET Core", "MongoDB","Microservices", "Docker", "Azure"],
  },
  {
    period: "April 2024 — Jun 2024",
    role: "Frontend Developer · Remote",
    company: "Defopage",
    description: [
      "Successfully translated Figma designs into fully responsive, SEO-optimized HTML pages, ensuring high performance and accessibility.",
      "Implemented cross-browser compatibility, delivering consistent and polished user experiences across all major web browsers and devices.",
    ],
    technologies: ["HTML", "TypeScript", "CSS3", "Bootstrap", "JavaScript"],
  },
{
    period: "Jan 2022 — March 2023",
    role: "Freelance Junior Developer",
    company: "Self-Employed · Remote",
    description: [
      "Built and delivered responsive websites and landing pages for small businesses and clients using HTML, CSS, and JavaScript.",
      "Translated client briefs and wireframes into clean, functional frontend interfaces with attention to layout, spacing, and typography.",
      "Ensured cross-browser compatibility and mobile responsiveness across all delivered projects.",
      "Managed client communication, gathered requirements, and iterated on designs based on feedback.",
      "Integrated third-party APIs and services such as contact forms, maps, and social media feeds.",
      "Optimized page load performance through image compression, lazy loading, and minimal dependency usage.",
      "Maintained and updated existing client websites, fixing bugs and improving UI consistency.",
      "Practiced version control using Git and GitHub for source management and project delivery.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative px-6 py-24 lg:py-32"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Skills & Experience
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My technical toolkit
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="mb-24 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/20 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 100}ms` }}
            >
              {/* Subtle hover accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Category header */}
              <div className="mb-5 flex items-center gap-2">
                <span className="text-xs text-primary">◆</span>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${200 + catIndex * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="mb-10 text-2xl font-bold tracking-tight text-foreground">
            Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block" />

            <div className="flex flex-col gap-10">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col gap-4 transition-all duration-700 md:flex-row md:gap-10 md:pl-8 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${700 + index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-1 top-1.5 hidden h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-150 group-hover:bg-primary md:block" />

                  {/* Period */}
                  <div className="flex-shrink-0 md:w-40">
                    <span className="font-mono text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20">
                    <h4 className="text-base font-semibold text-foreground">
                      {exp.role}{" "}
                      <span className="text-primary">
                        {"· "}
                        {exp.company}
                      </span>
                    </h4>
                    <ul className="mt-2 flex flex-col gap-1">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-1 text-primary">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}