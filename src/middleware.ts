// Ok so why use a different middleware file?
// Because we want to handle the locale redirection separately from the i18n middleware.
// Basically, i wanted the default language to always be Portuguese, even if my pc had a different lang.

import {NextRequest, NextResponse} from "next/server"

const SUPPORTED_LOCALES = ["pt", "en", "es"]
const DEFAULT_LOCALE = "pt"

export function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl

  const pathLocale = SUPPORTED_LOCALES.find(
    l => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  )

  if (!pathLocale) {
    const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value
    const locale = SUPPORTED_LOCALES.includes(cookieLocale ?? "")
      ? cookieLocale
      : DEFAULT_LOCALE

    const url = req.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`

    if (locale === DEFAULT_LOCALE) {
      return NextResponse.rewrite(url)
    }

    return NextResponse.redirect(url)
  }

  if (pathLocale === DEFAULT_LOCALE) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(`/${DEFAULT_LOCALE}`, "") || "/"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind|\\.well-known(?:/|$)).*)",
  ],
}
