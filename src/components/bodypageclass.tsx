"use client";
import {usePathname} from "next/navigation";

export default function BodyWithPageClass({children}: {children: React.ReactNode}) {
  //   const pathname = usePathname();
  //   const pageClass = pathname === "/" ? "page-home" : "page-" + pathname.replace(/\//g, "-").replace(/^-/, "");
  //   return <body className={pageClass}>{children}</body>;
  // HOLY CRAP it got a lot more complicated
  const pathname = usePathname();
  // Remove leading slash and split by "/"
  const parts = pathname.replace(/^\/+/, "").split("/");
  let pageClass;
  if (parts.length === 1 && parts[0]) {
    // Only locale present, it's the home page for that locale
    pageClass = `page-${parts[0]}-home`;
  } else if (pathname === "/") {
    pageClass = "page-home";
  } else {
    pageClass = "page-" + pathname.replace(/\//g, "-").replace(/^-/, "");
  }
  return <body className={pageClass}>{children}</body>;
}
