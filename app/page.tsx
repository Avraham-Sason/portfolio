
import { LanguageProvider } from "@/lib/i18n"
import { Portfolio } from "@/components/portfolio"

export default function Home() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}
