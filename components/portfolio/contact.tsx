"use client"

import { useLanguage } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, ArrowRight, Github, Linkedin } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "nahum.takum@example.com",
      href: "mailto:nahum.takum@example.com",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.locationValue"),
    },
    {
      icon: Clock,
      label: t("contact.availability"),
      value: t("contact.availabilityValue"),
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-10 translate-x-10"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-primary font-mono text-sm tracking-wider mb-2">
              {t("contact.title")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("contact.heading")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subheading")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl transition-all duration-300 hover:border-primary/30"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border rounded-xl p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to build something great?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I&apos;m always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out.
                </p>
                <Button asChild size="lg" className="w-fit gap-2">
                  <a href="mailto:nahum.takum@example.com">
                    {t("contact.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
