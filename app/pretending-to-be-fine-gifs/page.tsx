import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400; // daily refresh

export const metadata = {
  title: "Pretending to Be Fine GIFs | Smiling Through It | gifmenow.com",
  description:
    "Reaction GIFs for when you’re pretending to be fine — smiling on the outside and screaming on the inside. Perfect for texting and group chats.",
  alternates: {
    canonical: "https://www.gifmenow.com/pretending-to-be-fine-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/pretending-to-be-fine-gifs",
    siteName: "gifmenow.com",
    title: "Pretending to Be Fine GIFs | Smiling Through It | gifmenow.com",
    description:
      "Reaction GIFs for when you’re pretending to be fine — smiling on the outside and screaming on the inside. Perfect for texting and group chats.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pretending to Be Fine GIFs | Smiling Through It | gifmenow.com",
    description:
      "Reaction GIFs for when you’re pretending to be fine — smiling on the outside and screaming on the inside. Perfect for texting and group chats.",
  },
};

const gifs = [
  {
    id: "ptbf-1",
    embedUrl: "https://giphy.com/embed/9M5jK4GXmD5o1irGrF",
    alt: "Pretending to be fine reaction",
  },
];

export default function PretendingToBeFineGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Pretending to Be Fine GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Pretending to Be Fine GIFs</h1>

      <p className="page-intro">
        For when you’re smiling on the outside and screaming on the inside.
        These reaction GIFs are perfect for “I’m fine” texts that are clearly not fine.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/low-key-annoyed-gifs">Low-Key Annoyed GIFs</Link>
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
        Updated daily with new pretending to be fine reaction GIFs ·{" "}
        {new Date().toDateString()}
      </p>
    </main>
  );
}
