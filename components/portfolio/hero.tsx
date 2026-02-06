"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    const { t, isRTL } = useLanguage();

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements - Blue and Purple */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 ${isRTL ? "lg:order-2" : ""}`}>
                        <div className="space-y-4">
                            <p className="text-primary font-mono text-sm tracking-wider animate-fade-in-up">{t("hero.greeting")}</p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in-up animation-delay-200 ">
                                {t("hero.name")}
                            </h1>
                            <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light animate-fade-in-up animation-delay-300">
                                {t("hero.title")}
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up animation-delay-400">
                            {t("hero.subtitle")}
                        </p>

                        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-500">
                            <Button asChild size="lg" className="gap-2">
                                <a href="#projects">
                                    {t("hero.cta")}
                                    <ArrowDown className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="#contact">{t("hero.contact")}</a>
                            </Button>
                        </div>

                        <div className="flex gap-4 pt-4 animate-fade-in-up animation-delay-600">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Code Block */}
                    <div className={`w-full ${isRTL ? "lg:order-1" : ""}`}>
                        <div className="relative animate-fade-in animation-delay-300  w-full max-w-[300px] sm:max-w-lg mx-auto lg:max-w-none">
                            {/* Animated glow effect */}
                            <div className="absolute -inset-4 animate-gradient-border-glow rounded-2xl" />
                            {/* Animated border */}
                            <div className="absolute -inset-px animate-gradient-border rounded-xl" />
                            <div className="relative bg-card rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                                    <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                                </div>
                                <pre className="text-muted-foreground overflow-x-auto">
                                    <code>{`const developer = {
  name: "Avraham Sason",
  location: "Elad, Israel",
  role: "Full Stack Developer",
  
  skills: {
    frontend: ["React", "Next.js", "Vue"],
    backend: ["Node.js", "Express"],
    cloud: ["GCP", "Docker", "K8s"],
  },
  
  currentFocus: "Building scalable
    web applications",
  
  passion: "Clean code &
    great UX",
};`}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </div>
        </section>
    );
}
