import GifGrid from "../components/GifGrid";

const GIFS = ["https://giphy.com/embed/26FPn4rR1damB0MQo"];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>GIFs for When You’re Shocked but Calm</h1>
      <p>For when something insane happens and you’re trying to stay composed.</p>
      <GifGrid gifs={GIFS} />
      <p style={{ marginTop: 14, fontSize: 13, color: "#666" }}>
        GIFs embedded from GIPHY.
      </p>
    </main>
  );
}
