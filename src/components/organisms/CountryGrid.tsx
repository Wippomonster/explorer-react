// Convierte el arreglo en tarjetas o muestra "sin resultados"
import type { JSX } from "react";
import type { Country } from "../../types/country";
import { CountryCard } from "../molecules/CountryCard";
import { EmptyMessage } from "../molecules/EmptyMessage";

interface CountryGridProps {
  countries: Country[];
  onSelect: (code: string) => void;
}

export function CountryGrid({ countries, onSelect }: CountryGridProps): JSX.Element {
  if (countries.length === 0) {
    return <EmptyMessage />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {countries.map((country: Country): JSX.Element => (
        <CountryCard key={country.codes.alpha_2} country={country} onSelect={onSelect} />
      ))}
    </div>
  );
}