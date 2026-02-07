"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";

export function Header() {
    const { language, switchLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { href: "#about", label: t("nav.about") },
        { href: "#skills", label: t("nav.skills") },
        { href: "#experience", label: t("nav.experience") },
        { href: "#projects", label: t("nav.projects") },
        { href: "#contact", label: t("nav.contact") },
    ];

    const toggleLanguage = () => {
        switchLanguage(language === "en" ? "he" : "en");
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a
                        href="#"
                        className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        <Image src="/logo_small.png" alt="Logo" width={32} height={32} className="w-8 h-8" />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {item.label}
                            </a>
                        ))}
                        <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <span className="uppercase">{language === "en" ? "HE" : "EN"}</span>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                            <Globe className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
