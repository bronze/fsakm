"use client"

import type {ComponentProps} from "react"
import {usePathname} from "next/navigation"
import {LastUpdated as ThemeLastUpdated} from "nextra-theme-docs"

const SUPPORTED_LOCALES = ["pt", "en", "es"]
const DEFAULT_LOCALE = "pt"

export default function LastUpdated(
  props: ComponentProps<typeof ThemeLastUpdated>
) {
  const pathname = usePathname()

  let locale = props.locale || DEFAULT_LOCALE

  const maybeLocale = pathname.split("/")[1]
  if (SUPPORTED_LOCALES.includes(maybeLocale)) {
    locale = maybeLocale
  }

  return <ThemeLastUpdated {...props} locale={locale} />
}