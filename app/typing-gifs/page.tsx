import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://gifmenow.com"),
  title: "Typing GIFs | Typing Bubble, Dots, and “They’re Typing…” Reactions",
  description:
    "Best typing GIFs for when the dots appear. Funny typing bubble reactions for suspense, anticipation, and chaotic texting energy.",
  alternates: { canonical: "https://gifmenow.com/typing-gifs" },
  openGraph: {
    title: "Typing GIFs | Typing Bubble, Dots, and “They’re Typing…” Reactions",
    description:
      "Funny typing GIFs for when you see the dots… and you need the perfect reaction.",
    url: "https://gifmenow.com/typing-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typing GIFs | Typing Bubble Reactions",
    description: "Typing GIFs for when the dots appear and suspense hits.",
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
    embedId: "h8JAU3XFchaJbESjCB",
    title: "Are they typing…?",
    giphyUrl:
      "https://giphy.com/gifs/PersonaJourney-waiting-for-reply-are-they-typing-nervously-h8JAU3XFchaJbESjCB",
  },
  {
    embedId: "k85c6FpnFa4bNp11XQ",
    title: "Frantic typing cat",
    giphyUrl:
      "https://giphy.com/gifs/catkeyboard-frantictyping-frantic-typing-k85c6FpnFa4bNp11XQ",
  },
  {
    embedId: "bW5Wv6HzmJ861esUIr",
    title: "Typing shiba (office)",
    giphyUrl:
      "https://giphy.com/gifs/TheDogePound-typing-shiba-inu-dogepound-bW5Wv6HzmJ861esUIr",
  },
  {
    embedId: "6qqDqNvN2tF2tYdFso",
    title: "Typing doge",
    giphyUrl:
      "https://giphy.com/gifs/TheDogePound-dog-typing-dogepound-6qqDqNvN2tF2tYdFso",
  },
  {
    embedId: "SANDK2zAhctsWpJOjx",
    title: "Kermit typing",
    giphyUrl: "https://giphy.com/gifs/SANDK2zAhctsWpJOjx",
  },
  {
    embedId: "3K0DTxvROCvo1h5d7x",
    title: "Family Guy typing",
    giphyUrl: "https://giphy.com/gifs/family-guy-family-guy-foxtv-3K0DTxvROCvo1h5d7x",
  },
];

export default function TypingGifsPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Typing GIFs",
    url: "https://gifmenow.com/typing-gifs",
    description:
      "A collection of typing GIFs for typing bubbles, dots, suspense, and ‘they’re typing…’ reactions.",
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
          name: "Typing GIFs",
          item: "https://gifmenow.com/typing-gifs",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Typing GIFs",
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
        <Link href="/typing-gifs" style={{ textDecoration: "underline" }}>
          Typing
        </Link>
      </nav>

      <header style={{ marginBottom: 14 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, marginBottom: 10 }}>
          Typing GIFs
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 820 }}>
          The dots are up. Your heart rate is up. These <strong>typing GIFs</strong> are made for
          typing bubble suspense — whether it’s a confession, a comeback, or an incoming essay.
          Perfect for iMessage, Instagram DMs, and group chats.
        </p>
      </header>

      <section aria-label="Typing GIF embeds">
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
            <Link href="/ghosted-gifs">Ghosted GIFs</Link>
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
