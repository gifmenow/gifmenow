import Breadcrumbs from "../../components/Breadcrumbs";

import GifGrid from "../../components/GifGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIFs for When You’re Waiting for a Reply | GifMeNow",
  description:
    "Reaction GIFs for when you’re waiting for a reply, stuck on delivered, or watching the typing bubble disappear.",
  metadataBase: new URL("https://gifmenow.com"),
  openGraph: {
    title: "GIFs for When You’re Waiting for a Reply",
    description:
      "The best GIFs for being left on delivered or waiting too long for a response.",
    url: "https://gifmenow.com/waiting-for-a-reply-gifs",
    siteName: "GifMeNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waiting for a Reply GIFs",
    description:
      "Perfect reaction GIFs for unread messages and awkward waiting.",
  },
  robots: { index: true, follow: true },
};

const GIFS = [
  // "https://giphy.com/embed/ZXKZWB13D6gFO",
  "https://giphy.com/embed/IcoMfdWwY26mBcX008",
  "https://giphy.com/embed/fYqXFcHnFeNLFbTpQv",
  "https://giphy.com/embed/dw2jpsey5a5I4",
  "https://giphy.com/embed/oT7ATDykMidsk",
  "https://giphy.com/embed/iOAib8M6b7PyLXVGhX",
  "https://giphy.com/embed/5UrTYiC9JVhBcgVl3y",
  "https://giphy.com/embed/8BvDeob89F69frIy1j",
  "https://giphy.com/embed/3ubqmFn2F7ytq",
  "https://giphy.com/embed/JpRNpektQW3WicgNM0",
  "https://giphy.com/embed/Q4ScVMm5oBP44",
  "https://giphy.com/embed/QBd2kLB5qDmysEXre9",
  "https://giphy.com/embed/E9no2xK27XkdT1VGh8",
  "https://giphy.com/embed/dYwpqqbQxMBAVD4izH",
  "https://giphy.com/embed/2kTMtR76VTYPmuFf77",
  "https://giphy.com/embed/i9i2LizcIc8L5ewyNx",
  "https://giphy.com/embed/kIKcqlsAjMK5Du8npB",
  "https://giphy.com/embed/QeoLGq7B6HVKaRFSNw",
  "https://giphy.com/embed/cOd2FsYUiRzWkaA2DX",
  "https://giphy.com/embed/l0Exrmj1AVJUbBuSI",
  "https://giphy.com/embed/Vfie0DJryAde8",
  "https://giphy.com/embed/3Hw9ggazsWYtC8YzJW",
  "https://giphy.com/embed/PMEBhRpVdkBhVJf3zs",
  "https://giphy.com/embed/3oKIPnxDhFR3KnjRbG",
  "https://giphy.com/embed/OXZdRaLVW4iLK0pSXA",
  "https://giphy.com/embed/zibtv64HYxZvHdssjl",
  "https://giphy.com/embed/l0IyajjbNiRvCr7RC",
  "https://giphy.com/embed/JUqTbMDv31Eim4WYXe",
  "https://giphy.com/embed/z35nr0QJDZUKk",
  "https://giphy.com/embed/10fxZavhBFXsUE",
  "https://giphy.com/embed/3bb9CwYd0ocjdK0sCu",
  "https://giphy.com/embed/xT8qBbYBBB1uvWbN7y",
  "https://giphy.com/embed/s0Upnff4Q8oN2",
  "https://giphy.com/embed/l2JhOrrl8M9unq9nG",
  "https://giphy.com/embed/Wz83SYNtAIa02H0Dt5",
  "https://giphy.com/embed/BZ3NRZzRrWjpC",
  "https://giphy.com/embed/3o7TKTml2lBFacBJWE",
  "https://giphy.com/embed/phCvPUFTUsBe0M55BW",
  "https://giphy.com/embed/RGkHXDApwyQRm9AwLm"
];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <Breadcrumbs
  crumbs={[
    { label: "Home", href: "/" },
    { label: "Texting GIFs", href: "/texting-gifs" },
    { label: "Waiting for a Reply" },
  ]}
/>

      Home → Texting GIFs → [Current Page]

      <h1>GIFs for When You’re Waiting for a Reply</h1>

      <p style={{ maxWidth: 720 }}>
        Reaction GIFs for when you’ve been left on delivered, the typing bubble
        disappears, or you’re still waiting on a response.
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
            <a href="/group-chat-silent-gifs">GIFs for When the Group Chat Is Silent</a>
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
