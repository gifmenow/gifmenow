// app/texting-gifs/cancels-last-minute-gifs/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancels Last Minute GIFs (Texting Reactions) | gifmenow.com",
  description:
    "Find the best cancels last minute GIFs for texting—funny reactions for last-minute plans changes, flaking, and “sorry can’t make it” moments.",
  alternates: {
    canonical: "https://gifmenow.com/texting-gifs/cancels-last-minute-gifs",
  },
  openGraph: {
    title: "Cancels Last Minute GIFs (Texting Reactions) | gifmenow.com",
    description:
      "The best cancels last minute GIFs for texting—flaking, last-minute plan changes, and funny reaction GIFs.",
    url: "https://gifmenow.com/texting-gifs/cancels-last-minute-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancels Last Minute GIFs (Texting Reactions) | gifmenow.com",
    description:
      "Send the perfect cancels last minute GIF when plans change—funny flake reactions and “can’t make it” moments.",
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
    title: "Oh… Cool.",
    src: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    alt: "Oh cool cancels last minute reaction GIF for texting",
  },
  {
    title: "Seriously?",
    src: "https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif",
    alt: "Seriously cancels last minute GIF reaction",
  },
  {
    title: "Big Sigh",
    src: "https://media.giphy.com/media/26BRrSvJUa0crqw4E/giphy.gif",
    alt: "Sighing reaction GIF when someone cancels last minute",
  },
  {
    title: "Not Surprised",
    src: "https://media.giphy.com/media/3ohs4BSacFKI7A717y/giphy.gif",
    alt: "Not surprised reaction GIF for last minute cancellation",
  },
  {
    title: "Eye Roll",
    src: "https://media.giphy.com/media/l2JHVUriDGEtWOx0c/giphy.gif",
    alt: "Eye roll GIF for cancels last minute texting",
  },
  {
    title: "Okay Then",
    src: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
    alt: "Okay then reaction GIF for last minute plan change",
  },
  {
    title: "Disappointed",
    src: "https://media.giphy.com/media/32mC2kXYWCsg0/giphy.gif",
    alt: "Disappointed reaction GIF for getting canceled on",
  },
  {
    title: "We’ll Reschedule…",
    src: "https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif",
    alt: "We will reschedule GIF reaction to last minute cancel",
  },
  {
    title: "Unbelievable",
    src: "https://media.giphy.com/media/3ELtfmA4Apkju/giphy.gif",
    alt: "Unbelievable reaction GIF for last minute cancellation",
  },
  {
    title: "That’s Fine",
    src: "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
    alt: "That's fine sarcastic reaction GIF for canceling plans",
  },
  {
    title: "Bummer",
    src: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
    alt: "Bummer reaction GIF when plans get canceled",
  },
  {
    title: "K Bye",
    src: "https://media.giphy.com/media/3o7aD4x8b1F1WwKJ9C/giphy.gif",
    alt: "K bye reaction GIF for canceling last minute",
  },
];

export default function CancelsLastMinuteGifsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Cancels Last Minute GIFs",
    url: "https://gifmenow.com/texting-gifs/cancels-last-minute-gifs",
    description:
      "Cancels last minute GIFs for texting—funny reactions for flaking, last-minute plan changes, and 'sorry can't make it' moments.",
    isPartOf: {
      "@type": "WebSite",
      name: "gifmenow.com",
      url: "https://gifmenow.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://gifmenow.com" },
        { "@type": "ListItem", position: 2, name: "Texting GIFs", item: "https://gifmenow.com/texting-gifs" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cancels Last Minute GIFs",
          item: "https://gifmenow.com/texting-gifs/cancels-last-minute-gifs",
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
        <span>Cancels Last Minute GIFs</span>
      </nav>

      <header style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: "0 0 10px 0" }}>
          Cancels Last Minute GIFs
        </h1>
        <p style={{ fontSize: 16, margin: 0, maxWidth: 820 }}>
          Someone just canceled at the last second? These{" "}
          <strong>cancels last minute GIFs</strong> are perfect for flake energy,
          sudden plan changes, and “oh… okay” moments. Save your favorites and
          send them when plans suddenly disappear.
        </p>
      </header>

      {/* Internal Links (SEO-friendly) */}
      <section
        aria-label="Related texting GIF pages"
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}
      >
        <Link
          href="/texting-gifs/awkward-conversation-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}
        >
          Awkward Conversation GIFs
        </Link>

        <Link
          href="/texting-gifs/waiting-for-a-reply"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}
        >
          Waiting for a Reply GIFs
        </Link>

        <Link
          href="/texting-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}
        >
          Browse All Texting GIFs
        </Link>
      </section>

      {/* GIF Grid */}
      <section aria-label="Cancels last minute GIF collection">
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
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{gif.title}</div>
                <div style={{ fontSize: 13, opacity: 0.75 }}>
                  Tap + hold to save on mobile, or right-click to save on desktop.
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Extra SEO Text */}
      <section style={{ marginTop: 26, maxWidth: 920 }}>
        <h2 style={{ fontSize: 22, margin: "0 0 10px 0" }}>
          When to use cancels last minute GIFs
        </h2>
        <p style={{ margin: "0 0 10px 0", lineHeight: 1.6 }}>
          Use a cancels last minute reaction GIF when someone flakes, changes plans
          5 minutes before, or hits you with the classic “something came up.”
          Whether you’re genuinely disappointed or jokingly dramatic, a GIF is the
          easiest way to react without starting an argument.
        </p>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Looking for more texting reactions? Visit the{" "}
          <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
            Texting GIFs hub
          </Link>{" "}
          for more categories.
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
