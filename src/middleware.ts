// Ok so why use a different middleware file?
// Because we want to handle the locale redirection separately from the i18n middleware.
// Basically, i wanted the default language to always be Portuguese, even if my pc had a different lang.

import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
  // Always use the defaultLocale from next.config.mjs
  const url = req.nextUrl;
  const {pathname, locale} = req.nextUrl;

  // If the pathname already includes a locale, do nothingca
  if (["/pt", "/en", "/es"].some(lng => pathname.startsWith(lng))) {
    return NextResponse.next();
  }

  // Redirect to defaultLocale ('pt') if no locale in path
  url.pathname = `/pt${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind).*)"],
};
