import GifGrid from "../components/GifGrid";

const GIFS = ["https://giphy.com/embed/3o7TKF5DnsSLv4zVBu"];

export default function Page() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>GIFs for When Someone Says Something Wild</h1>
      <p>Shock, disbelief, and “did you really just say that?” reactions.</p>
      <GifGrid gifs={GIFS} />
      <p style={{ marginTop: 14, fontSize: 13, color: "#666" }}>
        GIFs embedded from GIPHY.
      </p>
    </main>
  );
}
