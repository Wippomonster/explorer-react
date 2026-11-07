// componente padre: guarda query y region y calcula los países visibles
import { useState } from "react";
import type { JSX } from "react";
import { ResultsBar } from "./components/molecules/ResultsBar";
import { CountryGrid } from "./components/organisms/CountryGrid";
import { Footer } from "./components/organisms/Footer";
import { Header } from "./components/organisms/Header";
import { SiteHeader } from "./components/organisms/SiteHeader";
import { countriesDemo } from "./data/countries-demo";
import type { Country } from "./types/country";
import { filterCountries } from "./utils/filter";

export default function App(): JSX.Element {

  const [query, setQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries: Country[] = filterCountries(countriesDemo, query, region);

  function handleSelect(code: string): void {
    console.log("País seleccionado:", code);
  }

  function handleClearFilters(): void {
    setQuery("");
    setRegion("");
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <SiteHeader />

      <main id="inicio" className="mx-auto w-full max-w-6xl flex-1 p-4 sm:p-8">
        {/* Los hijos reciben el estado por props y piden cambiarlo con callbacks */}
        <Header
          title="Explora países del mundo"
          query={query}
          region={region}
          onQueryChange={setQuery}
          onRegionChange={setRegion}
        >
          <p>Busca un país o filtra por región para consultar su información.</p>
        </Header>

        <section id="paises" aria-labelledby="countries-title">
          <h2 id="countries-title" className="mb-4 text-heading-section font-bold">
            Países disponibles
          </h2>
          <ResultsBar
            count={filteredCountries.length}
            total={countriesDemo.length}
            onClear={handleClearFilters}
          />
          <CountryGrid countries={filteredCountries} onSelect={handleSelect} />
        </section>
      </main>

      <Footer />
    </div>
  );
}