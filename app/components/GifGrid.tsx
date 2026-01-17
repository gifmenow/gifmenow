import styles from "./GifGrid.module.css";

type GifItem = {
  id: string;
  embedUrl: string;
  alt: string;
};

type GifGridProps = {
  gifs: GifItem[];
};

export default function GifGrid({ gifs }: GifGridProps) {
  if (!gifs || gifs.length === 0) return null;

  return (
    <section className={styles.grid} aria-label="Reaction GIF grid">
      {gifs.map((gif) => (
        <article key={gif.id} className={styles.gifTile}>
          <iframe
            className={styles.iframe}
            src={gif.embedUrl}
            loading="lazy"
            allowFullScreen
            title={gif.alt}
          />
        </article>
      ))}
    </section>
  );
}
