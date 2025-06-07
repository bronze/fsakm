"use client"

import {Homemade_Apple, Inter} from "next/font/google"
import {usePathname} from "next/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const homemade = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-homemade",
  display: "swap",
})

export default function BodyWithPageClass({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const parts = pathname.replace(/^\/+/, "").split("/")

  let pageClass
  if (parts.length === 1 && parts[0]) {
    pageClass = `page-${parts[0]}-home`
  } else if (pathname === "/") {
    pageClass = "page-home"
  } else {
    pageClass = "page-" + pathname.replace(/\//g, "-").replace(/^-/, "")
  }

  return (
    <body className={`${inter.variable} ${homemade.variable} ${pageClass}`}>
      {children}
    </body>
  )
}
