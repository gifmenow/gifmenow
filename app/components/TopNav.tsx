// app/components/TopNav.tsx
import Link from "next/link";

export default function TopNav() {
  return (
    <header
      style={{
        borderBottom: "1px solid #eee",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 18,
          }}
          aria-label="gifmenow.com home"
        >
          gifmenow.com
        </Link>

        <nav
          aria-label="Main navigation"
          style={{ display: "flex", gap: 14, alignItems: "center" }}
        >
          <Link href="/" style={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
            Texting GIFs
          </Link>
        </nav>
      </div>
    </header>
  );
}
