// contador de resultados y botón para limpiar filtros
import type { JSX } from "react";

interface ResultsBarProps {
  count: number;
  total: number;
  onClear: () => void;
}

export function ResultsBar({ count, total, onClear }: ResultsBarProps): JSX.Element {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <p role="status" className="text-body text-ink-muted">
        Mostrando {count} de {total} países
      </p>
      <button
        type="button"
        onClick={onClear}
        className="rounded-md border-2 border-primary px-4 py-2 font-bold text-primary transition-colors hover:bg-primary hover:text-ink-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Limpiar filtros
      </button>
    </div>
  );
}