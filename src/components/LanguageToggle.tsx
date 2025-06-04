// Example: src/components/ThemeToggle.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import {usePathname, useRouter} from "next/navigation"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import BRFlag from "./flags/BRFlag"
import ESFlag from "./flags/ESFlag"
import USFlag from "./flags/USFlag"

const languages = [
  {code: "pt", label: "Português", Flag: BRFlag},
  {code: "en", label: "English", Flag: USFlag},
  {code: "es", label: "Español", Flag: ESFlag},
]

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (lang: string) => {
    const segments = pathname.split("/")
    const hasLocale = languages.some(l => l.code === segments[1])

    if (lang === "pt") {
      if (hasLocale) {
        segments.splice(1, 1)
      }
    } else if (hasLocale) {
      segments[1] = lang
    } else {
      segments.splice(1, 0, lang)
    }

    const newPath = segments.join("/")
    // Set NEXT_LOCALE cookie for 1 year
    const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    document.cookie = `NEXT_LOCALE=${lang}; expires=${date.toUTCString()}; path=/`
    // Reload page with new locale
    location.href = newPath
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {languages.map(lang => (
        <button
          key={lang.code}
          title={lang.label}
          aria-label={`Mudar para ${lang.label}`}
          onClick={() => handleLanguageChange(lang.code)}
          className="cursor-pointer rounded p-1 transition hover:bg-gray-200 dark:hover:bg-gray-700">
          <lang.Flag height={24} width={24} />
        </button>
      ))}
    </div>
  )
}
