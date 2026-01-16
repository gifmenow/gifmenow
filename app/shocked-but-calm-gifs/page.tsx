import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400; // daily refresh

export const metadata = {
  title: "Shocked but Calm GIFs | Trying to Stay Composed | gifmenow.com",
  description:
    "Reaction GIFs for when something insane happens but you’re trying to stay calm. Perfect for texting when you’re shocked but holding it together.",
  alternates: {
    canonical: "https://www.gifmenow.com/shocked-but-calm-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/shocked-but-calm-gifs",
    siteName: "gifmenow.com",
    title: "Shocked but Calm GIFs | Trying to Stay Composed | gifmenow.com",
    description:
      "Reaction GIFs for when something insane happens but you’re trying to stay calm. Perfect for texting when you’re shocked but holding it together.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shocked but Calm GIFs | Trying to Stay Composed | gifmenow.com",
    description:
      "Reaction GIFs for when something insane happens but you’re trying to stay calm. Perfect for texting when you’re shocked but holding it together.",
  },
};

const gifs = [
  {
    id: "sbc-1",
    embedUrl: "https://giphy.com/embed/26FPn4rR1damB0MQo",
    alt: "Shocked but calm reaction",
  },
];

export default function ShockedButCalmGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shocked but Calm GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Shocked but Calm GIFs</h1>

      <p className="page-intro">
        For when something completely unhinged happens and you’re trying very
        hard to stay composed. These reaction GIFs are perfect for calm replies
        hiding internal chaos.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>More Reaction GIFs</h2>
        <ul>
          <li>
            <Link href="/pretending-to-be-fine-gifs">
              Pretending to Be Fine GIFs
            </Link>
          </li>
          <li>
            <Link href="/low-key-annoyed-gifs">
              Low-Key Annoyed GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs">Texting GIFs Hub</Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily with new shocked but calm reaction GIFs ·{" "}
        {new Date().toDateString()}
      </p>
    </main>
  );
}
