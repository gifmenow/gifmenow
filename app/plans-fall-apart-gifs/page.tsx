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
  {
    id: "pfa-2",
    embedUrl: "https://giphy.com/embed/gZfHAM1ucPQ2c",
    alt: "Car collapse reaction",
  },
  {
    id: "pfa-3",
    embedUrl: "https://giphy.com/embed/YqAf8w2a0qf1m",
    alt: "Everything falls apart",
  },
  {
    id: "pfa-4",
    embedUrl: "https://giphy.com/embed/f1NTdkdbG4XzW",
    alt: "Car trouble reaction",
  },
  {
    id: "pfa-5",
    embedUrl: "https://giphy.com/embed/l1J9wMccAykUCLIic",
    alt: "Accepting chaos with a shrug",
  },
  {
    id: "pfa-6",
    embedUrl: "https://giphy.com/embed/3o7btY356cSVYzmFS8",
    alt: "Laughing at disaster",
  },
  {
    id: "pfa-7",
    embedUrl: "https://giphy.com/embed/QTgCdVqGHn2admrkAp",
    alt: "Shaking off disaster",
  },
  {
    id: "pfa-8",
    embedUrl: "https://giphy.com/embed/SIIXDrZ8Rh2a4",
    alt: "Sad when plans fall apart",
  },
  {
    id: "pfa-9",
    embedUrl: "https://giphy.com/embed/wIxm4k7ZABYF2C1y1V",
    alt: "Speechless after things go wrong",
  },
  {
    id: "pfa-10",
    embedUrl: "https://giphy.com/embed/tsjbJgxoCepjil9yyP",
    alt: "Facepalm when everything goes sideways",
  },
  {
    id: "pfa-11",
    embedUrl: "https://giphy.com/embed/KEzaThV76yyWoFtgSD",
    alt: "Stunned at the chaos",
  },
  {
    id: "pfa-12",
    embedUrl: "https://giphy.com/embed/l2Jed7s2YYiduPY3K",
    alt: "Surprised by disaster",
  },
  {
    id: "pfa-13",
    embedUrl: "https://giphy.com/embed/nt06LzuIfezp5mY8s2",
    alt: "OMG disaster reaction",
  },
  {
    id: "pfa-14",
    embedUrl: "https://giphy.com/embed/stRWAuumqD6yw5BkpG",
    alt: "Laughing through the mess",
  },
  {
    id: "pfa-15",
    embedUrl: "https://giphy.com/embed/CQMBjJz63FYIgEOWnA",
    alt: "Epic fail reaction",
  },
  {
    id: "pfa-16",
    embedUrl: "https://giphy.com/embed/AWnwWMtOBE1vo9AHiV",
    alt: "Accepting a failing plan",
  },
  {
    id: "pfa-17",
    embedUrl: "https://giphy.com/embed/xUNd9OZH5WacCxu3Yc",
    alt: "Splat after plans fall apart",
  },
  {
    id: "pfa-18",
    embedUrl: "https://giphy.com/embed/3ohs7JTI4MWy7sDbry",
    alt: "Disaster artist reaction",
  },
  {
    id: "pfa-19",
    embedUrl: "https://giphy.com/embed/hjMEr6aoht9iUIC3kM",
    alt: "What’s your next move after disaster?",
  },
  {
    id: "pfa-20",
    embedUrl: "https://giphy.com/embed/f9YW1U1w7z2kLbr5nr",
    alt: "Family fails reaction",
  },
  {
    id: "pfa-21",
    embedUrl: "https://giphy.com/embed/3ohs4msTyynmOCoeGY",
    alt: "Groundhog Day disaster reaction",
  },
  {
    id: "pfa-22",
    embedUrl: "https://giphy.com/embed/7Rzn5ANhLPOZgqSD9Z",
    alt: "Clumsy fail reaction",
  },
  {
    id: "pfa-23",
    embedUrl: "https://giphy.com/embed/zN197TlVkVJ96",
    alt: "Please stop, everything’s a mess",
  },
  {
    id: "pfa-24",
    embedUrl: "https://giphy.com/embed/1JTmbL98fWhglRluL5",
    alt: "Detailing fail reaction",
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
