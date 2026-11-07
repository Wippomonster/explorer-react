//selector de región
import type { ChangeEvent, JSX } from "react";

interface RegionFilterProps {
  region: string;
  onRegionChange: (value: string) => void;
}

interface RegionOption {
  value: string;
  label: string;
}

const REGION_OPTIONS: RegionOption[] = [
  { value: "", label: "Todas las regiones" },
  { value: "Africa", label: "África" },
  { value: "Americas", label: "América" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europa" },
  { value: "Oceania", label: "Oceanía" },
];

export function RegionFilter({ region, onRegionChange }: RegionFilterProps): JSX.Element {
  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    onRegionChange(event.currentTarget.value);
  }

  return (
    <div className="sm:w-64">
      <label htmlFor="region-filter" className="mb-1 block font-bold">
        Filtrar por región
      </label>
      <select
        id="region-filter"
        value={region}
        onChange={handleChange}
        className="w-full rounded-md border border-border bg-surface p-3 text-body text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {REGION_OPTIONS.map((option: RegionOption): JSX.Element => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}