import GifGrid from "../components/GifGrid";

const GIFS = ["https://giphy.com/embed/26BRuo6sLetdllPAQ"];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>GIFs for When You’re Low-Key Annoyed</h1>
      <p>Subtle reactions for when you’re irritated but keeping it polite.</p>
      <GifGrid gifs={GIFS} />
      <p style={{ marginTop: 14, fontSize: 13, color: "#666" }}>
        GIFs embedded from GIPHY.
      </p>
    </main>
  );
}
