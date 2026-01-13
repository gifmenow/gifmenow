type GifGridProps = {
  gifs: string[];
};

export default function GifGrid({ gifs }: GifGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 16,
        marginTop: 20,
      }}
    >
      {gifs.map((src) => (
        <div
          key={src}
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: 12,
            border: "1px solid #eee",
          }}
        >
          <iframe
            src={src}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}
