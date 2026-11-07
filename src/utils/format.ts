import type { Country } from "../types/country";

const REGION_LABELS: Record<string, string> = {
  Africa: "África",
  Americas: "América",
  Asia: "Asia",
  Europe: "Europa",
  Oceania: "Oceanía",
};

export function formatPopulation(population: number): string {
  return new Intl.NumberFormat("es-SV").format(population);
}

export function getCapital(country: Country): string {
  return country.capitals[0]?.name ?? "Sin capital registrada";
}

export function getRegionLabel(region: string): string {
  return REGION_LABELS[region] ?? region;
}