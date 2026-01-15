import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://gifmenow.com"),
  title: "Ghosted GIFs | Funny Ghosting & Disappearing Text Reactions",
  description:
    "Best ghosted GIFs for when they disappear mid-conversation. Funny ghosting reactions for dating, texting, and group chats.",
  alternates: { canonical: "https://gifmenow.com/ghosted-gifs" },
  openGraph: {
    title: "Ghosted GIFs | Funny Ghosting & Disappearing Text Reactions",
    description:
      "Ghosted GIFs for when they vanish. Perfect for dating and texting reactions.",
    url: "https://gifmenow.com/ghosted-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghosted GIFs | Funny Ghosting Reactions",
    description: "Ghosted GIFs for when they disappear mid-chat.",
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

const GIFS = [
  {
    embedId: "5YhLUgK0vxd4ZPuYka",
    title: "Ghosted",
    giphyUrl: "https://giphy.com/gifs/foxtv-fox-ghosted-on-5YhLUgK0vxd4ZPuYka",
  },
  {
    embedId: "TFeeHnorUpf8LgQtDm",
    title: "Ghosted (on FOX)",
    giphyUrl: "https://giphy.com/gifs/foxtv-fox-ghosted-TFeeHnorUpf8LgQtDm",
  },
  {
    embedId: "OSf6goKnN2m5purLBI",
    title: "Very good (ghosted)",
    giphyUrl:
      "https://giphy.com/gifs/foxtv-paranormal-ghosted-on-fox-OSf6goKnN2m5purLBI",
  },
  {
    embedId: "QmMoHIt4onP2EOQ2yU",
    title: "Ghosted (paranormal)",
    giphyUrl: "https://giphy.com/gifs/ghostedonfox-fox-paranormal-QmMoHIt4onP2EOQ2yU",
  },
  {
    embedId: "irg6UscW3jAhncfH5X",
    title: "Ghosted",
    giphyUrl: "https://giphy.com/gifs/ghostedonfox-irg6UscW3jAhncfH5X",
  },
  {
    embedId: "goHwIdW7tilQnphiK9",
    title: "Ghosted (spooky mood)",
    giphyUrl: "https://giphy.com/gifs/spooky-movie-monsters-modern-goHwIdW7tilQnphiK9",
  },
];

export default function GhostedGifsPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ghosted GIFs",
    url: "https://gifmenow.com/ghosted-gifs",
    description:
      "A collection of ghosted GIFs for ghosting, disappearing texts, and no response reactions.",
    isPartOf: { "@type": "WebSite", name: "gifmenow.com", url: "https://gifmenow.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://gifmenow.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Texting GIFs",
          item: "https://gifmenow.com/texting-gifs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ghosted GIFs",
          item: "https://gifmenow.com/ghosted-gifs",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Ghosted GIFs",
      numberOfItems: GIFS.length,
      itemListElement: GIFS.map((g, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: g.title,
        url: g.giphyUrl,
      })),
    },
  };

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <nav style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
        <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
          Texting GIFs
        </Link>
        <Link href="/ghosted-gifs" style={{ textDecoration: "underline" }}>
          Ghosted
        </Link>
      </nav>

      <header style={{ marginBottom: 14 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, marginBottom: 10 }}>
          Ghosted GIFs
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 820 }}>
          When they disappear like a magic trick. These <strong>ghosted GIFs</strong> are perfect
          for calling out ghosting, unanswered DMs, and conversations that fell off a cliff.
          Use them in dating chats, group chats, and anywhere you need a “where’d you go?” reaction.
        </p>
      </header>

      <section aria-label="Ghosted GIF embeds">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {GIFS.map((g) => (
            <div
              key={g.embedId}
              style={{ border: "1px solid #ddd", borderRadius: 14, padding: 12 }}
            >
              <div style={{ fontWeight: 600, marginBottom: 10 }}>{g.title}</div>

              <div style={{ width: "100%", height: 0, paddingBottom: "60%", position: "relative" }}>
                <iframe
                  src={`https://giphy.com/embed/${g.embedId}`}
                  width="100%"
                  height="100%"
                  style={{ position: "absolute" }}
                  frameBorder="0"
                  allowFullScreen
                  title={g.title}
                />
              </div>

              <p style={{ margin: "10px 0 0 0" }}>
                <a
                  href={g.giphyUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Open on Giphy
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 26 }}>
        <h2 style={{ fontSize: 18, marginBottom: 10 }}>More texting GIF categories</h2>
        <ul style={{ lineHeight: 1.9, paddingLeft: 18 }}>
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
            <Link href="/texting-gifs">Back to Texting GIFs hub</Link>
          </li>
        </ul>
      </section>

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
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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
