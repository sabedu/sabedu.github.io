import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/container";
import { getSite } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const site = getSite();
  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Projects
      </p>
      <p className="mt-4 max-w-2xl text-muted">
        Systems I have built and deployed in research and industry — from
        pharmaceutical chatbots to open-source developer tools.
      </p>

      <div className="mt-10 space-y-8">
        {site.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Container>
  );
}
