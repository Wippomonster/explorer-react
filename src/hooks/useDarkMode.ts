// Modo oscuro
import { useEffect, useState } from "react";

const STORAGE_KEY = "explorer-theme";

function getInitialTheme(): boolean {
  try {
    const saved: string | null = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      return saved === "dark";
    }
  } catch {

  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

interface UseDarkModeResult {
  isDark: boolean;
  toggleTheme: () => void;
}

export function useDarkMode(): UseDarkModeResult {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect((): void => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    } catch {

    }
  }, [isDark]);

  function toggleTheme(): void {
    setIsDark((previous: boolean): boolean => !previous);
  }

  return { isDark, toggleTheme };
}