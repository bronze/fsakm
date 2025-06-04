// Ok so why use a different middleware file?
// Because we want to handle the locale redirection separately from the i18n middleware.
// Basically, i wanted the default language to always be Portuguese, even if my pc had a different lang.

import {NextRequest, NextResponse} from "next/server"

const SUPPORTED_LOCALES = ["pt", "en", "es"]
const DEFAULT_LOCALE = "pt"
const MIDDLEWARE_HEADER = "X-From-Middleware"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const {pathname} = url

  if (req.headers.get(MIDDLEWARE_HEADER)) {
    return NextResponse.next()
  }

  // If the pathname already includes a locale, do nothing
  if (SUPPORTED_LOCALES.some(lng => pathname.startsWith(`/${lng}`))) {
    return NextResponse.next()
  }

  // Try to get the locale from the cookie
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value

  // Use cookie locale if valid, otherwise default
  const locale = SUPPORTED_LOCALES.includes(cookieLocale ?? "")
    ? cookieLocale
    : DEFAULT_LOCALE

  url.pathname = `/${locale}${pathname}`
  url.locale = locale
  const res = NextResponse.rewrite(url)
  res.headers.set(MIDDLEWARE_HEADER, "1")
  return res
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind|\\.well-known(?:/|$)).*)",
  ],
}
