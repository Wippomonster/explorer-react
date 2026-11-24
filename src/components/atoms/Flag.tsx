import { useState } from "react";
import type { JSX } from "react";

interface FlagProps {
  src: string;
  alt: string;
  className?: string;
}

export function Flag({ src, alt, className = "" }: FlagProps): JSX.Element {
  const [hasError, setHasError] = useState<boolean>(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex aspect-3/2 w-full items-center justify-center bg-ink-muted p-4 text-center font-bold text-ink-inverse ${className}`}
      >
        Bandera no disponible
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`aspect-3/2 w-full object-cover ${className}`}
    />
  );
}