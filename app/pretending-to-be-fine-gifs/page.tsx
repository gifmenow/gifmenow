// app/pretending-to-be-fine-gifs/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getGifsForCategory } from "@/data/vault";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400;

const SLUG = "pretending-to-be-fine-gifs";
const CANONICAL = `https://www.gifmenow.com/${SLUG}`;

export const metadata: Metadata = {
  title: "Pretending to Be Fine GIFs | Smiling Through It | gifmenow.com",
  description:
    "Reaction GIFs for when you’re pretending to be fine — smiling on the outside while everything is not fine. Perfect for texting and group chats.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    siteName: "gifmenow.com",
    title: "Pretending to Be Fine GIFs | gifmenow.com",
    description:
      "Reaction GIFs for when you’re pretending to be fine — calm on the outside, chaos inside.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pretending to Be Fine GIFs | gifmenow.com",
    description: "Smiling through it? These pretending-to-be-fine GIFs say it all.",
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

export default function PretendingToBeFinePage() {
  // VAULT = SOURCE OF TRUTH (GifGrid expects { id, embedUrl, alt })
  const gifs = getGifsForCategory(SLUG);

  // Never 404/500 during buildout: keep page live even if category is empty
  const safeGifs = Array.isArray(gifs) ? gifs : [];

  // Dedupe by id (vault items use "id")
  const uniqueGifs = Array.from(new Map(safeGifs.map((g) => [g.id, g])).values());

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pretending to Be Fine GIFs" },
  ];

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pretending to Be Fine GIFs",
    url: CANONICAL,
    description:
      "Reaction GIFs for pretending to be fine — smiling through stress, chaos, and awkward moments.",
    isPartOf: {
      "@type": "WebSite",
      name: "gifmenow.com",
      url: "https://www.gifmenow.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gifmenow.com" },
        { "@type": "ListItem", position: 2, name: "Pretending to Be Fine GIFs", item: CANONICAL },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should I use a pretending to be fine GIF?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use a pretending to be fine GIF when you want to say you’re okay without explaining everything — perfect for texting and group chats.",
        },
      },
      {
        "@type": "Question",
        name: "What does pretending to be fine mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It means acting calm or happy on the outside while feeling stressed, overwhelmed, or not okay inside.",
        },
      },
      {
        "@type": "Question",
        name: "Are these GIFs good for texting?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Pretending-to-be-fine GIFs are ideal for texting because they convey emotion instantly without long explanations.",
        },
      },
    ],
  };

  const isEmpty = uniqueGifs.length === 0;

  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs crumbs={breadcrumbs} />

      <header className="page-header">
        <h1>Pretending to Be Fine GIFs</h1>
        <p>
          For when you’re smiling through it. These pretending-to-be-fine GIFs are perfect for
          texting, group chats, and awkward check-ins when you’re “fine” but not really.
        </p>

        <nav className="related-links">
          <Link href="/texting-gifs">Texting GIFs</Link>
          <Link href="/low-key-annoyed-gifs">Low-Key Annoyed GIFs</Link>
          <Link href="/shocked-but-calm-gifs">Shocked but Calm GIFs</Link>
        </nav>
      </header>

      {isEmpty ? (
        <section className="seo-text">
          <h2>GIFs coming soon</h2>
          <p>
            This page is live and ready. Next step: add GIFs to the vault for{" "}
            <strong>{SLUG}</strong> and they’ll appear here automatically.
          </p>
          <p>
            In the meantime, browse:
            {" "}
            <Link href="/texting-gifs">Texting GIFs</Link>,{" "}
            <Link href="/low-key-annoyed-gifs">Low-Key Annoyed</Link>,{" "}
            <Link href="/shocked-but-calm-gifs">Shocked but Calm</Link>.
          </p>
        </section>
      ) : (
        <>
          {/* FULL-WIDTH, SQUARE, FAST GRID */}
          <GifGrid gifs={uniqueGifs} />

          <section className="seo-text">
            <h2>When to use pretending to be fine GIFs</h2>
            <p>
              These GIFs work best when you want to keep things light without explaining how you
              really feel. They’re ideal for follow-ups, check-ins, and moments where humor says
              more than words.
            </p>

            <h2>FAQ</h2>
            <p>
              <strong>What is pretending to be fine?</strong> Acting okay on the outside while
              things are not okay internally.
            </p>
            <p>
              <strong>Are these good for group chats?</strong> Yes — they communicate emotion quickly
              without derailing the conversation.
            </p>
          </section>
        </>
      )}
    </main>
  );
}
