import type { Publication } from "@/lib/site";
import { publicationTypeLabels, publicationTypeStyles } from "@/lib/site";

type PublicationTypeBadgeProps = {
  type: Publication["type"];
};

export function PublicationTypeBadge({ type }: PublicationTypeBadgeProps) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${publicationTypeStyles[type]}`}
    >
      {publicationTypeLabels[type]}
    </span>
  );
}
