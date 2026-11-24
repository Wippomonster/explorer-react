// Switch de modo dark mode
import type { JSX } from "react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps): JSX.Element {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 px-1 py-3 md:py-2">
      <input
        type="checkbox"
        role="switch"
        checked={isDark}
        onChange={onToggle}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="relative inline-block h-6 w-11 shrink-0 rounded-full bg-ink-inverse/30 transition-colors after:absolute after:left-1 after:top-1 after:size-4 after:rounded-full after:bg-white after:transition-transform after:content-[''] peer-checked:bg-slate-900 peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2"
      />
      <span aria-hidden="true">{isDark ? "🌙" : "☀️"}</span>
      <span className="md:sr-only">Modo oscuro</span>
    </label>
  );
}