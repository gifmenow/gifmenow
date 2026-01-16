import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400; // daily refresh

export const metadata = {
  title: "Someone Says Something Wild GIFs | Did You Really Just Say That? | gifmenow.com",
  description:
    "Reaction GIFs for when someone says something completely wild. Shock, disbelief, and \"did you really just say that?\" reactions for texting and group chats.",
  alternates: {
    canonical: "https://www.gifmenow.com/someone-says-something-wild-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/someone-says-something-wild-gifs",
    siteName: "gifmenow.com",
    title: "Someone Says Something Wild GIFs | Did You Really Just Say That? | gifmenow.com",
    description:
      "Reaction GIFs for when someone says something completely wild. Shock, disbelief, and \"did you really just say that?\" reactions for texting and group chats.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Someone Says Something Wild GIFs | Did You Really Just Say That? | gifmenow.com",
    description:
      "Reaction GIFs for when someone says something completely wild. Shock, disbelief, and \"did you really just say that?\" reactions for texting and group chats.",
  },
};

const gifs = [
  {
    id: "sssw-1",
    embedUrl: "https://giphy.com/embed/3o7TKF5DnsSLv4zVBu",
    alt: "Someone says something wild reaction",
  },
];

export default function SomeoneSaysSomethingWildGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Someone Says Something Wild GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Someone Says Something Wild GIFs</h1>

      <p className="page-intro">
        When someone says something so out of pocket that the entire group chat
        freezes. These reaction GIFs capture shock, disbelief, and that
        “did you really just say that?” moment.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/shocked-but-calm-gifs">Shocked but Calm GIFs</Link>
          </li>
          <li>
            <Link href="/awkward-conversation-gifs">
              Awkward Conversation GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs">Texting GIFs Hub</Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily with new wild reaction GIFs · {new Date().toDateString()}
      </p>
    </main>
  );
}
