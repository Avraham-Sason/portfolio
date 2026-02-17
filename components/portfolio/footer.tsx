"use client"

import { useLanguage } from "@/lib/i18n"
import packageJson from "../../package.json"
export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">v-{packageJson.version}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; {currentYear} {t("hero.name")}</span>
            <span>{t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
