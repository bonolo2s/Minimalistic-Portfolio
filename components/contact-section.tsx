"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react"

const socials = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/yourprofile",
    href: "https://github.com",
    icon: Github,
  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData()
    data.append("First Name", formState.firstName)
    data.append("Last Name", formState.lastName)
    data.append("Email", formState.email)
    data.append("Message", formState.message)
    data.append("_captcha", "false")

    await fetch("https://formsubmit.co/bonololloyd003@gmail.com", {
      method: "POST",
      body: data,
    })

    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-6 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Let's work together"}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {"If you would like to discuss a project or just say hi, I'm always down to chat. Feel free to reach out through any of the channels below."}
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row">

          {/* Socials */}
          <div
            className={`flex flex-col gap-4 lg:w-72 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {socials.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-700 hover:border-primary/30 hover:bg-primary/5 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                  <social.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{social.label}</p>
                  <p className="text-xs text-muted-foreground">{social.value}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`flex-1 rounded-xl border border-border bg-card p-6 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send size={20} />
                </div>
                <p className="font-semibold text-foreground">Message sent!</p>
                <p className="text-sm text-muted-foreground">{"I'll get back to you soon."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex flex-1 flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      value={formState.firstName}
                      onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      value={formState.lastName}
                      onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Dev<span className="text-primary">Portfolio</span>.
        </a>
        <p className="text-sm text-muted-foreground">
          {"Designed & built with care. \u00A9 "}
          {new Date().getFullYear()}
          {" All rights reserved."}
        </p>
        <div className="flex items-center gap-4">
          {[Github, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              aria-label="Social link"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}