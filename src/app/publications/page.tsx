import type { Metadata } from "next";
import { AuthorList } from "@/components/author-list";
import { Container } from "@/components/container";
import { PublicationLinks } from "@/components/publication-links";
import { PublicationTypeBadge } from "@/components/publication-type-badge";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  const publications = [...site.publications].sort((a, b) => b.year - a.year);

  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Publications
      </p>

      <ul className="mt-10 space-y-8">
        {publications.map((pub) => (
          <li
            key={`${pub.year}-${pub.title}`}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span>{pub.year}</span>
              <span>·</span>
              <PublicationTypeBadge type={pub.type} />
            </div>

            <h2 className="font-display mt-2 text-xl leading-snug text-stone-900">
              {pub.title}
            </h2>

            <AuthorList authors={pub.authors} />

            <p className="mt-2 text-sm italic text-muted">{pub.venue}</p>

            <PublicationLinks links={pub.links} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
