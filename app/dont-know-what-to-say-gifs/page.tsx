import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400;

export const metadata = {
  title: "Don’t Know What to Say GIFs | Awkward Silence Reactions",
  description:
    "Reaction GIFs for awkward pauses, speechless moments, and conversations where you don’t know what to say next.",
  alternates: {
    canonical: "https://www.gifmenow.com/dont-know-what-to-say-gifs",
  },
};

const gifs = [
  {
    id: "dkws-1",
    embedUrl: "https://giphy.com/embed/3o6ZtpxSZbQRRnwCKQ",
    alt: "Awkward silence reaction",
  },
  {
    id: "dkws-2",
    embedUrl: "https://giphy.com/embed/l3q2K5jinAlChoCLS",
    alt: "No words reaction",
  },
];

export default function DontKnowWhatToSayPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Don’t Know What to Say GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Don’t Know What to Say GIFs</h1>

      <p className="page-intro">
        Some moments leave you speechless. These reaction GIFs are perfect for
        awkward pauses, uncomfortable replies, and conversations that stall.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/texting-gifs/awkward-conversation-gifs">
              Awkward Conversation GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs/left-on-read-gifs">
              Left on Read GIFs
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
