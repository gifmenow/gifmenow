// app/texting-gifs/double-text/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Double Text GIFs for Double Texting & Follow-Up Messages | gifmenow.com",
  description:
    "Explore double text GIFs for double texting, follow-up messages, and second texts. Funny texting reaction GIFs for when you send another message or triple text.",
  alternates: {
    canonical: "https://gifmenow.com/texting-gifs/double-text",
  },
  openGraph: {
    title: "Double Text GIFs for Double Texting & Follow-Ups | gifmenow.com",
    description:
      "The best double text GIFs for follow-up texts, second messages, and double texting energy.",
    url: "https://gifmenow.com/texting-gifs/double-text",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Double Text GIFs for Double Texting & Follow-Ups | gifmenow.com",
    description:
      "Send the perfect double text GIF for follow-ups, double texting, and second message moments.",
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
    title: "Double Text Check-In",
    src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHo4Y2F3M2dwZ2JoOXdoczR1enF1bDd2ZXVrNjhqZ3E4ejIzeDRseCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SUufLaIr35PYeBxw1Z/giphy.gif",
    alt: "Double text check-in reaction GIF",
  },
  {
    title: "Me Again Energy",
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExajhjeHF2bzZweGFxOHR4MThwbG40eDBxdjg0emU5bjhqcnpxZzF1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IMVPaqrnGfBnZm/giphy.gif",
    alt: "Me again double text energy GIF",
  },
  {
    title: "Double Text Oops",
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm5qNGdoODlzZ3VmbWh6NWwzOXFlZ2U1ZDNydGRtaTM2YTljOGg4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QNAZKIao49m1MQ61fY/giphy.gif",
    alt: "Oops double text reaction GIF",
  },
  {
    title: "Typing Again",
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzN2NHh0eGV6MHhkemF5Z2NrdzdjYTVpc2Y4cGczdWc5ZjJ6NHo2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orifaXQhb1Ajto0fK/giphy.gif",
    alt: "Typing again double text reaction GIF",
  },
  {
    title: "Don’t Ignore Me",
    src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGIxb25sZXo4MmtoemMxb2lsZGJtbHo5dWl5ODFyOW4yY3ZkaTJ4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DQcqDjL0vcxz7lEhNT/giphy.gif",
    alt: "Don't ignore me double text reaction GIF",
  },
  {
    title: "Hello??",
    src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXo5dDdidTFla2Jvc2ZtYmVtZjVoNml6dGIzM2dzYWY4bDBqbnBiaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NfGTU1FFnPIwo/giphy.gif",
    alt: "Hello double text follow up reaction GIF",
  },
  {
    title: "Nervous Energy",
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGV5eXR3cmxvejVmZ3czYnNnZjJqcHpmNHFwMDh4enE4OXRqemppZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3MMcCKoCmPN9yve/giphy.gif",
    alt: "Nervous energy double texting GIF",
  },
  {
    title: "I Said What I Said",
    src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXpnaXhyMDB1YzJuMjh5azJyNThsZmJmeXpubHl5bjhyeTJka2xpNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jRTD0svQ2M9WD4PNhh/giphy.gif",
    alt: "I said what I said double text reaction GIF",
  },
  {
    title: "Please Respond",
    src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzhvcmVqMWpuN2w2YzRzN2czcjJ4ejN3dmswdTJqNWN3d2Vud3k2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tjZDQcyLRp0BRny/giphy.gif",
    alt: "Please respond double text reaction GIF",
  },
  {
    title: "Awkward Follow-Up",
    src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHY4ZDVvb3RiaGY4Z3U2NWNlNDM0cWcya3h1angxcjA3d3Y2bnhjcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ulo4HMy6o11tSWO3E6/giphy.gif",
    alt: "Awkward double text follow-up GIF",
  },
  {
    title: "Another Message…",
    src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZ2amc2MTNsdHp6ZzZjaHFhMGFrYWh0c3I4a2FoMm4xeDJqcXc1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UipxfcxQmadkA/giphy.gif",
    alt: "Another message double text GIF",
  },
  {
    title: "Double Text Spiral",
    src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTczM2I2emxja2lnd3I0Yzc1N3RkYnNld293eXY4NG40dWx0NHcxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k3ysanIoI6Yx2/giphy.gif",
    alt: "Double text spiral reaction GIF",
  },
  {
    title: "Double Text Panic",
    src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhyd3Z2OGozaDYzenRnaGxzMHRvNWRudXIxOTZ2c3ZseHpydmN6YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2gxV19irHeh4oB1eJI/giphy.gif",
    alt: "Double text panic reaction GIF",
  },
  {
    title: "Double Text Mood",
    src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnhxdWcwMHpwOXc0ZG5iMDZvZmtmNDhhaDUzaGNlbXF6dHB5NzcxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xSYLxjcvDAMlW/giphy.gif",
    alt: "Double text mood reaction GIF",
  },
  {
    title: "Double Text Please",
    src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTBjY3djdHM5bmplZ3Vwa2RyaTlldWpobzNmdXE0cnRlc3VwdWZyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11MaSmjZDwnzSU/giphy.gif",
    alt: "Please reply double text GIF",
  },
  {
    title: "Double Text Nervy",
    src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmczOXR2b2o5MHRmNjM2ZGc4Mm55ZndtNHlydm83djY3Z3YybG85NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/O56JjOpDoljTG/giphy.gif",
    alt: "Nervy double text reaction GIF",
  },
  {
    title: "Double Text Pressure",
    src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWI5dmJkZnBuZWZiYzlwZHR2amgycHo2ZDczYXo4ZzdqbHJjYXRobCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VGRxlUu8sC6aGUY50u/giphy.gif",
    alt: "Double text pressure reaction GIF",
  },
  {
    title: "Double Text Nudge",
    src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDU1Mm1oZHdwNmFtOXJzdWduZjNlZ2hlNHpyZnN6YWhlaXhscDg5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P1SXkeh3wxZ4Y/giphy.gif",
    alt: "Double text nudge reaction GIF",
  },
  {
    title: "Double Text Wave",
    src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDY2NTk1eXU1ZXFpa3BncmNvbWRsbHdsazBtZGplcG11aW0yaHpnMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBitOKz67Pr2Ldu/giphy.gif",
    alt: "Double text wave reaction GIF",
  },
  {
    title: "Double Text Alert",
    src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXIycWh2eG9ieHVvMnB0aXp3OGlrZzRhaDNxZG9hMTNmZjRuZjJyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RI7mc1yVbJ3fG/giphy.gif",
    alt: "Double text alert reaction GIF",
  },
  {
    title: "Double Text Anxiety",
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGdpMGN4MnlkNDYwNnQ0b2RoOTlpc2NxbXR4MmtqNTc5d2huMWF6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThta2aRxRwLXEnLgY/giphy.gif",
    alt: "Double text anxiety reaction GIF",
  },
  {
    title: "Double Text Waiting",
    src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHY0eDdhNnFibWZrNDNzbnRnOXBsM3ZvbjlqMTB6MXF5dm9hcDFmdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10vV9iD0vYkIve/giphy.gif",
    alt: "Double text waiting reaction GIF",
  },
  {
    title: "Double Text Awkward",
    src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGc4em5iemcwcmFyaTJld3hqMWdjcGk1aGQzemFoemJ2OHE2ejZzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ARDeDE9BRiwpi/giphy.gif",
    alt: "Double text awkward reaction GIF",
  },
  {
    title: "Double Text Classic",
    src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1uOHZ5MTU3cXQ2MDFrbndpOGx4cnd6bWw4Zm9wbW5pYjAzZng2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5yJxo17j5QiWs/giphy.gif",
    alt: "Double text classic reaction GIF",
  },
];

export default function DoubleTextPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Double Text GIFs",
    url: "https://gifmenow.com/texting-gifs/double-text",
    description:
      "Double text GIFs for double texting, follow-up messages, and second texts when you need another message moment.",
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
    mainEntity: {
      "@type": "ItemList",
      itemListElement: gifs.map((gif, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: gif.title,
        url: gif.src,
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is double texting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Double texting is sending a second message before the other person replies. It’s common for quick follow-ups, clarifications, or when you forgot something in the first text.",
        },
      },
      {
        "@type": "Question",
        name: "When should you send a double text GIF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send a double text GIF when you need a friendly follow-up, want to soften a second message, or want a funny reaction for texting anxiety moments.",
        },
      },
      {
        "@type": "Question",
        name: "What are good reactions for double texting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Light, playful reactions work best—use GIFs that say “me again,” “just checking,” or “oops” to keep the tone casual and fun.",
        },
      },
    ],
  };

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 14 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>Home</Link>{" "}
        <span aria-hidden="true">›</span>{" "}
        <Link href="/texting-gifs" style={{ textDecoration: "underline" }}>Texting GIFs</Link>{" "}
        <span aria-hidden="true">›</span>{" "}
        <span>Double Text GIFs</span>
      </nav>

      <header style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: "0 0 10px 0" }}>
          Double Text GIFs
        </h1>
        <p style={{ fontSize: 16, margin: 0, maxWidth: 860 }}>
          Double texting happens. Whether you’re sending a quick follow-up, a
          second message, or the classic “just checking,” these{" "}
          <strong>double text GIFs</strong> deliver the perfect reaction. Use
          them when you need a playful nudge, a double texting moment, or a funny
          reaction to texting anxiety—without overexplaining.
        </p>
      </header>

      <section
        aria-label="Related texting GIF pages"
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}
      >
        <Link href="/texting-gifs/waiting-for-a-reply-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}>
          Waiting for a Reply GIFs
        </Link>

        <Link href="/texting-gifs/left-on-read-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}>
          Left on Read GIFs
        </Link>

        <Link href="/texting-gifs/awkward-conversation-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}>
          Awkward Conversation GIFs
        </Link>

        <Link href="/texting-gifs"
          style={{ border: "1px solid #ddd", borderRadius: 999, padding: "8px 12px" }}>
          Browse All Texting GIFs
        </Link>
      </section>

      <section aria-label="Double text GIF collection">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 14,
        }}>
          {gifs.map((gif, idx) => (
            <figure key={`${gif.src}-${idx}`}
              style={{
                border: "1px solid #eee",
                borderRadius: 14,
                overflow: "hidden",
                margin: 0,
                background: "#fff",
              }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gif.src}
                alt={gif.alt}
                loading="lazy"
                style={{ width: "100%", height: 220, objectFit: "cover" }}
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
        <h3 style={{ fontSize: 18, margin: "16px 0 8px 0" }}>
          Double texting FAQ
        </h3>
        <p style={{ margin: "0 0 10px 0", lineHeight: 1.6 }}>
          <strong>What is double texting?</strong> It’s when you send a second
          message before getting a reply—usually to follow up, clarify, or add
          something you forgot.
        </p>
        <p style={{ margin: "0 0 10px 0", lineHeight: 1.6 }}>
          <strong>When should you send a double text GIF?</strong> Use one when
          you want to keep a follow-up friendly, lighten the mood, or react to a
          second-message moment.
        </p>
        <p style={{ margin: "0 0 10px 0", lineHeight: 1.6 }}>
          <strong>What are good double text reactions?</strong> Short, playful
          GIFs like “me again,” “just checking,” or “oops” keep the tone casual
          and fun.
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
          © {new Date().getFullYear()} gifmenow.com
        </p>
      </footer>
    </main>
  );
}
