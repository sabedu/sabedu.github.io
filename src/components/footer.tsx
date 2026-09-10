import Link from "next/link";
import { getSite } from "@/lib/content";

export async function Footer() {
  const site = getSite();

  return (
    <footer className="mt-auto border-t border-stone-200/80 bg-[#f7f5f2]">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {site.social.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xs text-stone-400">
          Redeveloped with{" "}
          <Link
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-stone-600"
          >
            Cursor
          </Link>
        </p>
      </div>
    </footer>
  );
}
