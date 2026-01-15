// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400; // daily refresh


const SITE_NAME = "gifmenow.com";
const BASE_URL = "https://www.gifmenow.com";
const CANONICAL = `${BASE_URL}/`;

export const metadata: Metadata = {
  title: "Reaction GIFs for Texting, Group Chats & Awkward Moments | gifmenow.com",
  description:
    "Find the perfect reaction GIF for real-life moments—organized by context for texting, group chats, awkward silences, waiting for replies, and more. Browse curated GIF categories fast.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Reaction GIFs for Texting, Group Chats & Awkward Moments | gifmenow.com",
    description:
      "Browse curated reaction GIFs for texting, group chats, awkward moments, and more—organized by situation so you can send the perfect GIF fast.",
    url: CANONICAL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reaction GIFs for Texting, Group Chats & Awkward Moments | gifmenow.com",
    description:
      "Curated reaction GIFs for texting, group chats, awkward silences, and more. Pick a situation and send the perfect GIF fast.",
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

const primary = {
  href: "/texting-gifs",
  title: "Texting GIFs",
  desc:
    "Reaction GIFs for being left on read, waiting for a reply, double texting, awkward chats, and more.",
  cta: "Browse Texting GIFs →",
};

const topPages = [
  {
    href: "/dont-know-what-to-say-gifs",
    title: "GIFs for When You Don’t Know What to Say",
    desc: "Reaction GIFs for awkward, speechless, and lost-for-words moments.",
  },
  {
    href: "/group-chat-silent-gifs",
    title: "GIFs for When the Group Chat Is Silent",
    desc: "Reaction GIFs for when nobody replies and the chat goes dead.",
  },
  {
    href: "/texting-gifs/waiting-for-a-reply-gifs",
    title: "GIFs for When You’re Waiting for a Reply",
    desc: "Reaction GIFs for the long pause, seen messages, and typing bubbles.",
  },
];

const categories = [
  { href: "/texting-gifs", title: "Texting GIFs", desc: "Curated reaction GIFs for texting situations." },
  { href: "/funny-gifs", title: "Funny GIFs", desc: "Quick reactions when you want to keep it light." },
  { href: "/awkward-conversation-gifs", title: "Awkward Conversation GIFs", desc: "When the chat gets weird fast." },
  { href: "/ghosted-gifs", title: "Ghosted GIFs", desc: "Reaction GIFs for being ignored or left hanging." },
  { href: "/group-chat-silent-gifs", title: "Group Chat Silent GIFs", desc: "When the thread goes quiet." },
  { href: "/plans-fall-apart-gifs", title: "Plans Fall Apart GIFs", desc: "When everything gets canceled." },
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

export default function HomePage() {
  const lastUpdated = formatLastUpdated(new Date());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero">
        {/* Brand (keep it), but give Google a keyword-rich H1 */}
        <div className="brand">gifmenow.com</div>

        <h1>Reaction GIFs for Texting, Group Chats, and Awkward Moments</h1>

        <p className="subhead">
          Find the perfect reaction GIF for real-life moments—organized by context, not chaos.
          Pick a situation and send the right GIF fast (especially for texting and group chats).
        </p>

        <p className="freshness">
          Updated daily · Last updated: <strong>{lastUpdated} (UTC)</strong>
        </p>

        <div className="ctaRow">
          <Link className="primaryBtn" href={primary.href}>
            {primary.cta}
          </Link>
          <Link className="secondaryBtn" href="/texting-gifs">
            Explore categories
          </Link>
        </div>
      </header>

      <section className="section" aria-label="Primary category">
        <div className="primaryCard">
          <div className="primaryKicker">Start here</div>
          <div className="primaryTitle">{primary.title}</div>
          <p className="primaryDesc">{primary.desc}</p>
          <Link href={primary.href} className="primaryLink">
            {primary.cta}
          </Link>
        </div>
      </section>

      <section className="section" aria-label="Top pages">
        <h2>Top pages</h2>
        <div className="grid">
          {topPages.map((p) => (
            <Link key={p.href} href={p.href} className="card">
              <div className="cardTitle">{p.title}</div>
              <div className="cardDesc">{p.desc}</div>
              <div className="cardLink">Open →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" aria-label="Browse categories">
        <h2>Browse by situation</h2>
        <div className="grid">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="card">
              <div className="cardTitle">{c.title}</div>
              <div className="cardDesc">{c.desc}</div>
              <div className="cardLink">Browse →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section prose" aria-label="About">
        <h2>How gifmenow.com works</h2>
        <p>
          GIFs on this site are embedded from GIPHY. gifmenow.com focuses on organizing reaction GIFs
          by situation (texting, awkward moments, group chats, and more) so you can find the right one
          faster. Start with <Link href="/texting-gifs" className="inlineLink">Texting GIFs</Link> for the
          highest-intent categories.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {SITE_NAME} — Curated reaction GIF categories</p>
      </footer>

      <style>{`
        /* Homepage styles (scoped) */
        .page {
          width: 100%;
          margin: 0;
          padding: 26px 14px 60px;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          font-weight: 400;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto 18px;
          padding: 0 6px;
        }

        .brand {
          font-size: 14px;
          font-weight: 600;
          opacity: 0.85;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 44px;
          line-height: 1.1;
          margin: 0 0 10px 0;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .subhead {
          font-size: 16px;
          margin: 0;
          max-width: 90ch;
          line-height: 1.6;
        }

        .freshness {
          margin: 10px 0 0;
          font-size: 13px;
          opacity: 0.78;
        }

        .ctaRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        .primaryBtn {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 14px;
          border: 1px solid #111;
          text-decoration: none;
          font-weight: 500; /* buttons */
        }

        .secondaryBtn {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 14px;
          border: 1px solid #eee;
          text-decoration: none;
          font-weight: 500; /* buttons */
        }

        .section {
          max-width: 1100px;
          margin: 18px auto 0;
          padding: 0 6px;
        }

        h2 {
          font-size: 22px;
          margin: 0 0 10px 0;
          font-weight: 700;
        }

        .primaryCard {
          border: 1px solid #eee;
          border-radius: 18px;
          padding: 16px;
        }

        .primaryKicker {
          font-size: 12px;
          opacity: 0.7;
          margin-bottom: 6px;
        }

        .primaryTitle {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .primaryDesc {
          margin: 0 0 10px 0;
          line-height: 1.6;
          max-width: 95ch;
        }

        .primaryLink {
          text-decoration: none;
          font-weight: 500; /* buttons/links */
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

        .cardDesc {
          font-size: 13px;
          opacity: 0.78;
          line-height: 1.45;
          margin-bottom: 10px;
        }

        .cardLink {
          font-size: 13px;
          font-weight: 500;
        }

        .prose p {
          margin: 0;
          line-height: 1.7;
          max-width: 95ch;
        }

        .inlineLink {
          text-decoration: underline;
          font-weight: 500;
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
