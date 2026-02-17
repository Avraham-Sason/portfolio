"use client"

import { useLanguage } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const TextParagraph = ({
  text,
  isLarge = false,
}: {
  text: string
  isLarge?: boolean
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <p
      ref={ref}
      className={`text-muted-foreground leading-relaxed transition-all duration-700 ${
        isLarge ? "text-lg" : ""
      } ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : "opacity-0 -translate-y-10 -translate-x-10"
      }`}
    >
      {text}
    </p>
  )
}

const StatCard = ({
  stat,
}: {
  stat: { value: string; label: string }
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`bg-secondary/50 border border-border rounded-xl p-6 text-center transition-all duration-700 hover:border-primary/50 hover:bg-secondary hover:-translate-y-1 ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : "opacity-0 translate-y-10 translate-x-10"
      }`}
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {stat.value}
      </div>
      <div className="text-sm text-muted-foreground">
        {stat.label}
      </div>
    </div>
  )
}

export function About() {
  const { t, isRTL } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    { value: "3+", label: t("about.years") },
    { value: "30+", label: t("about.projects") },
    { value: "25+", label: t("about.technologies") },
  ]

  const paragraphs = [
    { text: t("about.p1"), isLarge: true },
    { text: t("about.p2"), isLarge: false },
    { text: t("about.p3"), isLarge: false },
  ]

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-10 -translate-x-10"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-primary font-mono text-sm tracking-wider mb-2">
              {t("about.title")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t("about.heading")}
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className={`lg:col-span-3 space-y-6 ${isRTL ? "lg:order-2" : ""}`}>
              {paragraphs.map((paragraph, index) => (
                <TextParagraph
                  key={index}
                  text={paragraph.text}
                  isLarge={paragraph.isLarge}
                />
              ))}
            </div>

            {/* Stats */}
            <div className={`lg:col-span-2 ${isRTL ? "lg:order-1" : ""}`}>
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
