import "server-only";
import type {Dictionaries, Dictionary} from "./i18n-config";

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries: Dictionaries = {
  en: () => import("./en"),
  es: () => import("./es"),
  pt: () => import("./pt"),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const mod = await (dictionaries[locale] || dictionaries.en)();
  return mod.default;
}

export function getDirection(locale: string): "ltr" | "rtl" {
  return locale === "es" ? "rtl" : "ltr";
}
