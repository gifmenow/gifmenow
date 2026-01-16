import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 60 * 60 * 24; // daily refresh

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gifmenow.com"),
  title: "Typing GIFs | Typing Bubble, Dots, and “They’re Typing…” Reactions | gifmenow.com",
  description:
    "Best typing GIFs for when the dots appear. Funny typing bubble reactions for suspense, anticipation, and chaotic texting energy.",
  alternates: { canonical: "https://www.gifmenow.com/typing-gifs" },
  openGraph: {
    title: "Typing GIFs | Typing Bubble, Dots, and “They’re Typing…” Reactions | gifmenow.com",
    description:
      "Funny typing GIFs for when you see the dots… and you need the perfect reaction.",
    url: "https://www.gifmenow.com/typing-gifs",
    siteName: "gifmenow.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Typing GIFs | Typing Bubble Reactions | gifmenow.com",
    description: "Typing GIFs for when the dots appear and suspense hits.",
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

const RAW_GIFS = [
  {
    embedId: "h8JAU3XFchaJbESjCB",
    title: "Are they typing…?",
    giphyUrl:
      "https://giphy.com/gifs/PersonaJourney-waiting-for-reply-are-they-typing-nervously-h8JAU3XFchaJbESjCB",
  },
  {
    embedId: "k85c6FpnFa4bNp11XQ",
    title: "Frantic typing cat",
    giphyUrl:
      "https://giphy.com/gifs/catkeyboard-frantictyping-frantic-typing-k85c6FpnFa4bNp11XQ",
  },
  {
    embedId: "bW5Wv6HzmJ861esUIr",
    title: "Typing shiba (office)",
    giphyUrl:
      "https://giphy.com/gifs/TheDogePound-typing-shiba-inu-dogepound-bW5Wv6HzmJ861esUIr",
  },
  {
    embedId: "6qqDqNvN2tF2tYdFso",
    title: "Typing doge",
    giphyUrl:
      "https://giphy.com/gifs/TheDogePound-dog-typing-dogepound-6qqDqNvN2tF2tYdFso",
  },
  {
    embedId: "SANDK2zAhctsWpJOjx",
    title: "Kermit typing",
    giphyUrl: "https://giphy.com/gifs/SANDK2zAhctsWpJOjx",
  },
  {
    embedId: "3K0DTxvROCvo1h5d7x",
    title: "Family Guy typing",
    giphyUrl:
      "https://giphy.com/gifs/family-guy-family-guy-foxtv-3K0DTxvROCvo1h5d7x",
  },
];

// Convert to the standardized GifGrid format: { id, embedUrl, alt }
const gifs = RAW_GIFS.map((g, index) => ({
  id: `typing-${index + 1}-${g.embedId}`,
  embedUrl: `https://giphy.com/embed/${g.embedId}`,
  alt: g.title,
}));

export default function TypingGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Texting GIFs", href: "/texting-gifs" },
    { label: "Typing GIFs" },
  ];

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Typing GIFs",
    url: "https://www.gifmenow.com/typing-gifs",
    description:
      "A collection of typing GIFs for typing bubbles, dots, suspense, and ‘they’re typing…’ reactions.",
    isPartOf: {
      "@type": "WebSite",
      name: "gifmenow.com",
      url: "https://www.gifmenow.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gifmenow.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Texting GIFs",
          item: "https://www.gifmenow.com/texting-gifs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Typing GIFs",
          item: "https://www.gifmenow.com/typing-gifs",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Typing GIFs",
      numberOfItems: RAW_GIFS.length,
      itemListElement: RAW_GIFS.map((g, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: g.title,
        url: g.giphyUrl,
      })),
    },
  };

  return (
    <main className="page">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <Breadcrumbs crumbs={crumbs} />

      <h1>Typing GIFs</h1>

      <p className="page-intro">
        The dots are up. Your heart rate is up. These <strong>typing GIFs</strong> are made
        for typing bubble suspense — whether it’s a confession, a comeback, or an incoming
        essay. Perfect for iMessage, Instagram DMs, and group chats.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Texting Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/texting-gifs/waiting-for-a-reply-gifs">Waiting for a Reply GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/left-on-read-gifs">Left on Read / Seen GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/ghosted-gifs">Ghosted GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs">Back to Texting GIFs hub</Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily with new typing reaction GIFs · {new Date().toDateString()}
      </p>
    </main>
  );
}
