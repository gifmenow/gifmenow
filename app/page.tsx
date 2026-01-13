import type { Metadata } from "next";

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
    href: "/dont-know-what-to-say-gifs",
  },
  {
    title: "GIFs for When the Group Chat Is Silent",
    description: "Perfect for when nobody replies and the chat goes dead.",
    href: "/group-chat-silent-gifs",
  },
  {
    title: "GIFs for When You’re Waiting for a Reply",
    description: "Left on delivered? Typing bubble disappeared? These fit.",
    href: "/waiting-for-a-reply-gifs",
  },
];

export default function HomePage() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <header style={{ maxWidth: 900 }}>
        <h1 style={{ fontSize: 44, marginBottom: 10 }}>GifMeNow</h1>

        <p style={{ fontSize: 18, color: "#444", marginTop: 0 }}>
          Find the perfect reaction GIF for real-life moments—organized by
          context, not chaos.
        </p>
      </header>

      <section style={{ marginTop: 30 }}>
        <h2>Top pages</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginTop: 14,
            maxWidth: 980,
          }}
        >
          {PAGES.map((page) => (
            <a
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
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>{page.title}</h3>
              <p style={{ margin: 0, color: "#555" }}>{page.description}</p>
              <p style={{ marginTop: 10, color: "#0070f3", fontWeight: 600 }}>
                Open →
              </p>
            </a>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 40, fontSize: 13, color: "#666" }}>
        <p style={{ maxWidth: 900 }}>
          GIFs on this site are embedded from GIPHY. GifMeNow focuses on
          organizing reaction GIFs by context to help you find the right one
          faster.
        </p>
      </footer>
    </main>
  );
}
