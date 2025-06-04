"use client"

import type {ComponentProps} from "react"
import {usePathname} from "next/navigation"
import {
  LastUpdated as ThemeLastUpdated,
  useThemeConfig,
} from "nextra-theme-docs"

const DEFAULT_LOCALE = "pt"

export default function LastUpdated(
  props: ComponentProps<typeof ThemeLastUpdated>
) {
  const {i18n} = useThemeConfig()
  const pathname = usePathname()

  let locale = props.locale ?? DEFAULT_LOCALE
  if (i18n.length) {
    const candidate = pathname.split("/", 2)[1]
    if (i18n.includes(candidate)) {
      locale = candidate
    } else {
      locale = DEFAULT_LOCALE
    }
  }

  return <ThemeLastUpdated {...props} locale={locale} />
}
