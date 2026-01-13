// app/texting-gifs/awkward-conversation-gifs/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Awkward Conversation GIFs (Texting Reactions) | gifmenow.com",
  description:
    "Find the best awkward conversation GIFs for texting—cringe moments, uncomfortable silences, and funny reaction GIFs to send when the chat gets weird.",
  alternates: {
    canonical: "https://gifmenow.com/texting-gifs/awkward-conversation-gifs",
  },
  openGraph: {
    title: "Awkward Conversation GIFs (Texting Reactions) | gifmenow.com",
    description:
      "The best awkward conversation GIFs for texting—uncomfortable silences, cringe moments, and funny reactions.",
    url: "https://gifmenow.com/texting-gifs/awkward-conversation-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awkward Conversation GIFs (Texting Reactions) | gifmenow.com",
    description:
      "Send the perfect awkward conversation GIF when the chat gets weird—cringe, silence, and funny reactions.",
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

type GifItem = {
  title: string;
  src: string;
  alt: string;
};

const gifs: GifItem[] = [
  {
    title: "Awkward Silence",
    src: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    alt: "Awkward silence reaction GIF for texting",
  },
  {
    title: "Cringe Face",
    src: "https://media.giphy.com/media/26BRrSvJUa0crqw4E/giphy.gif",
    alt: "Cringe reaction GIF for awkward conversation",
  },
  {
    title: "Yikes",
    src: "https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif",
    alt: "Yikes reaction GIF for uncomfortable chat",
  },
  {
    title: "Staring",
    src: "https://media.giphy.com/media/3ohs4BSacFKI7A717y/giphy.gif",
    alt: "Staring awkwardly GIF for texting",
  },
  {
    title: "Nervous Laugh",
    src: "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
    alt: "Nervous laugh GIF for awkward conversation",
  },
  {
    title: "What Do I Say?",
    src: "https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif",
    alt: "What do I say reaction GIF for texting",
  },
  {
    title: "Uncomfortable",
    src: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
    alt: "Uncomfortable awkward conversation GIF",
  },
  {
    title: "Side Eye",
    src: "https://media.giphy.com/media/l2JHVUriDGEtWOx0c/giphy.gif",
    alt: "Side eye reaction GIF for weird chat",
  },
  {
    title: "Sweating",
    src: "https://media.giphy.com/media/32mC2kXYWCsg0/giphy.gif",
    alt: "Sweating reaction GIF for awkward moment",
  },
  {
    title: "Oops",
    src: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
    alt: "Oops awkward moment reaction GIF",
  },
  {
    title: "Please Stop Talking",
    src: "https://media.giphy.com/media/3o7aD4x8b1F1WwKJ9C/giphy.gif",
    alt: "Please stop talking awkward conversation GIF",
  },
  {
    title: "Blinking",
    src: "https://media.giphy.com/media/3ELtfmA4Apkju/giphy.gif",
    alt: "Blinking reaction GIF for awkward conversation",
  },
];

export default function AwkwardConversationGifsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Awkward Conversation GIFs",
    url: "https://gifmenow.com/texting-gifs/awkward-conversation-gifs",
    description:
      "Awkward conversation GIFs for texting—uncomfortable silence, cringe, and funny reaction GIFs.",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Awkward Conversation GIFs",
          item: "https://gifmenow.com/texting-gifs/awkward-conversation-gifs",
        },
      ],
    },
  };

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 14 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>{" "}
        <span aria-hidden="true">›</span>{" "}
        <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
          Texting GIFs
        </Link>{" "}
        <span aria-hidden="true">›</span>{" "}
        <span>Awkward Conversation GIFs</span>
      </nav>

      <header style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: "0 0 10px 0" }}>
          Awkward Conversation GIFs
        </h1>
        <p style={{ fontSize: 16, margin: 0, maxWidth: 800 }}>
          Need the perfect reaction when the chat gets weird? These{" "}
          <strong>awkward conversation GIFs</strong> are ideal for uncomfortable
          pauses, cringe moments, and “what do I even say?” situations. Save
          your favorites and send them anytime a text thread turns awkward.
        </p>
      </header>

      {/* Internal Links (SEO-friendly) */}
      <section
        aria-label="Related texting GIF pages"
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 18,
        }}
      >
        <Link
          href="/texting-gifs/waiting-for-a-reply"
          style={{
            border: "1px solid #ddd",
            borderRadius: 999,
            padding: "8px 12px",
          }}
        >
          Waiting for a Reply GIFs
        </Link>

        <Link
          href="/texting-gifs/left-on-read"
          style={{
            border: "1px solid #ddd",
            borderRadius: 999,
            padding: "8px 12px",
          }}
        >
          Left on Read GIFs
        </Link>

        <Link
          href="/texting-gifs"
          style={{
            border: "1px solid #ddd",
            borderRadius: 999,
            padding: "8px 12px",
          }}
        >
          Browse All Texting GIFs
        </Link>
      </section>

      {/* GIF Grid */}
      <section aria-label="Awkward conversation GIF collection">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {gifs.map((gif) => (
            <figure
              key={gif.src}
              style={{
                border: "1px solid #eee",
                borderRadius: 14,
                overflow: "hidden",
                margin: 0,
                background: "#fff",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gif.src}
                alt={gif.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <figcaption style={{ padding: 10 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>
                  {gif.title}
                </div>
                <div style={{ fontSize: 13, opacity: 0.75 }}>
                  Tap + hold to save on mobile, or right-click to save on desktop.
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Extra SEO Text */}
      <section style={{ marginTop: 26, maxWidth: 900 }}>
        <h2 style={{ fontSize: 22, margin: "0 0 10px 0" }}>
          When to use awkward conversation GIFs
        </h2>
        <p style={{ margin: "0 0 10px 0", lineHeight: 1.6 }}>
          Awkward conversation reaction GIFs are perfect for moments like: a
          sudden silence, a confusing message, a joke that didn’t land, or a
          random overshare. If you want to keep things light without writing a
          whole paragraph, an awkward GIF says it for you.
        </p>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Want more? Browse the{" "}
          <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
            Texting GIFs hub
          </Link>{" "}
          for more categories you can send in any chat.
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
