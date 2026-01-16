import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400; // daily refresh

export const metadata = {
  title: "Low-Key Annoyed GIFs | Subtle Irritated Reactions | gifmenow.com",
  description:
    "Subtle reaction GIFs for when you’re low-key annoyed but still keeping it polite. Perfect for texting, group chats, and passive irritation.",
  alternates: {
    canonical: "https://www.gifmenow.com/low-key-annoyed-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/low-key-annoyed-gifs",
    siteName: "gifmenow.com",
    title: "Low-Key Annoyed GIFs | Subtle Irritated Reactions | gifmenow.com",
    description:
      "Subtle reaction GIFs for when you’re low-key annoyed but still keeping it polite. Perfect for texting, group chats, and passive irritation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low-Key Annoyed GIFs | Subtle Irritated Reactions | gifmenow.com",
    description:
      "Subtle reaction GIFs for when you’re low-key annoyed but still keeping it polite. Perfect for texting, group chats, and passive irritation.",
  },
};

const gifs = [
  {
    id: "lka-1",
    embedUrl: "https://giphy.com/embed/26BRuo6sLetdllPAQ",
    alt: "Low-key annoyed reaction",
  },
];

export default function LowKeyAnnoyedGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Low-Key Annoyed GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Low-Key Annoyed GIFs</h1>

      <p className="page-intro">
        Subtle reactions for when you’re irritated — but keeping it polite.
        Perfect for “sure,” “okay,” and “that’s fine” (when it’s not fine).
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/pretending-to-be-fine-gifs">Pretending to Be Fine GIFs</Link>
          </li>
          <li>
            <Link href="/shocked-but-calm-gifs">Shocked but Calm GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs">Texting GIFs Hub</Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily with new low-key annoyed reaction GIFs ·{" "}
        {new Date().toDateString()}
      </p>
    </main>
  );
}
