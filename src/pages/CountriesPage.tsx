import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/molecules/ErrorMessage";
import { LoadingMessage } from "../components/molecules/LoadingMessage";
import { ResultsBar } from "../components/molecules/ResultsBar";
import { CountryGrid } from "../components/organisms/CountryGrid";
import { Header } from "../components/organisms/Header";
import { useCountries } from "../hooks/useCountries";
import { useCountryFilters } from "../hooks/useCountryFilters";

export default function CountriesPage(): JSX.Element {
  const navigate = useNavigate();
  const { countries, isLoading, error, reload } = useCountries();
  const { query, region, filteredCountries, setQuery, setRegion, clearFilters } =
    useCountryFilters(countries);

  function handleSelect(code: string): void {
    navigate(`/pais/${code.toLowerCase()}`);
  }

  return (
    <>
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

        {isLoading && <LoadingMessage />}
        {error !== null && <ErrorMessage message={error} onRetry={reload} />}
        {!isLoading && error === null && (
          <>
            <ResultsBar
              count={filteredCountries.length}
              total={countries.length}
              onClear={clearFilters}
            />
            <CountryGrid countries={filteredCountries} onSelect={handleSelect} />
          </>
        )}
      </section>
    </>
  );
}