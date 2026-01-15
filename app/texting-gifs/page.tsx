// app/texting-gifs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60 * 60 * 24; // daily refresh

const SITE_NAME = "gifmenow.com";
const BASE_URL = "https://www.gifmenow.com";
const CANONICAL = `${BASE_URL}/texting-gifs`;

export const metadata: Metadata = {
  title: "Texting Reaction GIFs for Every Moment | gifmenow.com",
  description:
    "Browse texting reaction GIFs for every situation—awkward conversations, canceled plans, ghosted vibes, funny replies, and more. Find the perfect GIF to send fast.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Texting Reaction GIFs for Every Moment | gifmenow.com",
    description:
      "Texting reaction GIFs for awkward chats, canceled plans, ghosted vibes, funny replies, and more—pick a category and send the perfect GIF.",
    url: CANONICAL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texting Reaction GIFs for Every Moment | gifmenow.com",
    description:
      "Browse texting reaction GIFs for awkward chats, canceled plans, ghosted vibes, funny replies, and more.",
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

const featured = [
  { slug: "left-on-read-gifs", name: "Left on Read GIFs", note: "When they saw it… and stayed silent" },
  { slug: "waiting-for-a-reply-gifs", name: "Waiting for a Reply GIFs", note: "For the long, painful pause" },
  { slug: "double-text", name: "Double Text GIFs", note: "Because one message wasn’t enough" },
  { slug: "typing-gifs", name: "Typing GIFs", note: "When you’re about to say something" },
];

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

function formatLastUpdated(d: Date) {
  // Server-rendered (UTC) to avoid hydration mismatch
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(d);
}

export default function TextingGifsHubPage() {
  const lastUpdated = formatLastUpdated(new Date());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Texting GIFs",
    url: CANONICAL,
    description:
      "Browse texting reaction GIFs for every situation—awkward conversations, canceled plans, ghosted vibes, funny replies, and more.",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: BASE_URL },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Texting GIFs", item: CANONICAL },
      ],
    },
  };

  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/" className="crumbLink">
          Home
        </Link>
        <span className="crumbSep" aria-hidden="true">
          ›
        </span>
        <span className="crumbCurrent">Texting GIFs</span>
      </nav>

      <header className="top">
        <h1>Texting Reaction GIFs for Awkward, Funny, and Silent Moments</h1>

        <p className="description">
          Explore the best <strong>texting reaction GIFs</strong> for every mood—awkward conversations,
          canceled plans, ghosted vibes, funny replies, and those moments when you{" "}
          <em>don’t know what to say</em>. Pick a category below and send the perfect GIF in seconds
          (great for group chats, too).
        </p>

        <p className="freshness" aria-label="Freshness">
          Updated daily · Last updated: <strong>{lastUpdated} (UTC)</strong>
        </p>
      </header>

      <section className="section" aria-label="Top texting reactions">
        <h2>Top texting reactions</h2>

        <div className="featuredGrid">
          {featured.map((p) => (
            <Link key={p.slug} href={`/texting-gifs/${p.slug}`} className="card">
              <div className="cardTitle">{p.name}</div>
              <div className="cardNote">{p.note}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" aria-label="All texting GIF categories">
        <h2>All categories</h2>

        <div className="grid">
          {pages.map((p) => (
            <Link key={p.slug} href={`/texting-gifs/${p.slug}`} className="card">
              <div className="cardTitle">{p.name}</div>
              <div className="cardSub">Browse GIFs you can send in seconds</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section prose" aria-label="About texting GIFs">
        <h2>Popular texting situations</h2>
        <p>
          Whether you’re reacting to an awkward pause, a last-minute cancel, a seen message, or a
          ghosted thread, a quick GIF can say what you don’t want to type. Bookmark this hub and
          come back whenever you need a perfect reaction.
        </p>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {SITE_NAME} — Texting GIF collections
        </p>
      </footer>

      <style>{`
        /* App Router hub page styles (scoped) */
        .page {
          width: 100%;
          margin: 0;
          padding: 18px 14px 60px;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          font-weight: 400;
        }

        .top {
          max-width: 1100px;
          margin: 0 auto 18px;
          padding: 0 6px;
        }

        .breadcrumbs {
          max-width: 1100px;
          margin: 0 auto 12px;
          padding: 0 6px;
          font-size: 13px;
        }

        .crumbLink {
          text-decoration: underline;
        }

        .crumbSep {
          margin: 0 8px;
          opacity: 0.7;
        }

        h1 {
          font-size: 40px;
          line-height: 1.12;
          margin: 0 0 10px 0;
          font-weight: 700;
        }

        h2 {
          font-size: 22px;
          margin: 0 0 10px 0;
          font-weight: 700;
        }

        .description {
          font-size: 16px;
          margin: 0;
          max-width: 86ch;
          line-height: 1.6;
        }

        .freshness {
          margin: 10px 0 0;
          font-size: 13px;
          opacity: 0.78;
        }

        .section {
          max-width: 1100px;
          margin: 18px auto 0;
          padding: 0 6px;
        }

        .featuredGrid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
        }

        .card {
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 14px;
          text-decoration: none;
          display: block;
          transition: transform 0.08s ease;
        }

        .card:focus,
        .card:hover {
          transform: translateY(-1px);
        }

        .cardTitle {
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 6px;
        }

        .cardSub {
          font-size: 13px;
          opacity: 0.75;
        }

        .cardNote {
          font-size: 13px;
          opacity: 0.8;
          line-height: 1.35;
        }

        .prose p {
          margin: 0;
          line-height: 1.7;
          max-width: 90ch;
        }

        .footer {
          max-width: 1100px;
          margin: 26px auto 0;
          padding: 16px 6px 0;
          border-top: 1px solid #eee;
          font-size: 14px;
          opacity: 0.82;
        }
      `}</style>
    </main>
  );
}
