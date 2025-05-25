// Example: src/components/ThemeToggle.tsx
"use client";
import {useTheme} from "next-themes";
import {Sun, Moon} from "lucide-react";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
