import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-stone-200/80 bg-[#f7f5f2]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-stone-900 transition-colors hover:text-accent"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-600">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
