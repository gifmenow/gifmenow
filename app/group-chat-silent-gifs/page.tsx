import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400;

export const metadata = {
  title: "Group Chat Silent GIFs | When Nobody Replies | gifmenow.com",
  description:
    "When the group chat goes quiet. Browse the best group chat silent reaction GIFs for texting when nobody responds.",
  alternates: {
    canonical: "https://www.gifmenow.com/group-chat-silent-gifs",
  },
};

const gifs = [
  {
    id: "gcs-1",
    embedUrl: "https://giphy.com/embed/3o6Zt4HU9uwXmXSAuI",
    alt: "Group chat silent reaction",
  },
  {
    id: "gcs-2",
    embedUrl: "https://giphy.com/embed/l0MYt5jPR6QX5pnqM",
    alt: "Waiting for someone to reply",
  },
  {
    id: "gcs-3",
    embedUrl: "https://giphy.com/embed/26ufcVAp3AiJJsrIs",
    alt: "Awkward silence in the chat",
  },
  {
    id: "gcs-4",
    embedUrl: "https://giphy.com/embed/3o7aD2saalBwwftBIY",
    alt: "Nobody reacted at all",
  },
  {
    id: "gcs-5",
    embedUrl: "https://giphy.com/embed/3o6ZsYp12wrWdJImk0",
    alt: "Crickets in the group chat",
  },
];

export default function GroupChatSilentGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Group Chat Silent GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Group Chat Silent GIFs</h1>

      <p className="page-intro">
        You drop a message in the group chat… and then nothing. These reaction
        GIFs are perfect for when nobody replies, the vibe is off, or you’re
        stuck staring at silence.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Texting Reaction GIFs</h2>
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
          <li>
            <Link href="/texting-gifs/waiting-for-a-reply-gifs">
              Waiting for a Reply GIFs
            </Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily with new reaction GIFs · {new Date().toDateString()}
      </p>
    </main>
  );
}
