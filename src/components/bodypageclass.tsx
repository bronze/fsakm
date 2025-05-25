"use client";
import {usePathname} from "next/navigation";

export default function BodyWithPageClass({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  // Convert pathname to a class-friendly string, e.g. "/about/team" -> "page-about-team"
  const pageClass = "page-" + pathname.replace(/\//g, "-").replace(/^-/, "") || "page-home";
  return <body className={pageClass}>{children}</body>;
}
