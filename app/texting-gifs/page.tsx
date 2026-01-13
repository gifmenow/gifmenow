// app/texting-gifs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://gifmenow.com"),
  title: "Texting GIFs | Funny Waiting, Seen, Typing & Ghosted Reactions",
  description:
    "Browse the best texting GIFs for every moment: waiting for a reply, left on read, typing bubble, and ghosted reactions. Quick, shareable GIFs for iMessage, Instagram, and more.",
  alternates: {
    canonical: "https://gifmenow.com/texting-gifs",
  },
  openGraph: {
    title: "Texting GIFs | Funny Waiting, Seen, Typing & Ghosted Reactions",
    description:
      "The best texting GIFs for waiting, seen, typing, and ghosted moments. Perfect reactions for iMessage and social.",
    url: "https://gifmenow.com/texting-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texting GIFs | Funny Waiting, Seen, Typing & Ghosted Reactions",
    description:
      "Find the best texting GIFs for waiting, seen, typing, and ghosted moments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function TextingGifsPage() {
  const hubJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Texting GIFs",
    url: "https://gifmenow.com/texting-gifs",
    description:
      "A hub for the best texting reaction GIFs: waiting for a reply, left on read, typing bubble, and ghosted.",
    isPartOf: {
      "@type": "WebSite",
      name: "gifmenow.com",
      url: "https://gifmenow.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://gifmenow.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Texting GIFs",
          item: "https://gifmenow.com/texting-gifs",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Texting GIF Categories",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Waiting for a Reply GIFs",
          url: "https://gifmenow.com/waiting-for-a-reply",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Seen / Left on Read GIFs",
          url: "https://gifmenow.com/left-on-read-gifs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Typing Bubble GIFs",
          url: "https://gifmenow.com/typing-gifs",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Ghosted GIFs",
          url: "https://gifmenow.com/ghosted-gifs",
        },
      ],
    },
  };

  const categories = [
    {
      title: "Waiting for a Reply",
      href: "/waiting-for-a-reply",
      description:
        "When the chat is silent and you’re refreshing like it’s your job.",
    },
    {
      title: "Seen / Left on Read",
      href: "/left-on-read-gifs",
      description:
        "For the heartbreak of that read receipt and zero response.",
    },
    {
      title: "Typing Bubble",
      href: "/typing-gifs",
      description:
        "For when the dots appear… and you need a reaction immediately.",
    },
    {
      title: "Ghosted",
      href: "/ghosted-gifs",
      description:
        "For when they vanish into the void and you need the perfect GIF.",
    },
  ];

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }}
      />

      {/* Top nav */}
      <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
        <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
          Texting GIFs
        </Link>
      </nav>

      <header style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, marginBottom: 10 }}>
          Texting GIFs
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 780 }}>
          Welcome to the texting reaction hub on <strong>gifmenow.com</strong>.
          Here you’ll find the best GIFs for every chat situation — waiting for a
          reply, left on read, typing bubble suspense, and getting ghosted.
          Bookmark this page and pick a category below.
        </p>
      </header>

      {/* Category grid */}
      <section aria-label="Texting GIF categories">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            marginTop: 18,
          }}
        >
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{
                border: "1px solid #ddd",
                borderRadius: 14,
                padding: 16,
                textDecoration: "none",
                display: "block",
              }}
            >
              <h2 style={{ fontSize: 18, margin: "0 0 8px 0" }}>{c.title}</h2>
              <p style={{ margin: 0, color: "#333", lineHeight: 1.5 }}>
                {c.description}
              </p>
              <p style={{ margin: "10px 0 0 0", textDecoration: "underline" }}>
                View GIFs →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Extra internal links for SEO */}
      <section style={{ marginTop: 26 }}>
        <h2 style={{ fontSize: 18, marginBottom: 10 }}>
          Popular texting GIF pages
        </h2>
        <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
          <li>
            <Link href="/waiting-for-a-reply">Waiting for a reply GIFs</Link>
          </li>
          <li>
            <Link href="/left-on-read-gifs">Left on read / seen GIFs</Link>
          </li>
          <li>
            <Link href="/typing-gifs">Typing bubble GIFs</Link>
          </li>
          <li>
            <Link href="/ghosted-gifs">Ghosted GIFs</Link>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: 34,
          paddingTop: 16,
          borderTop: "1px solid #eee",
          fontSize: 14,
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span>© {new Date().getFullYear()} gifmenow.com</span>
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/" style={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
            Texting GIFs
          </Link>
          <Link href="/waiting-for-a-reply" style={{ textDecoration: "underline" }}>
            Waiting
          </Link>
        </div>
      </footer>
    </main>
  );
}
