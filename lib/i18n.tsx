"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type Language = "en" | "he";

interface LanguageContextType {
    language: Language;
    switchLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const translations = {
    en: {
        // Navigation
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero
        "hero.greeting": "Hello, I'm",
        "hero.name": "Avraham Sason",
        "hero.title": "Full Stack Developer",
        "hero.subtitle":
            "Building scalable, production-grade web applications with modern technologies. Specializing in frontend excellence and cloud infrastructure.",
        "hero.cta": "View My Work",
        "hero.contact": "Get in Touch",

        // About
        "about.title": "About",
        "about.heading": "Engineering with Purpose",
        "about.p1":
            "With over 3 years of experience in software development, I bring a thoughtful, hands-on approach to building digital products. Currently at Akeyless Telematics, I architect and develop full-stack solutions that serve real business needs.",
        "about.p2":
            "My philosophy centers on writing clean, maintainable code that scales. I believe in the power of well-structured systems and the importance of choosing the right tool for each challenge.",
        "about.p3":
            "Based in Elad, Israel, I balance my professional work with family life. This perspective has taught me the value of efficiency, clear communication, and building things that last.",
        "about.years": "Years Experience",
        "about.projects": "Projects Delivered",
        "about.technologies": "Technologies",

        // Skills
        "skills.title": "Skills",
        "skills.heading": "Technical Expertise",
        "skills.subheading": "A comprehensive toolkit refined over years of hands-on development",
        "skills.frontend": "Frontend",
        "skills.backend": "Backend",
        "skills.cloud": "Cloud & DevOps",
        "skills.ui": "UI Systems",
        "skills.automation": "Automation",
        "skills.tools": "Tools",

        // Experience
        "experience.title": "Experience",
        "experience.heading": "Professional Journey",
        "experience.present": "Present",
        "experience.akeyless.title": "Full Stack Developer",
        "experience.akeyless.company": "Akeyless Telematics",
        "experience.akeyless.period": "2022 - Present",
        "experience.akeyless.desc1": "Lead development of customer-facing web applications using React, TypeScript, and Next.js",
        "experience.akeyless.desc2": "Architect and implement scalable backend services with Node.js and Express",
        "experience.akeyless.desc3": "Design and maintain cloud infrastructure on Google Cloud Platform with Kubernetes",
        "experience.akeyless.desc4": "Implement Firebase solutions for authentication, real-time data, and storage",
        "experience.akeyless.desc5": "Build automation workflows using n8n for operational efficiency",

        // Projects
        "projects.title": "Projects",
        "projects.heading": "Selected Work",
        "projects.subheading": "Showcasing engineering depth and practical problem-solving",
        "projects.viewCode": "View Code",
        "projects.viewLive": "View Live",

        "projects.dashboard.title": "Dashboard",
        "projects.dashboard.desc":
            "Real-time fleet management system tracking 4,000+ vehicles with live map, speed, engine/battery status, and CANBUS data\nBuilt remote vehicle control (door lock, fuel cutoff), geo-boundary alerts, and full travel/event history\nDesigned a hierarchical permission system (customer → branches → vehicles/users/polygons) for multi-level access control",

        "projects.toolbox.title": "Toolbox",
        "projects.toolbox.desc":
            "Internal back-office system centralizing all company data across vehicles, transmitters, users, equipment, and charging stations\nSMS automation management for transmitters and full customer/vehicle association controls",

        "projects.installer.title": "Installer App",
        "projects.installer.desc":
            "Web app for field technicians covering full vehicle lifecycle: installation, maintenance, and uninstallation workflows",

        "projects.monitor.title": "Monitor",
        "projects.monitor.desc":
            "Real-time company health dashboard displaying live failure points and statistical data\n4-tier alert system (normal → warning → error → critical) with automated email and SMS notifications",

        "projects.knowledge.title": "Knowledge Base",
        "projects.knowledge.desc":
            "Full-stack platform (UI + API) serving as a single source of truth for all company technical assets — apps, servers, libraries, and internal services\nMaintains architecture overviews, dependencies, versioning info, and consolidated conclusions per project\nOn every merge to main, a GitHub Actions CI workflow triggers an AI agent that analyzes the changes and automatically updates all relevant documentation files — keeping docs accurate, consistent, and aligned with the live codebase",

        "projects.biServer.title": "BI Server",
        "projects.biServer.desc":
            "Backend service handling report generation, vehicle data processing, AI agent management, and background task execution\nSupports the Monitor system with real-time data and manages centralized information across the platform",

        "projects.devicesServer.title": "Devices Server",
        "projects.devicesServer.desc":
            "Core backend server managing all vehicle communication — activating actions, receiving transmitter and SIM data in real time\nIntegrated with 4 SIM providers and Mandy, exposing a customer-facing API for vehicle data retrieval\nSupports Dashboard, Installer App, and Toolbox while running background tasks in parallel",

        "projects.endUserServer.title": "End User Server",
        "projects.endUserServer.desc":
            "Manages end-customer data including user credits for external recharges\nHandles all outbound communications — email, SMS, and push notifications for end-users",

        "projects.chargeServer.title": "Charge Server",
        "projects.chargeServer.desc":
            "Manages full EV charging session lifecycle — sending start/end commands and receiving real-time charging status\nIntegrated with OCPI provider for standardized cross-network EV charging interoperability",

        "projects.dataSyncServer.title": "Data Sync Server",
        "projects.dataSyncServer.desc":
            "Syncs Firebase database to Redis, providing a shared cache layer across all servers and applications — optimizing read/write speeds and overall system performance",

        "projects.dataSocketServer.title": "Data Socket Server",
        "projects.dataSocketServer.desc":
            "Manages the full WebSocket session lifecycle (open, maintain, close) between browser clients and Redis for real-time data delivery",

        "projects.commons.title": "Akeyless Commons",
        "projects.commons.desc":
            "Four NPM libraries — server, client, assets, types — centralizing common recurring logic in one place for both client and server sides across all company projects",

        // Infrastructure
        "infra.title": "Infrastructure",
        "infra.heading": "Architecture Mindset",
        "infra.subheading": "Building systems that scale, perform, and endure",
        "infra.containers.title": "Containerization",
        "infra.containers.desc": "Docker-based development and deployment workflows ensuring consistency across environments",
        "infra.orchestration.title": "Orchestration",
        "infra.orchestration.desc": "Kubernetes expertise for managing complex, distributed systems at scale",
        "infra.cloud.title": "Cloud Native",
        "infra.cloud.desc": "Deep experience with Google Cloud Platform services and best practices",
        "infra.automation.title": "Automation",
        "infra.automation.desc": "Infrastructure as code and workflow automation for operational excellence",
        "infra.diagram.desc":
            "Modern architectures demand a holistic understanding of the entire stack. From user-facing interfaces to data persistence, every layer matters.",

        // Contact
        "contact.title": "Contact",
        "contact.heading": "Let's Connect",
        "contact.subheading": "Open to discussing new opportunities, technical challenges, or just connecting with fellow developers",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.phoneValue": "0546559314",
        "contact.availability": "Availability",
        "contact.availabilityValue": "Open to opportunities",
        "contact.cta": "Send Message",
        "contact.cta.title": "Ready to build something great?",
        "contact.cta.desc":
            "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.",

        // Footer
        "footer.rights": "All rights reserved.",
    },
    he: {
        // Navigation
        "nav.about": "אודות",
        "nav.skills": "מיומנויות",
        "nav.experience": "ניסיון",
        "nav.projects": "פרויקטים",
        "nav.contact": "יצירת קשר",

        // Hero
        "hero.greeting": "שלום, אני",
        "hero.title": "מפתח Full Stack",
        "hero.name": "אברהם ששון",
        "hero.subtitle": "בונה אפליקציות ווב ברמת ייצור עם טכנולוגיות מודרניות. מתמחה במצוינות בצד הלקוח ותשתיות ענן.",
        "hero.cta": "צפה בעבודות",
        "hero.contact": "צור קשר",

        // About
        "about.title": "אודות",
        "about.heading": "הנדסה עם מטרה",
        "about.p1":
            "עם למעלה מ-3 שנות ניסיון בפיתוח תוכנה, אני מביא גישה מחושבת ומעשית לבניית מוצרים דיגיטליים. כיום ב-Akeyless Telematics, אני מתכנן ומפתח פתרונות full-stack שמשרתים צרכים עסקיים אמיתיים.",
        "about.p2":
            "הפילוסופיה שלי מתמקדת בכתיבת קוד נקי וניתן לתחזוקה שמתרחב. אני מאמין בכוח של מערכות מובנות היטב ובחשיבות של בחירת הכלי הנכון לכל אתגר.",
        "about.p3":
            "מתגורר באלעד, ישראל, אני מאזן בין העבודה המקצועית לחיי המשפחה. פרספקטיבה זו לימדה אותי את ערך היעילות, התקשורת הברורה ובניית דברים שמחזיקים מעמד.",
        "about.years": "שנות ניסיון",
        "about.projects": "פרויקטים שסופקו",
        "about.technologies": "טכנולוגיות",

        // Skills
        "skills.title": "מיומנויות",
        "skills.heading": "מומחיות טכנית",
        "skills.subheading": "ארגז כלים מקיף שהשתכלל לאורך שנים של פיתוח מעשי",
        "skills.frontend": "צד לקוח",
        "skills.backend": "צד שרת",
        "skills.cloud": "ענן ו-DevOps",
        "skills.ui": "מערכות UI",
        "skills.automation": "אוטומציה",
        "skills.tools": "כלים",

        // Experience
        "experience.title": "ניסיון",
        "experience.heading": "מסע מקצועי",
        "experience.present": "הווה",
        "experience.akeyless.title": "מפתח Full Stack",
        "experience.akeyless.company": "Akeyless Telematics",
        "experience.akeyless.period": "2022 - הווה",
        "experience.akeyless.desc1": "מוביל פיתוח אפליקציות ווב ללקוחות באמצעות React, TypeScript ו-Next.js",
        "experience.akeyless.desc2": "מתכנן ומיישם שירותי backend סקיילביליים עם Node.js ו-Express",
        "experience.akeyless.desc3": "מעצב ומתחזק תשתית ענן על Google Cloud Platform עם Kubernetes",
        "experience.akeyless.desc4": "מיישם פתרונות Firebase לאימות, נתונים בזמן אמת ואחסון",
        "experience.akeyless.desc5": "בונה תהליכי אוטומציה באמצעות n8n ליעילות תפעולית",

        // Projects
        "projects.title": "פרויקטים",
        "projects.heading": "עבודות נבחרות",
        "projects.subheading": "מציג עומק הנדסי ופתרון בעיות מעשי",
        "projects.viewCode": "צפה בקוד",
        "projects.viewLive": "צפה בחי",

        "projects.dashboard.title": "Dashboard",
        "projects.dashboard.desc":
            "מערכת ניהול צי בזמן אמת המנטרת מעל 4,000 רכבים עם מפה חיה, מהירות, מצב מנוע/סוללה ונתוני CANBUS\nפיתוח שליטה מרחוק ברכב (נעילת דלתות, ניתוק דלק), התראות גבול גאוגרפי והיסטוריית נסיעות/אירועים מלאה\nתכנון מערכת הרשאות היררכית (לקוח ← סניפים ← רכבים/משתמשים/פוליגונים) לבקרת גישה רב-שכבתית",

        "projects.toolbox.title": "Toolbox",
        "projects.toolbox.desc":
            "מערכת back-office פנימית המרכזת את כל נתוני החברה — רכבים, משדרים, משתמשים, ציוד ועמדות טעינה\nניהול אוטומציית SMS למשדרים ובקרת שיוך לקוחות/רכבים מלאה",

        "projects.installer.title": "Installer App",
        "projects.installer.desc":
            "אפליקציית ווב לטכנאי שטח המכסה מחזור חיים מלא של רכב: התקנה, תחזוקה והסרה",

        "projects.monitor.title": "Monitor",
        "projects.monitor.desc":
            "לוח בריאות חברה בזמן אמת המציג נקודות כשל חיות ונתונים סטטיסטיים\nמערכת התראות ב-4 רמות (רגיל ← אזהרה ← שגיאה ← קריטי) עם שליחת אימייל ו-SMS אוטומטיים",

        "projects.knowledge.title": "Knowledge Base",
        "projects.knowledge.desc":
            "פלטפורמת פול-סטאק (UI + API) המשמשת כמקור אמת יחיד לכל הנכסים הטכניים של החברה — אפליקציות, שרתים, ספריות ושירותים פנימיים\nשומרת סקירות ארכיטקטורה, תלויות, מידע על גרסאות ומסקנות מאוחדות לכל פרויקט\nבכל merge ל-main, workflow של GitHub Actions מפעיל AI agent שמנתח את השינויים ומעדכן אוטומטית את כל קבצי התיעוד — שומר על תיעוד מדויק, עקבי ומסונכרן עם הקוד",

        "projects.biServer.title": "BI Server",
        "projects.biServer.desc":
            "שירות backend המטפל בהפקת דוחות, עיבוד נתוני רכב, ניהול AI agents וביצוע משימות רקע\nתומך במערכת ה-Monitor עם נתונים בזמן אמת ומנהל מידע מרוכז ברחבי הפלטפורמה",

        "projects.devicesServer.title": "Devices Server",
        "projects.devicesServer.desc":
            "שרת backend ליבתי המנהל את כל תקשורת הרכבים — הפעלת פעולות וקבלת נתוני משדר ו-SIM בזמן אמת\nאינטגרציה עם 4 ספקי SIM ו-Mandy, חושף API ללקוחות לאחזור נתוני רכב\nתומך ב-Dashboard, Installer App ו-Toolbox במקביל להרצת משימות רקע",

        "projects.endUserServer.title": "End User Server",
        "projects.endUserServer.desc":
            "מנהל נתוני לקוחות קצה כולל קרדיטים לטעינות חיצוניות\nמטפל בכל התקשורת היוצאת — אימייל, SMS והתראות push ללקוחות קצה",

        "projects.chargeServer.title": "Charge Server",
        "projects.chargeServer.desc":
            "מנהל מחזור חיים מלא של סשן טעינת רכב חשמלי — שליחת פקודות start/end וקבלת סטטוס טעינה בזמן אמת\nאינטגרציה עם ספק OCPI לתאימות בין-רשתית מתוקננת לטעינת EV",

        "projects.dataSyncServer.title": "Data Sync Server",
        "projects.dataSyncServer.desc":
            "מסנכרן את בסיס הנתונים Firebase ל-Redis, מספק שכבת cache משותפת לכל השרתים והאפליקציות — משפר מהירויות קריאה/כתיבה וביצועי המערכת כולה",

        "projects.dataSocketServer.title": "Data Socket Server",
        "projects.dataSocketServer.desc":
            "מנהל את מחזור החיים המלא של WebSocket (פתיחה, תחזוקה, סגירה) בין דפדפני לקוחות ל-Redis לאספקת נתונים בזמן אמת",

        "projects.commons.title": "Akeyless Commons",
        "projects.commons.desc":
            "ארבע ספריות NPM — server, client, assets, types — לריכוז לוגיקה משותפת חוזרת במקום אחד, גם בצד הלקוח וגם בצד השרת, לכל פרויקטי החברה",

        // Infrastructure
        "infra.title": "תשתית",
        "infra.heading": "חשיבה ארכיטקטונית",
        "infra.subheading": "בונה מערכות שמתרחבות, מבצעות ומחזיקות מעמד",
        "infra.containers.title": "קונטיינריזציה",
        "infra.containers.desc": "תהליכי פיתוח ופריסה מבוססי Docker המבטיחים עקביות בין סביבות",
        "infra.orchestration.title": "אורקסטרציה",
        "infra.orchestration.desc": "מומחיות ב-Kubernetes לניהול מערכות מורכבות ומבוזרות בקנה מידה",
        "infra.cloud.title": "Cloud Native",
        "infra.cloud.desc": "ניסיון עמוק בשירותי Google Cloud Platform ושיטות עבודה מומלצות",
        "infra.automation.title": "אוטומציה",
        "infra.automation.desc": "תשתית כקוד ואוטומציה של תהליכי עבודה למצוינות תפעולית",
        "infra.diagram.desc":
            "ארכיטקטורות מודרניות דורשות הבנה הוליסטית של כל ה-stack. מממשקי משתמש ועד אחסון נתונים, כל שכבה חשובה.",

        // Contact
        "contact.title": "יצירת קשר",
        "contact.heading": "בואו נתחבר",
        "contact.subheading": "פתוח לדיון על הזדמנויות חדשות, אתגרים טכניים, או סתם להתחבר עם מפתחים אחרים",
        "contact.email": "אימייל",
        "contact.phone": "טלפון",
        "contact.phoneValue": "0546559314",
        "contact.availability": "זמינות",
        "contact.availabilityValue": "פתוח להזדמנויות",
        "contact.cta": "שלח הודעה",
        "contact.cta.title": "מוכן לבנות משהו גדול?",
        "contact.cta.desc":
            "אני תמיד מעוניין לשמוע על פרויקטים והזדמנויות חדשות. בין אם יש לך שאלה או שאתה רק רוצה להגיד שלום, אל תהסס ליצור קשר.",

        // Footer
        "footer.rights": "כל הזכויות שמורות.",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLanguage = localStorage.getItem("language") as Language;
            if (savedLanguage && (savedLanguage === "en" || savedLanguage === "he")) {
                setLanguage(savedLanguage);
                document.documentElement.dir = savedLanguage === "he" ? "rtl" : "ltr";
            }
        }
    }, []);

    const switchLanguage = useCallback(
        (lang: Language) => {
            setLanguage(lang);
            document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
            if (typeof window !== "undefined") {
                localStorage.setItem("language", lang);
            }
        },
        []
    );

    const t = useCallback(
        (key: string): string => {
            return translations[language][key as keyof typeof translations.en] || key;
        },
        [language]
    );

    const isRTL = language === "he";

    return <LanguageContext.Provider value={{ language, switchLanguage, t, isRTL }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
