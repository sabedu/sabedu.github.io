import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        Projects
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-tight text-stone-900">
        Things I&apos;m building
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Side projects, open-source work, and research tools. This section is
        ready for you to fill in.
      </p>

      <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface px-8 py-12 text-center">
        <p className="text-muted">Projects coming soon.</p>
      </div>
    </Container>
  );
}
