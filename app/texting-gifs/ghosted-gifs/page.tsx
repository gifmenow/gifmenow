import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400; // daily refresh

export const metadata: Metadata = {
  title: "Ghosted GIFs | When They Stop Texting Back | gifmenow.com",
  description:
    "They disappeared without a word. Browse the best ghosted reaction GIFs for texting when you realize you’ve been completely ignored.",
  alternates: {
    canonical: "https://www.gifmenow.com/texting-gifs/ghosted-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/texting-gifs/ghosted-gifs",
    siteName: "gifmenow.com",
    title: "Ghosted GIFs | When They Stop Texting Back | gifmenow.com",
    description:
      "They disappeared without a word. Browse the best ghosted reaction GIFs for texting when you realize you’ve been completely ignored.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghosted GIFs | When They Stop Texting Back | gifmenow.com",
    description:
      "They disappeared without a word. Browse the best ghosted reaction GIFs for texting when you realize you’ve been completely ignored.",
  },
};

const gifs = [
  { id: "ghosted-1", embedUrl: "https://giphy.com/embed/GDTenQepzptV7F6McD", alt: "Realizing you got ghosted" },
  { id: "ghosted-2", embedUrl: "https://giphy.com/embed/J9SGZWFtcjH0GelxUm", alt: "Waiting but no reply" },
  { id: "ghosted-3", embedUrl: "https://giphy.com/embed/Cx7VuExVnETdVyW53g", alt: "Confused silence after texting" },
  { id: "ghosted-4", embedUrl: "https://giphy.com/embed/w89ak63KNl0nJl80ig", alt: "Checking phone again" },
];

export default function GhostedGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Texting GIFs", href: "/texting-gifs" },
    { label: "Ghosted GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Ghosted GIFs for Texting When They Disappear</h1>

      <p className="page-intro">
        One minute you’re mid-conversation. The next? Silence. These ghosted reaction GIFs
        capture that exact moment.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Texting Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/texting-gifs/left-on-read-gifs">Left on Read GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/waiting-for-a-reply-gifs">Waiting for a Reply GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/double-text">Double Text GIFs</Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily · {new Date().toDateString()}
      </p>
    </main>
  );
}
