import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400; // daily refresh

export const metadata = {
  title: "Plans Fall Apart GIFs | When Everything Goes Wrong | gifmenow.com",
  description:
    "Reaction GIFs for when plans fall apart and you’re just accepting the chaos. Perfect for texting when everything goes sideways.",
  alternates: {
    canonical: "https://www.gifmenow.com/plans-fall-apart-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/plans-fall-apart-gifs",
    siteName: "gifmenow.com",
    title: "Plans Fall Apart GIFs | When Everything Goes Wrong | gifmenow.com",
    description:
      "Reaction GIFs for when plans fall apart and you’re just accepting the chaos. Perfect for texting when everything goes sideways.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plans Fall Apart GIFs | When Everything Goes Wrong | gifmenow.com",
    description:
      "Reaction GIFs for when plans fall apart and you’re just accepting the chaos. Perfect for texting when everything goes sideways.",
  },
};

const gifs = [
  {
    id: "pfa-1",
    embedUrl: "https://giphy.com/embed/3ohzdYJK1wAdPWVk88",
    alt: "Plans falling apart reaction",
  },
];

export default function PlansFallApartGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Plans Fall Apart GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Plans Fall Apart GIFs</h1>

      <p className="page-intro">
        When everything goes wrong and you’re just accepting it. These plans-fall-apart
        reaction GIFs are perfect for texting when the day is cursed and the group chat
        needs an update.
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
        Updated daily with new plans fall apart reaction GIFs ·{" "}
        {new Date().toDateString()}
      </p>
    </main>
  );
}
