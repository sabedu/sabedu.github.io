import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parse as parseYaml } from "yaml";
import { cache } from "react";
import {
  nav,
  type Author,
  type Project,
  type ProjectLink,
  type Publication,
  type PublicationLink,
  type SiteConfig,
} from "@/lib/site";

const contentDir = path.join(process.cwd(), "content");

const linkLabels: Record<string, string> = {
  paper: "Paper",
  doi: "DOI",
  code: "Code",
  dataset: "Dataset",
  demo: "Demo",
  live: "Live demo",
};

function parseAuthors(raw: unknown): Author[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((entry) => {
    const text = String(entry).trim();
    const self = text.endsWith("*");
    const name = self ? text.slice(0, -1).trim() : text;
    return self ? { name, self: true } : { name };
  });
}

function parseLinks(data: Record<string, unknown>): PublicationLink[] {
  const links: PublicationLink[] = [];

  if (data.links && typeof data.links === "object" && !Array.isArray(data.links)) {
    for (const [key, href] of Object.entries(data.links as Record<string, string>)) {
      if (href) {
        links.push({
          label: linkLabels[key] ?? key,
          href: String(href),
        });
      }
    }
  }

  for (const key of Object.keys(linkLabels)) {
    if (data[key] && typeof data[key] === "string") {
      links.push({ label: linkLabels[key], href: data[key] as string });
    }
  }

  return links;
}

function parseProjectLinks(data: Record<string, unknown>): ProjectLink[] {
  const links: ProjectLink[] = [];
  const raw = data.links;

  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    for (const [key, href] of Object.entries(raw as Record<string, string>)) {
      if (href) {
        links.push({
          label: linkLabels[key] ?? key,
          href: String(href),
        });
      }
    }
  }

  return links;
}

function loadPublications(): Publication[] {
  const dir = path.join(contentDir, "publications");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(source);

      return {
        title: String(data.title),
        authors: parseAuthors(data.authors),
        venue: String(data.venue),
        year: Number(data.year),
        type: data.type as Publication["type"],
        links: parseLinks(data as Record<string, unknown>),
      };
    })
    .sort((a, b) => b.year - a.year);
}

function loadProjects(): Project[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(source);

      return {
        title: String(data.title),
        organization: data.organization ? String(data.organization) : undefined,
        year: data.year ? Number(data.year) : undefined,
        problem: String(data.problem).trim(),
        contribution: String(data.contribution).trim(),
        outcome: String(data.outcome).trim(),
        technologies: Array.isArray(data.technologies)
          ? data.technologies.map(String)
          : [],
        links: parseProjectLinks(data as Record<string, unknown>),
      };
    })
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

function loadSiteYaml(): Omit<
  SiteConfig,
  "nav" | "publications" | "projects"
> {
  const file = path.join(contentDir, "site.yaml");
  const raw = fs.readFileSync(file, "utf8");
  return parseYaml(raw) as Omit<SiteConfig, "nav" | "publications" | "projects">;
}

export const getSite = cache((): SiteConfig => {
  const base = loadSiteYaml();
  return {
    ...base,
    nav,
    publications: loadPublications(),
    projects: loadProjects(),
  };
});
