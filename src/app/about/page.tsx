import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start">
        <Image
          src={site.profileImage}
          alt={site.name}
          width={160}
          height={160}
          className="h-40 w-40 shrink-0 rounded-2xl border border-border object-cover object-top shadow-sm"
          priority
        />

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h1 className="font-display mt-4 text-4xl tracking-tight text-stone-900">
            {site.name}
          </h1>
          <p className="mt-2 text-muted">
            {site.role} ·{" "}
            <Link
              href={site.lab.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {site.lab.name}
            </Link>
          </p>
        </div>
      </div>

      <div className="prose-custom mt-10 max-w-2xl text-base">
        <p>{site.bio.intro}</p>
        <p>{site.bio.background}</p>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-stone-900">Current roles</h2>
        <ul className="mt-4 space-y-3 text-muted">
          {site.currentRoles.map((role) => (
            <li key={`${role.title}-${role.organization}`}>
              <span className="font-medium text-stone-900">{role.title}</span>
              {", "}
              {role.organization}
              {role.period ? ` · ${role.period}` : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-stone-900">Education</h2>
        <ul className="mt-4 space-y-2 text-muted">
          {site.bio.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-stone-900">
          Research interests
        </h2>
        <ul className="mt-4 space-y-2 text-muted">
          {site.researchAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-stone-900">Awards</h2>
        <ul className="mt-4 space-y-2 text-muted">
          {site.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-stone-900">Service</h2>
        <ul className="mt-4 space-y-2 text-muted">
          {site.service.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl text-stone-900">Contact</h2>
        <ul className="mt-4 space-y-2 text-muted">
          <li>
            <Link
              href={`mailto:${site.email}`}
              className="text-accent hover:underline"
            >
              {site.email}
            </Link>
          </li>
          <li>
            <Link
              href={`mailto:${site.alternateEmail}`}
              className="text-accent hover:underline"
            >
              {site.alternateEmail}
            </Link>
          </li>
          <li>{site.location}</li>
        </ul>
      </section>

      <section className="mt-14 flex flex-wrap gap-4">
        <Link
          href={site.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7c2d12]"
        >
          Download CV
        </Link>
        <Link
          href="https://scholar.google.com/citations?user=xUIPO3gAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-300"
        >
          Google Scholar
        </Link>
      </section>
    </Container>
  );
}
