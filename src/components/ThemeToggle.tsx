// https://github.com/shuding/nextra/blob/main/packages/nextra-theme-blog/src/components/theme-switch.tsx

"use client";
import {useTheme} from "next-themes";
import {useMounted} from "nextra/hooks";
import {Sun, Moon} from "lucide-react";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const IconToUse = mounted && isDark ? Moon : Sun;

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
      <IconToUse className="w-5 h-5" />
    </button>
  );
}
