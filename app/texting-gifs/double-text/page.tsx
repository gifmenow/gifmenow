// app/texting-gifs/double-text/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Double Text GIFs (Texting Reactions) | gifmenow.com",
  description:
    "Browse the best double text GIFs for texting—funny reactions for when you send another message, follow up, or accidentally triple text.",
  alternates: {
    canonical: "https://gifmenow.com/texting-gifs/double-text",
  },
  openGraph: {
    title: "Double Text GIFs (Texting Reactions) | gifmenow.com",
    description:
      "The best double text GIFs for texting—follow-up reactions, double texting energy, and funny GIF replies.",
    url: "https://gifmenow.com/texting-gifs/double-text",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Double Text GIFs (Texting Reactions) | gifmenow.com",
    description:
      "Send the perfect double text GIF—funny reactions for follow-ups, double texting, and texting anxiety moments.",
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
    title: "Just Following Up…",
    src: "https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif",
    alt: "Just following up double text reaction GIF",
  },
  {
    title: "Me Again",
    src: "https://media.giphy.com/media/3ELtfmA4Apkju/giphy.gif",
    alt: "Me again double text GIF for texting",
  },
  {
    title: "Oops I Double Texted",
    src: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
    alt: "Oops I double texted reaction GIF",
  },
  {
    title: "Typing… Again",
    src: "https://media.giphy.com/media/32mC2kXYWCsg0/giphy.gif",
    alt: "Typing again double text reaction GIF",
  },
  {
    title: "Don’t Ignore Me",
    src: "https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif",
    alt: "Don't ignore me double text reaction GIF",
  },
  {
    title: "Hello??",
    src: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    alt: "Hello double text follow up reaction GIF",
  },
  {
    title: "Nervous Energy",
    src: "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
    alt: "Nervous energy double texting GIF",
  },
  {
    title: "I Said What I Said",
    src: "https://media.giphy.com/media/3ohs4BSacFKI7A717y/giphy.gif",
    alt: "I said what I said double text GIF reaction",
  },
  {
    title: "Please Respond",
    src: "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
    alt: "Please respond double text reaction GIF",
  },
  {
    title: "Awkward",
    src: "https://media.giphy.com/media/3ohs4BSacFKI7A717y/giphy.gif",
    alt: "Awkward double text reaction GIF for texting",
  },
  {
    title: "Another Message…",
    src: "https://media.giphy.com/media/l2JHVUriDGEtWOx0c/giphy.gif",
    alt: "Another message double text GIF",
  },
  {
    title: "Triple Text Incoming",
    src: "https://media.giphy.com/media/3o7aD4x8b1F1WwKJ9C/giphy.gif",
    alt: "Triple text incoming funny reaction GIF",
  },
];

export default function DoubleTextPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Double Text GIFs",
    url: "https://gifmenow.com/texting-gifs/double-text",
    description:
      "Double text GIFs for texting—funny reactions for follow-ups, second messages, and double texting moments.",
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
        { "@type": "ListItem", position: 3, name: "Double Text GIFs", item: "https://gifmenow.com/texting-gifs/double-text" },
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
        <span>Double Text GIFs</span>
      </nav>

      <header style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: "0 0 10px 0" }}>
          Double Text GIFs
        </h1>
        <p style={{ fontSize: 16, margin: 0, maxWidth: 860 }}>
          Double texting happens. Whether you’re doing a quick follow-up, sending
          a “just checking,” or accidentally triple texting, these{" "}
          <strong>double text GIFs</strong> are perfect for reacting without
          overexplaining. Save your favorites and send them when you need a
          second message moment.
        </p>
      </header>

      {/* Internal Links */}
      <section
        aria-label="Related texting GIF pages"
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}
      >
        <Link
          href="/texting-gifs/waiting-for-a-reply"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}
        >
          Waiting for a Reply GIFs
        </Link>

        <Link
          href="/texting-gifs/left-on-read"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}
        >
          Left on Read GIFs
        </Link>

        <Link
          href="/texting-gifs/awkward-conversation-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}
        >
          Awkward Conversation GIFs
        </Link>

        <Link
          href="/texting-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}
        >
          Browse All Texting GIFs
        </Link>
      </section>

      {/* GIF Grid */}
      <section aria-label="Double text GIF collection">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {gifs.map((gif, idx) => (
            <figure
              key={`${gif.src}-${idx}`}
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
          When to use double text GIFs
        </h2>
        <p style={{ margin: "0 0 10px 0", lineHeight: 1.6 }}>
          Use a double text reaction GIF when you need to follow up, clarify
          something, or you realize you forgot a detail in your first message.
          It’s also the perfect vibe when you’re joking about being a “double
          texter” or when you’re sending the classic “just making sure you saw
          this.”
        </p>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Want more texting categories? Head back to the{" "}
          <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>
            Texting GIFs hub
          </Link>{" "}
          for more reaction pages.
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
