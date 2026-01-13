type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 16, fontSize: 14 }}>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.href ? (
            <a href={crumb.href} style={{ color: "#0070f3" }}>
              {crumb.label}
            </a>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index < crumbs.length - 1 && " → "}
        </span>
      ))}
    </nav>
  );
}
