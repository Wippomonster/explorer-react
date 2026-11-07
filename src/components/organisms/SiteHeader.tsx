// navegación de escritorio y menú desplegable en móvil
import { useState } from "react";
import type { JSX } from "react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Explorar países", href: "#paises" },
  { label: "Acerca de", href: "#acerca-de" },
];

export function SiteHeader(): JSX.Element {
  // Este estado solo lo usa este componente, por eso vive aquí
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleToggleMenu(): void {
    setIsMenuOpen((previous: boolean): boolean => !previous);
  }

  function handleCloseMenu(): void {
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-primary text-ink-inverse">
      <div className="mx-auto max-w-6xl px-4 md:flex md:items-center md:justify-between">
        <div className="flex min-h-16 items-center justify-between">
          <a href="#inicio" onClick={handleCloseMenu} className="text-body-lg font-bold">
            Where in the world?
          </a>

          <button
            type="button"
            onClick={handleToggleMenu}
            aria-controls="main-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="flex size-11 items-center justify-center rounded-md text-2xl leading-none transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <nav
          id="main-menu"
          aria-label="Navegación principal"
          className={`${isMenuOpen ? "block" : "hidden"} border-t border-ink-inverse/20 pb-4 md:block md:border-0 md:pb-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            {NAV_ITEMS.map((item: NavItem): JSX.Element => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleCloseMenu}
                  className="block rounded-sm px-1 py-3 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}