import GifGrid from "../components/GifGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIFs for When You Don’t Know What to Say | GifMeNow",
  description:
    "The best reaction GIFs for awkward moments when you don’t know what to say. Perfect for texting, group chats, and uncomfortable conversations.",
  metadataBase: new URL("https://gifmenow.com"),
  openGraph: {
    title: "GIFs for When You Don’t Know What to Say",
    description:
      "A curated collection of reaction GIFs for moments when words fail you.",
    url: "https://gifmenow.com/dont-know-what-to-say-gifs",
    siteName: "GifMeNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIFs for When You Don’t Know What to Say",
    description:
      "Reaction GIFs for awkward silences, unread messages, and lost-for-words moments.",
  },
  robots: { index: true, follow: true },
};

const GIFS = [
  //   "https://giphy.com/embed/vUEznRmVQfG2Q",
  "https://giphy.com/embed/SiGe0LNINZ9SLy86i2",
  "https://giphy.com/embed/QmDgpAv8JKrxXtrnmR",
  "https://giphy.com/embed/Ka2pKccgoEb3hB70Eb",
  "https://giphy.com/embed/awOjn5oJlJrMdYVaeG",
  "https://giphy.com/embed/ZGDr9hawxG9H1rH9Ut",
  "https://giphy.com/embed/jnWbvGDnckOiUugTLY",
  "https://giphy.com/embed/jH7odQwaMIrqDvbCsQ",
  "https://giphy.com/embed/gVITnyUpaTMis",
  "https://giphy.com/embed/d498OLZURHJvS8mnfs",
  "https://giphy.com/embed/tO0ZmvjaSeNbFSNpR9",
  "https://giphy.com/embed/ZEIA4yMBbghQjJTcKH",
  "https://giphy.com/embed/jysXtH4iEv80l0eCtw",
  "https://giphy.com/embed/twL2PQPHceHUfOEOIt",
  "https://giphy.com/embed/B2ywWRfGnCVQUIhCUU",
  "https://giphy.com/embed/5I0JYYWWAInEYVOg7d",
  "https://giphy.com/embed/7XlapHfB96K0hOOg3Q",
  "https://giphy.com/embed/nTfdeBvfgzV26zjoFP",
  "https://giphy.com/embed/RLUyfJnogtXK44pm9t",
  "https://giphy.com/embed/dFl16b27nyVNgAk6VK",
  "https://giphy.com/embed/7q5Xt9xJr2MRuTKGHV",
  "https://giphy.com/embed/NY9SCjVbrqsSXdyMnP",
  "https://giphy.com/embed/43O3MSnNhLrphNChqx",
  "https://giphy.com/embed/giVvDFs5deYrKCKpD4",
  "https://giphy.com/embed/7zoi8ofDWz2VHugKCw",
  "https://giphy.com/embed/hkkIK51mBFTVzLug2x",
  "https://giphy.com/embed/3oz8xZvvOZRmKay4xy",
  "https://giphy.com/embed/YLrr1Ksc7qBNl01SzG",
  "https://giphy.com/embed/TEuFanBnZqH09Rewdn",
  "https://giphy.com/embed/YoQV4UrGtQPLXa0jbA",
  "https://giphy.com/embed/07dRAGFMR3TV0EkGyr",
  "https://giphy.com/embed/QaMpgjfQblrAKgHqou"

];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>GIFs for When You Don’t Know What to Say</h1>

      <p style={{ maxWidth: 720 }}>
        A curated collection of reaction GIFs for those moments when you’re
        completely at a loss for words. Perfect for texts, group chats, and
        awkward conversations.
      </p>

      <div
        style={{
          marginTop: 16,
          padding: 14,
          border: "1px solid #eee",
          borderRadius: 12,
          maxWidth: 720,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Related pages</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>
            <a href="/group-chat-silent-gifs">GIFs for When the Group Chat Is Silent</a>
          </li>
          <li>
            <a href="/waiting-for-a-reply-gifs">GIFs for When You’re Waiting for a Reply</a>
          </li>
        </ul>
      </div>

      <GifGrid gifs={GIFS} />

      <p style={{ marginTop: 16, fontSize: 13, color: "#666" }}>
        GIFs embedded from GIPHY.
      </p>
    </main>
  );
}
