// Pie de página y destino del enlace "Acerca de"
import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer id="acerca-de" className="mt-8 bg-primary p-4 text-center text-ink-inverse">
      <p className="text-body">
        Explorer App &copy; 2026 Explorer App, Universidad de Oriente - Diseño Web Adaptable
      </p>
    </footer>
  );
}