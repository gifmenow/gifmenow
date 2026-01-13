import Breadcrumbs from "../components/Breadcrumbs";

import GifGrid from "../components/GifGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIFs for When the Group Chat Is Silent | GifMeNow",
  description:
    "The best GIFs to send when the group chat goes quiet. Perfect reactions for being left on read or ignored.",
  metadataBase: new URL("https://gifmenow.com"),
  openGraph: {
    title: "GIFs for When the Group Chat Is Silent",
    description:
      "Reaction GIFs for awkward silence, unread messages, and dead group chats.",
    url: "https://gifmenow.com/group-chat-silent-gifs",
    siteName: "GifMeNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Chat Silent GIFs",
    description:
      "Perfect reaction GIFs for when nobody replies in the group chat.",
  },
  robots: { index: true, follow: true },
};

const GIFS = [
  // "https://giphy.com/embed/xThtalGmbaeGRx7rsk",
  "https://giphy.com/embed/PLEdLheDHeAxi",
  "https://giphy.com/embed/SU9BzO2PhJmekOb9uN",
  "https://giphy.com/embed/RhH8IOlfKsrotlzyeM",
  "https://giphy.com/embed/t2uKNqP1Pn3nmqzUiW",
  "https://giphy.com/embed/v1dEeyqDwYcLzMekcB",
  "https://giphy.com/embed/1Zbeweu52ZaQE",
  "https://giphy.com/embed/V9sdMLcmIFqqk",
  "https://giphy.com/embed/8FhXc8w45aN32",
  "https://giphy.com/embed/aPGJRw1ZRPsI5tvtJ5",
  "https://giphy.com/embed/rftFlHFtgn85ze9pgi",
  "https://giphy.com/embed/yJaV6skEVBOJtFlOZV",
  "https://giphy.com/embed/4VVxSZwKcRr0hOhfvr",
  "https://giphy.com/embed/VdAvVcQLJDwKKDUDJR",
  "https://giphy.com/embed/i0C1f6209kF3Krh6im",
  "https://giphy.com/embed/H1cmnXAeEiYIUPPG1b",
  "https://giphy.com/embed/IhNx3QL2shEv3EkHYZ",
  "https://giphy.com/embed/KY3zjLLc9CbbdY50nz",
  "https://giphy.com/embed/11jcnNoAzeG4YU",
  "https://giphy.com/embed/h2evfJLrv2cPPZwYnr",
  "https://giphy.com/embed/VLN4Sl9TqHBX8WKTSq",
  "https://giphy.com/embed/3o6ZsZdSYO2P4rvUOc",
  "https://giphy.com/embed/m94CQefM0pAzt6CDqF",
  "https://giphy.com/embed/MmQev6uBrT0Ix11AHQ",
  "https://giphy.com/embed/PsnDmrzEJU02Q",
  "https://giphy.com/embed/WpHbTtIHyicmio7h25",
  "https://giphy.com/embed/3o751RaYn4s9ma4Oly",
  "https://giphy.com/embed/XcebmWAFzhbVxW9gr6"

];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
        <Breadcrumbs
  crumbs={[
    { label: "Home", href: "/" },
    { label: "Texting GIFs", href: "/texting-gifs" },
    { label: "Group Chat Is Silent" },
  ]}
/>

        Home → Texting GIFs → [Current Page]

      <h1>GIFs for When the Group Chat Is Silent</h1>

      <p style={{ maxWidth: 720 }}>
        The best reaction GIFs for when you send a message to the group chat and
        nobody responds. Perfect for awkward silence and being left on read.
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
            <a href="/dont-know-what-to-say-gifs">GIFs for When You Don’t Know What to Say</a>
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
