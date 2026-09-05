import Link from "next/link";
import type { Project } from "@/lib/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {project.year ? <span>{project.year}</span> : null}
        {project.organization ? (
          <>
            <span>·</span>
            <span>{project.organization}</span>
          </>
        ) : null}
      </div>

      <h2 className="font-display mt-2 text-2xl leading-snug text-stone-900">
        {project.title}
      </h2>

      <dl className="mt-6 space-y-5">
        <div>
          <dt className="text-sm font-medium text-stone-900">Problem</dt>
          <dd className="mt-1 text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-stone-900">My contribution</dt>
          <dd className="mt-1 text-muted">{project.contribution}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-stone-900">Outcome</dt>
          <dd className="mt-1 text-muted">{project.outcome}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-stone-900">Technologies</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-background px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-border"
              >
                {tech}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      {project.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Link
              key={`${link.label}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-stone-800 transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
