import GifGrid from "../components/GifGrid";

const GIFS = ["https://giphy.com/embed/9M5jK4GXmD5o1irGrF"];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>GIFs for When You’re Pretending to Be Fine</h1>
      <p>For when you’re smiling on the outside and screaming on the inside.</p>
      <GifGrid gifs={GIFS} />
      <p style={{ marginTop: 14, fontSize: 13, color: "#666" }}>
        GIFs embedded from GIPHY.
      </p>
    </main>
  );
}

