// Mensaje de error con botón para reintentar
import type { JSX } from "react";

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps): JSX.Element {
  return (
    <div role="alert" className="rounded-md border border-accent bg-surface p-6 text-center">
      <p className="mb-4 text-body-lg font-bold">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-md bg-primary px-4 py-2 font-bold text-ink-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Reintentar
      </button>
    </div>
  );
}