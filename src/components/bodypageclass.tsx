"use client";
import {usePathname} from "next/navigation";

export default function BodyWithPageClass({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const pageClass = pathname === "/" ? "page-home" : "page-" + pathname.replace(/\//g, "-").replace(/^-/, "");
  return <body className={pageClass}>{children}</body>;
}
