// campo de búsqueda
import type { ChangeEvent, JSX } from "react";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function SearchBar({ query, onQueryChange }: SearchBarProps): JSX.Element {

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onQueryChange(event.currentTarget.value);
  }

  return (
    <div className="flex-1">
      <label htmlFor="country-search" className="mb-1 block font-bold">
        Buscar país
      </label>
      <input
        id="country-search"
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Escriba el nombre del país..."
        autoComplete="off"
        className="w-full rounded-md border border-border bg-surface p-3 text-body text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
    </div>
  );
}