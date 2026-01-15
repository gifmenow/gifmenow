import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  crumbs?: Crumb[];
};

export default function Breadcrumbs({ crumbs = [] }: BreadcrumbsProps) {
  if (!crumbs.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        marginBottom: 16,
        fontSize: 14,
      }}
    >
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.href ? (
            <Link href={crumb.href} style={{ color: "#0070f3" }}>
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index < crumbs.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
