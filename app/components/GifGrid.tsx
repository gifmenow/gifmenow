// app/components/GifGrid.tsx
import styles from "./GifGrid.module.css";

export type GifItem = {
  id: string;
  title: string;
  embedUrl: string;
  href?: string;
};

export default function GifGrid({
  gifs,
}: {
  gifs: GifItem[] | string[];
}) {
  const normalized: GifItem[] = gifs.map((g, index) => {
    if (typeof g === "string") {
      const match = g.match(/giphy\.com\/embed\/([^/?]+)/i);
      return {
        id: match?.[1] ?? `gif-${index}`,
        title: "Reaction GIF",
        embedUrl: g,
      };
    }
    return g;
  });

  return (
    <section className={styles.grid}>
      {normalized.map((gif) => (
        <article key={gif.id} className={styles.tile}>
          <div className={styles.embedWrap}>
            <iframe
              src={gif.embedUrl}
              loading="lazy"
              allowFullScreen
              title={gif.title}
            />
          </div>
          <div className={styles.caption}>
            <span>{gif.title}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
