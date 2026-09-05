import type { Metadata } from "next";
import Link from "next/link";
import { AuthorList } from "@/components/author-list";
import { Container } from "@/components/container";
import { publicationTypeLabels, site } from "@/lib/site";

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
      <h1 className="font-display mt-4 text-4xl tracking-tight text-stone-900">
        Research output
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Selected papers and preprints. Full list and citation metrics on{" "}
        <Link
          href="https://scholar.google.com/citations?user=xUIPO3gAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Google Scholar
        </Link>{" "}
        ({site.scholar.citations} citations, h-index {site.scholar.hIndex}).
      </p>

      <ul className="mt-12 space-y-8">
        {publications.map((pub) => (
          <li
            key={`${pub.year}-${pub.title}`}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span>{pub.year}</span>
              <span>·</span>
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                {publicationTypeLabels[pub.type]}
              </span>
            </div>

            {pub.href ? (
              <Link
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display mt-2 block text-xl leading-snug text-stone-900 hover:text-accent"
              >
                {pub.title}
              </Link>
            ) : (
              <h2 className="font-display mt-2 text-xl leading-snug text-stone-900">
                {pub.title}
              </h2>
            )}

            <AuthorList authors={pub.authors} />

            <p className="mt-2 text-sm italic text-muted">{pub.venue}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
