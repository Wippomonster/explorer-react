//  busqueda por nombre combinada con región
import type { Country } from "../types/country";

function normalize(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function filterCountries(
  countries: Country[],
  query: string,
  region: string,
): Country[] {
  const normalizedQuery: string = normalize(query.trim());

  return countries.filter((country: Country): boolean => {
    const matchesName: boolean = normalize(country.names.common).includes(normalizedQuery);
    // Todas las regiones
    const matchesRegion: boolean = region === "" || country.region === region;
    return matchesName && matchesRegion;
  });
}