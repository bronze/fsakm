// Example: src/components/ThemeToggle.tsx
"use client";
import {useTheme} from "next-themes";
import {Sun, Moon} from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";

import USFlag from "./flags/USFlag";
import BRFlag from "./flags/BRFlag";
import ESFlag from "./flags/ESFlag";

const languages = [
  {code: "pt", label: "Português", Flag: BRFlag},
  {code: "en", label: "English", Flag: USFlag},
  {code: "es", label: "Español", Flag: ESFlag},
];

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: string) => {
    // Troca o prefixo do idioma na URL
    const segments = pathname.split("/");
    if (languages.some(l => l.code === segments[1])) {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang);
    }
    router.push(segments.join("/"));
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {languages.map(lang => (
        <button
          key={lang.code}
          title={lang.label}
          aria-label={`Mudar para ${lang.label}`}
          onClick={() => handleLanguageChange(lang.code)}
          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
          <lang.Flag width={24} height={24} />
        </button>
      ))}
    </div>
  );
}
