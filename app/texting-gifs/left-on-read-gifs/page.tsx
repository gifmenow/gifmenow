import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Left on Read GIFs | Seen Message Reaction GIFs | gifmenow.com",
  description:
    "Read receipts hurt. Browse the best left on read reaction GIFs for texting when they saw your message and replied with silence.",
  alternates: {
    canonical: "https://www.gifmenow.com/texting-gifs/left-on-read-gifs",
  },
};

const GIF_IDS = [
  "XDY7T4JQJ8M5p3hA6n",
  "Rkt9N7lIm1IsKnh3tZ",
  "11jcnNoAzeG4YU",
  "VLN4Sl9TqHBX8WKTSq",
  "3o6ZsZdSYO2P4rvUOc",
  "MmQev6uBrT0Ix11AHQ",
  "ozPJhumWyeDH66nfcl",
  "3oEdv7qlaibaqxOOcg",
  "i0C1f6209kF3Krh6im",
  "3o752lE0xxJpw7pTA4",
  "xT9KVqLmj8mUcRiZwc",
  "VdAvVcQLJDwKKDUDJR",
  "8FhXc8w45aN32",
  "ifuqvLuaJg2oo",
  "KDbUypAle2AAv1VGLJ",
  "xUPJPBAdETrDmYJNXq",
  "1wXcR0pLowTbG34xAB",
  "25uJfJyX1MsCI",
  "l4EoWHuJq6AnYDvws",
  "qv8M5F0qaf1Yc",
  "12d6eIXBXZ0Vgc",
  "MqYdwMeSmP84eVxTxZ",
  "dIxcOBOjDIya8YvJUv",
  "Z2S9zF7Y7e6Sk",
  "3og0IBWeR33ZfdLM8o",
  "3diweulYyUpLq",
  "6L015gMEW3pFC",
  "zpT7OmNGKkU3AvPYqa",
  "y1WDIwAZRSmru",
  "iD1QQCbrl548I31Qww",
  "bO33o2mo3fPw4ntPh9",
  "eiq80WMG2PNXewe5qL",
  "IsntdMsM28R1e",
  "12N7qJJSez3Ggw",
  "l4Ep48RespdazKsKI",
  "UBnb7nz1PtdqPvhoSR",
  "gioXyl9A3eiObmtwKZ",
  "c20UV66B7zCWA",
  "YkrELjkfi87ynW0cUh",
  "26DNkS7hlwrMPrOpi",
  "e6CfPfA7AP7cvPSHZH",
  "l3q2PZSVUUEsajBIY",
];

export default function Page() {
  return (
    <main className="page">
      <div className="top">
        <nav className="breadcrumbs">
          <Link href="/">Home</Link> →{" "}
          <Link href="/texting-gifs">Texting GIFs</Link> → Left on Read
        </nav>

        <h1>Left on Read GIFs</h1>

        <p className="description">
          Read receipts hurt. Browse the best left on read reaction GIFs for
          texting when they saw your message and replied with silence.
        </p>
      </div>

      <section className="grid">
        {GIF_IDS.map((id) => (
          <div key={id} className="gif">
            <iframe
              src={`https://giphy.com/embed/${id}`}
              loading="lazy"
              allowFullScreen
              title={`giphy-${id}`}
            />
          </div>
        ))}
      </section>

      <div className="bottom">
        <h2>More Texting Reaction GIFs</h2>
        <div className="links">
          <Link href="/texting-gifs/waiting-for-a-reply-gifs">
            Waiting for a Reply
          </Link>
          <Link href="/texting-gifs/delivered-not-read-gifs">
            Delivered, Not Read
          </Link>
          <Link href="/texting-gifs/ghosted-gifs">Ghosted</Link>
        </div>
      </div>

      <style>{`
        /* Full-width page (kills the big side whitespace) */
        .page {
          width: 100%;
          margin: 0;
          padding: 18px 14px 60px;
          font-family: Inter, system-ui, sans-serif;
          font-weight: 400; /* body weight */
        }

        /* Keep the header readable, but not restricting the grid */
        .top {
          max-width: 1200px;
          margin: 0 auto 18px;
          padding: 0 6px;
        }

        .breadcrumbs {
          font-size: 13px;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 40px;
          margin: 0 0 10px;
          font-weight: 700; /* headings */
        }

        .description {
          font-size: 14px;
          max-width: 80ch;
          margin: 0;
        }

        /* Full width grid */
        .grid {
          width: 100%;
          display: grid;
          gap: 14px;

          /* Auto-fill = uses the whole screen, adds more columns automatically */
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        }

        /* Uniform tiles */
        .gif {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 14px;
          background: #f3f4f6;
        }

        .gif iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .bottom {
          max-width: 1200px;
          margin: 22px auto 0;
          padding: 0 6px;
        }

        .bottom h2 {
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 700;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 14px;
          font-size: 14px;
        }

        .links :global(a) {
          font-weight: 500; /* buttons/links weight */
          text-decoration: none;
        }

        /* On very wide screens, tighten the gutters slightly */
        @media (min-width: 1200px) {
          .page {
            padding-left: 10px;
            padding-right: 10px;
          }
          .grid {
            gap: 12px;
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          }
        }
      `}</style>
    </main>
  );
}
