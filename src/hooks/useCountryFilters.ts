//guarda query y region y calcula los países visibles
import { useState } from "react";
import type { Country } from "../types/country";
import { filterCountries } from "../utils/filter";

interface UseCountryFiltersResult {
  query: string;
  region: string;
  filteredCountries: Country[];
  setQuery: (value: string) => void;
  setRegion: (value: string) => void;
  clearFilters: () => void;
}

export function useCountryFilters(countries: Country[]): UseCountryFiltersResult {
  const [query, setQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries: Country[] = filterCountries(countries, query, region);

  function clearFilters(): void {
    setQuery("");
    setRegion("");
  }

  return { query, region, filteredCountries, setQuery, setRegion, clearFilters };
}