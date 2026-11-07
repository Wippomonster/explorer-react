
import type { Country } from "../types/country";

export const elSalvador: Country = {
  names: { common: "El Salvador" },
  codes: { alpha_2: "SV" },
  flag: {
    description:
      "The flag of El Salvador is composed of three equal horizontal bands of cobalt blue, white and cobalt blue, with the national coat of arms centered in the white band.",
    url_svg: "https://flags.restcountries.com/v5/svg/sv.svg",
  },
  capitals: [{ name: "San Salvador" }],
  population: 6029976,
  region: "Americas",
};

export const japon: Country = {
  names: { common: "Japan" },
  codes: { alpha_2: "JP" },
  flag: {
    description: "The flag of Japan features a crimson-red circle at the center of a white field.",
    url_svg: "https://flags.restcountries.com/v5/svg/jp.svg",
  },
  capitals: [{ name: "Tokyo" }],
  population: 122650000,
  region: "Asia",
};

export const canada: Country = {
  names: { common: "Canada" },
  codes: { alpha_2: "CA" },
  flag: {
    description:
      "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.",
    url_svg: "https://flags.restcountries.com/v5/svg/ca.svg",
  },
  capitals: [{ name: "Ottawa" }],
  population: 41798407,
  region: "Americas",
};

function makeCountry(
  name: string,
  code: string,
  capital: string,
  population: number,
  region: string,
): Country {
  return {
    names: { common: name },
    codes: { alpha_2: code },
    flag: {
      description: `Bandera de ${name}`,
      url_svg: `https://flags.restcountries.com/v5/svg/${code.toLowerCase()}.svg`,
    },
    capitals: [{ name: capital }],
    population,
    region,
  };
}

const extraCountries: Country[] = [
  makeCountry("Germany", "DE", "Berlin", 83500000, "Europe"),
  makeCountry("Norway", "NO", "Oslo", 5550000, "Europe"),
  makeCountry("Spain", "ES", "Madrid", 48000000, "Europe"),
  makeCountry("France", "FR", "Paris", 68000000, "Europe"),
  makeCountry("Mexico", "MX", "Mexico City", 128000000, "Americas"),
  makeCountry("Brazil", "BR", "Brasília", 212000000, "Americas"),
  makeCountry("New Zealand", "NZ", "Wellington", 5200000, "Oceania"),
  makeCountry("Egypt", "EG", "Cairo", 112000000, "Africa"),
];

export const countriesDemo: Country[] = [elSalvador, japon, canada, ...extraCountries];