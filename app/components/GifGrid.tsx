// app/components/GifGrid.tsx
import React from "react";
import styles from "./GifGrid.module.css";

export type GifItem = {
  id: string;
  title: string;
  embedUrl: string;
  href?: string; // optional (link to GIPHY page if you want)
};

/**
 * GifGrid supports BOTH:
 * 1) GifItem[] (recommended, richer SEO)
 * 2) string[] (quick legacy support: array of GIPHY embed URLs)
 */
export default function GifGrid({
  gifs,
}: {
  gifs: GifItem[] | string[];
}) {
  const normalized: GifItem[] = (gifs as any[]).map((g, idx) => {
    // If it's already an object, keep it
    if (g && typeof g === "object") return g as GifItem;

    // If it's a string, treat it as a GIPHY embed URL
    const embedUrl = String(g);

    // Try to extract the GIPHY id from: https://giphy.com/embed/<ID>
    const match = embedUrl.match(/giphy\.com\/embed\/([^/?]+)/i);
    const id = match?.[1] ?? `gif-${idx}`;

    return {
      id,
      title: "Reaction GIF",
      embedUrl,
    };
  });

  return (
    <section className={styles.grid} aria-label="GIF grid">
      {normalized.map((gif) => (
        <article key={gif.id} className={styles.tile}>
          <div className={styles.embedWrap}>
            <iframe
              src={gif.embedUrl}
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0 }}
              frameBorder={0}
              allowFullScreen
              loading="lazy"
              title={gif.title}
            />
          </div>

          <div className={styles.caption}>
            <div className={styles.title}>{gif.title}</div>
            {gif.href ? (
              <a
                href={gif.href}
                target="_blank"
                rel="noreferrer"
                className={styles.source}
              >
                via GIPHY
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
}
