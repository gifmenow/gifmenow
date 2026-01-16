import Link from "next/link";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import GifGrid from "@/app/components/GifGrid";

export const revalidate = 86400; // daily refresh

export const metadata = {
  title: "Funny GIFs | Best Funny Reaction GIFs for Texting | gifmenow.com",
  description:
    "Need a quick laugh to save a dry chat or lighten the mood? Browse funny reaction GIFs perfect for texting, group chats, playful roasting, and awkward moments.",
  alternates: {
    canonical: "https://www.gifmenow.com/funny-gifs",
  },
  openGraph: {
    type: "website",
    url: "https://www.gifmenow.com/funny-gifs",
    siteName: "gifmenow.com",
    title: "Funny GIFs | Best Funny Reaction GIFs for Texting | gifmenow.com",
    description:
      "Need a quick laugh to save a dry chat or lighten the mood? Browse funny reaction GIFs perfect for texting, group chats, playful roasting, and awkward moments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funny GIFs | Best Funny Reaction GIFs for Texting | gifmenow.com",
    description:
      "Need a quick laugh to save a dry chat or lighten the mood? Browse funny reaction GIFs perfect for texting, group chats, playful roasting, and awkward moments.",
  },
};

const gifs = [
  { id: "funny-1", embedUrl: "https://giphy.com/embed/iD1QQCbrl548I31Qww", alt: "Trying not to laugh but failing reaction GIF" },
  { id: "funny-2", embedUrl: "https://giphy.com/embed/lszAB3TzFtRaU", alt: "Laughing at something ridiculous reaction GIF" },
  { id: "funny-3", embedUrl: "https://giphy.com/embed/KiaU2EUyxjQB2", alt: "Laughing so hard in a group chat reaction GIF" },
  { id: "funny-4", embedUrl: "https://giphy.com/embed/pZjopwPkisHbG", alt: "Cool story bro sarcastic laugh reaction GIF" },
  { id: "funny-5", embedUrl: "https://giphy.com/embed/l0ExayQDzrI2xOb8A", alt: "Bursting out laughing unexpectedly reaction GIF" },
  { id: "funny-6", embedUrl: "https://giphy.com/embed/3i7zenReaUuI0", alt: "Laughing like you should not have reaction GIF" },
  { id: "funny-7", embedUrl: "https://giphy.com/embed/nyg8MJlnSXwUiqM42H", alt: "LOL reaction GIF for a funny text" },
  { id: "funny-8", embedUrl: "https://giphy.com/embed/En8fsYde6cqvhYBnAb", alt: "Crying laughing reaction GIF for group chat" },
  { id: "funny-9", embedUrl: "https://giphy.com/embed/ZqlvCTNHpqrio", alt: "Minions laughing uncontrollably reaction GIF" },
  { id: "funny-10", embedUrl: "https://giphy.com/embed/LKqDgLlK6SuIM", alt: "Kanye West laughing reaction GIF" },
  { id: "funny-11", embedUrl: "https://giphy.com/embed/lOKeRX2jFoV2M", alt: "Nick Offerman laughing reaction GIF" },
  { id: "funny-12", embedUrl: "https://giphy.com/embed/3oEjHI8WJv4x6UPDB6", alt: "Clapping because that was hilarious reaction GIF" },
  { id: "funny-13", embedUrl: "https://giphy.com/embed/Jj8l7dQHN8P1afc7CB", alt: "Funny dog dancing reaction GIF for group chat" },
  { id: "funny-14", embedUrl: "https://giphy.com/embed/IhyGL914g9ShHdHVFy", alt: "WWE LOL reaction GIF for a savage joke" },
  { id: "funny-15", embedUrl: "https://giphy.com/embed/tSSMsM330qBoOXTQGc", alt: "Suspicious bro funny reaction GIF" },
  { id: "funny-16", embedUrl: "https://giphy.com/embed/RKyUM7B9BLQYk6MFu7", alt: "Side eye funny reaction GIF for texting" },
  { id: "funny-17", embedUrl: "https://giphy.com/embed/v3Rb7dGuvkmaRi6qei", alt: "Funny cat reaction GIF when you can’t believe it" },
  { id: "funny-18", embedUrl: "https://giphy.com/embed/1nfwnYf5Uz7hzhYof8", alt: "Eye roll funny reaction GIF for awkward moments" },
];

export default function FunnyGifsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Funny GIFs" },
  ];

  return (
    <main className="page">
      <Breadcrumbs crumbs={crumbs} />

      <h1>Funny GIFs for Texting, Group Chats, and Awkward Moments</h1>

      <p className="page-intro">
        Need a quick laugh to save a dry chat or lighten the mood? These funny GIFs
        are perfect for group chats, playful roasting, awkward silences, and
        “you’ve got to be kidding me” moments. Scroll, pick your vibe, and drop
        the perfect funny reaction.
      </p>

      <GifGrid gifs={gifs} />

      <section className="related">
        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/texting-gifs">Texting GIFs</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/texting-gifs/awkward-conversation-gifs">
              Awkward Conversation GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs/double-text">Double Text GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/left-on-read-gifs">Left on Read GIFs</Link>
          </li>
          <li>
            <Link href="/texting-gifs/waiting-for-a-reply-gifs">
              Waiting for a Reply GIFs
            </Link>
          </li>
          <li>
            <Link href="/texting-gifs/typing-gifs">Typing GIFs</Link>
          </li>
        </ul>
      </section>

      <p className="freshness">
        Updated daily with new funny reaction GIFs · {new Date().toDateString()}
      </p>
    </main>
  );
}
