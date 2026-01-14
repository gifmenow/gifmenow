import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "GifMeNow | Find the perfect reaction GIF",
  description:
    "GifMeNow helps you find the perfect reaction GIF for any moment—organized by real-life situations like awkward silence, waiting for a reply, and not knowing what to say.",
  metadataBase: new URL("https://gifmenow.com"),
  openGraph: {
    title: "GifMeNow | Find the perfect reaction GIF",
    description:
      "A context-first GIF library for real-life moments. Browse situation pages and copy the perfect reaction.",
    url: "https://gifmenow.com",
    siteName: "GifMeNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GifMeNow | Find the perfect reaction GIF",
    description:
      "A context-first GIF library for real-life moments—awkward silence, waiting for a reply, and more.",
  },
  robots: { index: true, follow: true },
};

const PAGES = [
  {
    title: "GIFs for When You Don’t Know What to Say",
    description: "Awkward, speechless, and lost-for-words reactions.",
    // If your actual folder exists elsewhere, tell me and I’ll match it.
    href: "/texting-gifs/awkward-conversation-gifs",
  },
  {
    title: "GIFs for When the Group Chat Is Silent",
    description: "Perfect for when nobody replies and the chat goes dead.",
    href: "/texting-gifs/left-on-read-gifs",
  },
  {
    title: "GIFs for When You’re Waiting for a Reply",
    description: "Left on delivered? Typing bubble disappeared? These fit.",
    // ✅ FIXED: this matches your folder structure (nested under texting-gifs)
    href: "/texting-gifs/waiting-for-a-reply-gifs",
  },
];

export default function HomePage() {
  return (
    <main className={inter.className} style={{ padding: 40 }}>
      <header style={{ maxWidth: 980 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            alignItems: "center",
            marginBottom: 22,
          }}
        >
          <div style={{ fontWeight: 700, opacity: 0.85 }}>gifmenow.com</div>

          <nav style={{ display: "flex", gap: 14, fontWeight: 500 }}>
            <Link href="/" style={{ color: "inherit" }}>
              Home
            </Link>
            <Link href="/texting-gifs" style={{ color: "inherit" }}>
              Texting GIFs
            </Link>
          </nav>
        </div>

        <h1 style={{ fontSize: 44, marginBottom: 10, fontWeight: 700 }}>
          GifMeNow
        </h1>

        <p style={{ fontSize: 18, opacity: 0.8, marginTop: 0, fontWeight: 400 }}>
          Find the perfect reaction GIF for real-life moments—organized by
          context, not chaos.
        </p>
      </header>

      <section style={{ marginTop: 30, maxWidth: 980 }}>
        <h2 style={{ fontWeight: 700, marginBottom: 14 }}>Top pages</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {PAGES.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              style={{
                display: "block",
                padding: 16,
                border: "1px solid #eee",
                borderRadius: 14,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: 8, fontWeight: 700 }}>
                {page.title}
              </h3>
              <p style={{ margin: 0, opacity: 0.8, fontWeight: 400 }}>
                {page.description}
              </p>
              <p style={{ marginTop: 10, color: "#0070f3", fontWeight: 600 }}>
                Open →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 40, fontSize: 13, opacity: 0.75, maxWidth: 980 }}>
        <p style={{ margin: 0 }}>
          GIFs on this site are embedded from GIPHY. GifMeNow focuses on
          organizing reaction GIFs by context to help you find the right one
          faster.
        </p>
      </footer>
    </main>
  );
}
