// Mensaje visible mientras se cargan los datos
import type { JSX } from "react";

export function LoadingMessage(): JSX.Element {
  return (
    <p role="status" className="rounded-md bg-surface p-6 text-center text-body-lg text-ink-muted">
      Cargando países...
    </p>
  );
}