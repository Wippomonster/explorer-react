//carga los países desde public/countries.json y expone sus estados
import { useCallback, useEffect, useState } from "react";
import type { Country } from "../types/country";

interface UseCountriesResult {
  countries: Country[];
  isLoading: boolean;
  error: string | null;
  reload: () => void;
}

export function useCountries(): UseCountriesResult {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState<number>(0);

  useEffect((): (() => void) => {
    const controller = new AbortController();

    fetch("/countries.json", { signal: controller.signal })
      .then((response: Response): Promise<Country[]> => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json() as Promise<Country[]>;
      })
      .then((data: Country[]): void => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch((reason: unknown): void => {
        if (reason instanceof DOMException && reason.name === "AbortError") {
          return;
        }
        setError("No se pudieron cargar los países. Intenta de nuevo.");
        setIsLoading(false);
      });

    return (): void => controller.abort();
  }, [attempt]);

  const reload = useCallback((): void => {
    setIsLoading(true);
    setError(null);
    setAttempt((previous: number): number => previous + 1);
  }, []);

  return { countries, isLoading, error, reload };
}