import type { JSX } from "react";
import { getRegionLabel } from "../../utils/format";

interface BadgeProps {
  region: string;
}

export function Badge({ region }: BadgeProps): JSX.Element {
  return (
    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-ink-inverse">
      {getRegionLabel(region)}
    </span>
  );
}