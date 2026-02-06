import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "Avraham Sason | Full Stack Developer",
    description:
        "Senior Full Stack Developer specializing in React, TypeScript, Node.js, and cloud infrastructure. Building scalable, production-grade web applications.",
    keywords: ["Full Stack Developer", "React", "TypeScript", "Node.js", "Next.js", "Cloud", "Kubernetes", "GCP"],
    authors: [{ name: "Avraham Sason" }],
    creator: "Avraham Sason",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/logo_32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/logo_32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        apple: "/logo_small.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#0f172a",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <body className="font-sans antialiased w-full overflow-x-hidden">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
