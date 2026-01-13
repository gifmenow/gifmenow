import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://gifmenow.com"),
  title: "Left on Read GIFs | Seen Message & No Reply Reactions",
  description:
    "Best left on read GIFs for when they saw your message and didn’t respond. Funny seen message reactions you can share instantly.",
  alternates: { canonical: "https://gifmenow.com/left-on-read-gifs" },
  openGraph: {
    title: "Left on Read GIFs | Seen Message & No Reply Reactions",
    description:
      "Funny left on read GIFs for seen messages, no reply, and read receipts.",
    url: "https://gifmenow.com/left-on-read-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Left on Read GIFs | Seen Message & No Reply Reactions",
    description: "Funny left on read GIFs for seen messages and no replies.",
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
    embedId: "GTIWQ0FbEy2GTQsGUD",
    title: "Left on read",
    giphyUrl:
      "https://giphy.com/gifs/eliderby-6lack-lately-eli-derby-GTIWQ0FbEy2GTQsGUD",
  },
  {
    embedId: "McJKzXKs4mukymPBfj",
    title: "Left on read (stranded)",
    giphyUrl:
      "https://giphy.com/gifs/janetjackson-lost-damn-stranded-McJKzXKs4mukymPBfj",
  },
  {
    embedId: "WEjuiddReNt7PrYC7G",
    title: "Knock knock… hello?",
    giphyUrl: "https://giphy.com/gifs/helloo-hellooo-left-on-read-WEjuiddReNt7PrYC7G",
  },
  {
    embedId: "vFv5K7gyj74MhI62e4",
    title: "Waiting after being left on read",
    giphyUrl:
      "https://giphy.com/gifs/pudgypenguins-sad-waiting-left-on-read-vFv5K7gyj74MhI62e4",
  },
  {
    embedId: "XHwQTFXXRWbtJY8mZO",
    title: "You there?",
    giphyUrl:
      "https://giphy.com/gifs/RyanJuarez-listening-you-there-left-on-read-XHwQTFXXRWbtJY8mZO",
  },
  {
    embedId: "JyB3zzrNPZ6XVY9SpQ",
    title: "It’s fine…",
    giphyUrl:
      "https://giphy.com/gifs/lilmiquela-im-fine-ok-left-on-read-JyB3zzrNPZ6XVY9SpQ",
  },
];

export default function LeftOnReadGifsPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Left on Read GIFs",
    url: "https://gifmenow.com/left-on-read-gifs",
    description:
      "A collection of left on read GIFs for seen messages, read receipts, and no reply reactions.",
    isPartOf: {
      "@type": "WebSite",
      name: "gifmenow.com",
      url: "https://gifmenow.com",
    },
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
          name: "Left on Read GIFs",
          item: "https://gifmenow.com/left-on-read-gifs",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Left on Read GIFs",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
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
        <Link href="/left-on-read-gifs" style={{ textDecoration: "underline" }}>
          Left on Read
        </Link>
      </nav>

      <header style={{ marginBottom: 14 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, marginBottom: 10 }}>
          Left on Read GIFs
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: 820 }}>
          Read receipts hurt. These <strong>left on read GIFs</strong> are perfect for when they
          <em> saw your message</em> and responded with pure silence. Use them for iMessage,
          Instagram DMs, and any chat where “seen” hits different.
        </p>
      </header>

      <section aria-label="Left on read GIF embeds">
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
            <Link href="/typing-gifs">Typing bubble GIFs</Link>
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
