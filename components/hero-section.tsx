"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowDown, Github } from "lucide-react"

const roles = [
  "a Software Developer.",
  "a Backend Developer.",
  "an API and Backend Developer.",
  "an End-to-End Solution Owner.",
  "an Infrastructure and Automation Specialist.",
  "a Cloud and DevOps Enthusiast.",
]

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleTyping = useCallback(() => {
    const currentRole = roles[currentRoleIndex]

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      } else {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      } else {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }
    }
  }, [currentRoleIndex, displayText, isDeleting])

  useEffect(() => {
    const speed = isDeleting ? 30 : 70
    const timeout = setTimeout(handleTyping, speed)
    return () => clearTimeout(timeout)
  }, [handleTyping, isDeleting])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Availability badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              Available for new opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`text-balance text-4xl font-bold leading-tight tracking-tight text-foreground transition-all delay-200 duration-700 sm:text-5xl lg:text-6xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Building digital{" "}
            <span className="text-primary">experiences</span> that matter.
          </h1>

          {/* Typing animation */}
          <div
            className={`mt-6 h-8 transition-all delay-300 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="font-mono text-lg text-muted-foreground">
              {"I am "}
              <span className="text-primary">{displayText}</span>
              <span className="animate-blink text-primary">|</span>
            </p>
          </div>

          {/* Description */}
          <p
            className={`mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground transition-all delay-[400ms] duration-700 lg:mx-0 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {
              "I'm a full-stack developer specializing in building exceptional digital experiences. Driven by detail and a passion for learning, I craft top-notch web applications that work in the real world."
            }
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all delay-500 duration-700 lg:justify-start ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              View My Work
              <ArrowDown
                size={16}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary hover:border-muted-foreground/30"
            >
              <Github size={16} />
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Professional Image */}
        <div
          className={`relative flex-shrink-0 transition-all delay-500 duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative h-72 w-72 lg:h-80 lg:w-80">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-border bg-secondary">
              <img
                src="/bonolo.jpg"
                alt="Bonolo Selowa"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  )
}