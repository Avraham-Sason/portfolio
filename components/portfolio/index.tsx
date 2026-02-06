"use client"

import { useLanguage } from "@/lib/i18n"
import { Header } from "./header"
import { Hero } from "./hero"
import { About } from "./about"
import { Skills } from "./skills"
import { Experience } from "./experience"
import { Projects } from "./projects"
import { Infrastructure } from "./infrastructure"
import { Contact } from "./contact"
import { Footer } from "./footer"

export function Portfolio() {
  const { isRTL } = useLanguage()

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-dvh w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
