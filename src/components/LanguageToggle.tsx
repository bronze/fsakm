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
          className="cursor-pointer rounded p-1 transition hover:bg-gray-200 dark:hover:bg-gray-700">
          <lang.Flag height={24} width={24} />
        </button>
      ))}
    </div>
  );
}
