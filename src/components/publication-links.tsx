import Link from "next/link";
import type { PublicationLink } from "@/lib/site";

type PublicationLinksProps = {
  links: PublicationLink[];
};

export function PublicationLinks({ links }: PublicationLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {links.map((link) => (
        <Link
          key={`${link.label}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-stone-700 transition-colors hover:border-accent hover:text-accent"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
