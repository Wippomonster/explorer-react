// mensaje cuando no hay coincidencias
import type { JSX } from "react";

export function EmptyMessage(): JSX.Element {
  return (
    <div role="status" className="rounded-md border-2 border-border bg-surface p-8 text-center">
      <p className="mb-2 text-heading-card font-bold">
        No se encontraron países con esos criterios.
      </p>
      <p className="text-body text-ink-muted">Prueba con otro nombre o cambia la región.</p>
    </div>
  );
}
