import type { JSX } from "react";
import type { Country } from "../../types/country";
import { formatPopulation, getCapital } from "../../utils/format";
import { Badge } from "../atoms/Badge";
import { Flag } from "../atoms/Flag";

interface CountryCardProps {
  country: Country;
  onSelect: (code: string) => void;
}

export function CountryCard({ country, onSelect }: CountryCardProps): JSX.Element {
  const name: string = country.names.common;

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border-2 border-border bg-surface">
      <Flag src={country.flag.url_svg} alt={`Bandera de ${name}`} />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-heading-card font-bold break-words">{name}</h3>
        <p className="mt-1 text-body text-ink-muted">
          Población: {formatPopulation(country.population)}
        </p>
        <div className="mt-1 flex items-center gap-2 text-body text-ink-muted">
          <span>Región:</span>
          <Badge region={country.region} />
        </div>
        <p className="mt-1 text-body text-ink-muted">Capital: {getCapital(country)}</p>
        <div className="mt-auto pt-4">
          <button
            type="button"
            aria-label={`Ver más información de ${name}`}
            onClick={() => onSelect(country.codes.alpha_2)}
            className="block w-full rounded-md bg-primary px-4 py-2 text-center font-bold text-ink-inverse transition-colors hover:bg-accent active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
}