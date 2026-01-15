import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "GIFs for When You’re Waiting for a Reply | gifmenow.com",
  description:
    "Reaction GIFs for when you’ve been left on delivered, the typing bubble disappears, or you’re still waiting on a response.",
  alternates: {
    canonical: "https://www.gifmenow.com/texting-gifs/waiting-for-a-reply-gifs",
  },
};

const GIF_IDS = [
  "ZXKZWB13D6gFO",
  "IcoMfdWwY26mBcX008",
  "fYqXFcHnFeNLFbTpQv",
  "dw2jpsey5a5I4",
  "oT7ATDykMidsk",
  "iOAib8M6b7PyLXVGhX",
  "5UrTYiC9JVhBcgVl3y",
  "8BvDeob89F69frIy1j",
  "3ubqmFn2F7ytq",
  "JpRNpektQW3WicgNM0",
  "Q4ScVMm5oBP44",
  "QBd2kLB5qDmysEXre9",
  "E9no2xK27XkdT1VGh8",
  "dYwpqqbQxMBAVD4izH",
  "2kTMtR76VTYPmuFf77",
  "i9i2LizcIc8L5ewyNx",
  "kIKcqlsAjMK5Du8npB",
  "QeoLGq7B6HVKaRFSNw",
  "cOd2FsYUiRzWkaA2DX",
  "l0Exrmj1AVJUbBuSI",
  "Vfie0DJryAde8",
  "3Hw9ggazsWYtC8YzJW",
  "PMEBhRpVdkBhVJf3zs",
  "3oKIPnxDhFR3KnjRbG",
  "OXZdRaLVW4iLK0pSXA",
  "zibtv64HYxZvHdssjl",
  "l0IyajjbNiRvCr7RC",
  "JUqTbMDv31Eim4WYXe",
  "z35nr0QJDZUKk",
  "10fxZavhBFXsUE",
  "3bb9CwYd0ocjdK0sCu",
  "xT8qBbYBBB1uvWbN7y",
  "s0Upnff4Q8oN2",
  "l2JhOrrl8M9unq9nG",
  "Wz83SYNtAIa02H0Dt5",
  "BZ3NRZzRrWjpC",
  "3o7TKTml2lBFacBJWE",
  "phCvPUFTUsBe0M55BW",
  "RGkHXDApwyQRm9AwLm",
];

export default function Page() {
  return (
    <main className="page">
      <div className="top">
        <nav className="breadcrumbs">
          <Link href="/">Home</Link> →{" "}
          <Link href="/texting-gifs">Texting GIFs</Link> → Waiting for a Reply
        </nav>

        <h1>GIFs for When You’re Waiting for a Reply</h1>

        <p className="description">
          Reaction GIFs for when you’ve been left on delivered, the typing bubble
          disappears, or you’re still waiting on a response.
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

      <style>{`
        /* Full-width page (kills the big side whitespace) */
        .page {
          width: 100%;
          margin: 0;
          padding: 18px 14px 60px;
          font-family: Inter, system-ui, sans-serif;
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
