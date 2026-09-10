export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Author = {
  name: string;
  self?: boolean;
};

export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint" | "thesis";
  links: PublicationLink[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  organization?: string;
  year?: number;
  problem: string;
  contribution: string;
  outcome: string;
  technologies: string[];
  links: ProjectLink[];
};

export type Role = {
  title: string;
  organization: string;
  period?: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  tagline: string;
  lead: string;
  role: string;
  location: string;
  lab: { name: string; href: string };
  email: string;
  alternateEmail: string;
  profileImage: string;
  cvUrl: string;
  nav: NavItem[];
  social: SocialLink[];
  researchAreas: string[];
  bio: {
    intro: string;
    background: string;
    education: string[];
  };
  currentRoles: Role[];
  service: string[];
  awards: string[];
  publications: Publication[];
  projects: Project[];
};

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/publications/", label: "Publications" },
  { href: "/projects/", label: "Projects" },
];

export const publicationTypeLabels: Record<Publication["type"], string> = {
  journal: "Journal",
  conference: "Conference",
  workshop: "Workshop",
  preprint: "Preprint",
  thesis: "Thesis",
};

export const publicationTypeStyles: Record<Publication["type"], string> = {
  journal: "bg-indigo-100 text-indigo-800",
  conference: "bg-emerald-100 text-emerald-800",
  workshop: "bg-violet-100 text-violet-800",
  preprint: "bg-amber-100 text-amber-900",
  thesis: "bg-slate-200 text-slate-700",
};
