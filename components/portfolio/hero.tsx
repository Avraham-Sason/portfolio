"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import MyImage from "../MyImage";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <HeroBackground />
            <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-32 relative flex flex-col gap-10">
                <div className=" flex gap-10 items-center flex-wrap justify-center">
                    <HeroTextContent />
                    <MyImage className="w-full 2xl:w-96 " containerClassName="" />
                </div>
                <HeroCodeBlock />
            </div>

            <HeroScrollIndicator />
        </section>
    );
}

const heroCodeSnippet = `const developer = {
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
};`;

const heroSocialLinks = [
    {
        href: "https://github.com",
        label: "GitHub",
        Icon: Github,
        target: "_blank",
        rel: "noopener noreferrer",
    },
    {
        href: "https://linkedin.com",
        label: "LinkedIn",
        Icon: Linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
    },
    {
        href: "mailto:contact@example.com",
        label: "Email",
        Icon: Mail,
    },
];

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
    );
};

const HeroHeading = () => {
    const { t } = useLanguage();
    return (
        <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider animate-fade-in-up">{t("hero.greeting")}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in-up animation-delay-200 ">{t("hero.name")}</h1>
            <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light animate-fade-in-up animation-delay-300">{t("hero.title")}</h2>
        </div>
    );
};

const HeroActions = () => {
    const { t } = useLanguage();

    return (
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
    );
};

const HeroSocialLinks = () => {
    return (
        <div className="flex gap-4 pt-4 animate-fade-in-up animation-delay-600">
            {heroSocialLinks.map(({ href, label, Icon, target, rel }) => (
                <a
                    key={label}
                    href={href}
                    target={target}
                    rel={rel}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={label}
                >
                    <Icon className="h-5 w-5" />
                </a>
            ))}
        </div>
    );
};

const HeroTextContent = () => {
    const { t, isRTL } = useLanguage();
    return (
        <div className={`space-y-8 ${isRTL ? "lg:order-2" : ""}`}>
            <HeroHeading />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up animation-delay-400">{t("hero.subtitle")}</p>
            <HeroActions />
            <HeroSocialLinks />
        </div>
    );
};

const HeroCodeBlock = () => {
    const { isRTL } = useLanguage();
    return (
        <div className={`w-full ${isRTL ? "lg:order-1" : ""}`}>
            <div className="relative animate-fade-in animation-delay-300  w-full max-w-[300px] sm:max-w-lg mx-auto lg:max-w-none">
                <div className="absolute -inset-4 animate-gradient-border-glow rounded-2xl" />
                <div className="absolute -inset-px animate-gradient-border rounded-xl" />
                <div className="relative bg-card rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-destructive/50" />
                        <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                        <div className="w-3 h-3 rounded-full bg-primary/50" />
                    </div>
                    <pre className="text-muted-foreground overflow-x-auto">
                        <code>{heroCodeSnippet}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

const HeroScrollIndicator = () => {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
    );
};
