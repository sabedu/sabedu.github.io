import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Projects
      </p>

      <ul className="mt-10 space-y-8">
        {site.projects.map((project) => (
          <li
            key={project.href}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              {project.year ? <span>{project.year}</span> : null}
            </div>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display mt-2 block text-xl leading-snug text-stone-900 hover:text-accent"
            >
              {project.title}
            </Link>
            <p className="mt-3 text-muted">{project.description}</p>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-accent hover:underline"
            >
              thedrug.guru →
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
