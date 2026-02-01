"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Language = "en" | "he"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
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
    "hero.subtitle": "Building scalable, production-grade web applications with modern technologies. Specializing in frontend excellence and cloud infrastructure.",
    "hero.cta": "View My Work",
    "hero.contact": "Get in Touch",
    
    // About
    "about.title": "About",
    "about.heading": "Engineering with Purpose",
    "about.p1": "With over two decades of experience in software development, I bring a mature, thoughtful approach to building digital products. Currently at Akeyless Telematics, I architect and develop full-stack solutions that serve real business needs.",
    "about.p2": "My philosophy centers on writing clean, maintainable code that scales. I believe in the power of well-structured systems and the importance of choosing the right tool for each challenge.",
    "about.p3": "Based in Elad, Israel, I balance my professional work with family life. This perspective has taught me the value of efficiency, clear communication, and building things that last.",
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
    
    "projects.fleet.title": "Fleet Management Dashboard",
    "projects.fleet.desc": "Real-time vehicle tracking and analytics platform with interactive maps, live data streaming, and comprehensive reporting capabilities.",
    
    "projects.auth.title": "Enterprise Auth System",
    "projects.auth.desc": "Secure authentication microservice with role-based access control, OAuth integration, and audit logging for enterprise applications.",
    
    "projects.pipeline.title": "CI/CD Pipeline Framework",
    "projects.pipeline.desc": "Automated deployment infrastructure using Docker, Kubernetes, and GitHub Actions for seamless continuous delivery.",
    
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
    
    // Contact
    "contact.title": "Contact",
    "contact.heading": "Let's Connect",
    "contact.subheading": "Open to discussing new opportunities, technical challenges, or just connecting with fellow developers",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.locationValue": "Elad, Israel",
    "contact.availability": "Availability",
    "contact.availabilityValue": "Open to opportunities",
    "contact.cta": "Send Message",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js, TypeScript & Tailwind CSS",
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
    "about.p1": "עם יותר משני עשורים של ניסיון בפיתוח תוכנה, אני מביא גישה בוגרת ומחושבת לבניית מוצרים דיגיטליים. כיום ב-Akeyless Telematics, אני מתכנן ומפתח פתרונות full-stack שמשרתים צרכים עסקיים אמיתיים.",
    "about.p2": "הפילוסופיה שלי מתמקדת בכתיבת קוד נקי וניתן לתחזוקה שמתרחב. אני מאמין בכוח של מערכות מובנות היטב ובחשיבות של בחירת הכלי הנכון לכל אתגר.",
    "about.p3": "מתגורר באלעד, ישראל, אני מאזן בין העבודה המקצועית לחיי המשפחה. פרספקטיבה זו לימדה אותי את ערך היעילות, התקשורת הברורה ובניית דברים שמחזיקים מעמד.",
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
    
    "projects.fleet.title": "לוח ניהול צי רכבים",
    "projects.fleet.desc": "פלטפורמת מעקב וניתוח רכבים בזמן אמת עם מפות אינטראקטיביות, הזרמת נתונים חיה ויכולות דיווח מקיפות.",
    
    "projects.auth.title": "מערכת אימות ארגונית",
    "projects.auth.desc": "מיקרו-שירות אימות מאובטח עם בקרת גישה מבוססת תפקידים, אינטגרציה של OAuth ורישום ביקורת לאפליקציות ארגוניות.",
    
    "projects.pipeline.title": "מסגרת CI/CD Pipeline",
    "projects.pipeline.desc": "תשתית פריסה אוטומטית באמצעות Docker, Kubernetes ו-GitHub Actions להעברה רציפה חלקה.",
    
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
    
    // Contact
    "contact.title": "יצירת קשר",
    "contact.heading": "בואו נתחבר",
    "contact.subheading": "פתוח לדיון על הזדמנויות חדשות, אתגרים טכניים, או סתם להתחבר עם מפתחים אחרים",
    "contact.email": "אימייל",
    "contact.location": "מיקום",
    "contact.locationValue": "אלעד, ישראל",
    "contact.availability": "זמינות",
    "contact.availabilityValue": "פתוח להזדמנויות",
    "contact.cta": "שלח הודעה",
    
    // Footer
    "footer.rights": "כל הזכויות שמורות.",
    "footer.built": "נבנה עם Next.js, TypeScript ו-Tailwind CSS",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  
  const t = useCallback((key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }, [language])
  
  const isRTL = language === "he"
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
