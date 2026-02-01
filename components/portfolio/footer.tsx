"use client"

import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Nahum Takum.</span>
            <span>{t("footer.rights")}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  )
}
