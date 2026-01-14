"use client";

import Link from "next/link";
import { Inter } from "next/font/google";

export const revalidate = 60 * 60 * 24; // daily refresh

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type GifItem = { src: string; alt: string };
type Section = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  gifs: GifItem[];
};

export const metadata = {
  title: "Waiting for a Reply GIFs (That Feeling Everyone Knows) | gifmenow.com",
  description:
    "Waiting for a reply and trying not to overthink it? Browse the best reaction GIFs for texting: playing it cool, spiraling, passive-aggressive, and pretending you don’t care. Updated daily.",
  alternates: {
    canonical: "https://www.gifmenow.com/waiting-for-a-reply",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/waiting-for-a-reply",
    siteName: "gifmenow.com",
    title: "Waiting for a Reply GIFs (That Feeling Everyone Knows) | gifmenow.com",
    description:
      "Waiting for a reply and trying not to overthink it? Browse the best reaction GIFs for texting: playing it cool, spiraling, passive-aggressive, and pretending you don’t care. Updated daily.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waiting for a Reply GIFs (That Feeling Everyone Knows) | gifmenow.com",
    description:
      "Waiting for a reply and trying not to overthink it? Browse the best reaction GIFs for texting: playing it cool, spiraling, passive-aggressive, and pretending you don’t care. Updated daily.",
  },
};

export default function Page() {
  const canonicalUrl = "https://www.gifmenow.com/waiting-for-a-reply";

  const now = new Date();
  const updatedAtISO = now.toISOString();
  const updatedAtHuman = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections: Section[] = [
    {
      id: "play-it-cool",
      emoji: "😐",
      title: "Trying to Play It Cool",
      description:
        "You’re totally fine. Definitely not checking the chat every 30 seconds. Totally chill.",
      gifs: [
        {
          src: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
          alt: "Trying to look unbothered",
        },
      ],
    },
    {
      id: "internally-panicking",
      emoji: "😬",
      title: "Internally Panicking",
      description:
        "Your brain is running every possible scenario at once. Was it the last message?",
      gifs: [
        {
          src: "https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif",
          alt: "Spiraling while waiting",
        },
      ],
    },
    {
      id: "passive-aggressive",
      emoji: "😒",
      title: "Passive-Aggressive (But Polite)",
      description:
        "You don’t want to double text… but you do want to be noticed. Respectfully.",
      gifs: [
        {
          src: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
          alt: "Side eye for hours",
        },
      ],
    },
    {
      id: "pretending-dont-care",
      emoji: "😂",
      title: "Pretending You Don’t Care",
      description:
        "Laughing on the outside. Overthinking on the inside. It’s a lifestyle.",
      gifs: [
        {
          src: "https://media.giphy.com/media/3o7aD4q6aOQOQmQ7C8/giphy.gif",
          alt: "Laughing to hide pain",
        },
      ],
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gifmenow.com/" },
      { "@type": "ListItem", position: 2, name: "Waiting for a Reply GIFs", item: canonicalUrl },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Waiting for a Reply GIFs",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: sections.reduce((acc, s) => acc + s.gifs.length, 0),
    itemListElement: sections.flatMap((s) =>
      s.gifs.map((gif, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: gif.alt,
        url: canonicalUrl + `#${s.id}`,
      }))
    ),
  };

  return (
    <div className={inter.className}>
      <main className="wrap">
        <header className="hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/" className="crumbLink">Home</Link>
            <span className="crumbSep">/</span>
            <span className="crumbCurrent">Waiting for a Reply</span>
          </nav>

          <h1 className="h1">Waiting for a Reply GIFs (That Feeling Everyone Knows)</h1>

          <p className="lede">
            You already checked your phone once. Then again. Still nothing.
            These GIFs are for that exact moment — when you’re waiting for a reply
            and trying not to overthink it.
          </p>

          <div className="metaRow">
            <span className="updated">
              Updated daily: <time dateTime={updatedAtISO}>{updatedAtHuman}</time>
            </span>
            <span className="dot">·</span>
            <span className="tagline">Perfect for texting, group chats & late-night spirals</span>
          </div>

          <div className="jump">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="jumpBtn">
                <span className="jumpEmoji" aria-hidden="true">{s.emoji}</span>
                <span className="jumpText">{s.title}</span>
              </a>
            ))}
          </div>
        </header>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="section">
            <h2 className="h2"><span className="emoji" aria-hidden="true">{s.emoji}</span> {s.title}</h2>
            <p className="desc">{s.description}</p>

            <div className="grid" role="list">
              {s.gifs.map((gif, i) => (
                <figure key={`${s.id}-${i}`} className="card" role="listitem">
                  <img src={gif.src} alt={gif.alt} loading="lazy" className="gif" />
                  <figcaption className="caption">{gif.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}

        <aside className="more">
          <h2 className="h2">Still stuck waiting?</h2>
          <p className="desc">You might also want these next:</p>
          <div className="linkRow">
            <Link className="pill" href="/texting-gifs">Texting Reaction GIFs</Link>
            <Link className="pill" href="/seen-but-no-reply">Seen But No Reply GIFs</Link>
            <Link className="pill" href="/typing">Typing… GIFs</Link>
          </div>
          <p className="footerLine">GIFs for moments you can’t explain — but everyone understands.</p>
        </aside>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </main>

      
    </div>
  );
}
