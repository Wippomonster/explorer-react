import type { JSX } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/atoms/Badge";
import { Flag } from "../components/atoms/Flag";
import { ErrorMessage } from "../components/molecules/ErrorMessage";
import { LoadingMessage } from "../components/molecules/LoadingMessage";
import { useCountries } from "../hooks/useCountries";
import { formatPopulation, getCapital } from "../utils/format";

export default function CountryDetailPage(): JSX.Element {
  const { code } = useParams<{ code: string }>();
  const { countries, isLoading, error, reload } = useCountries();

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (error !== null) {
    return <ErrorMessage message={error} onRetry={reload} />;
  }

  const country = countries.find(
    (item) => item.codes.alpha_2.toLowerCase() === code?.toLowerCase(),
  );

  if (!country) {
    return (
      <section aria-labelledby="not-found-title">
        <h1 id="not-found-title" className="mb-4 text-heading-section font-bold">
          País no encontrado
        </h1>
        <p className="mb-6 text-ink-muted">No existe un país con el código «{code}».</p>
        <Link to="/" className="font-bold text-primary underline">
          Volver al listado
        </Link>
      </section>
    );
  }

  return (
    <article aria-labelledby="country-title">
      <Link to="/" className="mb-6 inline-block font-bold text-primary underline">
        ← Volver al listado
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <Flag src={country.flag.url_svg} 
        alt={`Bandera de ${country.names.common}`}
        className="rounded-sm border-2 border-border"/>

        <div>
          <h1 id="country-title" className="mb-4 text-display font-bold">
            {country.names.common}
          </h1>
          <Badge region={country.region} />
          <dl className="mt-6 space-y-2 text-body-lg">
            <div>
              <dt className="inline font-bold">Capital: </dt>
              <dd className="inline">{getCapital(country)}</dd>
            </div>
            <div>
              <dt className="inline font-bold">Población: </dt>
              <dd className="inline">{formatPopulation(country.population)}</dd>
            </div>
            <div>
              <dt className="inline font-bold">Código: </dt>
              <dd className="inline">{country.codes.alpha_2}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}