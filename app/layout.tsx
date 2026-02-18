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

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: "Avraham Sason | Full Stack Developer",
    description:
        "Senior Full Stack Developer specializing in React, TypeScript, Node.js, and cloud infrastructure. Building scalable, production-grade web applications.",
    keywords: ["Full Stack Developer", "React", "TypeScript", "Node.js", "Next.js", "Cloud", "Kubernetes", "GCP"],
    authors: [{ name: "Avraham Sason" }],
    creator: "Avraham Sason",
    generator: "Avraham-Sason.app",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: "Avraham Sason",
        title: "Avraham Sason | Full Stack Developer",
        description:
            "Senior Full Stack Developer specializing in React, TypeScript, Node.js, and cloud infrastructure. Building scalable, production-grade web applications.",
        images: [
            {
                url: "/logo_small.png",
                width: 512,
                height: 512,
                alt: "Avraham Sason - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Avraham Sason | Full Stack Developer",
        description:
            "Senior Full Stack Developer specializing in React, TypeScript, Node.js, and cloud infrastructure.",
        images: ["/logo_small.png"],
    },
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
