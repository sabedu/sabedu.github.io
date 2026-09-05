import Image from "next/image";
import Link from "next/link";
import { AuthorList } from "@/components/author-list";
import { Container } from "@/components/container";
import { publicationTypeLabels, site } from "@/lib/site";

export default function Home() {
  const featured = [...site.publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 4);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-12">
            <Image
              src={site.profileImage}
              alt={site.name}
              width={192}
              height={192}
              className="h-44 w-44 shrink-0 rounded-2xl border border-border object-cover object-top shadow-sm sm:h-48 sm:w-48"
              priority
            />

            <div className="text-center sm:text-left">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                {site.role}
              </p>
              <h1 className="font-display max-w-2xl text-4xl leading-tight tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.1]">
                {site.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                I study large language models for software engineering, mining
                software repositories, and building reliable AI-enabled systems.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
                <Link
                  href="/about/"
                  className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7c2d12]"
                >
                  About me
                </Link>
                <Link
                  href={site.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-300"
                >
                  CV
                </Link>
                <Link
                  href="/publications/"
                  className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-300"
                >
                  Publications
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-display text-xl text-stone-900">
                Research areas
              </h2>
              <ul className="mt-4 space-y-2 text-muted">
                {site.researchAreas.map((area) => (
                  <li key={area} className="leading-relaxed">
                    {area}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-display text-xl text-stone-900">
                DAS Lab
              </h2>
              <div className="prose-custom mt-4">
                <p>
                  I work in the Data-driven Analysis of Software (DAS) Lab at
                  Concordia University, supervised by Dr. Emad Shihab.
                </p>
                <p>
                  <Link
                    href={site.lab.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    View lab profile →
                  </Link>
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl text-stone-900">
              Selected publications
            </h2>
            <Link
              href="/publications/"
              className="text-sm text-accent hover:underline"
            >
              See all
            </Link>
          </div>

          <ul className="mt-8 space-y-6">
            {featured.map((pub) => (
              <li
                key={`${pub.year}-${pub.title}`}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                  <span>{pub.year}</span>
                  <span>·</span>
                  <span>{publicationTypeLabels[pub.type]}</span>
                </div>
                <h3 className="font-display mt-2 text-lg leading-snug text-stone-900">
                  {pub.href ? (
                    <Link
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {pub.title}
                    </Link>
                  ) : (
                    pub.title
                  )}
                </h3>
                <AuthorList authors={pub.authors} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <h2 className="font-display text-2xl text-stone-900">Find me</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            {site.social.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-surface px-5 py-4 text-sm font-medium text-stone-800 transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
