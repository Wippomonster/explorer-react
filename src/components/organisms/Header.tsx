// título, descripción y controles de búsqueda y región
import type { JSX, ReactNode } from "react";
import { RegionFilter } from "../molecules/RegionFilter";
import { SearchBar } from "../molecules/SearchBar";

interface HeaderProps {
  title: string;
  query: string;
  region: string;
  onQueryChange: (value: string) => void;
  onRegionChange: (value: string) => void;
  children: ReactNode;
}

export function Header({
  title,
  query,
  region,
  onQueryChange,
  onRegionChange,
  children,
}: HeaderProps): JSX.Element {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold sm:text-heading-section lg:text-display">{title}</h1>
      {/* children es el contenido colocado entre las etiquetas <Header> */}
      <div className="mb-6 mt-2 text-body-lg text-ink-muted">{children}</div>

      {/* Header solo transmite las props y callbacks a los controles */}
      <form
        role="search"
        className="flex flex-col gap-4 sm:flex-row sm:items-end"
        onSubmit={(event) => event.preventDefault()}
      >
        <SearchBar query={query} onQueryChange={onQueryChange} />
        <RegionFilter region={region} onRegionChange={onRegionChange} />
      </form>
    </header>
  );
}