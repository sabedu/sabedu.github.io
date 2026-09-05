import type { Author } from "@/lib/site";

type AuthorListProps = {
  authors: Author[];
};

export function AuthorList({ authors }: AuthorListProps) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-muted">
      {authors.map((author, index) => (
        <span key={`${author.name}-${index}`}>
          {index > 0 ? ", " : null}
          {author.self ? (
            <strong className="font-semibold text-stone-900">{author.name}</strong>
          ) : (
            author.name
          )}
        </span>
      ))}
    </p>
  );
}
