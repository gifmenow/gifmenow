// app/texting-gifs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Texting GIFs | gifmenow.com",
  description:
    "Browse texting GIFs for every situation—awkward conversations, canceled plans, ghosted, funny reactions, and more. Find the perfect GIF to send fast.",
  alternates: { canonical: "https://gifmenow.com/texting-gifs" },
  openGraph: {
    title: "Texting GIFs | gifmenow.com",
    description:
      "Texting GIFs for every situation—awkward chats, canceled plans, ghosted, funny reactions, and more.",
    url: "https://gifmenow.com/texting-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texting GIFs | gifmenow.com",
    description:
      "Browse texting GIFs for every situation—awkward chats, canceled plans, ghosted, funny reactions, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const pages = [
  { slug: "awkward-conversation-gifs", name: "Awkward Conversation GIFs" },
  { slug: "cancels-last-minute-gifs", name: "Cancels Last Minute GIFs" },
  { slug: "dont-know-what-to-say-gifs", name: "Don’t Know What To Say GIFs" },
  { slug: "funny-gifs", name: "Funny GIFs" },
  { slug: "ghosted-gifs", name: "Ghosted GIFs" },
  { slug: "group-chat-silent-gifs", name: "Group Chat Silent GIFs" },
  { slug: "low-key-annoyed-gifs", name: "Low Key Annoyed GIFs" },
  { slug: "plans-fall-apart-gifs", name: "Plans Fall Apart GIFs" },
  { slug: "pretending-to-be-fine-gifs", name: "Pretending To Be Fine GIFs" },
  { slug: "shocked-but-calm-gifs", name: "Shocked But Calm GIFs" },
];

export default function TextingGifsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Texting GIFs",
    url: "https://gifmenow.com/texting-gifs",
    description:
      "Browse texting GIFs for every situation—awkward conversations, canceled plans, ghosted, funny reactions, and more.",
    isPartOf: { "@type": "WebSite", name: "gifmenow.com", url: "https://gifmenow.com" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://gifmenow.com" },
        { "@type": "ListItem", position: 2, name: "Texting GIFs", item: "https://gifmenow.com/texting-gifs" },
      ],
    },
  };

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 14 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>{" "}
        <span aria-hidden="true">›</span> <span>Texting GIFs</span>
      </nav>

      <header style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: "0 0 10px 0" }}>
          Texting GIFs
        </h1>
        <p style={{ fontSize: 16, margin: 0, maxWidth: 900 }}>
          Explore the best <strong>texting GIFs</strong> for every mood—awkward
          conversations, canceled plans, ghosted vibes, funny reactions, and
          more. Pick a category below to find the perfect GIF to send.
        </p>
      </header>

      <section aria-label="Texting GIF categories">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`/texting-gifs/${p.slug}`}
              style={{
                border: "1px solid #eee",
                borderRadius: 14,
                padding: 14,
                textDecoration: "none",
                display: "block",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 13, opacity: 0.75 }}>
                Browse GIFs you can send in seconds
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 26, maxWidth: 950 }}>
        <h2 style={{ fontSize: 22, margin: "0 0 10px 0" }}>
          Popular texting situations
        </h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Whether you’re reacting to an awkward pause, a last-minute cancel, or a
          ghosted message thread, a quick GIF can say what you don’t want to
          type. Bookmark this hub and come back whenever you need a perfect
          reaction.
        </p>
      </section>

      <footer style={{ marginTop: 28, paddingTop: 16, borderTop: "1px solid #eee" }}>
        <p style={{ margin: 0, fontSize: 14, opacity: 0.8 }}>
          © {new Date().getFullYear()} gifmenow.com — Texting GIF collections
        </p>
      </footer>
    </main>
  );
}
